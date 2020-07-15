import React from 'react'


function Link({name, onLink}){
return <li className='nav-item' onClick={onLink}>{name}</li>
}



class AuthParent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            actualChild: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log(e)
        this.setState({
            actualChild: e.target.name
        })
    }

    render(){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">	               
                    <font face="Times New Roman" style={{fontSize: "300%", marginLeft: "8%" , marginTop: "1%"}}> WIAGATE </font>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/Accueil">Accueil <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/Services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/Forfaits"> Forfaits </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/history">Historique</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/parameters">Parametres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Accueil"> LogOut <i className="fas fa-sign-out-alt"></i></a>
                        </li>
                    </ul>
                    

                    </div>
        </nav>
    }
}

export default AuthParent

