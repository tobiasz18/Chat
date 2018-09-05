import React, {Component} from 'react';
import styles from '../styles/UsersForm.css';

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
            <h1>Join to public Chat</h1>
            <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                <input
                    className = {styles.UserInput}
                    placeholder="Write your nickname and press enter"
                    onChange={e => this.handleChange(e)}
                    value={this.state.name}
                />
            </form>
            </div>
        )
    }
}

export default UsersForm;
