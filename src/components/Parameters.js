import React from 'react'

function Field({name, value, onChange, children}) {
    return <div className='form-group'>
        <label htmlFor={name}>{children}</label>
        <input type='text' value={value} onChange={onChange} id={name} name={name} className='form-control'/>
    </div>
}

function Password({name, value, onChange, children}) {
    return <div className='form-group'>
        <label htmlFor={name}>{children}</label>
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
            first_name: 'BOGNE',
            last_name: 'Amael',
            contact: '690147073',
            username:'Taliban017',
            password:'jflksjfkls',
            newsletter: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return <div className='w-50'>
            <h1>Parametres</h1>
            <form className='container' onSubmit={this.handleSubmit}>

                <Field name='first_name' value={this.state.first_name} onChange={this.handleChange}>Nom</Field>
                <Field name='last_name' value={this.state.last_name} onChange={this.handleChange}>Prenom</Field>
                <Field name='username' value={this.state.username} onChange={this.handleChange}>Username</Field>
                <Password name='password' value={this.state.password} onChange={this.handleChange}>Password</Password>
                <Field name='contact' value={this.state.contact} onChange={this.handleChange}>Contact</Field>
                {/* <Checkbox name='newsletter' value={this.state.newsletter} onChange={this.handleChange}>S'abonner a la newsletter</Checkbox> */}
                <div className='form-group'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
                {/* {JSON.stringify(this.state)} */}
            </form>
        </div>
    }
}

// ReactDOM.render(<Paramters/>, document.querySelector('#app'))

export default Paramters