// get the mouse element
const mouse = document.querySelector(".mouse");
// get all links
const links = document.querySelectorAll("a");
// variable that add bounce to the circle
const bounce = "bounce";
// the variable that disable the animation
const inactive = "inactive";

// function that make the circle follows the mouse pointer
function moveMouse(e) {
  const x = e.clientX;
  const y = e.clientY;
  mouse.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
}

// function that turn on/off the animation
function disableAnimation() {
  const hasBounceClass = mouse.classList.contains(bounce);

  if (hasBounceClass) {
    mouse.classList.add(inactive);
    mouse.classList.remove(bounce);
  } else {
    mouse.classList.add(bounce);
    mouse.classList.remove(inactive);
  }
}

// check for when the mouse is being moving
document.addEventListener("mousemove", moveMouse);
// check wether the user hover/leave a link
links.forEach(link => link.addEventListener("mouseover", disableAnimation));
links.forEach(link => link.addEventListener("mouseleave", disableAnimation));
