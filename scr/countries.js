const apiURL = 'https://restcountries.com/v3.1/all';

async function fetchCountries() {
    const response = await fetch(apiURL);
    const countries = await response.json();
    return countries;
}

async function initCountrySelect() {
    const countries = await fetchCountries();
    const select = document.getElementById('nacionalidad');
    
    const savedCountry = localStorage.getItem('selectedCountry') || 'CRI';

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.cca3;
        option.textContent = country.translations.spa.common;

        if (country.cca3 === savedCountry) {
            option.selected = true;
        }

        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        localStorage.setItem('selectedCountry', select.value);
    });
}

document.addEventListener('DOMContentLoaded', initCountrySelect);
