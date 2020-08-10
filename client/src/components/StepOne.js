import React, { Component } from 'react';
import '../index.css';


export class StepOne extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;

        return (
            <form className="msform">
                <ul className="progressbar">
                    <li className="active"> Account Setup </li>
                    <li> Social Profiles </li>
                    <li> Personal Details </li>
                </ul>

                <fieldset>
                    <h2 className="fs-title"> Create your account </h2>
                    <h3 className="fs-subtitle"> This is step 1 </h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        defaultValue={values.password}
                        onChange={handleChange('password')}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        defaultValue={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        required
                    />
                    <input
                        onClick={this.continue}
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                    />
                </fieldset>
            </form>
        );
    }
}


export default StepOne;
