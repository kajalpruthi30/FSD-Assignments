
// 1. Handling the toggling Effect
const toggle = document.querySelector('#checkbox');

toggle.addEventListener('change', () => {
    
    if (toggle.checked) {
        // remove light theme
        document.body.classList.remove('light-mode');
        isDarkMode = true; 

    } else {
        // add light theme
        document.body.classList.add('light-mode');
        isDarkMode = false; 

    }
    // particle.js
    initializeParticles(isDarkMode);
});


// 2. Handling tabs i.e. change the content on click
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tab) {
    for(link of tablinks){
        link.classList.remove("active-link")
    }
    for(link of tabcontents){
        link.classList.remove("active-tab")
    }
    document.getElementById(tab + "-link").className += " active-link"
    document.getElementById(tab).className += " active-tab"
}


// 3. Handling the navbar for small screen
var sidemenu =  document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = 0;
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// 4. Storing data in google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyBUDeScRVRYljkJbe2ifLIUkJ81A3-ypamqacsj_QJTfvAcEPArn2PY4TIoFcg-5g_Kg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
