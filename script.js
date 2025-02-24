document.addEventListener("DOMContentLoaded", () => {
    const surpriseButton = document.querySelector(".front-btn");
    const card = document.querySelector(".card");
    const parallax = document.querySelector(".parallax");
    const arrowBtn = document.getElementById("show-message");
    const hiddenMessage = document.getElementById("hidden-message");

    // Pastikan tombol surprise ada sebelum menambahkan event listener
    if (surpriseButton) {
        surpriseButton.addEventListener("click", (e) => {
            e.preventDefault(); // Mencegah efek default dari <a>
            window.location.href = "surprise.html";
        });
    }

    // Animasi flip kartu
    if (card) {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    }

    // Efek Parallax saat mouse bergerak (untuk desktop)
    if (parallax) {
        document.addEventListener("mousemove", (e) => {
            let x = (window.innerWidth - e.pageX) / 50;
            let y = (window.innerHeight - e.pageY) / 50;
            parallax.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Efek Parallax saat HP dimiringkan (untuk mobile)
        window.addEventListener("deviceorientation", (event) => {
            let x = event.gamma / 2; // Gerakan kiri-kanan
            let y = event.beta / 2;  // Gerakan atas-bawah
            parallax.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Menampilkan pesan tersembunyi saat tombol panah diklik
    if (arrowBtn && hiddenMessage) {
        arrowBtn.addEventListener("click", () => {
            hiddenMessage.style.display = "block"; // Tampilkan pesan
            arrowBtn.style.display = "none"; // Sembunyikan tombol setelah diklik
        });
    }
});