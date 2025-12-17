# Teknisk dokumentation for Tema 10 gruppeprojekt

## Projektstruktur

Projektet er organiseret i en klar mappestruktur for at sikre overblik og konsistens. Mappe-strukturen er som følgende: 2.semester -> T10_eksamen -> inde i den mappe lægger alle HTML filer, CSS mappe, JS mappe, assets mappe og fonts mappe.
Projektroden indeholder mapperne css, js, assets og fonts, mens HTML-dokumenterne ligger i roden af projektet.

## Navngivning

Filnavne i mapperne er navngivet med små bogstaver samt bindestreg for at sikre en ensartet struktur.
Alt styling på vores sider er samlet i én fælles CSS-fil: "style.css", hvilket gør det nemmere at opdatere og overholde konsistens på tværs af løsningen.

Specifik CSS for listview og singleview siderne er i en seperat CSS fil, for hver side (listview.css og singleview.css) - for at bevare overblik over vores dynamiske sider.

## Link til scripts

Vores JavaScript-file til header er linket i <head>-sektionen med defer attributen, som sørger for at HTML'en indlæses færdigt før scripten eksekveres.

Vores listview.js og singleview.js er også linket i <head>-sektionen, her bruges der "type=module" da koden bruger top-level await, som kræver ES-moduler og samtidig giver samme indlæsningsadfærd som defer.

## Git branches

Github branches er navngivet efter hvad der er blevet arbejdet med i den individuelle branch, frem for hvem der har arbejdet på den.

## Arbejdsflow

Arbejdet er fordelt så der ikke arbejdes i samme branches. Commit-beskeder er holdt korte og beskrivende. Vi blev enige om aldrig at arbejde i main-branch for at undgå konflikt og variationer i kode.

## Kode

I JavaScript anvendes primært arrow functions, fx i forbindelse med fetch-kald. Klasser bruges til styling i CSS, mens både klasser og ID'er bruges i Javascript til at finde elementer. Koden indeholder kommentarer, der hvor der er brug for en tydelig forklaring.

# Funktionalitet

    - Hentning af samarbejdspartnere fra Supabase via API
    - Visning af fordele baseret på brugerens valg af partner
    - Dynamisk visning af liste- og single-views
    - Login-side til brugeren
    - Direkte links til "Dankort-point" sociale medier (TikTok, Instagram & Facebook)

# API endpoints:

Projektet anvender Supabase som database. Data hentes via Supabases REST API og kræver en API-key for adgang.
Listeview-side:
/rest/v1/Dankort?select=\*
Singleview-side:
/rest/v1/Dankort?id=eq.${id}

# Dokumentation af Funktion showPartners()

Funktionen showPartners(data) modtager en liste med samarbejdspartnere fra Supabase og dynamisk opbygger et listeview på siden. Funktionen genererer HTML-markup for hvert partner-card og indsætter det i DOM’en.

Funktionen modtager ét parameter (data), som er et array af objekter hentet fra Supabase.

Funktionen looper gennem data og indsætter information som billede, beskrivelse og link til singleview baseret på partnerens ID.

function showPartners(data) {
let markup = "";
data.forEach(item => {
markup +=
`<article class="partner_card">
             <img src="https://pghwxgkhepdabfkrvtkq.supabase.co/storage/v1/object/public/images/imgs/${item.logo}" alt="logo">
             <p>${item.description}</p>
             <a class="red_arrow_btn" href="singleview.html?id=${item.id}">svg</a>
         </article>
         `;
});
partnerContainer.innerHTML = markup;
}
