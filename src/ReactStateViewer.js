import React from 'react';
import Title from './Title';

const style = {
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

const preStyle = {
  whiteSpace: 'normal',
  margin: '10px'
};

const testState = {
  name: 'Gurpreet',
  alt: 32
};

const StateViewer = props => {
  let result;
  !props.hasOwnProperty('view')
    ? (result = `Feed me something! Seems like you forgot to pass an object to view.`)
    : (result = JSON.stringify(props.view, null, 2));
  return (
    <div style={style}>
      <Title title={'State Viewer'} />
      <pre style={preStyle}>{result}</pre>
    </div>
  );
};

StateViewer.propTypes = {
  view: React.PropTypes.object
};

export default StateViewer;
