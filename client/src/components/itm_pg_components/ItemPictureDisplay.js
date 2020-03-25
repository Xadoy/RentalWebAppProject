import React from "react";
import apple from './itm_imgs/apple.jpg';
import apple2 from './itm_imgs/apple2.jpg'
import Item from "../ItemPage";
import rune_scim from './itm_imgs/rune_scimitar.jpg';
import rune_2h from './itm_imgs/Rune_2h_sword.png'
import white_phat from './itm_imgs/White_partyhat.png';
import sara_plate from './itm_imgs/Saradomin_platebody.png'
import green_dhide_body from './itm_imgs/Green_dhide_body_(g).png';

let rune_scim_pic = rune_scim
let rune_2h_pic = rune_2h
let white_phat_pic = white_phat
let sara_plate_pic = sara_plate
let green_dhide_body_pic = green_dhide_body
let apple_pic = apple
let apple2_pic = apple2 

class Pics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_img: ''
        }

    }
    componentDidMount() {

        this.setState({curr_img: eval(window.location.pathname.split('/').slice(-1).join('/') + "_pic")})
    }

    // TODO remove these image displays later

    /*<div className={"img-button"}>
        <img className={'icon-display'} src={apple2} alt={"apple"}/>
        <button className={'behind-img'} onClick={() => this.setState({curr_img: apple2})}/>
    </div>*/
    //<img className={'icon-display'} src={eval(window.location.pathname.split('/').slice(-1).join('/') + "_pic")} alt={"apple"}/>
    //<button className={'behind-img'} onClick={() => this.setState({curr_img: eval(window.location.pathname.split('/').slice(-1).join('/') + "_pic")})}/>
    render() {
        return (
            <div className={'display-container'}>
                <ul className={"image-choice"}>
                    <li>
                        <div className={"img-button"}>

                        </div>

                    </li>
                </ul>
                <img className={'large-img-display'} src={this.state.curr_img} alt={"item_image"}/>
            </div>

        );
    }
}

export default Pics
