import React, { Component } from 'react'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       renderView: 1
    }
  }
  
  render() {
    const aa = ['aa', 'aaa']
    switch(this.state.renderView){
      case 1: return (
        <>
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
              <li className=" navigation-header"><span>Menu</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="Apps"></i>
              </li>
              <button  class=" nav-item btn" onClick={() => this.setState({renderView: 1})}><a href="#"><i className="ft-users"></i><span class="menu-title" data-i18n="">Contacts</span></a>
              </button>
              <button class=" nav-item btn" onClick={() => this.setState({renderView: 2})}><a href="#"><i className="ft-edit"></i><span class="menu-title" data-i18n="">Add new contact</span></a>
              </button>
            </ul>
          </div>
        </div>
        <Contacts />
      </>
      )
      case 2: return (
        <>
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
              <li className=" navigation-header"><span>Menu</span><i className=" ft-minus" data-toggle="tooltip" data-placement="right" data-original-title="Apps"></i>
              </li>
              <button class=" nav-item btn"  onClick={() => this.setState({renderView: 1})}><a href="#"><i className="ft-users"></i><span class="menu-title" data-i18n="">Contacts</span></a>
              </button>
              <button class=" nav-item btn"  onClick={() => this.setState({renderView: 2})}><a href="#"><i className="ft-edit"></i><span class="menu-title" data-i18n="">Add new contact</span></a>
              </button>
            </ul>
          </div>
        </div>
        <AddContact />
      </>
      )
      
    }
  }
}

export default App

