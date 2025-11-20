document.addEventListener("DOMContentLoaded", function() {
  console.log("Landing page siap digunakan");

  // 1. Interaksi Tombol CTA
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah default action (pindah ke top)
      alert("Anda menekan tombol Pelajari Lebih Lanjut! Selamat datang di MIPA UNTAN.");
    });
  }

  // 2. Interaksi Tautan Navigasi (menampilkan pesan di console)
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah default action
      console.log(`Tautan navigasi "${event.target.textContent}" diklik.`);
      // Di sini bisa ditambahkan fungsi untuk scroll ke bagian tertentu (section)
    });
  });

});