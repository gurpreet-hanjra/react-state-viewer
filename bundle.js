require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Title = function Title(props) {
  return _react2['default'].createElement(
    'h2',
    null,
    props.title
  );
};

exports['default'] = Title;
module.exports = exports['default'];

},{"react":undefined}],"react-state-viewer":[function(require,module,exports){
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
  height: '100%'
};

var testState = {
  name: 'Gurpreet',
  alt: 32
};

var StateExplorer = function StateExplorer(props) {
  var result = undefined;
  !props.hasOwnProperty('explore') ? result = 'Feed me something!' : result = JSON.stringify(props.explore, null, 2);
  return _react2['default'].createElement(
    'pre',
    { style: style },
    result
  );
};

StateExplorer.propTypes = {
  explore: _react2['default'].PropTypes.object
};

exports['default'] = StateExplorer;
module.exports = exports['default'];

},{"./Title":1,"react":undefined}]},{},[]);
