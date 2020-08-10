import React, { Component } from 'react';
import '../index.css';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM -> SEND DATA TO API(EXPRESS)
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { email, password, confirmPassword, twitter, facebook, googlePlus, firstName, lastName, phone, adress } } = this.props;
        return (
            <form className="msform" >

                <fieldset>
                    <h2 className="fs-title"> Confirm Details </h2>
                    <hr />
                    <ul className="theList">
                        <li> <strong>Email:</strong> {email} </li>
                        <li> <strong>Twitter:</strong> {twitter} </li>
                        <li> <strong>Facebook:</strong> {facebook} </li>
                        <li> <strong>Google Plus:</strong> {googlePlus} </li>
                        <li> <strong>First Name:</strong> {firstName} </li>
                        <li> <strong>Last Name:</strong> {lastName} </li>
                        <li> <strong>Phone:</strong> {phone} </li>
                        <li> <strong>Adress:</strong> {adress}</li>
                    </ul>
                    <input onClick={this.back} type="button" className="previous action-button" value="Previous" />
                    <input onClick={this.continue} type="button" name="submit" className="submit action-button" value="Submit" />
                </fieldset>
            </form>
        );
    }
}


export default Confirm;
