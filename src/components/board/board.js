import React, { Component } from 'react';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import Appheader from '../appheader/appheader';
import './index.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardKey: null,
            isGameAwesome: true,
            listOfcards: Array(24).fill(null)
        };
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

    renderCard(index) {
        return(
            <Card
                value={this.state.listOfcards[index]}
                onClick={() => this.clickHandler(this)}
            />
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Appheader />
                <div className="container">
                    {/* First Row */}
                    <div className="row">
                        {this.renderCard(0)}
                        {this.renderCard(1)}
                        {this.renderCard(2)}
                        {this.renderCard(3)}
                    </div>
                    {/* Second Row */}
                    <div className="row">
                        {this.renderCard(4)}
                        {this.renderCard(5)}
                        {this.renderCard(6)}
                        {this.renderCard(7)}
                    </div>
                    {/* Third Row */}
                    <div className="row">
                        {this.renderCard(8)}
                        {this.renderCard(9)}
                        {this.renderCard(10)}
                        {this.renderCard(11)}
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