import React, { useEffect, useState } from 'react';
import axios from 'axios';


const initialMovie = {
    title: '',
    director:'',
    metascore:'',
    stars:[],
};

function UpdateForm(props) {
    const [movie, setMovie]= useState(initialMovie)
    const movieToUpdate = props.movieList.find(item => `${item.id}` === props.match.params.id)


    // useEffect(() => {
        
    // },[])
  
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

const handleSubmit = event => {
event.preventDefault(
    // PUT request goes here
)
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