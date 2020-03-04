import React from 'react';  
import './App.css';  

class Popup extends React.Component {  
    constructor(props){
        super(props);
        this.state = { signUp: false }; // start with sign in page
    }
    
    toggleSignUp () {
        this.setState({ signUp: !this.state.signUp });
    }

    render() {  
    return (  
    <div className='popup_background'>  
        <div className='popup_inner'>  
            <h1>Sign {this.state.signUp ? 'up' : 'in'}</h1>
            {this.state.signUp ? <SignUpForm toggle={this.toggleSignUp.bind(this)}
                                login={this.props.login}/> : 
                                <SignInForm toggle={this.toggleSignUp.bind(this)}
                                login={this.props.login}/>}
            <button onClick={this.props.closePopup}>close</button> 
        </div>  
    </div>  
    );  
    }  
}

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            pass : ''
        }

        this.verifyLogin = this.verifyLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    verifyLogin (event){

    }

    handleChange(event) {

    }
    
    render(){
        return (
        <div> 
            <form onSubmit={this.verifyLogin}>
                        <input type="text" value={this.state.user} onChange={this.handleChange} placeholder={"Username"}/>
                        <input type="text" value={this.state.pass} onChange={this.handleChange} placeholder={"Password"}/>
                        <input type={"submit"} value={"sign in"}/>
            </form>

            <button onClick={this.props.toggle}> Sign up </button>
        </div>
        );
    }
}

class SignUpForm extends React.Component {
    render(){
        return (
        <div> 
            <form action={"sign up"}>
                        <input type={"text"} name={"email"} placeholder={"Email"}/>
                        <input type={"text"} name={"user"} placeholder={"Username"}/>
                        <input type={"text"} name={"pass"} placeholder={"Password"}/>
                        <input type={"text"} name={"confirmPass"} placeholder={"Confim password"}/>
                        <input type={"submit"} value={"sign up"}/>
            </form>
            <button onClick={this.props.toggle}> Back to sign in </button>
        </div>
        );
    }
}

export default Popup; 