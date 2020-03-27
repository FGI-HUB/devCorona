import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {
	reduxForm,
	Field,
	propTypes as reduxFormPropTypes,
	formValueSelector
  } from "redux-form";

import './style.local.scss'

import Navbar from "../../Snippeds/Navbar/index"



const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyCfKw7PV6PzobWwUZumkmVvPHxcc4j27eY

export default
@connect((state, props) => ({}))
@reduxForm({ form: "consultation_home", enableReinitialize: true })
class Floating extends React.Component {

	componentWillMount(){
		const title = "DevCorona"
		document.title = title
	}

  render(){

  	return (
  		<div className="floating">
			<div className="wrapper">
				<div className="box">
					<h4>Consultation rapide</h4>
					<br />
					<form className="consultation_home">
						<FormGroup>
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="Nom et prénom"
								className="form-control"
							/>
						</FormGroup>
						<FormGroup>
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="Nom et prénom"
								className="form-control"
							/>
						</FormGroup>
						<FormGroup>
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="Nom et prénom"
								className="form-control"
							/>
						</FormGroup>
						<FormGroup>
							<Field
								name="name"
								component="input"
								type="text"
								placeholder="Nom et prénom"
								className="form-control"
							/>
						</FormGroup>

						<div className="consultation_form_home_btn">
							<button
								className="btn btn-outline-light"
								// onClick={this.props.handleSubmit(
								// 	this._handleFormSubmit.bind(this)
								// )}
								>

								<i className="far fa-paper-plane" style={{ paddingRight: "10px" }} />
									Soumettre
							</button>
						</div>	
					</form>
				</div>

			</div>
  		</div>
  	)
  }
}
