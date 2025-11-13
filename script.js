document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;
    const slideDuration = 4000; // 4 giây mỗi ảnh

    function showNextSlide() {
      // Ẩn slide hiện tại
      slides[currentSlide].classList.remove("active");
      
      // Chuyển sang slide tiếp theo
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Hiển thị slide mới
      slides[currentSlide].classList.add("active");
    }

    // Bắt đầu slideshow
    setInterval(showNextSlide, slideDuration);

    // Hiển thị slide đầu tiên ngay lập tức
    slides[0].classList.add("active");
  });

document.addEventListener('DOMContentLoaded', () => {
  // Chọn nút hamburger
  const toggle = document.querySelector('.main-navigation .menu-toggle');
  // Chọn menu (ul) trong main-navigation
  const menu = document.querySelector('.main-navigation ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      // Toggle class 'show' để hiển thị menu trên mobile
      menu.classList.toggle('show');
    });
  }
});


const track    = document.querySelector('.carousel-track');
const slides   = document.querySelectorAll('.carousel-slide');
const prevBtn  = document.querySelector('.carousel-btn.prev');
const nextBtn  = document.querySelector('.carousel-btn.next');
const pageSpan = document.querySelector('.current-page');

let index = 0;
const total = slides.length;

function goToSlide(i) {
    index = (i + total) % total;                 // wrap around
    track.style.transform = `translateX(-${index * 100}%)`;
    pageSpan.textContent = index + 1;
}

prevBtn.addEventListener('click', () => goToSlide(index - 1));
nextBtn.addEventListener('click', () => goToSlide(index + 1));

/* optional: auto-play every 6 seconds
setInterval(() => goToSlide(index + 1), 6000);
*/