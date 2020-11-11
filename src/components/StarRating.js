import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }
 

  // Write a function that returns 5 Star components
  renderStars = () => {
      let starArray = [];
      let maxStars = 5;

      for (let i = 0; i < maxStars; i++) {
        starArray.push(
          <Star 
            key={i}
            updateRating={ () => this.updateRating(i + 1) }
            isSelected={this.state.rating > i}
          />
        );
      }
      return starArray;
  }

  // Write an event handler that updates the rating state.
  updateRating = (rating) => {
    this.setState({ rating: rating})
  }
  

  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.renderStars()}
        
      </ul>
    );
  }
}

export default StarRating;