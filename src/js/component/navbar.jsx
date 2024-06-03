import React from "react";

const navbarItems = ["Home", "About", "Service", "Contact"];

const navbarItemsInHTML = navbarItems.map((singleNavbarItems, index) => {
	return <li key={index}><a class="nav-link text-bg-dark" href="#">{singleNavbarItems}</a></li>;
});

//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid ">
                <div class="me-auto p-2">
                    <a class="navbar-brand text-bg-dark p-3" href="#">Start Bootstrap</a>
                </div>
                <div class="collapse navbar-collapse p-2" id="navbarNav">
                    <ul class="navbar-nav">
                        {navbarItemsInHTML}
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;
