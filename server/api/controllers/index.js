const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const getSingleProfile = require("./getSingleProfile")
const signUpController = require("./signUpController")
const uploadImage = require("./uploadImage")
const checkEmail = require("./checkEmail")
const loginUser = require("./loginUser")
const article = require("./Article")
const categories = require("./categories")
const getProfiles = require("./getProfiles")
const getBlogPost = require("./getBlogPost")
const getPosts = require("./getPosts")
const approveProfile = require("./approveProfile")
const checkApproval = require("./checkApproval")
// edit profle controllers
// const editSupportDetails = require("./editSupportDetails")
// const editTargetClientsDetails = require("./editTargetClientsDetails")
const editProfileSection = require("./editProfileSection")
const getQuestions = require("./getQuestions")

// update profile controllers
// const updateTargetClientsDetails = require("./updateTargetClientsDetails")
const updateProfileSection = require("./updateProfileSection")

const user = require("./user")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", getRegisterQuestionsController)
router.use("/register-user", signUpController)
router.use("/upload-image", uploadImage)
router.use("/check-email", checkEmail)
router.use("/login-user", loginUser)
router.use("/articles", article)
router.use("/categories", categories)

router.use("/profiles", getProfiles)
router.use("/approve/:id", approveProfile)
router.use("/check-approval", checkApproval)

router.use("/get-blog-post/:id", getBlogPost)

router.use("/blog", getPosts)
// NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user

router.use("/get-questions/:section", getQuestions)

// edit profile routes
// router.use("/edit-profile/support/:id", editSupportDetails)
// router.use("/edit-profile/target/:id", editTargetClientsDetails)
router.use("/edit-profile/:section", editProfileSection)

// update profile routes
// router.use("/update-profile/target/:id", updateTargetClientsDetails)
router.use("/update-profile/:section/:id", updateProfileSection)
router.use("/single-profile/", getSingleProfile)
router.use("/update-profile/:section", updateProfileSection)
router.use("/users", user)

module.exports = router
