const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeBtn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");

  // reset lỗi
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // validate tên
  const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;

  if (firstName.value && !nameRegex.test(firstName.value)) {
    firstName.nextElementSibling.textContent = "Tên không hợp lệ";
    isValid = false;
  }

  if (lastName.value && !nameRegex.test(lastName.value)) {
    lastName.nextElementSibling.textContent = "Tên không hợp lệ";
    isValid = false;
  }

  // validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value) {
    email.nextElementSibling.textContent = "Email là bắt buộc";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Email không hợp lệ";
    isValid = false;
  }

  // nếu hợp lệ → show modal
  if (isValid) {
    modal.style.display = "flex";
    form.reset();
  }
});

/* ===== ĐÓNG MODAL ===== */

// nút đóng
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click ra ngoài
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});