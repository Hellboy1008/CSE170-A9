// facebook login check

window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId: '178284870069060', // Facebook App ID
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true, // initialize Facebook social plugins on the page
        version: 'v6.0' // point to the latest Facebook Graph API version, found in FB's App dashboard.
    });
    checkLoginState();
};

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    loadName();
    initButtons();
})

no_name = true;

/*
 * Function that loads user's name on screen
 */
function loadName() {
    name = localStorage.getItem('user-name');
    console.log(name);
    $('.user-name').prepend('Welcome back, ');
    if (name != "null" && name != "undefined") {
        $('.user-name').text('Welcome back, ');
        $('.user-name').append(name);
        no_name = false;
    }
    $('.user-name').append('!');
    console.log(no_name);
}

// Call this function when the page loads
window.onload = function() {
    if (no_name == true) {
        window.alert("Username was not detected. Please click \"Anonymous\" if you want to change your name.");
    }
}

/*
 * Function that changes user's name
 */
function changeName() {
    var name = prompt("Please enter your name");
    localStorage.setItem('user-name', name);
    $('.user-name').text('Welcome back, ');
    $('.user-name').append(name);
    $('.user-name').append('!');
}

/*
 * Function that utilizes Google Analytics for buttons
 */
function initButtons() {
    $('.search-btn-a').click(function(e) {
        e.preventDefault();
        ga("send", "event", "like", "click");
    });
    $('.search-btn-b').click(function(e) {
        e.preventDefault();
        ga("send", "event", "like", "click");
    });
}