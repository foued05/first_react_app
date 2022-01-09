import React, { Component } from 'react'
import axios from 'axios'

class Contacts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: [{}],
             errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
        .catch(error => {
            this.setState({
                errorMsg: 'Error Server'
            })
        })
    }
    
    render() {
        const {users} = this.state
        return (
            <div>
                <div class="app-content content">
                    <div class="content-wrapper">
                        <div class="content-header row">
                            <section id="user-profile-cards-with-stats" class="row mt-2">
                                <div class="col-12">
                                    <h4 class="text-uppercase">User Profile Cards with Stats</h4>
                                    <p>User profile cards with Stats in border & shadow variant.</p>
                                    </div>
                                    {
                                        users.map( (user, ind) => (
                                            <React.Fragment key={ind}>
                                                <div class="col-xl-4 col-md-6 col-12">
                                                    <div class="card profile-card-with-stats">
                                                        <div class="text-center">
                                                            <div class="card-body">
                                                                <h4 class="card-title">{user.name}</h4>
                                                                <ul class="list-inline list-inline-pipe">
                                                                    <li>{user.email}</li>
                                                                </ul>
                                                                <h6 class="card-subtitle text-muted">{user.phone}</h6>
                                                            </div>
                                                            <div class="card-body">
                                                                <button type="button" class="btn btn-outline-danger btn-md mr-1"><i class="fa fa-plus"></i> Follow</button>
                                                                <button type="button" class="btn btn-outline-primary btn-md mr-1"><i class="ft-user"></i> Profile</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Contacts
