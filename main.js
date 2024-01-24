const arrowleftHTML = document.querySelector(`.fa-arrow-left`)
const arrowrightHTML = document.querySelector('.fa-arrow-right')
const figureHTML = document.querySelector('figure')

//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
const immagini = [
    {
        titolo: "via lattea",
        url:"./img/img01.jpeg",
        descrizione:"Il sistema solare visto dallo spazio"
    },
    {
        titolo:"terra",
        url:  "./img/img02.jpg",
        descrizione:"La Terra, il nostro prezioso pianeta blu, è la dimora di una straordinaria diversità di vita."
    },
    {
        titolo:"marte",
        url: "./img/img03.jpg",
        descrizione:"Marte, il pianeta rosso che cattura l'attenzione con il suo paesaggio desertico."
    },
    {
        titolo:"saturno",
        url:  "./img/img04.jpg",
        descrizione:"Saturno, il gigante dagli anelli scintillanti, incanta con la sua maestosa bellezza cosmica."
    },
    {
        titolo:"giove",
        url:"./img/img05.png",
        descrizione:"Giove, il gigante gassoso, caratterizzato dalle vaste fasce nuvolose e dalla maestosa Grande Macchia Rossa."
    }
]

let immaginePrincipale = document.querySelector(".main figure")
let thumbs = document.querySelector(".thumbs")
let frecciasinistra = document.querySelector("fa-arrow-left")
let frecciadestra = document.querySelector("fa-arrow-right")
let posizioneImmagineCorrente = 0
let mini = document.querySelector(".col")


immaginePrincipale.innerHTML = `
<img src=${immagini[0].url} alt="immagini carosello">
<div>
    <h2>${immagini[0].titolo}</h2>
    <p>
    ${immagini[0].descrizione}
    </p>
</div>`

// immagini.forEach((element,index) =>{
    // thumbs.innerHTML +=`
    // <div class="col">
        // <figure class="${(index === 0) ? `active` : ''}">
            // <img src="./${element.url}" alt="">
        // </figure>
    // </div> 
    // `;
// });


// Milestone 2:
// // // Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

arrowleftHTML.addEventListener("click", function() {
    if (posizioneImmagineCorrente === 0) {
        posizioneImmagineCorrente = immagini.length - 1;
    } else {
        posizioneImmagineCorrente--;
    }
    aggiornaCarosello();
});

arrowrightHTML.addEventListener("click", function() {
    if (posizioneImmagineCorrente === immagini.length - 1) {
        posizioneImmagineCorrente = 0;
    } else {
        posizioneImmagineCorrente++;
    }
    aggiornaCarosello();
});

function aggiornaCarosello() {
    immaginePrincipale.innerHTML = `
        <img src="${immagini[posizioneImmagineCorrente].url}" alt="immagini carosello">
        <div>
            <h2>${immagini[posizioneImmagineCorrente].titolo}</h2>
            <p>${immagini[posizioneImmagineCorrente].descrizione}</p>
        </div>
    `;


    // document.querySelectorAll('.col figure').forEach((figure, index) => {
        // figure.classList.remove('active');
        // if (index === posizioneImmagineCorrnte) {
            // figure.classList.add('active');
        // }
    // });
} 

// thumbs.addEventListener("click", function (event) {
    // const targetCol = event.target.closest(".col");
    // 
    // if (targetCol) 
        // const index = parseInt(targetCol.getAttribute("data-index"));
// 
        // if (!isNaN(index) && index !== posizioneImmagineCorrente) {
            // posizioneImmagineCorrente = index;
            // aggiornaCarosello();
        // }
    // }
// });
// 