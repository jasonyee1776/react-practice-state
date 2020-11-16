import React, { Component } from 'react';

class Review extends Component {
    state = {
        review: ''
    }

    // create function to update state from input value

    handleReivew = (e) => {
        console.log(e.target.value)
        this.setState({ reivew: e.target.value })
    }


    // create function handle form submit to update Course data 
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.review.trim() === '') {
            alert('You can not submit an empty review')
            return false;
        } else {
            //this.props.handleAddReiview()
           
            alert("good job you successfully submitted")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='Comment...'
                    onChange={this.handleReivew}

                />
                <input 
                    type='submit'
                    value='Leave a Review' 
                />

            </form>
        )
    };
}

export default Review;