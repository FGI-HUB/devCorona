import React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


// AIzaSyCfKw7PV6PzobWwUZumkmVvPHxcc4j27eY

export class MapContainer extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      selectedPlace : {
        name: "tesr"
      }
    }
  }
  
  onMarkerClick(mapProps, map, clickEvent) {
    alert("hello")
  }

  render(){
	const mapStyles = {
		width: '100%',
		height: '100%'
	};

  	return (
  		<div className="map">
			<Map
				google={this.props.google}
				zoom={16}
				style={mapStyles}
				initialCenter={{
					lat: 4.048593,
					lng: 9.703413
				}}
			>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
  		</Map>
  		</div>
  	)
  }
}

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)


export default GoogleApiWrapper({
  apiKey: '',
  LoadingContainer: LoadingContainer
  })(MapContainer);


  