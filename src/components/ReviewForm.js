import React from 'react'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      content: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.addReview = this.addReview.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handleContent = this.handleContent.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      rating: '',
      content: ''
    })
  }

  addReview(event) {
    event.preventDefault();
    this.props.addReview({
      restaurant_id: this.props.restaurantId,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    });
    this.handleClearForm();
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleRating(event) {
    this.setState({
      rating: event.target.value
    })
  }

  handleContent(event) {
    this.setState({
      content: event.target.value
    })
  }

  render() {

    return (
      <form className="callout" onSubmit={this.addReview} >
        <h1>Reviews</h1>
        <div>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" value={this.state.name} onChange={this.handleName}/>
        </div>

        <div>
          <label htmlFor="Rating">Rating:</label>
          <input type="text" name="rating" value={this.state.rating} onChange={this.handleRating}/>
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <input type="text" name="content" value={this.state.content} onChange={this.handleContent} />
        </div>

        {/* <div>
          <input type="hidden" name="restaurantId" value={this.props.restaurantId} />
        </div> */}

        <input type="submit" value="Submit" />

      </form>
    )
  }
}


export default ReviewForm
