/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

const elNav = document.querySelector('#navbar__list');
const elMain = document.querySelector('main');

const latin = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'];

function addSection() {
    const sectionCount = elNav.childElementCount;
    console.log('There are', sectionCount, 'sections.');

    const sectionID = sectionCount + 1;

    console.log('Adding section', sectionID);

    // Add the nav button
    const newNavItem = document.createElement('li');
    newNavItem.setAttribute('id', 'button' + sectionID);
    newNavItem.innerText = 'Section ' + sectionID;

    elNav.appendChild(newNavItem);


    
    // Listen to the button
    newNavItem.addEventListener('click', buttonClick);




    // Add the content
    const newSection = document.createElement('section');
    newSection.setAttribute('id', 'section' + sectionID);
    newSection.setAttribute('data-nav', 'Section ' + sectionID);


    const newContainer = document.createElement('div');
    newContainer.classList.add('landing__container');

    const newHeading = document.createElement('h2');
    newHeading.textContent = `Section ${sectionID}`;

    newContainer.appendChild(newHeading);

    const newPara1 = document.createElement('p');
    newPara1.textContent = latin[0];
    newContainer.appendChild(newPara1);

    const newPara2 = document.createElement('p');
    newPara2.textContent = latin[1];
    newContainer.appendChild(newPara2);    

    // add the two latin lines
    // latin.forEach(lat => {
    //     newPara.textContent = lat;
    //     newContainer.appendChild(newPara);
    // });

    newSection.appendChild(newContainer);
    elMain.appendChild(newSection);
}


function buttonClick(event) {
    console.log('button clicked', event);
}


// build the nav
for (let i = 1; i <= 4; i++) {
    addSection();
}

// Add class 'active' to section when near top of viewport
const firstSection = document.getElementById('section1');
firstSection.classList.add('your-active-class')


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


