function MensajeTipoSeguro() {
    const seguroInfo = {
        PBO: `
            <strong>Protección Básica Obligatoria (PBO)</strong><br>
            Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito.<br>
            Costo de alquiler diario: $10.45 por día.
        `,
        PED: `
            <strong>Protección Extendida de Daños (PED)</strong><br>
            Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones.<br>
            Costo de alquiler diario: $15.50 por día.
        `,
        PGM: `
            <strong>Protección Gasto Médicos (PGM)</strong><br>
            Cubre la Protección Extendida de Daños (PED) más gastos médicos para los ocupantes del vehículo.<br>
            Costo de alquiler diario: $18.25 por día.
        `
    };

    const selectElement = document.getElementById('seguro');
    const selectedOptionId = selectElement.options[selectElement.selectedIndex].id;
    const messageDiv = document.getElementById('mensaje');
    messageDiv.innerHTML = seguroInfo[selectedOptionId];
    messageDiv.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('seguro');
    const selectedOptionId = selectElement.options[selectElement.selectedIndex].id;
    const messageDiv = document.getElementById('mensaje');
    messageDiv.innerHTML = seguroInfo[selectedOptionId];
    messageDiv.style.display = 'block';
});
