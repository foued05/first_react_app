import axios from 'axios'
import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             phone: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {name, email, phone} = this.state
        return (
            <div>
                <div class="app-content content">
                    <div class="content-wrapper">
                        <div class="content-header row">
                            <div class="content-body">
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
                                                            <label class="col-md-3 label-control" for="projectinput1">Name</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput1" class="form-control" placeholder="Name" name="name" value={name} onChange={this.changeHandler} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3 label-control" for="projectinput3">E-mail</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput3" class="form-control" placeholder="E-mail" name="email" value={email} onChange={this.changeHandler} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-md-3 label-control" for="projectinput4">Contact Number</label>
                                                            <div class="col-md-9">
                                                            <input type="text" id="projectinput4" class="form-control" placeholder="Phone" name="phone" value={phone} onChange={this.changeHandler} />
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
            </div>
        )
    }
}

export default AddContact
