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
             <a class="red_arrow_btn" href="singleview.html?id=${item.id}"><span><svg width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M14.0001 27.6598C13.7348 27.6598 13.4805 27.7651 13.293 27.9527C13.1054 28.1402 13.0001 28.3946 13.0001 28.6598C13.0001 28.925 13.1054 29.1794 13.293 29.3669C13.4805 29.5544 13.7348 29.6598 14.0001 29.6598C14.4334 29.6598 14.8667 29.6598 15.3001 29.6598C23.1001 29.6598 30.9001 29.6598 38.7001 29.6598C39.1334 29.6598 39.5667 29.6598 40.0001 29.6598C40.2653 29.6598 40.5196 29.5544 40.7072 29.3669C40.8947 29.1794 41.0001 28.925 41.0001 28.6598C41.0001 28.3946 40.8947 28.1402 40.7072 27.9527C40.5196 27.7651 40.2653 27.6598 40.0001 27.6598C39.5667 27.6598 39.1334 27.6598 38.7001 27.6598C30.9001 27.6598 23.1001 27.6598 15.3001 27.6598C14.8667 27.6598 14.4334 27.6598 14.0001 27.6598Z" fill="#ffffff"/>
             <line x1="1" y1="-1" x2="17" y2="-1" transform="matrix(-0.686861 -0.726789 0.71109 -0.703101 42.3818 28.7612)" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
             <line x1="1" y1="-1" x2="17" y2="-1" transform="matrix(-0.722517 0.691354 -0.674886 -0.737922 40.7877 27.4762)" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>
            </span></a>
         </article>
         `;
    });

partnerContainer.innerHTML = markup;
}