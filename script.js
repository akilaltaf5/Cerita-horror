document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginBox = document.querySelector('.login-box');
    var horrorSection = document.getElementById('horrorSection');

    if (email === 'akilaltaf5@gmail.com' && password === 'akil12345') {
        // Menyembunyikan semua elemen di dalam login-box
        loginBox.style.display = 'none';
        horrorSection.style.display = 'block';
        horrorSection.style.opacity = '1';
    } else {
        alert('Email atau password salah!');
    }
});

document.getElementById('bacaCeritanyaJairun').addEventListener('click', function() {
    var horrorSection = document.getElementById('horrorSection');
    var storySection = document.getElementById('storySection');

    // Menyembunyikan horrorSection
    horrorSection.style.display = 'none';

    // Menampilkan storySection
    storySection.style.display = 'block';
});

document.getElementById('lanjut').addEventListener('click', function() {
    var storySection = document.getElementById('storySection');
    var lanjutSection = document.getElementById('lanjutSection');

    // Menyembunyikan storySection
    storySection.style.display = 'none';

    // Menampilkan lanjutSection
    lanjutSection.style.display = 'block';
});

document.getElementById('kembaliText').addEventListener('click', function() {
    var storySection = document.getElementById('storySection');
    var lanjutSection = document.getElementById('lanjutSection');

    // Menyembunyikan lanjutSection
    lanjutSection.style.display = 'none';

    // Menampilkan storySection
    storySection.style.display = 'block';
});

document.getElementById('bacaCeritanyaBayangan').addEventListener('click', function() {
    var horrorSection = document.getElementById('horrorSection');
    var bayanganSection = document.getElementById('bayanganSection');

    // Menyembunyikan horrorSection
    horrorSection.style.display = 'none';

    // Menampilkan bayanganSection
    bayanganSection.style.display = 'block';
});

document.getElementById('kembaliKeMenu').addEventListener('click', function() {
    var horrorSection = document.getElementById('horrorSection');
    var bayanganSection = document.getElementById('bayanganSection');

    // Menyembunyikan bayanganSection
    bayanganSection.style.display = 'none';

    // Menampilkan kembali horrorSection (menu sebelumnya)
    horrorSection.style.display = 'block';
});
