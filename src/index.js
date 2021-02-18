import { aboutLoad } from './about.js'
import { contactLoad } from './contact.js'
import { menuLoad } from './menu.js'

// Show the About Content on Page Load 
document.addEventListener("DOMContentLoaded", aboutLoad);

// If tab buttons are clicked, then trigger other content 
var aboutTab = document.getElementById('about')
var contactTab = document.getElementById('contact')
var menuTab = document.getElementById('menu')

contactTab.addEventListener('click', contactTrigger)
menuTab.addEventListener('click', menuTrigger)
aboutTab.addEventListener('click', aboutTrigger)

function clearContents() {
    document.getElementById('content').innerHTML = "";
}

function contactTrigger() {
    clearContents();
    contactLoad();
}


function menuTrigger() {
    clearContents();
    menuLoad();
}

function aboutTrigger() {
    clearContents();
    aboutLoad();
}