import React from "react";

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
