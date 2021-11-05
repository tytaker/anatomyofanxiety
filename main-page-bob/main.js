
//==========Getting buttons==========
yourselfBtn = document.querySelector('.you-btn'); // Getting the yourself button using the query selector and class of the you-btn
othersBtn = document.querySelector('.others-btn'); // Getting the others button using the query selector and class of the others-btn
meetBtn = document.querySelector('.bobButton'); // Getting the bob button using the query selector and class of the bobbutton
//==========END Getting buttons==========

//==========DRAWER FOR RECOGNISE SLIDE==========
// Yourself drawer
const youDrawer = document.querySelector('.drawer-you'); // Assign the shoelace drawer component for the yourself section with a variable by selecting it using the class name drawer-you
const openButtonYou = yourselfBtn; // Defining the open button for the drawer as the previously gathered youselfbtn 

openButtonYou.addEventListener('click', () => youDrawer.show()); // Adding event listener click to the open button that shows the drawer when the click is heard

// Others drawer
const othersDrawer = document.querySelector('.drawer-others'); // Assign the shoelace drawer component for the others section with a variable by selecting it using the class name drawer-others
const openButtonOthers = othersBtn; // Defining the open button for the drawer as the previously gathered othersbtn 


openButtonOthers.addEventListener('click', () => othersDrawer.show()); // Adding event listener click to the open button that shows the drawer when the click is heard
//==========END DRAWER FOR RECOGNISE SLIDE==========

//==========DIALOG BTN JS==========
  const infoBtns = document.querySelectorAll('.info-btn'); // Assign each button to the infBtns variable by targetting shared class name of info-btn
  infoBtns.forEach(btn => { // For each of the btns the following script will play
    btn.addEventListener('click', () => { //Listening for the click of the button
      const dialogSelector = btn.getAttribute('data-dialog'); //Once the click is heard, a variable is created that gathers the shared data-dialog attribute
      const dialog = document.querySelector(dialogSelector); //The dialog variable is created and assigned the value of this data-dialog attribute (i.e. the specific dialog for that button that will display the information)
      dialog.show(); //The dialog shows for that specific button selected
    });
  });
//==========END DIALOG BTN JS==========

//==========GSAP SCROLL TRIGGER==========

// Timeline 1 (GSAP SCROLL TRIGGER FOR BOB)
const s1Tl = gsap.timeline({ //Create the unique timeline using Gsap and give it a variable name
    scrollTrigger: { //Utilise the scroll trigger function
        trigger: '.bs', //Assign the trigger to the bob slide
        start: 250, //Assign the start value of the trigger using the numerical data of the page position
        end: 600, //Assign the end value of the trigger using the numerical data of the page position
        scrub: true, //Make scrubbing true, aka allow for the scroll to control the animation
    }
});
s1Tl.from('.bobImg', {x: 800, duration: 3, opacity:0}); //Give the animation a from location and attributes, so that it can animate to the original position

// Timeline 2 (GSAP SCROLL TRIGGER FOR FOOTER DIVIDER)
const s1T2 = gsap.timeline({ //Create the unique timeline using Gsap and give it a variable name
  scrollTrigger: { //Utilise the scroll trigger function
      trigger: '.footer-panel', //Assign the trigger to the footer panel
      start: "top bottom", // Assign the start string as top bottom, or when the top of the section hits the bottom of the viewport
      end: "top top", // Assign the end string as top top, or when the top of the section hits the top of the viewport 
      scrub:true, //Make scrubbing true, aka allow for the scroll to control the animation
  }
});
s1T2.from('.footer-divider', {x: -1800, duration: 3}); //Give the animation a from location and attributes, so that it can animate to the original position
//==========END GSAP SCROLL TRIGGER==========