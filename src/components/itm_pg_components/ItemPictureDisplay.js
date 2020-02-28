import React from "react";
import apple from './itm_imgs/apple.jpg';
import apple2 from './itm_imgs/apple2.jpg'

class Pics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_img: ''
        }
    }
    componentDidMount() {
        this.setState({curr_img: apple})
    }

    // TODO remove these image displays later

    render() {
        return (
            <div className={'display-container'}>
                <ul className={"image-choice"}>
                    <li>
                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple})}/>
                        </div>
                        <div className={"img-button"}>
                            <img className={'icon-display'} src={apple2} alt={"apple"}/>
                            <button className={'behind-img'} onClick={() => this.setState({curr_img: apple2})}/>
                        </div>
                    </li>
                </ul>
                <img className={'large-img-display'} src={this.state.curr_img} alt={"item_image"}/>
            </div>
        );
    }
}

export default Pics
