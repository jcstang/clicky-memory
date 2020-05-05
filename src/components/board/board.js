import React, { Component } from 'react';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import Appheader from '../appheader/appheader';
import data from './data/imgCards.json';
import './index.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameAwesome: true,
            highScore: 0,
            currScore: 0,
            dataList: data,
            dataListOf12: [],
            clickedImageIds: []
        };
    }

    componentDidMount() {
        this.shuffleDataAndSet();
    }
    
    shuffleDataAndSet() {
        const fullShuffledList = this.shuffleArrayOfCards(this.state.dataList);
        const first12 = fullShuffledList.slice(0, 12);
    
        this.setState({
            dataList: fullShuffledList,
            dataListOf12: first12
        });
    }

    resetGameBoard() {
        // reset score
        // clear the clicked ids array
        this.setState({
            currScore: 0,
            clickedImageIds: []
        });
    }

    imageClickHandler = (id) => {
        // click handler should do the following
        // 1. check if clicked image had been selected before.
        // 1a. if false,
        //          then +1 to the score
        //          then add the id to the array of clicked ids
        // 1b. if true,
        //          then stop game
        //          then reset score
        //          then clear the clicked ids array
        // 2. shuffle the cards


        //Check if the image is clicked twice
        if (this.state.clickedImageIds.includes(id)) {
            console.log('wrong guess!');
            if(this.state.currScore > this.state.highScore) {
                this.setState({
                    highScore: this.state.currScore
                })
            }
            this.resetGameBoard();
            return;
        } else {
            let insertArray = this.state.clickedImageIds;
            insertArray.push(id);
            let tempScore = (this.state.currScore) + 1;

            this.setState({
                clickedImageIds: insertArray,
                currScore: tempScore
            });

            console.log('you guessed a good one!');
            console.log(`card id: ${id}`);
            console.log(this.state.clickedImageIds);

        }

        this.shuffleDataAndSet();

    }

    shuffleArrayOfCards = data => {
        var i = data.length - 1; //should be 23
        while (i > 12) {
            var j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }

    updateHeaderScores() {

    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Appheader 
                    playerScore={this.state.currScore}
                    highScore={this.state.highScore}
                    updateHeaderScores={this.updateHeaderScores}
                />
                <div className="container">
                    <div className="row">
                        {/* Loop through all the items in the static list  */}
                        {this.state.dataListOf12.map(card => (
                            <Card
                                id={card.cardKey}
                                key={card.cardKey}
                                imgUrl={card.imgUrl}
                                clickPicture={this.imageClickHandler}
                            />
                        ))}
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