
function calcularDias(fechaInicio, fechaFin) {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);
    const diferenciaTiempo = fechaFinObj - fechaInicioObj;
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
    return diferenciaDias; 
}


async function obtenerRegionPais(cca3) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${cca3}`);
    const data = await response.json();
    return data[0]?.region || ''; 
}


function calcularTarifaDiaria(tdv, tds, diasRenta) {
    let td = tdv + tds;
    if (diasRenta > 30 && diasRenta < 120) {
        td -= td * 0.15; 
    } else if (diasRenta >= 120 && diasRenta <= 365) {
        td -= td * 0.25; 
    }
    return td; 
}


function calcularTotalPagar(td, diasRenta, descuento) {
    const total = td * diasRenta;
    const totalDescuento = total - (total * descuento);
    return totalDescuento; 
}


function guardarCotizacion(dias, td, totalPagar, tipoVehiculo, seguro, nacionalidad, fechaRetiro, fechaDevolucion) {
    const cotizacion = {
        dias,
        tarifaDiaria: td,
        totalPagar,
        tipoVehiculo,
        seguro,
        nacionalidad,
        fechaRetiro,
        fechaDevolucion
    };
    localStorage.setItem('ultimaCotizacion', JSON.stringify(cotizacion));
}


async function realizarCalculos() {
    const fechaInicio = document.getElementById('fechaRetiro').value;
    const fechaFin = document.getElementById('fechadevolucion').value;
    const diasRenta = calcularDias(fechaInicio, fechaFin);

    if (diasRenta < 3 || diasRenta > 365) {
        alert('Los días de renta no son correctos. Deben estar entre 3 y 365 días.');
        return;
    }

    document.getElementById('dias').value = diasRenta;

    const tdv = parseFloat(document.getElementById('tipoVehiculo').value);
    const tds = parseFloat(document.getElementById('seguro').value);
    const td = calcularTarifaDiaria(tdv, tds, diasRenta);
    document.getElementById('td').value = td.toFixed(2);

    const cca3 = document.getElementById('nacionalidad').value;
    const region = await obtenerRegionPais(cca3);
    let descuento = 0;
    if (region === 'Americas' || region === 'Europe') {
        descuento = 0.10; 
    } else if (region === 'Africa') {
        descuento = 0.05; 
    }

    const totalPagar = calcularTotalPagar(td, diasRenta, descuento);
    document.getElementById('totalPagar').value = totalPagar.toFixed(2);


    guardarCotizacion(
        diasRenta,
        td.toFixed(2),
        totalPagar.toFixed(2),
        document.getElementById('tipoVehiculo').selectedOptions[0].text,
        document.getElementById('seguro').selectedOptions[0].text,
        document.getElementById('nacionalidad').value,
        fechaInicio,
        fechaFin
    );
}


function mostrarUltimaCotizacion() {
    const cotizacion = JSON.parse(localStorage.getItem('ultimaCotizacion'));
    if (cotizacion) {
        document.getElementById('dias').value = cotizacion.dias;
        document.getElementById('td').value = cotizacion.tarifaDiaria;
        document.getElementById('totalPagar').value = cotizacion.totalPagar;
        document.getElementById('tipoVehiculo').value = cotizacion.tipoVehiculo; 
        document.getElementById('seguro').value = cotizacion.seguro; 
        document.getElementById('nacionalidad').value = cotizacion.nacionalidad;
        document.getElementById('fechaRetiro').value = cotizacion.fechaRetiro; 
        document.getElementById('fechadevolucion').value = cotizacion.fechaDevolucion; 
    }
}


window.onload = mostrarUltimaCotizacion;
