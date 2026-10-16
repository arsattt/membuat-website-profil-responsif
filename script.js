// 1. Mengambil elemen menggunakan querySelector
const btnUbahTeks = document.querySelector('#btn-ubah-teks');
const deskripsiProfil = document.querySelector('#deskripsi-profil');
const btnGantiTema = document.querySelector('#btn-ganti-tema');

// 2. Event Listener untuk Tombol Ubah Teks
btnUbahTeks.addEventListener('click', function() {
  deskripsiProfil.textContent = "Saya siap belajar lebih banyak tentang pemrograman web responsif.";
});

// 3. Event Listener untuk Tombol Ganti Tema menggunakan classList.toggle
btnGantiTema.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});