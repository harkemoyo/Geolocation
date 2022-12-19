// how to use navigator.geolocation
let G, options, spans;
document.addEventListener('DOMContentLoaded', init);

function init(){
    if (navigator.geolocation){
        let giveUp = 1000 * 30;
        let tooOld = 1000 * 60 * 60;
        options = {
            enableHighAccuracy:true,
            timeout: giveUp,
            mxmAge: tooOld

        }
 navigator.geolocation.getCurrentPosition(goPost,poFail, options);
    }else{
        // using an old browser 
    }
}
 
function goPost(position){
    spans = document.querySelectorAll('p span');
    spans[0].textContent = position.coords.latitude;
    spans[1].textContent = position.coords.longitude;
    spans[2].textContent = position.coords.accuracy;
    spans[6].textContent = position.timestamp;
    

}

function poFail(err){
//  error
let errors = {
    1 : 'No permission',
    2 : 'Unable to determine',
    3 : 'Take too long'
}
document.querySelector('h1').textContent = errors[err]; 
}