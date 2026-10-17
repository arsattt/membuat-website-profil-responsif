// 1. Mengambil elemen menggunakan querySelector
const btnUbahTeks = document.querySelector('#btn-ubah-teks');
const deskripsiProfil = document.querySelector('#deskripsi-profil');
const btnGantiTema = document.querySelector('#btn-ganti-tema');

const textAwal=deskripsiProfil.textContent
const textBaru="Saya siap belajar website responsif"
// 2. Event Listener untuk Tombol Ubah Teks
btnUbahTeks.addEventListener('click', function() {
  if(deskripsiProfil.textContent==textAwal){
    deskripsiProfil.textContent=textBaru
  }else{
    deskripsiProfil.textContent=textAwal
  }
});

// 3. Event Listener untuk Tombol Ganti Tema menggunakan classList.toggle
btnGantiTema.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

