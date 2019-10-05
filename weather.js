const API_KEY = "d155be6dc8037527115f6b8c282291be";
const COORDS = 'coords';

function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordObj);
}

function handleGeoError(){
    console.log('Cant access geo location.')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        // getWeather
    }
}

function init(){
    loadCoords();
}

init();
