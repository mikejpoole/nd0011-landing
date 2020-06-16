/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

const elNav = document.querySelector('#navbar__list');
const elMain = document.querySelector('main');

function addSection() {
    const sectionCount = elNav.childElementCount;
    console.log('There are', sectionCount, 'sections.');

    const sectionID = sectionCount + 1;

    console.log('Adding section', sectionID);

    // Add the nav button
    const newNavItem = document.createElement('li');
    newNavItem.innerText = 'Section ' + sectionID;

    elNav.appendChild(newNavItem);


    // Add the content
    const newSection = document.createElement('section');
    newSection.innerText = 'Section ' + sectionID + ' will go here...';
    elMain.appendChild(newSection);

    // <section id="section1" data-nav="Section 1" class="your-active-class">
    //     <div class="landing__container">
    //       <h2>Section 1</h2>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
  
    //       <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    //     </div>
    //   </section>

}



// build the nav
for (let i = 1; i <= 4; i++) {
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


