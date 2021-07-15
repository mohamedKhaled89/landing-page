/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//Define Global Variables
const sections =document.querySelectorAll("section");
const docFragment = document.createDocumentFragment();
const menu = document.querySelector("#navbar__list");

//End Global Variables

//Begin Main Functions

// build the nav
function createListItems(){
    for(let section of sections){  
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.classList = "menu__link";
        anchor.id =section.getAttribute("#id");
        anchor.innerHTML = section.getAttribute("data-nav");
        listItem.appendChild(anchor);
        docFragment.appendChild(listItem);

        //scroll into section 
        listItem.addEventListener("click",function(event) {
            event.preventDefault();
            section.scrollIntoView({behavior:"smooth"});
        });
    }
    menu.appendChild(docFragment);
}

// Add class 'active' to section when near top of viewport
function toggleActiveState() {
    for (section of sections) {
        let list = document.getElementById(section.id);
        const sectionPostion =(section.getBoundingClientRect().top);
        if (sectionPostion < 250 && sectionPostion >= -250) {
        section.classList.add('your-active-class');
        list.classList.add('your-active-class');
        }else{
            section.classList.remove('your-active-class');
            list.classList.remove('your-active-class');
        }
    }
}

//End Main Functions

//Begin Events

// Build menu 
createListItems();

// Set sections as active
window.addEventListener("scroll",toggleActiveState);
