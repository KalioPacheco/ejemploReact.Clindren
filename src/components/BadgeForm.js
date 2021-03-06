import React from 'react';

class BadgeForm extends React.Component {
    handleClick = e => {
        console.log('Button was clicked');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    };

    onChange = (e) => {
        const {value, name} = e.target
        // this.props.onChange(e)
    }

    render() {
        return (
            <React.Fragment>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            placeholder={'lastname'}
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default BadgeForm;
