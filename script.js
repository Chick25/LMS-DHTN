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