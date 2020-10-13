import React from 'react';

export default function MovieCard (props) {
  const { movie, starsList, movieSaver, movieRemover } = props;
  const { title, director, metascore } = movie

  if(starsList === false){
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </div>
        )
  } else if (starsList === true){
    return(
      <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
      <h3>Actors</h3>
        {movie.stars.map(star => (
          <div key={star} className="movie-star">
          {star}
          </div>
        ))}
      <div className="save-button" onClick={movieSaver}>Save</div>
      <div className='remove-button' onClick={movieRemover}>Remove</div>
       </div>
      
    )
      

    //     <h3>Actors</h3>
    //     {stars.map(star => (
    //       <div key={star} className="movie-star">
    //         {star}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="save-button">Save</div>
    // </div>
  }
}
