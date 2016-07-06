import React from 'react';
import GoogleLogin from 'react-google-login';

class App extends React.Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div>
        <h1>
          Wanna bet?
        </h1>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          callback={responseGoogle} />
      </div>
    );
  }
}

export default App;
