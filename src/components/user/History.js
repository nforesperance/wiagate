import React from 'react';
import AuthParent from '../user/Auth_Parent'

import axios from 'axios';
import host from '../../config'

class History extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        axios.get(`http://`+host+`/api/user/forfait/`)
          .then(res => {
              console.log(res.data)
            const history = res.data;
            this.setState({ history });
          })
      }


    render() {
        return <div>
            <AuthParent></AuthParent>
            <br/>
            <h1>Historique des souscriptions</h1>
            <div style={{padding: 50}}>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Forfait</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Date d'expiration</th>
                        <th scope="col">Etat</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.history.map((data) => {
                            let date = new Date(data.date)
                            let str = date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear()
                            return <TableField key={data.id.toString()} date={str} offer={data.offer} price={data.price} quantity={data.quantity} expiry_date={data.price} actif={data.active? 'actif':'expire'}></TableField>
                        }
                                
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    }

}

function TableField({date, offer, price, quantity, expiry_date, actif}){

    return <tr>
        <td>{date}</td>
        <td>{offer}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{expiry_date}</td>
        <td>{actif}</td>
    </tr>
}

export default History
