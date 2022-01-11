// Now we are Learning About Window.navigator Object

console.log();
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.geolocation.getCurrentPosition(showPosition));
console.log(window.navigator.language);
console.log(window.navigator.onLine); // Missed
console.log(window.navigator.platform);
console.log(window.navigator.product);
console.log(window.navigator.userAgent);
console.log(window.navigator.javaEnabled());


function showPosition(position){
    
    const latitude = document.querySelector("#latitude");
    const longitude = document.querySelector("#longtitude");

    latitude.innerHTML = `Latitude : ${position.coords.latitude}`;
    longitude.innerHTML = `Longitude : ${position.coords.longitude}`;
    console.log(`Latitude : ${position.coords.latitude}`);
    console.log(`Longitude : ${position.coords.longitude}`);
}

const LinkOpenDateAndTime = document.querySelector("#LinkOpenDateAndTime");
const browserCode = document.querySelector("#browserCode");
const browsername = document.querySelector("#browsername");
const browserVersion = document.querySelector("#browserVersion");
const cookieEnabled = document.querySelector("#cookieEnabled");
const browserLangauge = document.querySelector("#browserLangauge");
const browserPlateform = document.querySelector("#browserPlateform");
const browserEngine = document.querySelector("#browserEngine");
const userAgent = document.querySelector("#userAgent");
const screenResolution = document.querySelector("#screenResolution");
const LinkLeaveTime = document.querySelector("#LinkLeaveTime");


const date = new Date();
LinkOpenDateAndTime.innerHTML = `Browser Code is : ${date}`;
browserCode.innerHTML = `Browser Code is : ${window.navigator.appCodeName}`;
browsername.innerHTML = `Browser Name is : ${window.navigator.appName}`;
browserVersion.innerHTML = `Browser Version is : ${window.navigator.appVersion}`;
cookieEnabled.innerHTML = `is Cookie Enabled in Browser : ${window.navigator.cookieEnabled}`;
browserLangauge.innerHTML = `Browser Langauge is : ${window.navigator.language}`;
browserPlateform.innerHTML = `Browser Plateform is : ${window.navigator.platform}`;
browserEngine.innerHTML = `Browser Engine is : ${window.navigator.product}`;
userAgent.innerHTML = `UserAgent is : ${window.navigator.userAgent}`;
screenResolution.innerHTML = `Screen Resolution is : ${window.screen.width * window.devicePixelRatio}x${window.screen.height * window.devicePixelRatio} pixels`;

window.addEventListener('beforeunload', function (e) {
    const leaveDate = new Date();
    LinkLeaveTime.innerHTML = `Link Leave Time : ${leaveDate}`;
    e.preventDefault();
});


// You Can Get ip address using php for more help go to techchip camphish github repo.