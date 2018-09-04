import React, { Component } from 'react';
import io from 'socket.io-client';
//components
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UserList from './UserList';
import UserForm from './UserForm';

import styles from './App.css';

const socket = io('/')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            messages: [],
            text: '',
            name: ''
        }
    }


    render() {
        return (
            this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
        )
    }

    renderLayout() {
        return (
            <div className={styles.App}>
                <div className={styles.AppHeader}>
                    <div className={styles.AppTitle}>
                        ChatApp
                    </div>
                    <div className={styles.AppRoom}>
                        App room
                    </div>
                </div>
                <div className={styles.AppBody}>
                    <UsersList
                        users={this.state.users}
                    />
                    <div className={styles.MessageWrapper}>
                        <MessageList
                            messages={this.state.messages}
                        />
                        <MessageForm
                            onMessageSubmit={message => this.handleMessageSubmit(message)}
                            name={this.state.name}
                        />
                    </div>
                </div>
            </div>
        )
    }

    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

}

export default App;
