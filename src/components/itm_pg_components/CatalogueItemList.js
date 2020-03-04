import React from "react";
import apple from './itm_imgs/apple.jpg';
import apple2 from './itm_imgs/apple2.jpg'
import rune_scim from './itm_imgs/rune_scimitar.jpg';
import rune_2h from './itm_imgs/Rune_2h_sword.png'
import white_phat from './itm_imgs/White_partyhat.png';
import sara_plate from './itm_imgs/Saradomin_platebody.png'
import green_dhide_body from './itm_imgs/Green_dhide_body_(g).png';
import { Link } from "react-router-dom";

class Pics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_img: '',
            curr_img_name: '',
            curr_desc: '',
            curr_comments: '',
            curr_order: ''
        }
    }
    componentDidMount() {
        this.setState({curr_img: rune_scim, curr_img_name: <Link to={"/item/rune_scim"}>Rune Scimitar</Link>, curr_desc: 'a good acting prop.. if you want to fite'})
    }

    // TODO remove these image displays later

    render() {
        return (
            <div className={'display-container'}>
                <u1 className={"image-choice"}>
                    <li>
                        <div className={"img-button"}>
                            <img className={'icon-display'} src={rune_scim} alt={"Rune Scimitar"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: rune_scim, curr_img_name: <Link to={"/item/rune_scim"}>Rune Scimitar</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={rune_2h} alt={"Rune 2h Sword"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: rune_2h, curr_img_name: <Link to={"/item/rune_2h"}>Rune 2 Handed Sword</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={white_phat} alt={"White Party Hat"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: white_phat, curr_img_name: <Link to={"/item/white_phat"}>White Party Hat</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={sara_plate} alt={"Saradomin Platebody"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: sara_plate, curr_img_name: <Link to={"/item/sara_plate"}>Saradomin Platebody</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={green_dhide_body} alt={"Green d'hide Body Gold Trimmed"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: green_dhide_body, curr_img_name: <Link to={"/item/green_dhide_body"}>Green Dragonhide Body Gold Trimmed</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple, curr_img_name: <Link to={"/item/apple"}>Royal Gala Apple</Link>})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple2} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple2, curr_img_name: <Link to={"/item/apple2"}>wot is dis??</Link>})}/>
                        </div>
                    </li>
                </u1>
                <img className={'large-img-display'} src={this.state.curr_img} alt={"item_image"}/>
                <h1 className={'img-name'}> {this.state.curr_img_name} </h1>
                <p className={'img-desc'}> {this.state.curr_desc} </p>
            </div>
        );
    }
}

export default Pics
