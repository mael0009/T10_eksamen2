# Teknisk dokumentation for Tema 10 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?

Svar: Vi organiserede en mappestruktur som vist her: MMD -> 2.sem -> T10_eksamen.
I T10_eksamen mappen, blev enige om at 1 af os downloadede de font vi blev eneige om og satte dem ind i en "font" mappe i vores projekt og derefter implementerede dem i vores CSS. i

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?

Svar: Vores filnavne har vi benyttet os af små bogstaver og sørget for, at alt er på engelsk. Vi har både benyttet "-" og "\_", hvilket vi sørger for er mere ensartet i næste projekt.

For at undgå unødig forvirring har vi navngivet de HTML- og JavaScript-filer, der hører sammen, det samme.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)

Svar: Det har vi sørget for konsekvent er placeret i toppen af HTML dokumentet med defer attribute.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstå hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)

Svar: Vi har navngivet vores branches, efter hvad der er blevet arbejdet med i den individuelle branch og ikke hvem, der har arbejdet på den.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
- Hvordan sikrer I, at commit-beskeder er beskrivende?
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?

Svar: Vi har sørget for beskrivende commit-beskeder, som er korte og tydelige ellers har denne kommunikation primært fundet sted fysisk. Vi kan til næste gang benytte os af en bedre strategi, så vi sikrer os, at alle ændringer er tydeligt beskrevet.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
- Beslut hvilken CSS selector i benytter til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
- Skal filer have korte forklaringer som kommentarer?

Svar: Vi bruger arrow function inde i .then(...), som en genvej.
Javascript bruger både klasse og id til at finde elementer. I CSS bruges klasser til styling.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

Svar:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.
- Dynamisk visning af kategorier
- Søgefelt (ikke brugbart på nuværende tidspunkt)
- Adgang til brugerens egen profil
- Direkte link til nuories andre profiler: tiktok, instagram

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

Svar:
Productlist side: https://dummyjson.com/products/category/beauty
Product side: https://dummyjson.com/products/${id}

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```

Svar:
Dokumentation af funktionen showProduct på productlist siden:
showProducts(allData) tømmer produkt-listens container på siden og bygger nye produktkort ud fra de data, der kommer fra API’et. Den kaldes, når fetch-kaldet har hentet data, og den opdaterer DOM’en med brand, titel, pris, billede og et link til produktsiden.

Det vil sige at:

1. Siden henter data fra https://dummyjson.com/products/category/beauty:

´´´javascript

const ProductListContainer = document.querySelector(".grid-products");

fetch(`https://dummyjson.com/products/category/beauty`)
.then(res => res.json())
.then(data => {
const allData = data;  
 showProducts(allData);  
 });

```


2. Når data er modtaget, gemmes de i variabler og showProducts(allData) kaldes for at vise produkterne i .grid-products.

´´´javascript

function showProducts(allData) {
  ProductListContainer.innerHTML = "";
  allData.products.forEach(p => {
    ProductListContainer.innerHTML += `
      <div class="product-card">
        <p class="brand-name">${p.brand}</p>
        <a href="product.html?id=${p.id}">
          <img src="${p.thumbnail}" alt="${p.title}" />
        </a>
        <p>${p.title}</p>
        <p>${p.price},-</p>
      </div>`;
  });
}

```
