import React from "react";

const navbarItems = ["Home", "About", "Service", "Contact"];

const navbarItemsInHTML = navbarItems.map((singleNavbarItems, index) => {
	return <li key={index}><a class="nav-link text-bg-dark" href="#">{singleNavbarItems}</a></li>;
});

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid ">
                <div className="me-auto p-2">
                    <a className="navbar-brand text-bg-dark p-3" href="#">Start Bootstrap</a>
                </div>
                <div className="collapse navbar-collapse p-2" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbarItemsInHTML}
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;
