import React from 'react';

const Like = ({liked, onClick}) => {
  let classes = "fa fa-thumbs-up";
  if (!liked) classes = "fa fa-thumbs-o-up";
  return (
        <i
              onClick={onClick}
              className={classes}
              style={{cursor: "pointer"}}
        > </i>
  );
};

export default Like;
