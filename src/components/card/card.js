import React, { Component } from "react";
import './index.css';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardKey: null,
            cardValue: props.value,
            hasBeenChosen: false,
            imgUrl: "https://",
            imgLink: "fry-headshot.jpg"
        }
    }

    onClickHandler() {
        console.log('*********************************************************');
        console.log(`cardKey: ${this.state.cardKey}`);
        console.log('*********************************************************');
        this.setState({
            hasBeenChosen: !this.state.hasBeenChosen
        });
    }

    render(props) {
        return (
            <div className="col-lg-3 align-items-stretch">
            <button className="btn" onClick={() => this.onClickHandler(props)}>
                <div className="card">
                    <img className="card-img-top" src={this.state.imgLink} alt="" />
                </div>
            </button>
            </div>
        );
    }
}

export default Card;