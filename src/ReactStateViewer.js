import React from 'react';
import Title from './Title';

const style = {
  position: 'fixed',
  zIndex: 2000,
  width: '400px',
  right: 0,
  height: '100%'
};

const testState = {
  name: 'Gurpreet',
  alt: 32
};

const StateExplorer = props => {
  let result;
  !props.hasOwnProperty('explore')
    ? (result = `Feed me something!`)
    : (result = JSON.stringify(props.explore, null, 2));
  return <pre style={style}>{result}</pre>;
};

StateExplorer.propTypes = {
  explore: React.PropTypes.object
};

export default StateExplorer;
