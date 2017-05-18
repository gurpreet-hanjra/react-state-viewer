(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactStateViewer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Title":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});