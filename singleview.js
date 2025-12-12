// Får den til at læse url'en og finde "id", så den kan fetch det rigtge data
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 
// id er en string (fx 1 eller 3) og bruges til at hente den "partner" man klikker på

// Henter containere hvor html bliver sat ind
// .hero = øverste billede + tekst (.grid_2-1)
// .fordele = cards med fordele (.fordel_card)
const fordeleContainer = document.querySelector(".fordele");
const heroContainer = document.querySelector(".hero")

// Henter data fra Supabase for specifikt id i url'en
// Vi bruger REST-endpoint, som er et link Supabase automatisk laver til hver tabel
// "?id=eq.${id}" betyder: "giv mig den række hvor id er det samme som, det id vi har fra URL’en"
const res = await fetch(`https://pghwxgkhepdabfkrvtkq.supabase.co/rest/v1/Dankort?id=eq.${id}`, {
    method:"GET",
    headers: {
        // api nølgen fortæller Supabase at vi gerne må hente data og giver læse-adgang.
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHd4Z2toZXBkYWJma3J2dGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTIzNjcsImV4cCI6MjA4MDkyODM2N30.-J49jZ687XpW3BlX25T6fpgEmc3DswhfQTvcTPk-3k8"
    }
});

// Gør svaret om til et array
// (når man henter data fra Supabase, får man altid en liste (array) tilbage)
const data = await res.json();

// Funktion der bygger html-elementer og sætter dem ind på siden
showFordele(data);

function showFordele(data) {

    // Tom streng som vi bygger html-elementerne i (til fordelene)
    let markup = "";

    // Viser hero-sektionen (billede + tekst)
    // Selvom der kun forventes 1 resultat, bruges der forEach, da Supabase altid returnerer en liste (array)
    data.forEach(item => {
        heroContainer.innerHTML = 
        `<h1 class="brand_name">${item.brandname}</h1>
        <section class="grid_2-1">
             <div><img src="https://pghwxgkhepdabfkrvtkq.supabase.co/storage/v1/object/public/images/imgs/${item.image}"></div>
             <div><p>${item.description}</p></div>
        </section>
        <h2>Bæredygtige fordele fra ${item.brandname}</h2>
         `;
    });

    // Viser fordelene som er et array i vores data i Supabase
    // Vi laver et card for hver fordel der findes
    data[0].fordele.forEach(item => {
        markup += 
        `<article class="fordel_card">
        <h3>${item}</h3>
        <a class="green_btn">INDLØS
            <span class="green_arrow"><svg width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="54.7857" height="55.358" rx="27.3929" stroke="#369331" stroke-linecap="round"/>
             <path d="M14.0001 27.6598C13.7348 27.6598 13.4805 27.7651 13.293 27.9527C13.1054 28.1402 13.0001 28.3946 13.0001 28.6598C13.0001 28.925 13.1054 29.1794 13.293 29.3669C13.4805 29.5544 13.7348 29.6598 14.0001 29.6598C14.4334 29.6598 14.8667 29.6598 15.3001 29.6598C23.1001 29.6598 30.9001 29.6598 38.7001 29.6598C39.1334 29.6598 39.5667 29.6598 40.0001 29.6598C40.2653 29.6598 40.5196 29.5544 40.7072 29.3669C40.8947 29.1794 41.0001 28.925 41.0001 28.6598C41.0001 28.3946 40.8947 28.1402 40.7072 27.9527C40.5196 27.7651 40.2653 27.6598 40.0001 27.6598C39.5667 27.6598 39.1334 27.6598 38.7001 27.6598C30.9001 27.6598 23.1001 27.6598 15.3001 27.6598C14.8667 27.6598 14.4334 27.6598 14.0001 27.6598Z" fill="#369331"/>
             <line x1="1" y1="-1" x2="17" y2="-1" transform="matrix(-0.686861 -0.726789 0.71109 -0.703101 42.3818 28.7612)" stroke="#369331" stroke-width="2" stroke-linecap="round"/>
             <line x1="1" y1="-1" x2="17" y2="-1" transform="matrix(-0.722517 0.691354 -0.674886 -0.737922 40.7877 27.4762)" stroke="#369331" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
        </a>
         </article>
         `;
    });

    // til sidst sætter vi alle cards ind i .fordele containeren
    fordeleContainer.innerHTML = markup;
}