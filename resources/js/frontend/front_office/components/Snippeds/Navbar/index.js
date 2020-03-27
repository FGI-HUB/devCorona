import React from "react";
import { connect } from "react-redux";
import { clearToken, clearUser } from '../../../../libs/utils/auth_utils';

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Navbar extends React.Component {

  logout(){
    clearToken()
    clearUser()
    window.location.href = "/login"
  }


  render() {

    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#2fd196" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="img-fluid rounded-circle" src="/images/logo.png" width="30px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    <a className="nav-link" href="#">
                      <img className="img-fluid" src="/images/logo_text.png" width="120px"/>
                      {/* <span className="sr-only"></span> */}
                    </a>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 nav-form">
                <input className="form-control mr-sm-2 navFormInput" type="search" placeholder="Rechercher" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Consultation</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa- text-white"></i>Menu
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-sign-out-alt text-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
