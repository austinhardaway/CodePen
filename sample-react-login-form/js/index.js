'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react'
//import ReactDOM from 'react-dom'

var LoginContainer = function (_React$Component) {
  _inherits(LoginContainer, _React$Component);

  function LoginContainer(props) {
    _classCallCheck(this, LoginContainer);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  LoginContainer.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Sample Sign-In Form'
      ),
      React.createElement(FormContainer, { user: this.props.user })
    );
  };

  return LoginContainer;
}(React.Component);

var FormContainer = function (_React$Component2) {
  _inherits(FormContainer, _React$Component2);

  function FormContainer(props) {
    _classCallCheck(this, FormContainer);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { username: '', password: '' };
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.authLogin = _this2.authLogin.bind(_this2);
    return _this2;
  }

  FormContainer.prototype.handleChange = function handleChange(e) {
    var _setState;

    var name = e.target.name;
    var value = e.target.value;
    this.setState((_setState = {}, _setState[name] = value, _setState));
  };

  FormContainer.prototype.handleSubmit = function handleSubmit() {
    this.authLogin() ? alert('Login Success!') : alert('Login Failure.');
  };

  FormContainer.prototype.authLogin = function authLogin() {
    return this.props.user.username == this.state.username && this.props.user.password == this.state.password;
  };

  FormContainer.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Username:',
          React.createElement('input', { type: 'text', name: 'username', onChange: this.handleChange })
        ),
        React.createElement('br', null),
        React.createElement(
          'label',
          null,
          'Password:',
          React.createElement('input', { type: 'password', name: 'password', onChange: this.handleChange })
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'submit', value: 'Submit' })
      )
    );
  };

  return FormContainer;
}(React.Component);

/*
Clearly this is not a secure way to store user data. in a production context import this info from 
whatever database solution in your project
*/

ReactDOM.render(React.createElement(LoginContainer, { user: { username: 'user', password: 'pass' } }), document.getElementById('app'));