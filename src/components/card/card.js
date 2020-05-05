import React from "react";
import './index.css';

function Card(props) {
    //  console.log(props);
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 align-items-stretch">
            <button className="btn"  onClick={() => props.clickPicture(props.id)}>
                <div className="card" value={props.id}>
                    <img className="card-img-top" src={props.imgUrl} alt="" />
                </div>
            </button>
        </div>
    );
}
export default Card;