import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: ""
  }

  starArray = [];

  // Write a function that returns 5 Star components
  handleStars = () => {
      for (let i=0;i<=5;i++) {
        this.starArray.push(<Star />);
        console.log(this.starArray)
        return this.starArray;
      }
    
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */
          this.handleStars
        }
      </ul>
    );
  }
}

export default StarRating;