import React from 'react';
import Course from './Course';

const App = (props) => {

  return (
    <div className="container">
      {props.courses.map( course => 
        <Course
          {...course}
          key={course.id}
          handleAddReview={props.handleAddReview}
        />      
      )}
    </div>
  );
}

export default App;
