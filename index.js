const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const hamburgerSpan = document.querySelector(".hamburger span");
const navbar_li = document.querySelectorAll("#menu li");

const workProjects = document.querySelectorAll(".project-container");

workProjects.forEach((project) => {
  project.addEventListener("click", (event) => {
    let page = `./${project.getAttribute("id")}.html#Work`;
    window.location.href = page;
  });
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
  });
  projectDivs[i].addEventListener("mouseout", (event) => {
    projectDivs[i].style.opacity = "0%";
  });
  projectDivs[i].addEventListener("touchenter", (event) => {
    projectDivs[i].style.opacity = "90%";
  });
  projectDivs[i].addEventListener("touchleave", (event) => {
    projectDivs[i].style.opacity = "0%";
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
