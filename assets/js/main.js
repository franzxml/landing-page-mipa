document.addEventListener("DOMContentLoaded", function() {
  console.log("Landing page siap digunakan");

  const mainNavbar = document.getElementById('mainNavbar');
  const scrollThreshold = 50; // Jarak scroll sebelum navbar menyusut (dalam piksel)

  // Fungsi untuk efek Header Shrink
  window.onscroll = function() {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
      mainNavbar.classList.add("scrolled");
    } else {
      mainNavbar.classList.remove("scrolled");
    }
  };

  // 1. Interaksi Tombol CTA
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      alert("Anda menekan tombol Pelajari Lebih Lanjut! Selamat datang di MIPA UNTAN.");
    });
  }

  // 2. Interaksi Tautan Navigasi (menampilkan pesan di console)
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      console.log(`Tautan navigasi "${event.target.textContent}" diklik.`);
    });
  });

});