import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="/">Home</a>
      </nav>

      <div className="jumbotron ">
        <h1 className="display-3">Jumbo heading</h1>
        <p className="lead">Jumbo helper text</p>
        <hr className="my-2" />
        <p>More info</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
        </p>
      </div>

      <div className="container img-container">
        {/* First Row */}
        <div className="row">
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="./Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
        {/* Second Row */}
        <div className="row">
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="./Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
        {/* Third Row */}
        <div className="row">
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="./Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="col-lg-3 align-items-stretch">
            <a className="btn" href="/">
              <div className="card">
                <img className="card-img-top" src="Fry_Looking_Squint.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className="jumbotron">
        <hr className="my-2"/>
        <h1 class="display-3">footer</h1>
        <p class="lead">Jumbo helper text</p>
        <hr class="my-2"/>
      </div>

      {/* End of main contianer */}
    </div>

  );
}

export default App;
