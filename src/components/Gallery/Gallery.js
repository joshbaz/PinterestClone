import React from "react";
import Pin from "../Pin";
import { Wrappers, Containers, Wrap } from "./galleryStyles";
import './gallery.css'
const GalleryS = ({ Imgdata, pins }) => {
  return (
    <Wrap>
    <p>joshua kimbareeba</p>
     <Wrappers>
   
      <Containers className='galleryboard'>
        {pins.map((data, index) => {
          return <Pin key={index} img={data.link} />;
        })}
      </Containers>
    </Wrappers>
    </Wrap>
   
  );
};

export default GalleryS;
