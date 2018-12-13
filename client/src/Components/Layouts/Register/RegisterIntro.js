import React from "react"

import { Intro, Button } from "./Register.style"

export default class RegisterIntro extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Intro>
        <h2 className="tc mp-primary-color">Welcome to myPickle</h2>
        <p>
          Please provide your contact and organisation details first. Then you can begin to list the
          service(s) you provide.
        </p>
        <p>
          If at any point you need assistance, please email{" "}
          <a href="mailto:hello@mypickle.org">hello@mypickle.org</a> with your query and contact
          details.
        </p>
        <Button onClick={this.props.handleNext}>Next</Button>
      </Intro>
    )
  }
}