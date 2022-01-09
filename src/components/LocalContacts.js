import React, { Component } from 'react'
import ListContact from './ListContact'

class LocalContacts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users: [
            ],
            userInfo: {
                firstName: "",
                lastName: "",
                email: ""
            }   
        }
    }

    changeHandlerFirst = (e) => {
        this.setState(prevState => {
            return {
                users: prevState.users,
                userInfo:{
                    firstName: e.target.value,
                    lastName: prevState.userInfo.lastName,
                    email: prevState.userInfo.email
                }
            }
        })
        console.log(this.state.userInfo)
    }

    changeHandlerLast = (e) => {
        this.setState(prevState => {
            return {
                users: prevState.users,
                userInfo:{
                    firstName: prevState.userInfo.firstName,
                    lastName: e.target.value,
                    email: prevState.userInfo.email
                }
            }
        })
        console.log(this.state.userInfo)
    }

    changeHandlerEmail = (e) => {
        this.setState(prevState => {
            return {
                users: prevState.users,
                userInfo: {
                    firstName: prevState.userInfo.firstName,
                    lastName: prevState.userInfo.lastName,
                    email: e.target.value
                }
            }
        })
        console.log(this.state.userInfo)
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.state.users.push(this.state.userInfo)
        console.log(this.state.users)
        this.setState(prevState => {
            return {
                users : prevState.users,
                userInfo: {
                    firstName: '',
                    lastName: '',
                    email: ''
                }
            }
        })
    }
    
    render() {
        const {firstName, lastName, email} = this.state.userInfo
        return (
            <>
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-header row">
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-content collapse show">
                                                <div className="card-body card-dashboard">
                                                    <p className="card-text">Example of table row borders. This is a default table border style by bootstrap and attached to <code>.table</code> className.</p>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Firstname</th>
                                                                <th>Lastname</th>
                                                                <th>Email</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <ListContact env={this.state.users}/>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section id="horizontal-form-layouts">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                                                    <div class="heading-elements">
                                                    <ul class="list-inline mb-0">
                                                        <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                                        <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                                        <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                                        <li><a data-action="close"><i class="ft-x"></i></a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                <div class="card-content collpase show">
                                                    <div class="card-body">
                                                    <div class="card-text">
                                                        <p>This is the basic horizontal form with labels on left and form controls on right in one line. Add <code>.form-horizontal</code> class to the form tag to have horizontal form styling. To define form sections use <code>form-section</code> class with any heading tags.</p>
                                                    </div>
                                                    <form class="form form-horizontal" onSubmit={this.submitHandler}>
                                                        <div class="form-body">
                                                        <h4 class="form-section"><i class="ft-user"></i> Personal Info</h4>
                                                        <div class="form-group row">
                                                            <label class="col-md-3 label-control" for="projectinput1">First Name</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput1" class="form-control" placeholder="First Name" name="firstName" value={firstName} onChange={this.changeHandlerFirst} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3 label-control" for="projectinput4">Last Name</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput4" class="form-control" placeholder="Last Name" name="lastName" value={lastName}  onChange={this.changeHandlerLast} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3 label-control" for="projectinput3">E-mail</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput3" class="form-control" placeholder="E-mail" name="email" value={email} onChange={this.changeHandlerEmail} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col-md-9">
                                                            <button class="btn-primary form-control text-white">Sign In</button>
                                                            </div>
                                                        </div>                  
                                                        </div>
                                                        
                                                    </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LocalContacts
