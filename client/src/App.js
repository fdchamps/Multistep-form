import React, { Component } from 'react';
import { UserForm } from './components/UserForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-wrapper">
        <UserForm />
      </div>
    );
  }
}

export default App;
