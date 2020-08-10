import React, { Component } from 'react';
import '../index.css';

export class SocialProfiles extends Component {
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
                    <li> Personal Details </li>
                </ul>

                <fieldset>
                    <h2 className="fs-title"> Social Profiles </h2>
                    <h3 className="fs-subtitle"> Your presence on the social network</h3>
                    <input 
                        type="text" 
                        name="twitter" 
                        placeholder="Twitter" 
                        defaultValue={values.twitter}
                        onChange={handleChange('twitter')}
                    />
                    <input 
                        type="text" 
                        name="facebook" 
                        placeholder="Facebook" 
                        defaultValue={values.facebook}
                        onChange={handleChange('facebook')}
                    />
                    <input 
                        type="text" 
                        name="googlePlus" 
                        placeholder="Google Plus" 
                        defaultValue={values.googlePlus}
                        onChange={handleChange('googlePlus')}
                    />
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


export default SocialProfiles;
