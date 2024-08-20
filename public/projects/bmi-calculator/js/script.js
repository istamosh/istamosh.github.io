/* Code by Alfian Ferdinan */

// mendefinisikan button inti untuk penghitungan
const submitButton = document.getElementById("hitung");

// mendefinisikan button reset
const resetButton = document.getElementById("reset");

const calculate = () => {
  // memilih inputbox berat dan tinggi berdasarkan id masing-masing
  const berat = document.getElementById("berat");
  const tinggi = document.getElementById("tinggi");
  const umur = document.getElementById("umur");

  // jika salah satu atau kedua input 'falsy' seperti (null, 0, undefined, '', NaN, false)
  // maka akan muncul alert dan input tidak akan diproses dengan menggunakan return statement
  // return statement akan mengeluarkan operasi dari fungsi
  // kenapa menggunakan property value, bukan textContent? karena elemen ini berupa input yang didalamnya terdapat value
  if (!berat.value || !tinggi.value || !umur.value) {
    alert("Input tidak boleh kosong");
    return;
  } else if (berat.value <= 0 || tinggi.value <= 0 || umur.value <= 0) {
    alert("Input tidak boleh bernilai 0 atau negatif");
    return;
  }

  // mendefinisikan input gender dan background untuk hasil
  // kemudian menambahkan class 'man' atau 'woman'
  // berdasarkan input radio yang dipilih
  // hapus dahulu class 'man' dan 'woman' sebelum menambahkan
  // untuk mengganti warna background (pria biru, wanita pink)
  const radioPria = document.getElementById("pria");
  const resultBg = document.getElementById("result-background");
  resultBg.className = "";
  // memakai ternary operator
  // apabila radioPria.checked bernilai true maka tambahkan class 'man'
  // jika false tambahkan class 'woman'
  radioPria.checked
    ? resultBg.classList.add("man")
    : resultBg.classList.add("woman");

  document.getElementById("gender-caption").textContent = radioPria.checked
    ? " untuk pria"
    : " untuk wanita";

  // rumus bmi adalah berat/(tinggi/100) kuadrat
  const bmi = berat.value / (tinggi.value / 100) ** 2;

  // bulatkan kebawah, satu digit desimal
  // menggunakan fungsi Math.floor() untuk membulatkan kebawah
  // yang didapat dari hitungan bmi misal 20.5693, dikali 10 = 205.693
  // kemudian Math.floor akan membulatkan kebawah 205.693 menjadi 205
  // lalu 205 dibagi 10 = 20.5
  const oneDigitFloat = Math.floor(bmi * 10) / 10;
  console.log(bmi);

  // menampilkan output berdasarkan id yang telah didefinisikan
  document.getElementById("bmi").textContent = oneDigitFloat;

  // menampilkan output berdasarkan id yang telah didefinisikan
  // jika hasil dibawah 18.5 = Kekurangan Berat Badan
  // hasil antara 18.5 sampai 24.9 = Normal (Ideal)
  // seterusnya, sampai di atas 29.9 = Kegemukan (Obesitas)
  const status = document.getElementById("status");
  const info = document.getElementById("info");
  const range = document.getElementById("range");
  const note = document.getElementById("note");
  if (oneDigitFloat < 18.5) {
    status.textContent = "Kekurangan Berat Badan";
    info.textContent = "Berat badan Anda kurang.";
    range.textContent = "Hasil BMI Anda <18.5";
    note.innerHTML = `<b>Faktor:</b> Malnutrisi, gangguan makan, penyakit kronis, dan metabolisme tubuh yang tinggi. <br> <b>Rekomendasi:</b> Tingkatkan asupan kalori dengan makan makanan bergizi seimbang, dan aktivitas fisik teratur seperti olahraga.`;
  } else if (oneDigitFloat >= 18.5 && oneDigitFloat <= 24.9) {
    status.textContent = "Normal (Ideal)";
    info.textContent = "Berat badan Anda ideal.";
    range.textContent = "Hasil BMI Anda antara 18.5 ~ 24.9";
    note.innerHTML = `<b>Rekomendasi:</b> Tetap pertahankan berat badan ideal dengan makan makanan bergizi seimbang, olahraga, dan tidur yang cukup.`;
  } else if (oneDigitFloat >= 25 && oneDigitFloat <= 29.9) {
    status.textContent = "Kelebihan Berat Badan";
    info.textContent = "Berat badan Anda berlebih.";
    range.textContent = "Hasil BMI Anda antara 25 ~ 29.9";
    note.innerHTML = `<b>Faktor:</b> Metabolisme rendah, porsi makan berlebih, kurang olahraga, dan stres. <br> <b>Rekomendasi:</b> Atur pola makan (kurangi makanan tinggi kalori, lemak jenuh, gula berlebih, perbanyak buah-buahan serta sayuran, namun perhatikan porsi makan), tingkatkan aktivitas fisik, meditasi, dan yoga.`;
  } else {
    status.textContent = "Kegemukan (Obesitas)";
    info.textContent = "Berat badan Anda sangat berlebih.";
    range.textContent = "Hasil BMI Anda >29.9";
    note.innerHTML = `<b>Faktor:</b> Pola makan tidak sehat, kurang aktivitas fisik, genetik, hormonal, stres, dan kesehatan mental. <br> <b>Rekomendasi:</b> Konsultasi dokter, olahraga dan lakukan diet secara perlahan, sabar, namun konsisten.`;
  }
};

// kembalikan seluruh input dan output ke awal
const reset = () => {
  document.getElementById("pria").checked = true;
  document.getElementById("berat").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("bmi").textContent = "";
  document.getElementById("status").textContent = "";
  document.getElementById("info").textContent = "";
  document.getElementById("gender-caption").textContent = "";
  document.getElementById("result-background").className = "";
};

// menjalankan fungsi calculate setiap kali tombol submit di klik
submitButton.addEventListener("click", (event) => {
  // menggunakan fungsi preventDefault() untuk menghentikan refresh halaman setiap kali tombol submit di klik
  event.preventDefault();
  // memanggil fungsi calculate
  calculate();
});

// Menjalankan fungsi reset setiap kali tombol reset di klik
resetButton.addEventListener("click", (event) => {
  // menggunakan fungsi preventDefault() untuk menghentikan refresh halaman setiap kali tombol reset di klik
  event.preventDefault();
  // memanggil fungsi reset
  reset();
});
