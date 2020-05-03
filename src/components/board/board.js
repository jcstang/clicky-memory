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


    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Appheader />
                <div className="container">
                    {/* First Row */}
                    <div className="row">
                        <Card />
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
                    <h1 class="display-3">footer</h1>
                    <p class="lead">Jumbo helper text</p>
                    <hr class="my-2" />
                </div>

                {/* End of main contianer */}
            </div>
        );
    }
}

export default Board;