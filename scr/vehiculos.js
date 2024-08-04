function mostrarTodo() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const imgVista = document.getElementById('imgVista');
    const infTCar = document.getElementById('infTCar');
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    switch (tipoVehiculo) {
        case '10.45': 
            imgVista.src = 'images/Compacto1.png';
            infTCar.textContent = 'KIA PICANTO, Año 2016';
            img1.src = 'images/Compacto1.png';
            img2.src = 'images/Compacto2.png';
            img3.src = 'images/Compacto3.png';
            break;
        case '15.50': 
            imgVista.src = 'images/Mediano1.png';
            infTCar.textContent = 'HONDA CITY CAR, Año 2017';
            img1.src = 'images/Mediano1.png';
            img2.src = 'images/Mediano2.png';
            img3.src = 'images/Mediano3.png';
            break;
        case '25.25': 
            imgVista.src = 'images/TodoTerreno1.png';
            infTCar.textContent = 'TOYOTA FJ CRUISER, Año 2016';
            img1.src = 'images/TodoTerreno1.png';
            img2.src = 'images/TodoTerreno2.png';
            img3.src = 'images/TodoTerreno3.png';
            break;
        case '20.30': 
            imgVista.src = 'images/Familiar1.png';
            infTCar.textContent = 'TOYOTA SIENNA, Año 2018';
            img1.src = 'images/Familiar1.png';
            img2.src = 'images/Familiar2.png';
            img3.src = 'images/Familiar3.png';
            break;
        default:
            imgVista.src = '';
            infTCar.textContent = '';
            img1.src = '';
            img2.src = '';
            img3.src = '';
            break;
    }
}

function mostrarImagen(num) {
    const imgVista = document.getElementById('imgVista');
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;

    let src;
    let descripcion;
    switch (tipoVehiculo) {
        case '10.45': 
            src = `images/Compacto${num}.png`;
            descripcion = num === 1 ? 'KIA PICANTO, Año 2016' : num === 2 ? 'FORD FIESTA ST, Año 2015' : 'PEUGEOT 308, Año 2018';
            break;
        case '15.50': 
            src = `images/Mediano${num}.png`;
            descripcion = num === 1 ? 'HONDA CITY CAR, Año 2017' : num === 2 ? 'MERCEDES SLS, Año 2015' : 'FORD FIESTA ST, Año 2016';
            break;
        case '25.25': 
            src = `images/TodoTerreno${num}.png`;
            descripcion = num === 1 ? 'TOYOTA FJ CRUISER, Año 2016' : num === 2 ? 'TOYOTA Prado, Año 2018' : 'NISSAN JUKE, Año 2017';
            break;
        case '20.30': 
            src = `images/Familiar${num}.png`;
            descripcion = num === 1 ? 'TOYOTA SIENNA, Año 2018' : num === 2 ? 'DODGE GRAND CARAVANE, Año 2015' : 'HYUNDAI ELANTRA, Año 2016';
            break;
        default:
            src = '';
            descripcion = '';
            break;
    }
    imgVista.src = src;
    document.getElementById('infTCar').textContent = descripcion; // Actualiza la descripción al hacer clic
}
