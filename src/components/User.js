import React, { Component } from 'react';
import App from '../App';

class User extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <div class="page-container">
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                    <div class="row">
          
            
            </div>
            
              <div class="col-md-12">
                  
                  <h3 class="title-5 m-b-35"> Users table</h3>
                  <div class="table-data__tool">
                      <div class="table-data__tool-left">
                       
                          <div class="rs-select2--light rs-select2--sm">
                              <select class="js-select2" name="time">
                                  <option selected="selected">Today</option>
                                  <option value="">3 Days</option>
                                  <option value="">1 Week</option>
                              </select>
                              <div class="dropDownSelect2"></div>
                          </div>
                          <button class="au-btn-filter">
                              <i class="zmdi zmdi-filter-list"></i>filters</button>
                      </div>
                      <div class="table-data__tool-right">
                          <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                              <i class="zmdi zmdi-plus"></i>add user</button>
                         
                      </div>
                  </div>
                  
                  <div class="table-responsive table-responsive-data2">
                      <table class="table table-data2">
                          <thead>
                              <tr>
                                  <th>
                                      <label class="au-checkbox">
                                          <input type="checkbox"/>
                                          <span class="au-checkmark"></span>
                                      </label>
                                  </th>
                                  <th>name</th>
                                  <th>email</th>
                                  <th>description</th>
                                  <th>date</th>
                                  <th>status</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="tr-shadow">
                                  <td>
                                      <label class="au-checkbox">
                                          <input type="checkbox"/>
                                          <span class="au-checkmark"></span>
                                      </label>
                                  </td>
                                  <td>Geoges</td>
                                  <td>
                                      <span class="block-email">Georges@example.com</span>
                                  </td>
                                  <td class="desc">Samsung S8 Black</td>
                                  <td>2018-09-27 02:12</td>
                                  <td>
                                      <span class="status--process">actif</span>
                                  </td>
                                  <td>
                                      <div class="table-data-feature">
                                          
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                              <i class="zmdi zmdi-edit"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                              <i class="zmdi zmdi-delete"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                              <i class="zmdi zmdi-more"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr class="spacer"></tr>
                              <tr class="tr-shadow">
                                  <td>
                                      <label class="au-checkbox">
                                          <input type="checkbox"/>
                                          <span class="au-checkmark"></span>
                                      </label>
                                  </td>
                                  <td>Cyrille</td>
                                  <td>
                                      <span class="block-email">Cyrille@example.com</span>
                                  </td>
                                  <td class="desc">iPhone X 64Gb Grey</td>
                                  <td>2018-09-29 05:57</td>
                                  <td>
                                      <span class="status--process">actif</span>
                                  </td>
                                  <td>
                                      <div class="table-data-feature">
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                              <i class="zmdi zmdi-edit"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                              <i class="zmdi zmdi-delete"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                              <i class="zmdi zmdi-more"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr class="spacer"></tr>
                              <tr class="tr-shadow">
                                  <td>
                                      <label class="au-checkbox">
                                          <input type="checkbox"/>
                                          <span class="au-checkmark"></span>
                                      </label>
                                  </td>
                                  <td>Tintin</td>
                                  <td>
                                      <span class="block-email">Tintin@example.com</span>
                                  </td>
                                  <td class="desc">iPhone X 256Gb Black</td>
                                  <td>2018-09-25 19:03</td>
                                  <td>
                                      <span class="status--denied">expired</span>
                                  </td>
                                  <td>
                                      <div class="table-data-feature">
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                              <i class="zmdi zmdi-edit"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                              <i class="zmdi zmdi-delete"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                              <i class="zmdi zmdi-more"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr class="spacer"></tr>
                              <tr class="tr-shadow">
                                  <td>
                                      <label class="au-checkbox">
                                          <input type="checkbox"/>
                                          <span class="au-checkmark"></span>
                                      </label>
                                  </td>
                                  <td>Toto</td>
                                  <td>
                                      <span class="block-email">toto@example.com</span>
                                  </td>
                                  <td class="desc">Samsung S9</td>
                                  <td>2018-09-24 19:10</td>
                                  <td>
                                      <span class="status--process">actif</span>
                                  </td>
                                  <td>
                                      <div class="table-data-feature">
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                              <i class="zmdi zmdi-edit"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                              <i class="zmdi zmdi-delete"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                              <i class="zmdi zmdi-more"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  
              </div>
              <h3 class="title-5 m-t-20 m-b-35"> ALL USERS DATA</h3>
              <div class="row m-t-30">
              
                            <div class="col-md-12">
                                
                                <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr>
                                                <th>register date</th>
                                                <th>user</th>
                                                <th>equipement</th>
                                                <th>status</th>
                                                <th>price's forfait</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2018-09-29 05:57</td>
                                                <td>Jean Jean</td>
                                                <td>iPhone X 64Gb Grey</td>
                                                <td class="process">actif</td>
                                                <td>999.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-28 01:22</td>
                                                <td>Annie Anne</td>
                                                <td>Samsung S8 Black</td>
                                                <td class="process">actif</td>
                                                <td>756.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-27 02:12</td>
                                                <td>toto Jule</td>
                                                <td>Game Console Controller</td>
                                                <td class="denied">expired</td>
                                                <td>22.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-26 23:06</td>
                                                <td>Arthur</td>
                                                <td>iPhone X 256Gb Black</td>
                                                <td class="denied">expired</td>
                                                <td>1199.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-25 19:03</td>
                                                <td>Gérard</td>
                                                <td>Samsung S9</td>
                                                <td class="process">actif</td>
                                                <td>10.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-29 05:57</td>
                                                <td>Christian</td>
                                                <td>Smartwatch 4.0 LTE Wifi</td>
                                                <td class="denied">expired</td>
                                                <td>199.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-24 19:10</td>
                                                <td>Claude </td>
                                                <td>Camera C430W 4k</td>
                                                <td class="process">Actif</td>
                                                <td>699.00 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-22 00:43</td>
                                                <td>Armand</td>
                                                <td>Macbook Pro Retina 2017</td>
                                                <td class="process">Actif</td>
                                                <td>10.00 FCFA</td>
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
          
          
        )
    }
}
export default User