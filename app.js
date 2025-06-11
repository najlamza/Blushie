const wrapper = document.querySelector(".sliderWrapper");
const itemMenu = document.querySelectorAll(".menuItem");

const produk = [
    {
        id: 1,
        tajuk: "BLUSHIE PEONY",
        harga: 60,
        warna: [
            { kod: "PEONY CUTIE", img: "Screenshot 2025-06-10 131259.png" },
            { kod: "PEONY CUPID", img: "Screenshot 2025-06-10 131318.png" },
        ],
    },
    {
        id: 2,
        tajuk: "BLUSHIE KENANGA",
        harga: 59,
        warna: [
            { kod: "KENANGA INDAH", img: "Screenshot 2025-06-10 131354.png" },
            { kod: "KENANGA HARMONI", img: "Screenshot 2025-06-10 131411.png" },
        ],
    },
    {
        id: 3,
        tajuk: "BLUSHIE CEMPAKA",
        harga: 67,
        warna: [
            { kod: "CEMPAKA WANGI", img: "Screenshot 2025-06-10 131442.png" },
            { kod: "CEMPAKA MADU", img: "Screenshot 2025-06-10 131456.png" },
        ],
    },
    {
        id: 4,
        tajuk: "BLUSHIE ORKID",
        harga: 69,
        warna: [
            { kod: "ORKID PINKY", img: "Screenshot 2025-06-10 131549.png" },
            { kod: "ORKID MAROONIE", img: "Screenshot 2025-06-10 131619.png" },
        ],
    },
    {
        id: 5,
        tajuk: "BLUSHIE JASMINE",
        harga: 79,
        warna: [
            { kod: "JASMINE FOREST", img: "Screenshot 2025-06-10 131656.png" },
            { kod: "JASMINE FLORAL", img: "Screenshot 2025-06-10 131713.png" },
        ],
    },
];

let tudungDipilih = produk[0];

const imejTudungSemasa = document.querySelector(".imejTudung");
const tajukTudungSemasa = document.querySelector(".tajukTudung");
const hargaTudungSemasa = document.querySelector(".hargaTudung");
const warnaTudungSemasa = document.querySelectorAll(".warna");

itemMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        tudungDipilih = produk[index];

        tajukTudungSemasa.textContent = tudungDipilih.tajuk;
        hargaTudungSemasa.textContent = "RM " + tudungDipilih.harga;
        imejTudungSemasa.src = tudungDipilih.warna[0].img;

        warnaTudungSemasa.forEach((warna, i) => {
            warna.style.backgroundColor = tudungDipilih.warna[i].kod;
        });
    });
});

warnaTudungSemasa.forEach((warna, index) => {
    warna.addEventListener("click", () => {
        imejTudungSemasa.src = tudungDipilih.warna[index].img;
    });
});

const butangBeli = document.querySelector(".butangBeli");
const pembayaran = document.querySelector(".pembayaran");
const tutup = document.querySelector(".tutup");

butangBeli.addEventListener("click", () => {
    pembayaran.style.display = "flex";
});

tutup.addEventListener("click", () => {
    pembayaran.style.display = "none";
});
