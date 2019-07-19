// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scrollBtn").style.display = "block";
//   } else {
//     document.getElementById("scrollBtn").style.display = "none";
//   }
// }
const scrollBtn = document.querySelector('#scrollBtn');

function scrollFunc() {
    // get the current scroll value
    let scrollVal = window.scrollY;

    // If the scroll value is greater than the window height,
    //  let's add a class to the scroll-to-top button to show it!
    if (scrollVal > 0) {
        scrollBtn.classList.add('show');

        scrollBtn.classList.remove('hide');
    } else {

        scrollBtn.classList.add('hide');
    }
}

// add the event listener
window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
   
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};
// When the button is clicked, run our ScrolltoTop function above!
scrollBtn.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
