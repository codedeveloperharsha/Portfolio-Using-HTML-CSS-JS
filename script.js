var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("side-menu");
const scriptURL = 'https://script.google.com/macros/s/AKfycby1GCfb8OPhj15Z9n6sfJFcr3Zeec_cKjZNSl4Mj0IoPY3iXRhmm8-tpb481NaxWinJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");


function openTab(tabName){
    for (tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px"
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Form submitted successfully!"
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})