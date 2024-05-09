import React from "react";

export const Tile = ({ name , description}) => {

  const descKeys = Object.keys(description);
      
  return (
    <div className="tile-container">
      <p className="tile-tile" key={name}>{`Name:${name}`}</p>
      {
        descKeys.map((descKey,index) => {
          return (<p className="tile" key={index}>{`${descKey}: ${description[descKey]}`}</p>)
        })
      }      
    </div>
  );
};
