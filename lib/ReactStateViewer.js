'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var style = {
  position: 'fixed',
  zIndex: 2000,
  width: '400px',
  right: 0,
  height: 'calc(100% - 12px)',
  top: 0,
  border: '1px solid wheat',
  borderRadius: '5px',
  margin: '5px',
  background: 'white'
};

var preStyle = {
  whiteSpace: 'normal',
  margin: '10px'
};

var testState = {
  name: 'Gurpreet',
  alt: 32
};

var StateViewer = function StateViewer(props) {
  var result = undefined;
  !props.hasOwnProperty('view') ? result = 'Feed me something! Seems like you forgot to pass an object to view.' : result = JSON.stringify(props.view, null, 2);
  return _react2['default'].createElement(
    'div',
    { style: style },
    _react2['default'].createElement(_Title2['default'], { title: 'State Viewer' }),
    _react2['default'].createElement(
      'pre',
      { style: preStyle },
      result
    )
  );
};

StateViewer.propTypes = {
  view: _react2['default'].PropTypes.object
};

exports['default'] = StateViewer;
module.exports = exports['default'];