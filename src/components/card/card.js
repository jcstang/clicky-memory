import React, { Component } from "react";
import './index.css';

function Card(props) {
    //  console.log(props);
    return (
        <div className="col-lg-3 align-items-stretch">
            <button className="btn"  onClick={() => props.clickPicture(props.id)}>
                <div className="card" value={props.id}>
                    <img className="card-img-top" src={props.imgUrl} alt="" />
                </div>
            </button>
        </div>
    );
}
export default Card;

// class Card extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cardKey: props.currCard.cardKey,
//             hasBeenChosen: false,
//             imgUrl: props.currCard.imgUrl,
//             imgLink: "fry-headshot.jpg"
//         }
//     }

//     onClickHandler() {
//         console.log('*********************************************************');
//         console.log(this.props);
//         console.log('*********************************************************');
//         this.setState({
//             hasBeenChosen: !this.state.hasBeenChosen,
//         });

//         /* TODO: how to pass data BACK to board
//         * i.e. this card has been clicked already so game needs to start over
//         */

//         /* TODO: re-render the 12 cards */
//     }

//     render(props) {
//         return (
//             <div className="col-lg-3 align-items-stretch">
//             <button className="btn" onClick={() => this.onClickHandler(props)}>
//                 <div className="card">
//                     <img className="card-img-top" src={this.state.imgUrl} alt="" />
//                 </div>
//             </button>
//             </div>
//         );
//     }
// }

// export default Card;