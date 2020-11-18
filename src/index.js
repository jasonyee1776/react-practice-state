import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {courses, handleAddReview} from './course-data';


ReactDOM.render(
  <App 
    courses={courses} 
    handleAddReview={handleAddReview}  
  />, 
  document.getElementById('root')
);
