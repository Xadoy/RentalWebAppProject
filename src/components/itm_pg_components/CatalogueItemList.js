import React from "react";
import apple from './itm_imgs/apple.jpg';
import apple2 from './itm_imgs/apple2.jpg'
import rune_scim from './itm_imgs/rune_scimitar.jpg';
import rune_2h from './itm_imgs/Rune_2h_sword.png'
import white_phat from './itm_imgs/White_partyhat.png';
import sara_plate from './itm_imgs/Saradomin_platebody.png'
import green_dhide_body from './itm_imgs/Green_dhide_body_(g).png';

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
        this.setState({curr_img: rune_scim, curr_img_name: 'Rune Scimitar', curr_desc: 'a good acting prop.. if you want to fite'})
    }

    // TODO remove these image displays later

    render() {
        return (
            <div className={'display-container'}>
                <u1 className={"image-choice"}>
                    <li>
                        <div className={"img-button"}>
                            <img className={'icon-display'} src={rune_scim} alt={"Rune Scimitar"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: rune_scim, curr_img_name: 'Rune Scimitar'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={rune_2h} alt={"Rune 2h Sword"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: rune_2h, curr_img_name: 'Rune 2 Handed Sword'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={white_phat} alt={"White Party Hat"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: white_phat, curr_img_name: 'White Party Hat'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={sara_plate} alt={"Saradomin Platebody"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: sara_plate, curr_img_name: 'Saradomin Platebody'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={green_dhide_body} alt={"Green d'hide Body Gold Trimmed"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: green_dhide_body, curr_img_name: 'Green Dragonhide Body Gold Trimmed'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple, curr_img_name: 'Royal Gala Apple'})}/>
                        </div>

                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple2} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple2, curr_img_name: 'Red Delicious apple??'})}/>
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
