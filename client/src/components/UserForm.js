import React, { Component } from 'react';
import StepOne from './StepOne';
import SocilaProfiles from './SocialProfiles'
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import axios from 'axios';

export class UserForm extends Component {
  state = {
    step: 1,
    fromField: {
      email: '',
      password: '',
      confirmPassword: '',
      twitter: '',
      facebook: '',
      googlePlus: '',
      firstName: '',
      lastName: '',
      phone: '',
      adress: ''
    }
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });

    /*if (step + 1 === 2) {
      this.checkMatch()
    }*/

    // the answer to the previous bug 
    if (step + 1 === 4)
      this.formHandler()
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  /*checkMatch = () => {
    const valuesToCheck = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    if (valuesToCheck.password !== valuesToCheck.confirmPassword) {
      alert('Passwords must match');
    };
  } */

  // MAKING POST REQUEST TO THE API
  formHandler = () => {
    const valuesToSubmit = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      googlePlus: this.state.googlePlus,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      adress: this.state.adress
    }
    console.log('Form:')
    console.log(valuesToSubmit)
    console.log(this.state)
    axios.post('http://localhost:9000/api', valuesToSubmit)
      .then(function (response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
  }


  render() {
    const { step } = this.state;
    const { email, password, confirmPassword, twitter, facebook, googlePlus, firstName, lastName, phone, adress } = this.state;
    const values = { email, password, confirmPassword, twitter, facebook, googlePlus, firstName, lastName, phone, adress };

    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <SocilaProfiles
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        )
      case 3:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        )
      case 5:
        return <Success />

    }
  }
}

export default UserForm;