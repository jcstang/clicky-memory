import React, { Component } from "react";
import './index.css';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardKey: null,
            hasBeenChosen: false,
            imgUrl: "https://",
            imgLink: "fry-headshot.jpg"
        }
    }

    onClickHandler(props) {
        props.isWinningHandler();
        console.log('*********************************************************');
        console.log(`cardKey: ${this.state.cardKey}`);
        console.log('*********************************************************');
        this.setState({
            hasBeenChosen: !this.state.hasBeenChosen
        });
    }

    render(props) {
        console.log(props);
        return (
            <div className="col-lg-3 align-items-stretch">
            <button className="btn" onClick={() => this.onClickHandler(props)}>
                <div className="card" value={props.value}>
                    <img className="card-img-top" src={this.state.imgLink} alt="" />
                </div>
            </button>
            </div>
        );
    }
}

export default Card;