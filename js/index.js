// const daftarImage = [
//   'https://images.unsplash.com/photo-1685908702292-81315bf35015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
//   './../background2.jpg',
//   'https://images.unsplash.com/photo-1568231407122-a56e9e9c0a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//   './../background3.jpg',
//   'https://images.unsplash.com/photo-1685776611502-2c6c05f9c48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//   './../background1.jpg',
// ];

const daftarImage = [
  'https://images.unsplash.com/photo-1684672340295-6a99a29c0598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
  'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=896&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1417052800325-788e0eaf22c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
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
