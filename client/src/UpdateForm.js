import React, { useEffect, useState } from 'react';
import axios from 'axios';


const initialMovie = {
    title: '',
    director:'',
    metascore:'',
    stars:[],
};

function UpdateForm() {
    const [movie, setMovie]= useState(initalMovie)
  
  return (
    <div className='updateForm'>
      
    </div>
  );
}

export default UpdateForm;



// // Movie Title
// // Director
// metascore
// stars/actors