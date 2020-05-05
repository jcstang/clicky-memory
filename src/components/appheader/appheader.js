import React from 'react';
import './index.css';

//onClick={() => props.clickPicture(props.id)}

export default function Appheader(props) {
    return (
        <div className="jumbotron ">
            <h1 className="display-3">Jumbo heading</h1>
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        Score <span id="theScore">{props.playerScore}</span>
                    </div>
                    <div className="col-lg-4">
                        Thing
                    </div>
                    <div className="col-lg-4">
                        TopScore <span id="topScore">{props.highScore}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}