import React, { Component } from 'react';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import Appheader from '../appheader/appheader';
import { masterList } from '../../data-list';
import './index.css';

// let masterCardList = [];

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameAwesome: true,
            guessStreakAlive: true,
            currCardList: this.setRandomCards(),
            /* TODO: keep track of 24 cards but only render 12 */
        };
    }



    componentDidMount() {

    }

    clickHandler(thing) {
        /* modify state, other click things */
        // console.log('hi I am a log consoling myself here');
        console.log('*********************************************************');
        console.log(`isGameAwesome: ${this.state.isGameAwesome}`);
        console.log(`cardKey: ${this.state.cardKey}`);
        this.setState({
            isGameAwesome: !this.state.isGameAwesome
        });

        console.log('*********************************************************');
    }

    isWinningHandler() {
        /* do stuff here to check if game won?? */
        // console.log('isWinningHandler');
        return true;
    }

    renderCard(index) {
        const selectedCard = this.pickRandomCard();

        return(
            <Card
                /* need to get rid of value */
                value={index}
                currCard={selectedCard}
                /* FIXME: below needs work */
                isWinningHandler={this.isWinningHandler()}
            />
        );
    }

    pickRandomCard() {
        const randomIndex = Math.floor(Math.random() * 24) + 1;
        return (
            masterList[randomIndex]
        );
    }

    setRandomCards() {
        var selectedArray = [];
        while(selectedArray.length < 12){
            var r = Math.floor(Math.random() * 24) + 1;
            if(selectedArray.indexOf(r) === -1) selectedArray.push(r);
        }

        return selectedArray;
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Appheader />
                <div className="container">
                    {/* First Row */}
                    <div className="row">
                        { this.renderCard(0) }
                        { this.renderCard(1) }
                        { this.renderCard(2) }
                        { this.renderCard(3) }
                    </div>
                    {/* Second Row */}
                    <div className="row">
                        { this.renderCard(4) }
                        { this.renderCard(5) }
                        { this.renderCard(6) }
                        { this.renderCard(7) }
                    </div>
                    {/* Third Row */}
                    <div className="row">
                        { this.renderCard(8) }
                        { this.renderCard(9) }
                        { this.renderCard(10) }
                        { this.renderCard(11) }
                    </div>
                </div>


                <div className="jumbotron">
                    <hr className="my-2" />
                    <h1 className="display-3">footer</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                </div>

                {/* End of main contianer */}
            </div>
        );
    }
}

export default Board;