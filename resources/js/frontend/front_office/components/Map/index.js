import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import './style.local.scss'

import GoogleMapReact from 'google-map-react';

import Navbar from "../../components/Snippeds/Navbar/index"
import Footer from "../../components/Snippeds/Footer/index"
import Floating from "./Floating/index"



const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyCfKw7PV6PzobWwUZumkmVvPHxcc4j27eY

export default
@connect((state, props) => ({}))
class MapComponent extends React.Component {
	static defaultProps = {
		 center: {
			 lat: 4.048593,
			 lng: 9.703413
		 },
		 zoom: 16
	 };


	componentWillMount(){
    const title = "DevCorona"
    document.title = title
  }

  render(){

  	return (
  		<div className="body_map">
			<Navbar />
			<div className="map_wrapper">
				<GoogleMapReact
						// bootstrapURLKeys={{ key: "AIzaSyCycHdESmkrI-TR_-pwZO_yJj0w51nytJg" }}
				bootstrapURLKeys={{ key: "#" }}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				>
				<AnyReactComponent
					lat={4.046434}
					lng={9.699188}
					text="My Marker"
				/>
				</GoogleMapReact>

				<Floating />

				<Footer />
	      	</div>
  		</div>
  	)
  }
}
