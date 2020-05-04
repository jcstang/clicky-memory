import React, { Component } from "react";
import './index.css';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardKey: props.value,
            hasBeenChosen: false,
            imgUrl: "https://",
            imgLink: "fry-headshot.jpg"
        }
    }

    onClickHandler() {
        console.log('*********************************************************');
        console.log(this.props);
        console.log('*********************************************************');
        this.setState({
            hasBeenChosen: !this.state.hasBeenChosen,
        });

        /* TODO: how to pass data BACK to board
        * i.e. this card has been clicked already so game needs to start over
        */

        /* TODO: re-render the 12 cards */
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