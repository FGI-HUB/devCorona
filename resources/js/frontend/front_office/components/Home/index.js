import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Tabs, Icon, Input, Skeleton} from 'antd';
import { clearToken, clearUser } from '../../../libs/utils/auth_utils';

import MapComponent from './Map/index';

import Navbar from "../../components/Snippeds/Navbar/index"
import Footer from "../../components/Snippeds/Footer/index"
import Floating from "./Floating/index"

import './style.local.scss';



export default
@injectIntl
@connect((state, props) => ({}))
class Index extends React.Component {
  componentWillMount() {
    document.title = 'Home | DevCorona'
  }

  logout(){
    clearToken()
    clearUser()
    window.location.href = "/login"
  }

  inPutonChange(e){
    console.log(e);
  }

  render() {

    return (
      //<!-- Document Wrapper -->
      <div className="body_map">
			  <div className="map_wrapper">
          <Navbar />

          <MapComponent />
          
          <Floating />

          <Footer />
        </div>
      
      </div>
    );
  }
}
