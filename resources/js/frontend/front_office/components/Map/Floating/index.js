import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import './style.local.scss'

import Navbar from "../../Snippeds/Navbar/index"



const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyCfKw7PV6PzobWwUZumkmVvPHxcc4j27eY

export default
@connect((state, props) => ({}))
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
				</div>

			</div>
  		</div>
  	)
  }
}
