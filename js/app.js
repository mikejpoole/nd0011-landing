const elNav = document.querySelector('#navbar__list');
const elMain = document.querySelector('main');

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
    const id = event.path[0].innerText.slice(8);

    // remove active class from all and set the active class to one button clicked on (this was not what was required)
    var elActive = document.getElementsByClassName('your-active-class');
    while(elActive.length > 0){
        elActive[0].classList.remove('your-active-class');
    }

    const section = document.getElementById("section" + id);
    section.classList.add('your-active-class');
    
    section.scrollIntoView({behavior: "smooth"});
}


function setActive(event) {
    const sections = document.getElementsByTagName('section');

    for (const section of sections) {
        const box = section.getBoundingClientRect();
        console.log(box.top);
        // You can play with the values in the "if" condition to further make it more accurate. 
        if (box.top <= 150 && box.bottom >= 150) {
          // Apply active state on the current section and the corresponding Nav link.
        } else {
          // Remove active state from other section and corresponding Nav link.
        }
      }
}


for (let i = 1; i <= 4; i++) {                                                  // start off by adding the sections
    addSection();
}

const firstSection = document.getElementById('section1');                       // Add class 'active' to section when near top of viewport
firstSection.classList.add('your-active-class');



// Set up the scroll listener
document.addEventListener('scroll', function() {
    setActive();
  });
