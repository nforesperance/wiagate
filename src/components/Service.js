import React, { Component } from 'react';
import App from '../App';
import {Modal,Button} from 'react-bootstrap';


class Service extends React.Component{
    constructor(args) {
        super(args);
        this.state = {
            modalShow :false,
            setModalShow :null,
        }
      }
    render(){

        return(
            <div className="page-wrapper">
                <div class="page-container">
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                            <div class="row">
            <div class="col-lg-6">
                
                <div class="user-data m-b-30">
                    <h3 class="title-3 m-b-30">
                        <i class="zmdi zmdi-account-calendar"></i>user Services</h3>
                    <div class="filters m-b-45">
                        <div class="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                            <select class="js-select2" name="property">
                                <option selected="selected">All Properties</option>
                                <option value="">Products</option>
                                <option value="">Services</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                        <div class="rs-select2--dark rs-select2--sm rs-select2--border">
                           
                            <div class="dropDownSelect2"></div>
                        </div>
                    </div>
                    <div class="table-responsive table-data">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>name</td>
                                    <td>status</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div class="table-data__info">
                                            <h6>Wiatalk</h6>
                                            <span>
                                                <button onClick = {()=> this.setState({modalShow : true})}>description</button>

                                                <MyVerticallyCenteredModal show={this.state.modalShow}  onHide={() => this.setState({modalShow : false})}/>
                                            </span>

                                        </div>
                                    </td>
                                   
                                    <td>
                                        <div class="rs-select2--trans rs-select2--sm">
                                            <select class="js-select2" name="property">
                                                <option selected="selected">activer</option>
                                                <option value="">desactiver</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="more">
                                            <i class="zmdi zmdi-more"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox" checked="checked"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div class="table-data__info">
                                            <h6>service</h6>
                                            <span>
                                                <a href="#">description</a>

                                            </span>
                                        </div>
                                    </td>
                                   
                                    <td>
                                        <div class="rs-select2--trans rs-select2--sm">
                                            <select class="js-select2" name="property">
                                                <option value="">desactiver</option>
                                                <option value="" selected="selected">active</option>
                                                
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="more">
                                            <i class="zmdi zmdi-more"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div class="table-data__info">
                                            <h6>service 1</h6>
                                            <span>
                                                <a href="#">description 1</a>
                                            </span>
                                        </div>
                                    </td>
                                    
                                    <td>
                                        <div class="rs-select2--trans rs-select2--sm">
                                            <select class="js-select2" name="property">
                                                <option value="">desactiver</option>
                                                <option value="" selected="selected">active</option>
                                            
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="more">
                                            <i class="zmdi zmdi-more"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="au-checkbox">
                                            <input type="checkbox"/>
                                            <span class="au-checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div class="table-data__info">
                                            <h6>service 2</h6>
                                            <span>
                                                <a href="#">description 2</a>
                                            </span>
                                        </div>
                                    </td>
                                   
                                    <td>
                                        <div class="rs-select2--trans rs-select2--sm">
                                            <select class="js-select2" name="property">
                                                <option selected="selected">desactiver</option>
                                                <option value="">active</option>
                                              
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="more">
                                            <i class="zmdi zmdi-more"></i>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="user-data__footer">
                        <button class="au-btn au-btn-load">load more</button>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-6">
               
                <div class="top-campaign">
                    <h3 class="title-3 m-b-30">top Forfaits </h3>
                    <div class="table-responsive">
                        <table class="table table-top-campaign">
                            <tbody>
                                <tr>
                                    <td>1. Ordinaire </td>
                                    <td>70,261 FCFA</td>
                                </tr>
                                <tr>
                                    <td>2. Ultra</td>
                                    <td>46,399 FCFA</td>
                                </tr>
                                <tr>
                                    <td>3. le 77 </td>
                                    <td>35,364 FCFA</td>
                                </tr>
                                <tr>
                                    <td>4. Extra</td>
                                    <td>20,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>5. l'Ultra Extra</td>
                                    <td>10,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>3. forfait...</td>
                                    <td>35,364 FCFA</td>
                                </tr>
                                <tr>
                                    <td>4. Forfait ....</td>
                                    <td>20,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>Forfait</td>
                                    <td>10,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>3. forfait ...</td>
                                    <td>35,364 FCFA</td>
                                </tr>
                                <tr>
                                    <td>4. forfait ...</td>
                                    <td>20,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>5. Forfait ...</td>
                                    <td>10,366 FCFA</td>
                                </tr>
                                <tr>
                                    <td>4. Forfait ... </td>
                                    <td>20,366 FCFA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
                <div class="col-lg-2"></div>
            <div class="col-lg-8">
               
               <div class="top-campaign">
                   <h3 class="title-3 m-b-30"> Methode of payment </h3>
                   <div class="table-responsive">
                       <table class="table table-top-campaign">
                           <tbody>
                               
                               <tr>   
                                <td>1. Paypal</td>
                                  <td></td>
                               </tr>
                               <tr>
                                   <td>2. Mobile Money </td>
                                   <td></td>
                               </tr>
                               <tr>
                                   <td>3. orange Money</td>
                                   <td></td>
                               </tr>
                               <tr>
                                   <td>4. methode... </td>
                                   <td></td>
                               </tr>
                                                          
                           </tbody>
                       </table>
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


function MyVerticallyCenteredModal(props) {
   
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Wiatalk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Description</h4>
          <p>
            Il s'agit d'un service de communication offert par la  communauté
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
export default Service