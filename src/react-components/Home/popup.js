import React from 'react';  
import './style.css';  

class Popup extends React.Component {  
  render() {  
    return (  
    <div className='popup'>  
        <div className='popup_inner'>  
            <form action={"login"}>
                        <input type={"text"} name={"user"} placeholder={"Username"}/>
                        <input type={"text"} name={"pass"} placeholder={"Password"}/>
                        <input type={"submit"} value={"Login"}/>
            </form>
            <div>
                <button onClick={this.props.closePopup}>close</button> 
            </div> 
        </div>  
    </div>  
    );  
    }  
}  

export default Popup; 