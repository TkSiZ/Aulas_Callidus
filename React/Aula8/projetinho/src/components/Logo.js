import React from "react"
import { Link } from "react-router-dom";

const logo = () => {
    return (
        <Link to="#">
            <h1 className="logo">
                <span>Editora Callidus</span>
            </h1>
        </Link>
    );
}

export default logo;