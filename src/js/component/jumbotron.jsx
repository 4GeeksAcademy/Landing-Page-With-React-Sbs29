import React from "react"

const Jumbotron = () => {
	return (
        <div class="container mt-5">
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Bienvenido a nuestro sitio</h1>
                    <p class="col-md-8 fs-4">Esta es una unidad jumbotron simple para llamar la atención sobre contenido o información destacada.</p>
                    <button class="btn btn-primary btn-lg" type="button">Aprende más</button>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;