import React from "react";

import imageDefault from "../../img/imageDefault.jpg";

//create your first component
const Card = () => {
	return (
            <div className="card">
                <img src={imageDefault} alt="..." />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
	);
};

export default Card;

