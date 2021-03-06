import React, { Component } from "react"

// import common components
import TextInput from "../../Common/Questions/TextInput"
import RadioInput from "../../Common/Questions/RadioInput"
import CheckboxInput from "../../Common/Questions/CheckboxInput"
import FileUploadInput from "../../Common/Questions/FileUploadInput"
import TextFieldInput from "../../Common/Questions/TextFieldInput"
import DropdownInput from "../../Common/Questions/DropdownInput"
import MatrixInput from "../../Common/Questions/MatrixInput"
import CalendarInput from "../../Common/Questions/CalendarInput"
import AddressInput from "./AddressInput"

// import styled components
import { Answers } from "../../Common/Answers"

export default class QuestionSection extends Component {
  render() {
    const {
      questions,
      handleChange,
      answers,
      handleMatrix,
      handleDate,
      addImage,
      handleDropdown,
      handleAddress,
    } = this.props

    return (
      <React.Fragment>
        <Answers>
          {questions
            .filter(question => question.inputType === "text" || question.inputType === "url")
            .map((question, index) => (
              <TextInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "textarea")
            .map((question, index) => (
              <TextFieldInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "radio")
            .map((question, index) => (
              <RadioInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "checkbox")
            .map((question, index) => (
              <CheckboxInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "file-upload")
            .map((question, index) => (
              <FileUploadInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
                imageUpload={addImage}
              />
            ))}
          {questions
            .filter(question => question.inputType === "dropdown")
            .map((question, index) => (
              <DropdownInput
                key={index}
                question={question}
                handleDropdown={handleDropdown}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "matrix")
            .map((question, index) => (
              <MatrixInput
                key={index}
                question={question}
                handleMatrix={handleMatrix}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "calendar")
            .map((question, index) => (
              <CalendarInput
                key={index}
                question={question}
                handleDate={handleDate}
                answers={answers}
              />
            ))}
          {questions
            .filter(question => question.inputType === "address")
            .map((question, index) => (
              <AddressInput
                key={index}
                question={question}
                handleAddress={handleAddress}
                answers={answers}
                // checkRequiredAnswers={checkRequiredAnswers}
              />
            ))}
        </Answers>
      </React.Fragment>
    )
  }
}
