// ===== CIRCLE ANIMATION =====
const circles = document.querySelectorAll(".circle");
const percents = [90, 85, 80]; // sửa số tại đây

circles.forEach((circle, index) => {
  let current = 0;
  const inner = circle.querySelector(".inner");
  const target = percents[index];

  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
    } else {
      current++;

circle.style.setProperty(
  "--degree",
  `${current * 3.6}deg`
);

      inner.innerText = current + "%";
    }
  }, 15);
});


// ===== ACCORDION =====
const titles = document.querySelectorAll(".title");

titles.forEach(title => {
  title.addEventListener("click", () => {

    const item = title.parentElement;

    // đóng cái khác
    document.querySelectorAll(".item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");

    // animate progress
    if (item.classList.contains("active")) {
      const bars = item.querySelectorAll(".progress");

      bars.forEach(bar => {
        bar.style.width = "0";

        setTimeout(() => {
          bar.style.width = bar.getAttribute("data") + "%";
        }, 200);
      });
    }

  });
});
const cards = document.querySelectorAll(".item");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      entry.target.style.transition =
        "0.7s ease";
    }
  });

});

cards.forEach(card => {
  observer.observe(card);
});