const daftarImage = [
  'https://images.unsplash.com/photo-1685908702292-81315bf35015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
  './../background2.jpg',
  'https://images.unsplash.com/photo-1568231407122-a56e9e9c0a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  './../background3.jpg',
  'https://images.unsplash.com/photo-1685776611502-2c6c05f9c48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  './../background1.jpg',
];

let currentIndex = 0;

function changeImage() {
  const imageElement = document.querySelector('.ubahHeroImageSpin');
  imageElement.src = daftarImage[currentIndex];

  currentIndex++;

  if (currentIndex >= daftarImage.length) {
    currentIndex = 0;
  }
}

setInterval(changeImage, 5000);

// var imageUrls = [
//   'https://images.unsplash.com/photo-1685908702292-81315bf35015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
//   'https://images.unsplash.com/photo-1568231407122-a56e9e9c0a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//   'https://images.unsplash.com/photo-1685776611502-2c6c05f9c48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
// ];

// var currentIndex = 0; // Indeks gambar saat ini

// // Fungsi untuk mengubah gambar
// function changeImage() {
//   var imageElement = document.querySelector('.ubahHeroImageSpin'); // ID elemen gambar di HTML
//   imageElement.src = imageUrls[currentIndex]; // Mengatur sumber gambar baru

//   currentIndex++; // Pindah ke gambar berikutnya
//   if (currentIndex >= imageUrls.length) {
//     currentIndex = 0; // Kembali ke gambar pertama jika sudah mencapai akhir daftar gambar
//   }
// }

// // Panggil fungsi changeImage() setiap 5 detik
// setInterval(changeImage, 5000);
