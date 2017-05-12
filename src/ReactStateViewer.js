import React from 'react';

const StateExplorer = props => {
  let result;
  !props.hasOwnProperty('explore')
    ? (result = `Got nothing to explore!`)
    : (result = JSON.stringify(props.explore, null, 2));
  return <pre>{result}</pre>;
};

StateExplorer.propTypes = {
  explore: React.PropTypes.object
};

export default StateExplorer;
