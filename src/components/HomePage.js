import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title teal-text text-lighten-3">Pluralsight Administration</span>
            <p>React, Flux and React Router for ultra-responseive web apps.</p>
          </div>
          <div class="card-action">
            <Link to="about" className="btn btn-primary">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
