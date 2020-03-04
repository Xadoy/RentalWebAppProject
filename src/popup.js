import React from 'react';  
import './App.css';  

class Popup extends React.Component {  
  render() {  
    return (  
    <div className='popup_background'>  
        <div className='popup_inner'>  
            <h1>Login stuff</h1>

            <button onClick={this.props.closePopup}>close</button> 
        </div>  
    </div>  
    );  
    }  
}  

export default Popup; 