import React from 'react';
import StarRating from './StarRating';
import Review from './Review';


const Course = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.url} alt={props.name} />
      </div>
      <h2>{ props.name }</h2>
      <p>{ props.desc }</p>
      <h3>Course Rating</h3>
      {/* A self-contained star rating component */
      }
      <StarRating />
      <Review 
        handleAddReview = { props.handleAddReview }
      /> 
    </div>
  );
}

export default Course;