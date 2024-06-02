const images = [
  {
    src: "./Images/butterfly Large.jpeg",
    alt: "A Brown butterfly sitting on a plant",
    width: "200px",
    height: "100px",
    id: "image1",
  },
  {
    src: "./Images/dandelion Large.jpeg",
    alt: "clear photo of a dandelion",
    width: "200px",
    height: "100px",
    id: "image2",
  },
  {
    src: "./Images/grey-cat Large.jpeg",
    alt: "A grey kitten with its mouth open showing it's tongue",
    width: "200px",
    height: "100px",
    id: "image3",
  },
  {
    src: "./Images/sunset1 Large.jpeg",
    alt: "A bright and colourful Norfolk sunset",
    width: "200px",
    height: "100px",
    id: "image4",
  },
  {
    src: "./Images/sunset2 Large.jpeg",
    alt: "A clear sunset picture with some cloud rushing out from it",
    width: "200px",
    height: "100px",
    id: "image5",
  },
];

let tnail = document.getElementById("thumbnail-container");
let displayImage = document.getElementById("display");

images.forEach((thumbImg) => {
  let img = document.createElement("img");
  img.src = thumbImg.src;
  img.alt = thumbImg.alt;
  img.id = thumbImg.id;
  img.tabIndex = 1;
  tnail.appendChild(img);
  //   img.addEventListener("click", () => {
  //     displayImage.src = images.src;
});
//   tnail.addEventListener("click", function () {
//     createLargeImage(thumbImg[images]);
// });
// });

// console.log(image1, image2);

//Making my display Image
function myFunction() {
  let img = document.createElement("img");
  img.src = images[0].src;
  img.alt = images[0].alt;
  img.id = "bigImage";
  displayImage.appendChild(img);
}
myFunction();
bigImage = document.querySelector("#bigImage");
console.log(bigImage);

let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
let image3 = document.querySelector("#image3");
let image4 = document.querySelector("#image4");
let image5 = document.querySelector("#image5");

//adding event listeners for each thumbnail to display on my big Image.

image1.addEventListener("click", () => {
  bigImage.src = image1.src;
});
image2.addEventListener("click", () => {
  bigImage.src = image2.src;
});
image2.addEventListener("click", () => {
  bigImage.src = image2.src;
});
image3.addEventListener("click", () => {
  bigImage.src = image3.src;
});
image4.addEventListener("click", () => {
  bigImage.src = image4.src;
});
image5.addEventListener("click", () => {
  bigImage.src = image5.src;
});
image1.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    bigImage.src = image1.src;
  }
});
image2.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    bigImage.src = image2.src;
  }
});
image3.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    bigImage.src = image3.src;
  }
});
image4.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    bigImage.src = image4.src;
  }
});
image5.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    bigImage.src = image5.src;
  }
});

//Making arrow keys work to cycle through images.

document.addEventListener("keydown", () => {
  if (event.key === "ArrowRight") {
    if (bigImage.src == image1.src) {
      bigImage.src = image2.src;
    } else if (bigImage.src == image2.src) {
      bigImage.src = image3.src;
    } else if (bigImage.src == image3.src) {
      bigImage.src = image4.src;
    } else if (bigImage.src == image4.src) {
      bigImage.src = image5.src;
    } else if (bigImage.src == image5.src) {
      bigImage.src = image1.src;
    }
  }
});
document.addEventListener("keydown", () => {
  if (event.key === "ArrowLeft") {
    if (bigImage.src == image1.src) {
      bigImage.src = image5.src;
    } else if (bigImage.src == image2.src) {
      bigImage.src = image1.src;
    } else if (bigImage.src == image3.src) {
      bigImage.src = image2.src;
    } else if (bigImage.src == image4.src) {
      bigImage.src = image3.src;
    } else if (bigImage.src == image5.src) {
      bigImage.src = image4.src;
    }
  }
});

// Make my buttons work

let forwardButton = document.querySelector(".forbutton");
let backwardButton = document.querySelector(".backbutton");
console.log(forwardButton);
console.log(backwardButton);

forwardButton.addEventListener("click", () => {
  if (bigImage.src == image1.src) {
    bigImage.src = image2.src;
  } else if (bigImage.src == image2.src) {
    bigImage.src = image3.src;
  } else if (bigImage.src == image3.src) {
    bigImage.src = image4.src;
  } else if (bigImage.src == image4.src) {
    bigImage.src = image5.src;
  } else if (bigImage.src == image5.src) {
    bigImage.src = image1.src;
  }
});
backwardButton.addEventListener("click", () => {
  if (bigImage.src == image1.src) {
    bigImage.src = image5.src;
  } else if (bigImage.src == image2.src) {
    bigImage.src = image1.src;
  } else if (bigImage.src == image3.src) {
    bigImage.src = image2.src;
  } else if (bigImage.src == image4.src) {
    bigImage.src = image3.src;
  } else if (bigImage.src == image5.src) {
    bigImage.src = image4.src;
  }
});

// img.addEventListener("click", () => {
//   displayImage.src = images.src;
// });

// images.forEach((displayImg) => {});
// img = document.createElement("img");
// img.src = displayImg.src;
// img.alt = displayImg.alt;
// img.id = displayImg.id;
// displayImage.appenchild(img);
