const elNav = document.querySelector('#navbar__list');
const elMain = document.querySelector('main');
let currentSection = 1;

const latin = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'];

function addSection() {
    const sectionCount = elNav.childElementCount;
    const sectionID = sectionCount + 1;

    const newNavItem = document.createElement('li');                        // Add the nav button
    newNavItem.setAttribute('id', 'button' + sectionID);
    newNavItem.innerText = 'Section ' + sectionID;

    elNav.appendChild(newNavItem);

    newNavItem.addEventListener('click', scrollToSection);                  // Listen to the button

    const newSection = document.createElement('section');                   // Add the content
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

    newSection.appendChild(newContainer);
    elMain.appendChild(newSection);
}

function scrollToSection(event) {
    const sectionId = event.path[0].innerText.slice(8);
    makeSectionActive(sectionId);

    const section = document.getElementById("section" + sectionId);             // Scroll
    section.scrollIntoView({behavior: "smooth"});
}

function setActive(event) {
    for (const section of document.getElementsByTagName('section')) {
        const bb = section.getBoundingClientRect();
        if (bb.top <= 125 && bb.bottom >= 125 && +currentSection !== +section.id) {
            makeSectionActive(section.id);
        }
      }
}

function makeSectionActive(sectionId) {                                         // Triggered when the user enters a new section
    sectionId = sectionId.replace('section','');
    currentSection = sectionId;

    // SECTIONS
    var elActive = document.getElementsByClassName('your-active-class');        // remove active class from all sections
    while(elActive.length > 0){
        elActive[0].classList.remove('your-active-class');
    }

    const section = document.getElementById("section" + sectionId);             // set the active class on the current section
    section.classList.add('your-active-class');

    // BUTTONS
    var elActive = document.getElementsByClassName('selected');                 // remove active class from all nav buttons
    while(elActive.length > 0){
        elActive[0].classList.remove('selected');
    }

    const button = document.getElementById("button" + sectionId);               // set the active class on the current nav button
    button.classList.add('selected');

}

for (let i = 1; i <= 4; i++) {                                                  // start off by adding the sections
    addSection();
}

// Set the initial active states
const firstSection = document.getElementById('section1');
firstSection.classList.add('your-active-class');

const firstButton = document.getElementById('button1');
firstButton.classList.add('selected');

// Set up the scroll listener
document.addEventListener('scroll', function() {
    setActive();
  });
