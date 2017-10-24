"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react'
//import ReactDOM from 'react-dom'

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.genList = _this.genList.bind(_this);

    return _this;
  }

  TodoList.prototype.genList = function genList() {
    return this.props.todos.map(function (todo) {
      return React.createElement(
        "li",
        null,
        todo.title
      );
    });
  };

  TodoList.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        this.genList()
      )
    );
  };

  return TodoList;
}(React.Component);

var Form = function (_React$Component2) {
  _inherits(Form, _React$Component2);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { title: '', todos: [{ title: "hello" }] };
    _this2.handleTitleChange = _this2.handleTitleChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  Form.prototype.handleTitleChange = function handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  };

  Form.prototype.handleSubmit = function handleSubmit(e) {
    var local = this.state.todos.slice();
    local.push({ title: this.state.title });
    this.setState({
      todos: local
    });

    e.preventDefault();
  };

  Form.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(TodoList, { todos: this.state.todos }),
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "Add Todo:",
          React.createElement("input", { onChange: this.handleTitleChange, type: "text", value: this.state.title, required: "true" })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      )
    );
  };

  return Form;
}(React.Component);

ReactDOM.render(React.createElement(Form, null), document.getElementById('app'));