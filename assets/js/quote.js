/** @format */

let content = document.querySelector("#content");
let generate = document.querySelector("#button");
let author = document.querySelector("#author");

let quote = [
    {
        quote:
            "All blame is a waste of time. No matter how much fault you find with another, and regardless of how much you blame him,  it will not change you",
        author: "Wayne Dyer",
    },
    {
        quote:
            "Hidup ini hanya sekali dan peluang itu juga sekali munculnya, keduanya tidak datang dua kali",
        author: "Jumadi",
    },
    {
        quote:
            "Entah mengapa hari-hari ini akan cepat berlalu, dan senjapun mulai memberi kabar bahwa dia akan berlaku",
        author: "Jumadi",
    },
    {
        quote:
            "Rencanakan sendiri target sukses anda arungi ala ide perwujudannya, rasakan indahnya memperoleh dampak tetes keringat kreativitas anda, bukan atas intruksi siapapun",
        author: "Jumadi",
    },
    {
        quote:
            "Dunia tak lagi sama tak selamanya memihak kita, disaat kita mau berusaha disitulah kebahagiaan akan indah pada waktunya",
        author: "Jumadi",
    },
    {
        quote:
            "Risk more than other think is safe. Care more than other think is wise. Dream more than other think is practical. Expect more than other think is possible",
        author: "Claude T. Bissell",
    },
    {
        quote:
            "Don’t ask yourself what the world needs, ask yourself what makes you come alive. And then go and to that. Because what the world needs is people who have come alive",
        author: "Harold Whitman",
    },
    {
        quote:
            "Do not take for granted the things closest to your heart. Cling to them as you would with your life, for without them, life is meaningless",
        author: "Chinese Proverbs",
    },
];

let random = () => {
    let numRandom = Math.floor(Math.random() * quote.length);

    quote.forEach((item, i) => {
        if (i == numRandom) {
            content.innerHTML = `<i class="fa fa-quote-left"></i> ${item.quote} <i class="fa fa-quote-right"></i>`;
            author.innerHTML = `" ${item.author} "`;
        }
    });
};

generate.addEventListener("click", random);
