function showSection(id) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}
function showSection(id) {
    const sections = document.querySelectorAll(".content");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}
// ================= NAVIGASI SECTION =================
function showSection(id) {
    const sections = document.querySelectorAll(".content");
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ================= FORM KONTAK KE WHATSAPP =================
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const pesan = document.getElementById("pesan").value;

            const nomorWA = "6285183586997"; // nomor WA tujuan (pakai 62)

            const text = `Halo, saya ${nama}
Email: ${email}
Pesan:
${pesan}`;

            const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        });
    }
});