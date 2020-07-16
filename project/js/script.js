//$(".pho").lightbox();


//declaring variable

let images = document.querySelectorAll(".pho"); // it  creates an array

const input = document.getElementById("search");

// matching function

function match(){
  const searchValue = input.value.toLowerCase();
  console.log(searchValue);
  for (let i = 0; i < images.length; i += 1) {
    const image = images[i];
    const caption = image.getAttribute("data-title").toLowerCase();
    const title = image.getAttribute("alt").toLowerCase();
    if (caption.indexOf(searchValue) > -1 || title.indexOf(searchValue) > -1){
      image.style.display = "";
    } else {
      image.style.display = "none";
    }
  }
}

input.addEventListener("keyup", match);
