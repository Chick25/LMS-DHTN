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
