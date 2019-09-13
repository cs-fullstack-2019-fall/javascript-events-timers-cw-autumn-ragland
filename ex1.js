// grab check box from html
let checkbox = document.getElementById("box");

// call back function
function dontClick(e) {
    // stop the box from checking
    e.preventDefault();
    // alert!
    alert("I TOLD YOU NOT TO CLICK IT");
}
// on click event listener
checkbox.addEventListener("click", dontClick);