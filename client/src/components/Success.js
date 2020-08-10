import React, { Component } from 'react';
import '../index.css';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            
                <fieldset className="theField">
                    <h2 className="fs-title"> Done </h2>
                    <hr />
                    <div className="theSuccess">
                        <h1> Thanks for subscripion <br /> We will send you further informations</h1>
                    </div>
                </fieldset>
        );
    }
}


export default Success;
