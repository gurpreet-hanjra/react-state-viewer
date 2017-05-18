import React from 'react';

const style = {
  borderBottom: ' 1px solid wheat',
  padding: '5px 10px',
  margin: 0,
  borderRadius: '5px',
  background: 'beige'
};

const Title = props => {
  console.log(props);
  return (
    <h3 style={style} onMouseUp={props.startDrag}>
      {props.title}
    </h3>
  );
};

export default Title;
