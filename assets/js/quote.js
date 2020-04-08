/** @format */

let content = document.querySelector("#content");
let generate = document.querySelector("#button");
let author = document.querySelector("#author");

let quote = [
    {
        quote:
            "Benar di mata manusia belum tentu benar di mata Allah, begitu juga buruk di mata manusia belum tentu buruk di mata Allah",
        author: "Muhammad jumadi",
    },
    {
        quote:
            "Hidup ini hanya sekali dan peluang itu juga sekali munculnya, keduanya tidak datang dua kali",
        author: "Muhammad",
    },
    {
        quote:
            "Entah mengapa hari-hari ini akan cepat berlalu, dan senjapun mulai memberi kabar bahwa dia akan berlaku",
        author: "Jumadi",
    },
    {
        quote:
            "Rencanakan sendiri target sukses anda arungi ala ide perwujudannya, rasakan indahnya memperoleh dampak tetes keringat kreativitas anda, bukan atas intruksi siapapun",
        author: "Juma",
    },
    {
        quote:
            "Dunia tak lagi sama tak selamanya memihak kita, disaat kita mau berusaha disitulah kebahagiaan akan indah pada waktunya",
        author: "Jumadi",
    },
];

let random = () => {
    let numRandom = Math.floor(Math.random() * 4);

    quote.forEach((item, i) => {
        if (i == numRandom) {
            content.innerHTML = `<i class="fa fa-quote-left"></i> ${item.quote} <i class="fa fa-quote-right"></i>`;
            author.innerHTML = `" ${item.author} "`;
        }
    });
};

generate.addEventListener("click", random);
