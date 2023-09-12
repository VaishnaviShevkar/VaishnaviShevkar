const cityInput = document.getElementById('cityInput');
const suggestions = document.getElementById('suggestions');

const cities = ['Austrlia', 'Africa', 'America', 'Austria', 'Brazil', 'Butan', 'India', 'San Diego', 'Dallas', 'San Jose', 'Sri lanka', 'France', 'Nepal', 'Columbus', 'Washington', 'Boston', 'Singapore'];

cityInput.addEventListener('input', () => {
    const inputValue = cityInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (inputValue.length === 0) {
        suggestions.style.display = 'none';
        return;
    }

    const matchingCities = cities.filter(city => city.toLowerCase().includes(inputValue));

    if (matchingCities.length > 0) {
        matchingCities.forEach(city => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = city;
            suggestionDiv.addEventListener('click', () => {
                cityInput.value = city;
                suggestions.style.display = 'none';
            });
            suggestions.appendChild(suggestionDiv);
        });

        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== cityInput) {
        suggestions.style.display = 'none';
    }
});