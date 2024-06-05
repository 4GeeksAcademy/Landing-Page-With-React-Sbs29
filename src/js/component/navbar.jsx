import React from "react";

const navbarItems = ["Home", "About", "Service", "Contact"];

const navbarItemsInHTML = navbarItems.map((singleNavbarItems, index) => {
	return <li key={index}><a class="nav-link text-bg-dark" href="#">{singleNavbarItems}</a></li>;
});

//create your first component
const Navbar = () => {
	return (
		<nav class="navbar bg-body-tertiary bg-dark navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <h1 class="navbar-brand">Start Bootstrap</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Start Bootstrap</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {navbarItemsInHTML}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
	);
};

export default Navbar;
