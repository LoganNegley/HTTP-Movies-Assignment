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
    


    useEffect(() => {
    console.log(props.movieList)
    const movieToUpdate = props.movieList.find(item => `${item.id}` === props.match.params.id)
    console.log(movieToUpdate)
    
    if(movieToUpdate){
    setMovie(movieToUpdate) 
    }
   
    },[props.movieList ])
  
//   handle changes function in form
const handleChange = event => {
    let value = event.target.value;

    setMovie({
        ...movie,
        [event.target.name]: value
    })
};

const handleSubmit = event => {
event.preventDefault()
    // PUT request goes here
    axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(response => {
      console.log(response)
      props.history.push(`/movies/${movie.id}`)    
      props.getMovieList(response.data)
    })
    .catch(error => console.log(error, 'there was an error with axios.put to server'))


};


  return (
    <div className='updateForm'>
      <h2>Update Information</h2>
      <form onSubmit={handleSubmit}>
          <input
              type='text'
              name='title'
              placeholder="Title"
              onChange={handleChange}
            value={movie.title}
          />
            <input
              type='text'
              name='director'
              placeholder="Director"
              onChange={handleChange}
            value={movie.director}
          />
            <input
              type='text'
              name='metascore'
              placeholder="Metascore"
              onChange={handleChange}
            value={movie.metascore}
          />
            <input
              type='text'
              name='stars'
              placeholder="Actors"
              onChange={handleChange}
            value={movie.stars}
          />
          <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;