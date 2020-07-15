import React from 'react'
import AuthParent from './Auth_Parent'
import host from './../../config'
import axios from 'axios'

function Field({name, value, onChange, children}) {
    return <div className='form-group'>
        <label htmlFor={name} className='control-label'>{children}</label>
        <input type='text' value={value} onChange={onChange} id={name} name={name} className='form-control'/>
    </div>
}

function Password({name, value, onChange, children}) {
    return <div className='form-group'>
        <label htmlFor={name} className='control-label'>{children}</label>
        <input type='password' value={value} onChange={onChange} id={name} name={name} className='form-control'/>
    </div>
}

function Checkbox({name, value, onChange, children}) {
    return <div className='form-check'>
        <input type='checkbox' checked={value} onChange={onChange} id={name} name={name} className='form-check-input'/>
        <label htmlFor={name} className='form-check-label'>{children}</label>
    </div>
}




class Paramters extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            contact: '',
            username:'',
            password:'',
            id: props.id
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount(){
        const id = this.state.id
        axios.get(`http://`+host+`/api/user/signup?target=`+{id})
          .then(res => {
              console.log(res.data)
            const profile = res.data;
            this.setState({ 
                first_name: profile.first_name,
                last_name: profile.last_name,
                contact: profile.contact,
                username: profile.username,
                password: profile.password
             });
          })
    }

    handleChange(e){
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox'? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        // this.setState({
        //     nom: 'BOGNE',
        //     prenom: 'Amael',
        //     contact: '690147073',
        //     username:'Taliban017',
        //     password:'jflksjfkls',
        //     newsletter: false
        // })
        console.log(data)
    }
    render(){
        console.log('render')
        return <div>
            <AuthParent></AuthParent>
            <br/>
            <h1>Modification du Profil</h1>
            <div class='col-lg-6 container-fluid'>
            <div class="card" style={{margin: 15}}>
                <div class="card-header">Profil</div>
                <div class="card-body">
                    <div class="card-title">
                        <h3 class="text-center title-2"></h3>
                    </div>
                    <hr></hr>

                    <form action="" method="post" novalidate="novalidate">
                        <div class="form-group">
                            <label for="cc-payment" class="control-label mb-1">Nom</label>
                            <input id="cc-pament" name="cc-payment" type="text" class="form-control" aria-required="true" aria-invalid="false" ></input>
                        </div>
                        <div class="form-group has-success">
                            <label for="cc-name" class="control-label mb-1">Prenom</label>
                            <input id="cc-name" name="cc-name" type="text" class="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card"
                                autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error"/>
                            <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                        </div>
                        <div class="form-group">
                            <label for="cc-number" class="control-label mb-1">Nom d'Utilisateur</label>
                            <input id="cc-number" name="cc-number" type="tel" class="form-control cc-number identified visa" data-val="true"
                                data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number"
                                autocomplete="cc-number"/>
                            <span class="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="cc-exp" class="control-label mb-1">Mot de Passe</label>
                                    <input id="cc-exp" name="cc-exp" type="password" class="form-control cc-exp"  data-val="true" data-val-required="Please enter the card expiration"
                                        data-val-cc-exp="Please enter a valid month and year"
                                        autocomplete="cc-exp"/>
                                    <span class="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="x_card_code" class="control-label mb-1">Confirmer Mot de Passe</label>
                                <div class="input-group">
                                    <input id="x_card_code" name="x_card_code" type="password" class="form-control cc-cvc" data-val="true" data-val-required="Please enter the security code"
                                        data-val-cc-cvc="Please enter a valid security code" autocomplete="off"/>

                                </div>
                            </div>
                        </div>
                        <div>
                            <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">
                                <i class="fa fa-lock fa-lg"></i>&nbsp;
                                <span id="payment-button-amount">Enregistrer</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    }
}

// ReactDOM.render(<Paramters/>, document.querySelector('#app'))

export default Paramters