import React, { Component } from 'react';
import App from '../App';

class Map extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <div class="page-container">
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                               
                                <div className="map-data m-b-40">
                                    <h3 className="title-3 m-b-30">
                                        <i className="fas fa-wifi"></i>Wifi Points</h3>
                                    {/* <div className="filters">
                                        <div className="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                            <select className="js-select2" name="property">
                                                <option selected="selected">All Properties</option>
                                                <option value="">Products</option>
                                                <option value="">Services</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                        <div className="rs-select2--dark rs-select2--sm rs-select2--border">
                                            <select className="js-select2 au-select-dark" name="time">
                                                <option selected="selected">All Time</option>
                                                <option valueName="">By Month</option>
                                                <option valueName="">By Day</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                    </div> */}
                                    <div className="map-wrap m-t-45 m-b-20">
                                        <iframe src="https://www.atlistmaps.com/map/19dbcc65-4cae-4288-90ad-41b60fdc8e28?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Map