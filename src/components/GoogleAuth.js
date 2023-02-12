import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '10182250222-1emasqo7khitrfhps5u1pp0kb9t2upkc.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get()); //boolean flag
          this.auth.isSignedIn.listen(this.onAuthChange); //it update changes without waiting to refresh the DOM
        });
    });
  }
  //we pass isSignedIn props[true or false]--used to update the interface
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  //sign in click--used to functionality authentication
  onSignInClick = () => {
    this.auth.signIn();
  };
  //sign out click
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
//NOTE:the arguments we used in the connect function [{signIn,login,signout}] act as a prop..so we can acess them by this.props
