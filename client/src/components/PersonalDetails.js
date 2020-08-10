import React, { Component } from 'react';
import '../index.css';

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <form className="msform">
                <ul className="progressbar">
                    <li className="active"> Account Setup </li>
                    <li className="active"> Social Profiles </li>
                    <li className="active"> Personal Details </li>
                </ul>

                <fieldset>
                    <h2 className="fs-title"> Personal Details </h2>
                    <h3 className="fs-subtitle"> We will never sell it</h3>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        defaultValue={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        defaultValue={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        defaultValue={values.phone}
                        onChange={handleChange('phone')}
                    />
                    <textarea
                        name="adress"
                        placeholder="Adress"
                        defaultValue={values.adress}
                        onChange={handleChange('adress')}
                    ></textarea>
                    <input
                        onClick={this.back}
                        type="button"
                        name="previous"
                        value="Previous"
                        className="previous action-button"
                    />
                    <input
                        onClick={this.continue}
                        type="button"
                        name="next"
                        value="Next"
                        className="next action-button"
                    />
                </fieldset>
            </form>
        );
    }
}


export default PersonalDetails;
