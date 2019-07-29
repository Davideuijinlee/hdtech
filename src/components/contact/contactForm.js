import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="col-12 col-sm-12 cold-md-12 col-lg-8 formContainer">
                <h2 className="offset-4 offset-sm-4 offset-md-5 offset-lg-5 contactTitle text-center">
                    Questions?
                </h2>
                <form className="offset-2 offset-lg-3">
                    <input
                        value={name}
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        type="text"
                        name="name"
                        required
                        className="col-4 inputText inputName"
                    />
                    <input
                        value={email}
                        onChange={this.handleInputChange}
                        placeholder="Email"
                        type="text"
                        name="email"
                        required
                        className="offset-1 col-6 inputText inputEmail"
                    />
                    <input
                        value={subject}
                        onChange={this.handleInputChange}
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                        className="col-10 inputSubject inputText"
                    />
                    <input
                        value={message}
                        onChange={this.handleInputChange}
                        placeholder="Message"
                        type="text"
                        name="message"
                        required
                        className="col-10 inputMsg inputText"
                    />
                    <button className="d-block btn btn-primary" variant="info" type="submit">
                        Save Changes
                    </button >
                </form>
            </div>
        )
    }

}