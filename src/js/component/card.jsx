import React from "react";

import imageDefault from "../../img/imageDefault.jpg";

//create your first component
const Card = () => {
	return (
            <div class="card">
                <img src={imageDefault} alt="..." />
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
	);
};

export default Card;

