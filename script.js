const sliderWrapper = document.querySelector(".sliderWrapper");
const itemMenu = document.querySelectorAll(".menuItem");

const produk = [
    {
        id: 1,
        tajuk: "BLUSHIE PEONY",
        harga: 60,
        koleksi: [
            { nama: "Peony Pinky", kod: "#ffb6c1", img: "Screenshot 2025-06-10 131259.png" },
            { nama: "Peony Cutie", kod: "#f4c2c2", img: "Screenshot 2025-06-10 131318.png" },
        ],
    },
    {
        id: 2,
        tajuk: "BLUSHIE KENANGA",
        harga: 59,
        koleksi: [
            { nama: "Kenanga Indah", kod: "#d07070", img: "Screenshot 2025-06-10 131354.png" },
            { nama: "Kenanga Harmoni", kod: "#b13f74", img: "Screenshot 2025-06-10 131411.png" },
        ],
    },
    {
        id: 3,
        tajuk: "BLUSHIE CEMPAKA",
        harga: 67,
        koleksi: [
            { nama: "Cempaka Wangi", kod: "#ff9a9a", img: "Screenshot 2025-06-10 131442.png" },
            { nama: "Cempaka Madu", kod: "#5a3c3c", img: "Screenshot 2025-06-10 131456.png" },
        ],
    },
    {
        id: 4,
        tajuk: "BLUSHIE ORKID",
        harga: 69,
        koleksi: [
            { nama: "Orkid Pinky", kod: "#fc8eac", img: "Screenshot 2025-06-10 131549.png" },
            { nama: "Orkid Maroonie", kod: "#ff69b4", img: "Screenshot 2025-06-10 131619.png" },
        ],
    },
    {
        id: 5,
        tajuk: "BLUSHIE JASMINE",
        harga: 79,
        koleksi: [
            { nama: "Jasmine Forest", kod: "#d8bfd8", img: "Screenshot 2025-06-10 131656.png" },
            { nama: "Jasmine Floral", kod: "#dda0dd", img: "Screenshot 2025-06-10 131713.png" },
        ],
    },
];

let tudungDipilih = produk[0];

const imejTudungSemasa = document.querySelector(".imejTudung");
const tajukTudungSemasa = document.querySelector(".tajukTudung");
const hargaTudungSemasa = document.querySelector(".hargaTudung");
const warnaTudungSemasa = document.querySelectorAll(".warna");
const namaKoleksiSemasa = document.querySelector(".namaKoleksi");

itemMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
        tudungDipilih = produk[index];

        tajukTudungSemasa.textContent = tudungDipilih.tajuk;
        hargaTudungSemasa.textContent = "RM " + tudungDipilih.harga;
        imejTudungSemasa.src = tudungDipilih.koleksi[0].img;
        namaKoleksiSemasa.textContent = tudungDipilih.koleksi[0].nama;

        warnaTudungSemasa.forEach((warna, i) => {
            warna.style.backgroundColor = tudungDipilih.koleksi[i].kod;
            warna.setAttribute("data-index", i);
        });
    });
});

warnaTudungSemasa.forEach((warna) => {
    warna.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        imejTudungSemasa.src = tudungDipilih.koleksi[index].img;
        namaKoleksiSemasa.textContent = tudungDipilih.koleksi[index].nama;
    });
});

function bukaForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function tutupForm() {
    document.getElementById("popupForm").style.display = "none";
}

function hantarForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    let telefon = document.getElementById("telefon").value;

    if (nama && email && alamat && telefon) {
        alert("Terima kasih, " + nama + "! Pesanan anda akan diproses.");
        tutupForm();
    } else {
        alert("Sila isi semua maklumat!");
    }
}

