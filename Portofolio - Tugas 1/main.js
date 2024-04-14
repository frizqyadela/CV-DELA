// Header Toogle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Tambahkan event listener untuk setiap tautan menu
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Cegah default behavior dari tautan
            event.preventDefault();

            // Ambil ID bagian target dari atribut href tautan yang diklik
            const targetId = this.getAttribute("href").substring(1);

            // Hilangkan kelas 'mobile-nav-active' dari body untuk menyembunyikan menu saat di ponsel
            document.body.classList.remove('mobile-nav-active');

            // Hapus kelas 'active' dari semua tautan menu
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Tambahkan kelas 'active' ke tautan yang diklik
            this.classList.add("active");

            // Ambil bagian target berdasarkan ID
            const targetSection = document.getElementById(targetId);

            // Gulir ke bagian target dengan animasi halus
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Tambahkan event listener untuk mendeteksi saat digulir
    window.addEventListener("scroll", function() {
        // Ambil posisi vertikal saat ini dari jendela browser
        const scrollPosition = window.scrollY;

        // Loop melalui setiap bagian dan periksa apakah bagian berada dalam jangkauan guliran
        document.querySelectorAll("main section").forEach(function(section) {
            const sectionTop = section.offsetTop - 100; // Mengurangi 100px untuk offset

            // Jika posisi scroll berada di atas atau di dalam bagian saat ini
            if (scrollPosition >= sectionTop) {
                // Dapatkan ID dari bagian saat ini
                const sectionId = section.getAttribute("id");

                // Loop melalui setiap tautan navbar
                navLinks.forEach(function(link) {
                    // Hapus kelas 'active' dari semua tautan navbar
                    link.classList.remove("active");

                    // Jika ID tautan sesuai dengan ID bagian saat ini
                    if (link.getAttribute("href").substring(1) === sectionId) {
                        // Tambahkan kelas 'active' ke tautan navbar yang sesuai
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});


// Typing Effect

let typed = new Typed ('.auto-input',{
    strings: ['Student at Andalas University', 'Information Systems Student', 'Graphic Design!'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})