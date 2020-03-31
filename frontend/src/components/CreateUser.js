import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount(){
        await this.getUsers();
    }

    onChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onSubmit = async event => {
        event.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.setState({
            username: ''
        });
        await this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    deleteUser = async (id) => {
        console.log(id);
        await axios.delete('http://localhost:4000/api/users/'+id);
        this.getUsers();
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create a new User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onChange} 
                                    name="username" 
                                    value={this.state.username}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => 
                                (
                                    <li 
                                        key={user._id} 
                                        className="list-group-item list-group-item-action"
                                        onDoubleClick={() => this.deleteUser(user._id)}
                                    >
                                        {user.username}
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
