const map = {
    '1': ['Shanghai','Kunming','Beijing','Yantai'],
    '2': ['Tokyo', 'Osaka', 'Kamakura'],
    '3': ['Roma','Milan','Venice','Florence'],
    '4': ['New York','San Francisco', 'Washington']
};
function getCity() {
    let sltCountryId = $('#country').val();
    let cities = map[sltCountryId];
    $('#city').empty();
    $('#city').append("<option value='0' disabled selected>"+"Filter by City"+"</option>")
    for (let i = 0; i < cities.length; i++) {
        $('#city').append("<option value='"+i+"'>"+cities[i]+"</option>");
    }
};