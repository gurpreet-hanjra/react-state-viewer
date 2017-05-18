'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var style = {
  borderBottom: ' 1px solid wheat',
  padding: '5px 10px',
  margin: 0,
  borderRadius: '5px',
  background: 'beige'
};

var Title = function Title(props) {
  console.log(props);
  return _react2['default'].createElement(
    'h3',
    { style: style, onMouseUp: props.startDrag },
    props.title
  );
};

exports['default'] = Title;
module.exports = exports['default'];