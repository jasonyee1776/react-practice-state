import React from 'react';
import Course from './Course';

const App = (props) => {
  
  const handleAddReview = () => {
    console.log(props.course)
  }

  return (
    <div className="container">
      {props.courses.map( course => 
        <Course
          {...course}
          key={course.id}
          handleAddReview={handleAddReview}
        />      
      )}
    </div>
  );
}

export default App;
