// grab elements from html using id
var textArea = document.getElementById("textArea");
var typeBtn = document.getElementById("typeBtn");
// set flag to toggle behavior
var typeFlag = true;
// callback function
function btnType(e){
    // if flag is true
    if (typeFlag){
        // remove disabled
        textArea.removeAttribute("disabled");
        // set value of flag
        typeFlag = false
    }
    // if flag is false
    else{
        // set disabled
        textArea.setAttribute("disabled", "");
        // set value of flag
        typeFlag = true
    }
}
// on click event listener
typeBtn.addEventListener("click", btnType);