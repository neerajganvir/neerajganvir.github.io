const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const hamburgerSpan = document.querySelector(".hamburger span");
const navbar_li = document.querySelectorAll("#menu li");

const workProjects = document.querySelectorAll(".project-container");

const videoreel= document.getElementById("videoreel");
const videoiframe = document.getElementById("videoiframe");
const photoSection = document.getElementById("photos");
const photoImage = document.getElementById("photoImage");
const PhotoViewer = document.getElementById("PhotoViewer");
const Packages = document.getElementById("Packages");


workProjects.forEach((project) => {
  project.addEventListener("click", (event) => {
   
    //check if the project is studio360 then take it to the website
    if(project.dataset.studio360 == true || project.dataset.studio360 == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else if(project.dataset.photography == true || project.dataset.photography == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else if(project.dataset.film == true || project.dataset.film == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else{//take it to the video reel
      videoiframe.setAttribute("src" , project.dataset.projectvideourl);
      videoreel.style.display="grid";
    }    
  });
});

//click event for the videoreel to hide
videoreel.addEventListener("click", (event)=>{
  cWindow = videoiframe.contentWindow;
  //inorder to use the below code we need to append the following string "?enablejsapi=1" to the youtube url inorder to enable the api listening for YT
  videoiframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'stopVideo' }), '*');
  videoiframe.setAttribute("src" , "");
  videoreel.style.display="none";
    
});

//to hide the photo viewer
PhotoViewer.addEventListener("click",(event)=>{
  photoImage.setAttribute("src" , "");
  PhotoViewer.style.display="none";
});

//for the active links of the menu
navbar_li.forEach((li) => {
  li.addEventListener("click", (event) => {
    navbar_li.forEach((item) => {
      item.classList.remove("active");
    });
    li.classList.add("active");
  });
});

//for the project work divs hover effect
const projectDivs = document.querySelectorAll(".project-title");

for (let i = 0; i < projectDivs.length; i++) {
  projectDivs[i].addEventListener("mouseover", (event) => {
    projectDivs[i].style.opacity = "90%";
    projectDivs[i].style.fontSize = "2rem";
  });
  projectDivs[i].addEventListener("mouseout", (event) => {
    projectDivs[i].style.opacity = "40%";
    projectDivs[i].style.fontSize = "1rem";
  });
  projectDivs[i].addEventListener("touchenter", (event) => {
    projectDivs[i].style.opacity = "90%";
    projectDivs[i].style.fontSize = "2rem";
  });
  projectDivs[i].addEventListener("touchleave", (event) => {
    projectDivs[i].style.opacity = "40%";
    projectDivs[i].style.fontSize = "1rem";
  });
}

logo.addEventListener("click", (event) => {
  window.location.href = "./index.html#Work";
});

hamburger.addEventListener("click", (event) => {
  sideBar.classList.toggle("side-bar-hide");

  let span = hamburgerSpan.innerHTML.trim();

  if (span == "menu") {
    hamburgerSpan.innerHTML = "close";
  } else if (span == "close") {
    hamburgerSpan.innerHTML = "menu";
  }
});

//Loading photos
if(photoSection){
  var maxPhotoNumber = 27;
  for(let p=maxPhotoNumber; p>=1; p--){
    
    var photoDiv = document.createElement("div");
    photoDiv.setAttribute("id", "photo"+p);
    photoDiv.setAttribute("class", "photo-container");
    photoURL = "url('./photos/photo"+p+".jpeg')";
    photoDiv.style.backgroundImage = photoURL;
  
    var newImage = document.createElement("img");
    newImage.src = "./photos/photo"+p+".jpeg";
    newImage.alt = 'Event Photography in NJ & NYC';
   // photoDiv.appendChild(newImage);
   
    photoDiv.addEventListener("click",(event)=>{
      PhotoViewer.style.display="grid";
      photoImage.setAttribute("src", "./photos/photo"+p+".jpeg"); 
      photoImage.setAttribute("alt", "Event cinematic photography by Neeraj Ganvir"); 
    });

    photoSection.append(photoDiv);
  }
    if (photoDiv && newImage) {
    // Get the dimensions of the div
    //const divWidth = photoDiv.offsetWidth;
    //const divHeight = photoDiv.offsetHeight;

    // Set the image's dimensions to match the div's
    //newImage.style.width = divWidth + 'px';
    //newImage.style.height = divHeight + 'px';

    // Optional: Use object-fit for better image scaling within the div
    // This prevents distortion if the aspect ratios differ
    //newImage.style.objectFit = 'contain'; // or 'cover'
}
}

// if(Packages){
//   photoDiv.addEventListener("click",(event)=>{
//       PhotoViewer.style.display="grid";
//       photoImage.setAttribute("src", "./photos/photo"+p+".jpeg"); 
//       photoImage.setAttribute("alt", "Event photography by Neeraj Ganvir"); 
//     });
// }

