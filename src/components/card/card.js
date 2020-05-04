import React, { Component } from "react";
import './index.css';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardKey: null,
            hasBeenChosen: false,
            imgUrl: "https://",
            imgLink: ""
        }
    }

    render() {
        return (
            <div className="col-lg-3 align-items-stretch">
            <button className="btn" onClick={this.props.onClick}>
                <div className="card" value={this.props.value}>
                    <img className="card-img-top" src="./Fry_Looking_Squint.jpg" alt="" />
                </div>
            </button>
            </div>
        );
    }
}

export default Card;