/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

const elNav = document.querySelector('#navbar__list');


function addSection() {
    const sectionCount = elNav.childElementCount;
    console.log('There are', sectionCount, 'sections.');

    const sectionID = sectionCount + 1;

    console.log('Adding section', sectionID);

    const newNavItem = document.createElement('li');
    newNavItem.innerText = 'Section ' + sectionID;

    elNav.appendChild(newNavItem);
}



// build the nav


for (let i = 0; i <= 4; i++) {
    addSection();
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


