function generateMindGuardHint() {
    const input = document.getElementById('mindInput').value.trim();
    const resultBox = document.getElementById('guardResultBox');
    const hintText = document.getElementById('guardHintText');

    if (input === "") {
        alert("Silakan ketik topik atau masalah terlebih dahulu di kolom yang tersedia.");
        return;
    }

    // Kumpulan pertanyaan penuntun kritis
    const hints = [
        "Coba uraikan bagian mana dari topik ini yang paling membuatmu penasaran sebelum mencari referensi luar.",
        "Apa asumsi dasar yang mendasari masalah ini? Coba uji kebenarannya menggunakan logika sederhanamu.",
        "Jika kamu harus menjelaskan masalah ini kepada teman sebayamu tanpa istilah rumit, analogi apa yang akan kamu gunakan?",
        "Adakah pola atau pengalaman masa lalu yang mirip dengan masalah ini yang bisa kamu jadikan titik awal berpikir?"
    ];

    const randomHint = hints[Math.floor(Math.random() * hints.length)];

    hintText.innerHTML = `"${randomHint}"<br><br><em>Gunakan pertanyaan ini untuk membangun kesimpulanmu sendiri secara mandiri!</em>`;
    resultBox.style.display = "block";
}
