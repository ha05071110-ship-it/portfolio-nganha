// ===== HERO TYPING EFFECT =====

const lines = [
  { id: "line1", text: "Xin chào, mình là Ngân Hà" },
  { id: "line2", text: "Brand Marketing Intern" },
  { id: "line3", text: "Mình là một sinh viên yêu thích tìm hiểu về hành vi người tiêu dùng và góp phần xây dựng thương hiệu hướng đến tạo ra các giá trị bền vững cho khách hàng." }
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    // 👉 hiện button sau khi xong
    const btn = document.querySelector(".btn-primary");
    if (btn) {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
      btn.style.transition = "0.3s ease";
    }
    return;
  }

  const currentLine = lines[lineIndex];
  const element = document.getElementById(currentLine.id);

  // 🔥 tránh crash nếu thiếu element
  if (!element) return;

  if (charIndex < currentLine.text.length) {
    element.innerHTML += currentLine.text.charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 40); // tốc độ typing
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, 1000); // nghỉ giữa các dòng
  }
}

// 🔥 chỉ chạy khi trang load xong
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("line1")) {
    typeLine();
  }
});