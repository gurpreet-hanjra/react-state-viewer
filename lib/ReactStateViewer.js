'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var StateExplorer = function StateExplorer(props) {
  var result = undefined;
  !props.hasOwnProperty('explore') ? result = 'Got nothing to explore!' : result = JSON.stringify(props.explore, null, 2);
  return _react2['default'].createElement(
    'pre',
    null,
    result
  );
};

StateExplorer.propTypes = {
  explore: _react2['default'].PropTypes.object
};

exports['default'] = StateExplorer;
module.exports = exports['default'];