const partnerContainer = document.querySelector(".partners");

const res = await fetch("https://pghwxgkhepdabfkrvtkq.supabase.co/rest/v1/Dankort?select=*",{
    method:"GET",
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHd4Z2toZXBkYWJma3J2dGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTIzNjcsImV4cCI6MjA4MDkyODM2N30.-J49jZ687XpW3BlX25T6fpgEmc3DswhfQTvcTPk-3k8"
    }
});

const data = await res.json();

showPartners(data);

function showPartners(data) {
    let markup = "";

    data.forEach(item => {
        markup += 
        `<article class="partner_card">
             <img src="https://pghwxgkhepdabfkrvtkq.supabase.co/storage/v1/object/public/images/imgs/${item.logo}" alt="logo">
             <p>${item.description}</p>
             <a class="red_btn" href="produkt.html?id=${item.id}">SE GRØNNE FORDELE</a>
         </article>
         `;
    });

partnerContainer.innerHTML = markup;
}