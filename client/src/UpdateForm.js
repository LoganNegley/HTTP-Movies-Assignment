import React, { useEffect, useState } from 'react';
import axios from 'axios';


const initialMovie = {
    title: '',
    director:'',
    metascore:'',
    stars:[],
};

function UpdateForm() {
    const [movie, setMovie]= useState(initialMovie)
  
//   handle changes function in form
const handleChange = event => {
    let value = event.target.value;
    if(event.target.name === 'metascore'){
        value = parseInt(value, 10);
    }

    setMovie({
        ...movie,
        [event.target.name]: value
    })
};

const handleSubmit = ()=>{

};


  return (
    <div className='updateForm'>
      <h2>Update Movie Information</h2>
      <form>
          <input
              type='text'
              name='title'
              placeholder="Title"
            //   onChange={}
            value={movie.title}
          />
            <input
              type='text'
              name='director'
              placeholder="Director"
            //   onChange={}
            value={movie.director}
          />
            <input
              type='text'
              name='metascore'
              placeholder="Metascore"
            //   onChange={}
            value={movie.metascore}
          />
            <input
              type='text'
              name='stars'
              placeholder="Actors"
            //   onChange={}
            value={movie.stars}
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UpdateForm;