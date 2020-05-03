import React from "react";
import './index.css';

export default function Card(props) {
    return (
        <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
                <div className="card">
                    <img className="card-img-top" src="./Fry_Looking_Squint.jpg" alt="" />
                </div>
            </a>
        </div>
    );
}