import React from 'react'
import axios from 'axios'

export default class SeeMoreForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            description: '',
            submitting: false,
            submitted: false
        }
    }
    onSubmit = () => {
       
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { props } = this
        return (
            <div className="seeMore" key="seeMore">
                <h2>Want to implement this stories format on your website, but don't want to code?</h2>
                <h4>Contact me here: </h4>
                <input onChange={this.onChange} name="name" placeholder="Your name"/>
                <input onChange={this.onChange} name="email" placeholder="Your email" />
                <textarea onChange={this.onChange} name="description" placeholder="A little about what you want to build"/>
                <button style={{ background: this.state.submitted ? 'green' : '#16161d' }} onClick={this.onSubmit} disabled={this.state.submitted}>{this.state.submitting ? 'Submitting..' : (this.state.submitted ? 'Submitted' : 'Submit')}</button>
            </div>
        )
    }
}
