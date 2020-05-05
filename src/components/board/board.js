import React, { Component } from 'react';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import Appheader from '../appheader/appheader';
//import { masterList } from '../../data-list';
import data from '../imgCards.json';
import './index.css';

// let masterCardList = [];

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameAwesome: true,
            guessStreakAlive: true,
            highScore: 0,
            currScore: 0,
            //cardList: imageCards,
            //currCardList: this.setRandomCards(),
            dataList: data,
            clickedImageIds: []
            /* TODO: keep track of 24 cards but only render 12 */
        };
    }

    componentDidMount() {
        this.setState({
            dataList: this.setRandomCards(this.state.dataList)
        });
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

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
    };

    handleItemClick = (id) => {
        // set the object with id as true

        //Check if the image is clicked twice
        if (this.state.clickedIMgIDs.includes(id)) {
            // this.state.message = 'You guessed incorrectly! ';
            console.log('Game Over reset values ')
            this.setState({ clickedAvengerIds: [], score: 0, message: 'You guessed incorrectly! ' });
            return;
        } else {
            //Update the state with updated values
            this.setState({
                //Add clicked picture to the array
                clickedIMgIDs: this.state.clickedIMgIDs.concat([id]),
                //Increment Score
                score: this.state.score + 1,
                // topScore: this.state.score + 1,
                //Display Message
                message: 'You guessed it correctly'
            });
            console.log("Score", this.state.score);
            console.log("TopScore", this.state.topScore);



            // ** first try
            //console.log("Card selected", event);
            //     let guessedCorrectly = false;
            // const newData = this.state.dataList.map(item => {
            //   const newItem = { ...item };
            //   if (newItem.id === id) {
            //     if (!newItem.clicked) {
            //       newItem.itemClicked = true;
            //       guessedCorrectly = true;
            //     }
            //   }
            //   return newItem;
            console.log(id);

        }

        // renderCard(index) {
        //     //const selectedCard = this.pickRandomCard();

        //     return (
        //         <Card
        //             /* need to get rid of value */
        //             //value={index}
        //             //currCard={selectedCard}
        //             /* FIXME: below needs work */
        //             handleClick={this.handleItemClick}
        //         // isWinningHandler={this.isWinningHandler()}
        //         />
        //     );
        // }

        // pickRandomCard() {
        //     const randomIndex = Math.floor(Math.random() * 24) + 1;
        //     return (
        //         masterList[randomIndex]
        //     );
        }

        setRandomCards = data => {
            var i = data.length - 1;
            while (i > 12) {
                //var r = Math.floor(Math.random() * i + 1) + 1;
                var j = Math.floor(Math.random() * (i + 1));
                const temp = data[i];
                data[i] = data[j];
                data[j] = temp;
                i--;
            }

            return data;

            // if(data.indexOf(r) === -1) selectedArray.push(r);

            // return selectedArray;
        }

        render() {
            return (
                <div className="container-fluid">
                    <Navbar />
                    <Appheader />
                    <div className="container">
                        <div className="row">
                            {/* Loop through all the items in the static list  */}
                            {this.state.dataList.map(card => (
                                <Card
                                    id={card.cardKey}
                                    key={card.cardKey}
                                    imgUrl={card.imgUrl}
                                    // onclick call the handle event to calculate score & shuffle array
                                    clickPicture={this.handleItemClick}
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