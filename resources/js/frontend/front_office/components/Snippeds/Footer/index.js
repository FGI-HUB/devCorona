import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Footer extends React.Component {



  render() {

    return (
      <div className="footer_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <h4 className="text-center">Yaounde</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-danger"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="text-center">Douala</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-warning"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="text-center">Baffoussam</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-warning"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="text-center">Ngaoundéré</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-warning"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="text-center">Edéa</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-warning"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="text-center">Ebolowa</h4>
                    <div className="row text-center">
                        <p>
                            <span>12 Signalés (<i className="fa fa-arrow-up text-warning"></i>) <br /></span>
                            <span>20 Guérris (<i className="fa fa-arrow-up text-success"></i>) <br /></span>
                            <span>0 Décès (<i className="fa fa-minus"></i>) <br /></span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}