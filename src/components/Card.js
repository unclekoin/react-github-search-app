import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
  <div className="card">
    <img className="card-img-top" src={""} alt={""} />
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <Link className="btn btn-primary px-4" to={"/profile/"}>Open</Link>
    </div>
  </div>
)
