import React, { Component } from 'react';

class Review extends Component {
    state = {
        review: ''
    }

    // create function to update state from input value

    handleReivew = (e) => {
        this.setState( { review: e.target.value})
    }


    // create function handle form submit to update Course data 
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.review.trim() === "") {
            console.log(this.state.review)
            alert('You can not submit an empty review')
            return false;
        } else {
            this.props.handleAddReview()
        }
    }

    render() {
        console.log(this.state.review)
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='Comment...'
                    onChange={this.handleReivew}

                />
                <input 
                    type='submit'
                    value='Leave Review' 
                />
            </form>
        )
    };
}

export default Review;