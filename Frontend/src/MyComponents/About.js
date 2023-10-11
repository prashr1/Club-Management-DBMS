import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="container my-3">
            <div className="jumbotron">
                <h1 className="display-4">About This App</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/" role="button">Go Back to Home Page</Link>
                </p>
            </div>
        </div>
    )
}
