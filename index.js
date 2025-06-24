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
    }else if(project.dataset.godfirst == true || project.dataset.godfirst == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else if(project.dataset.filmframes == true || project.dataset.filmframes == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else if(project.dataset.events == true || project.dataset.events == "true"){
      let page = `./${project.getAttribute("id")}.html`;
      window.location.href = page;
    }else if(project.dataset.food == true || project.dataset.food == "true"){
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
   sideBar.classList.toggle("side-bar-hide");
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
  //console.log(window.location.href);
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var page = page.split(".")[0];

  var maxPhotoNumber = 0;
  var altText = "";
  var identifier = "";

  switch (page) {
    case "godfirst":
      identifier = "gf";
      maxPhotoNumber = 14;
      altText = "Decorated temple altar during Hindu festival – Puja, Aarti, Ritual | Temple Photography in jersey City, NJ & NY"
     console.log(page);
    break;
   
    case "filmframes":
      identifier = "ff";
      maxPhotoNumber = 6;
      altText = "Cinematic close-up of actor in moody lighting – indie film still by Neeraj Ganvir | Fashion model posing in Manhattan | cinematic film stills portrait photography in NJ & NY"
      console.log(page);
    break;
     
    case "events":
      identifier = "ev";
      maxPhotoNumber = 19;
      altText = "Birthday Mom-to-be cutting cake, Decorated Baby Shower, Engagement, Candid mother-son Event Photography in jersey City, NJ & NY"
     console.log(page);
    break;
  
    case "food":
      identifier = "fd";
      maxPhotoNumber = 14;
      altText = "Gourmet entrée plated at NYC restaurant – cinematic food photography jersey City, NJ & NY"
     console.log(page);
    break;
  
    default:
    break;
  }
 
  
  

if(maxPhotoNumber>0){
  for(let p=maxPhotoNumber; p>=1; p--){
      
      var photoDiv = document.createElement("div");
      photoDiv.setAttribute("id", identifier+"photo"+p);
      photoDiv.setAttribute("class", "photo-container");
      photoURL = "url('./photos/"+identifier+"photo"+p+".jpeg')";
      photoDiv.style.backgroundImage = photoURL;
    
      var newImage = document.createElement("img");
      newImage.src = "./photos/"+identifier+"photo"+p+".jpeg";
      newImage.alt = altText;
      photoDiv.appendChild(newImage);
    
      photoDiv.addEventListener("click",(event)=>{
        PhotoViewer.style.display="grid";
        photoImage.setAttribute("src", "./photos/"+identifier+"photo"+p+".jpeg"); 
        photoImage.setAttribute("alt", altText); 
      });

      photoSection.append(photoDiv);
      if (photoDiv && newImage) {
          // Get the dimensions of the div
          //const divWidth = photoDiv.offsetWidth;
          //const divHeight = photoDiv.offsetHeight;

          // Set the image's dimensions to match the div's
          newImage.style.width = 0 + 'px';
          newImage.style.height = 0 + 'px';

          // Optional: Use object-fit for better image scaling within the div
          // This prevents distortion if the aspect ratios differ
          newImage.style.objectFit = 'contain'; // or 'cover'
      }
    }
}
  
}

 


// if(Packages){
//   photoDiv.addEventListener("click",(event)=>{
//       PhotoViewer.style.display="grid";
//       photoImage.setAttribute("src", "./photos/photo"+p+".jpeg"); 
//       photoImage.setAttribute("alt", "Event photography by Neeraj Ganvir"); 
//     });
// }

