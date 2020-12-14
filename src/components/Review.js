import React, { Component } from 'react';
import Comments from './Comments';

// Make <Review /> component the parent of Comments 

class Review extends Component {
    state = {
        review: '',
        isSubmitted: false
    }

    // create function to update state from input value

    handleReivew = (e) => {
        this.setState( { review: e.target.value})
    }


    // create function handle form submit to update Course data 
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.review.trim() === "") {
            alert('You can not submit an empty review')
            return false;
        } else {
            this.props.handleAddReview();
            this.setState({
                isSubmitted: !this.state.isSubmitted,
                review: ''
            })
        }
    }

    render() {
        console.log(this.state.review)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Comment...'
                        onChange={this.handleReivew}
                        value={this.state.review}

                    />
                    <input 
                        type='submit'
                        value='Leave Review' 
                    />
                </form>
            </div>
        )
    };
}

export default Review;