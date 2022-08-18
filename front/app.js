const getCountriesSelect = document.getElementById('select')
//fetch to feed the dropdown in the form
const fetchURLCountriesAPI = 'https://restcountries.com/#api-endpoints-v3-name';
//cont to get the main dates for the group
const getDebutDate = document.getElementById('')
function getCountries() {
    fetch(fetchURLCountriesAPI, {
        method: 'GET',
    })
    .then(function (response){
        return response.json()
    })
    .then(function(responseJSON){
        
    });
}


getCountriesSelect.addEventListener('click', getCountries)