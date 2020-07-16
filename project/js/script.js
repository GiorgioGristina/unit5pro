//$(".pho").lightbox();


//declaring variable

let image = document.querySelectorAll(".pho");
let caption = $("data-title");
const input = document.getElementById("search");

// matching function

function match(){
  const searchValue = input.value.toLowerCase();
  console.log(searchValue);
  for (let i = 0; i < image.length; i += 1) {
    const image = image[i];
    const caption = image.getAttribute("data-title").lowerCase();
    const title = image.getAttribute("alt").lowerCase();
    if (caption.indexOf(searchValue) > -1 || title.indexOf(searchValue) > -1){
      image.style.display = "";
    } else {
      image.style.display = "none;"
    }
  }
}

input.addEventListener("keyup", match);
