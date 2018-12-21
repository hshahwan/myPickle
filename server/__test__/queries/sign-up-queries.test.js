const mongoose = require("mongoose")
const dbConnection = require("../../database/db_connection")
const buildDb = require("../../database/dummy_data_build")

//load models
const User = require("../../database/models/User")
const SupportType = require("../../database/models/SupportType")
const Profile = require("../../database/models/Profile")
const ProfileQuestion = require("../../database/models/ProfileQuestion")
const ProfileAnswer = require("../../database/models/ProfileAnswer")

//load queries
const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")
const registerUser = require("../../database/queries/registerUser")
const getSupportType = require("../../database/queries/getSupportType")
// connect
dbConnection()

beforeEach(async () => {
  await buildDb().catch(err => console.log(err))
  console.log("DB BUILT")
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("can build dummy data correctly", () => {
  test("successfully creates collections", async () => {
    expect(SupportType).toBeDefined()
    expect(User).toBeDefined()
    expect(ProfileQuestion).toBeDefined()
    expect(Profile).toBeDefined()
    expect(ProfileAnswer).toBeDefined()
    // check if therapist user gets created
    const foundTherapist = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const expected = "josephine@the-therapists.co.uk"
    const actual = foundTherapist.email
    expect(actual).toBe(expected)
  })
})

describe("Tests for getRegisterProfileQuestions.js", () => {
  test("getRegisterProfileQuestions returns the right question", async () => {
    const canGetRegisterQuestions = await getRegisterQuestions()
    expect(canGetRegisterQuestions).toBeDefined()
    expect(canGetRegisterQuestions.length).toBe(10)
  })
  test("getRegisterProfileQuestions error handling", async () => {
    // leave out async behaviour to throw an error
    getRegisterQuestions().catch(err => expect(err).toBeDefined())
  })
})

describe("Tests for registerUser.js", () => {
  test("can register a user using valid data", async () => {
    const testUser = {
      name: "testMeBabyOneMoreTime",
      phone: "004407566683",
      email: "test@testme.co.uk",
      address: "666 highway to test E50DW London",
      password: "123456",
    }
    const { name, email, phone, password } = testUser
    const registeredUser = await registerUser(name, email, phone, password)
    const foundUser = await User.findById(registeredUser)
    expect(foundUser).toBeDefined()
    expect(typeof foundUser).toEqual("object")
    expect(foundUser.name).toEqual("testMeBabyOneMoreTime")
  })
  test("can't register if user already exists in db", async () => {
    const testUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const { name, email, phone, password } = testUser
    const registeredUser = await registerUser(name, email, phone, password)
    expect(testUser).toBeDefined()
    expect(testUser.email).toBe("josephine@the-therapists.co.uk")
    expect(registeredUser).toBeUndefined()
  })
  test("can't register user with missing data", async () => {
    const testUser = {
      name: "",
      phone: "004407566683",
      email: "test@testme.co.uk",
      address: "666 highway to test E50DW London",
      password: "",
    }
    const { name, email, phone, password } = testUser
    await registerUser(name, email, phone, password).catch(err => expect(err).toBeDefined())
  })

  describe("Tests for getSupportType.js", () => {
    test("can get support type by inserting valid request", async () => {
      const supportTypeQuestion = await ProfileQuestion.findOne({
        questionText: "What best describes your core service offering?",
      })
      const supportTypeQuestionID = supportTypeQuestion._id
      const requestObj = {}
      requestObj[supportTypeQuestionID] = "Qualified therapy or counselling service"
      const gotSupportType = await getSupportType(requestObj)
      const foundSupportType = await SupportType.findById(gotSupportType)
      expect(foundSupportType).toBeDefined()
      expect(foundSupportType.type).toEqual("Therapist")
    })
    test("can't get support type by inserting invalid request", async () => {
      const requestObj = {}
      await getSupportType(requestObj).catch(err => expect(err).toBeDefined())
    })
  })
})