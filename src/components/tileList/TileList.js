import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({arrayObjects}) => {  
    return (
      <div>
        {
          arrayObjects.map((object,index) => {
            const { name, ...description } = object;
            
            return <Tile key={index} name= {name} description= { description } />
          })
        }           
      </div>    
    )
  }