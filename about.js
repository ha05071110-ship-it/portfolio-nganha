// ===== SCROLL REVEAL =====

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // chạy 1 lần khi load (tránh phải scroll mới hiện)
  revealOnScroll();
});


// ===== IMAGE HOVER EFFECT (BONUS) =====

const img = document.querySelector(".about-img img");

if (img) {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}
const line = document.querySelector(".timeline-line");
const items = document.querySelectorAll(".timeline-item");

function runTimeline() {

  // vị trí thật của dot
  const positions = [0, 27, 57, 84];

  let currentStep = 0;

  function animateStep() {

    if (currentStep >= items.length) return;

    // LINE chạy tới dot
    line.style.width = positions[currentStep] + "%";

    // chờ line chạy xong
    setTimeout(() => {

      const item = items[currentStep];

      // hiện dot
      item.classList.add("show-dot");

      // hiện content
      setTimeout(() => {
        item.classList.add("active");
      }, 250);

      currentStep++;

      // nghỉ nhẹ rồi chạy tiếp
      setTimeout(() => {
        animateStep();
      }, 500);

    }, 900);
  }

  animateStep();
}

// delay trước khi chạy
setTimeout(runTimeline, 4500);