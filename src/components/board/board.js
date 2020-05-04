import React, { Component } from 'react';
import Card from '../card/card';
import Navbar from '../navbar/navbar';
import Appheader from '../appheader/appheader';
import './index.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameAwesome: true,
        };
    }

    clickHandler(thing) {
        /* modify state, other click things */
        console.log('hi I am a log consoling myself here');
        console.log(this.state.isGameAwesome);

        this.setState({
            isGameAwesome: !this.state.isGameAwesome
        });
        console.log('*********************************************************');
    }

    renderCard() {
        return(
            <Card 
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
                        {this.renderCard()}
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    {/* Second Row */}
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    {/* Third Row */}
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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