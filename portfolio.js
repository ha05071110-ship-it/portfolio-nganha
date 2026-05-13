// FILTER
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelector(".filter-btn.active")
      .classList.remove("active");

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach(project => {

      if (
        filter === "all" ||
        project.dataset.category === filter
      ) {

        project.style.display = "block";

        setTimeout(() => {
          project.style.opacity = "1";
          project.style.transform = "translateY(0)";
        }, 100);

      } else {

        project.style.display = "none";
      }

    });

  });

});


// LIGHTBOX
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project img").forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

  });

});


// CLOSE LIGHTBOX
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});


// STOP BUTTON CLICK
document.querySelectorAll(".view-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
  });

});


// SCROLL REVEAL
const revealProjects = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
        "translateY(0)";

    }

  });

}, {
  threshold: 0.15
});


projects.forEach(project => {
  revealProjects.observe(project);
});