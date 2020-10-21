let countries=[
    {"name":"Afganisztán","iso2":"AF","iso3":"AFG"},
    {"name":"Albánia","iso2":"AL","iso3":"ALB"},
    {"name":"Algéria","iso2":"DZ","iso3":"DZA"},
    {"name":"Amerika","iso2":"US","iso3":"USA"},
    {"name":"Andorra","iso2":"AD","iso3":"AND"},
    {"name":"Anglia","iso2":"GB","iso3":"GBR"},
    {"name":"Angola","iso2":"AO","iso3":"AGO"},
    {"name":"Argentína","iso2":"AR","iso3":"ARG"},
    {"name":"Ausztrália","iso2":"AU","iso3":"AUS"},
    {"name":"Ausztria","iso2":"AT","iso3":"AUT"},
    {"name":"Banglades","iso2":"BD","iso3":"BGD"},
    {"name":"Belgium","iso2":"BE","iso3":"BEL"},
    {"name":"Bolívia","iso2":"BO","iso3":"BOL"},
    {"name":"Brazília","iso2":"BR","iso3":"BRA"},
    {"name":"Bulgária","iso2":"BG","iso3":"BGR"},
    {"name":"Chile","iso2":"CL","iso3":"CHL"},
    {"name":"Ciprus","iso2":"CY","iso3":"CYP"},
    {"name":"Costa Rica","iso2":"CR","iso3":"CRI"},
    {"name":"Csehország","iso2":"CZ","iso3":"CZE"},
    {"name":"Dánia","iso2":"DK","iso3":"DNK"},
    {"name":"Dél Afrika","iso2":"ZA","iso3":"ZAF"},
    {"name":"Egyiptom","iso2":"EG","iso3":"EGY"},
    {"name":"Finnország","iso2":"FI","iso3":"FIN"},
    {"name":"Franciaország","iso2":"FR","iso3":"FRA"},
    {"name":"Görögország","iso2":"GR","iso3":"GRC"},
    {"name":"Hollandia","iso2":"NL","iso3":"NLD"},
    {"name":"Horvátország","iso2":"HR","iso3":"HRV"},
    {"name":"India","iso2":"IN","iso3":"IND"},
    {"name":"Indonézia","iso2":"ID","iso3":"IDN"},
    {"name":"Irak","iso2":"IQ","iso3":"IRQ"},
    {"name":"Irán","iso2":"IR","iso3":"IRN"},
    {"name":"Izland","iso2":"IS","iso3":"ISL"},
    {"name":"Izrael","iso2":"IL","iso3":"ISR"},
    {"name":"Írország","iso2":"IE","iso3":"IRL"},
    {"name":"Jamaika","iso2":"JM","iso3":"JAM"},
    {"name":"Japán","iso2":"JP","iso3":"JPN"},
    {"name":"Kamerun","iso2":"CM","iso3":"CMR"},
    {"name":"Kanada","iso2":"CA","iso3":"CAN"},
    {"name":"Kína","iso2":"CN","iso3":"CHN"},
    {"name":"Kolumbia","iso2":"CO","iso3":"COL"},
    {"name":"Kuba","iso2":"CU","iso3":"CUB"},
    {"name":"Lengyelország","iso2":"PL","iso3":"POL"},
    {"name":"Luxemburg","iso2":"LU","iso3":"LUX"},
    {"name":"Madagaszkár","iso2":"MG","iso3":"MDG"},
    {"name":"Magyarország","iso2":"HU","iso3":"HUN"},
    {"name":"Mexikó","iso2":"MX","iso3":"MEX"},
    {"name":"Németország","iso2":"DE","iso3":"DEU"},
    {"name":"Nepál","iso2":"NP","iso3":"NPL"},
    {"name":"Nigéria","iso2":"NG","iso3":"NGA"},
    {"name":"Norvégia","iso2":"NO","iso3":"NOR"},
    {"name":"Olaszország","iso2":"IT","iso3":"ITA"},
    {"name":"Oroszország","iso2":"RU","iso3":"RUS"},
    {"name":"Portugália","iso2":"PT","iso3":"PRT"},
    {"name":"Románia","iso2":"RO","iso3":"ROU"},
    {"name":"Spanyolország","iso2":"ES","iso3":"ESP"},
    {"name":"Svájc","iso2":"CH","iso3":"CHE"},
    {"name":"Svédország","iso2":"SE","iso3":"SWE"},
    {"name":"Szerbia","iso2":"RS","iso3":"SRB"},
    {"name":"Szlovákia","iso2":"SK","iso3":"SVK"},
    {"name":"Szlovénia","iso2":"SI","iso3":"SVN"},
    {"name":"Thaiföld","iso2":"TH","iso3":"THA"},
    {"name":"Törökország","iso2":"TR","iso3":"TUR"},
    {"name":"Ukrajna","iso2":"UA","iso3":"UKR"},
    {"name":"Uruguay","iso2":"UY","iso3":"URY"},
    {"name":"Venezuela","iso2":"VE","iso3":"VEN"},
    {"name":"Vietnám","iso2":"VN","iso3":"VNM"}
]


window.onload =function(){
    GetStats();
    createCountryList();
}
function GetStats(){
    fetch(`https://covid19.mathdro.id/api/countries/HUN`)
    .then(function(resp){
        return resp.json()
        
    }).then(function(data){
        let confirmed = data.confirmed.value;
        let recovered = data.recovered.value;
        let deaths = data.deaths.value;
        document.getElementById('confirmed').innerHTML = confirmed;
        document.getElementById('recovered').innerHTML = recovered;
        document.getElementById('deaths').innerHTML = deaths;
        document.getElementById('country').innerHTML = "Magyarország";
        console.log(data);
    })
    

    
}
const search_input = document.getElementById('input-search');
const search_button = document.getElementById('search-btn');
const list_item = document.getElementById('list-item');

function createCountryList(){
    for(var i = 0; i<countries.length; i++){
        document.getElementById('input-search').innerHTML += `<option id=${countries[i].iso3}>${countries[i].name}-${countries[i].iso3}</option>`
    }
}



function GetSelectedCountry(){
    var selected_country_with_iso = document.getElementById("input-search").value;
    var selected_country = selected_country_with_iso.slice(0, selected_country_with_iso.length-4);
    var selected_iso = selected_country_with_iso.split("-").pop().toString();

    fetch(`https://covid19.mathdro.id/api/countries/${selected_iso}`)
    .then(function(resp){
        return resp.json()
    }).then(function(data){
        let confirmed = data.confirmed.value;
        let recovered = data.recovered.value;
        let deaths = data.deaths.value;
        document.getElementById('confirmed').innerHTML = confirmed;
        document.getElementById('recovered').innerHTML = recovered;
        document.getElementById('deaths').innerHTML = deaths;
    })
    
    var country_name = document.getElementById("country");
    list_item.innerText = selected_country_with_iso;
    country_name.innerHTML = selected_country;
}