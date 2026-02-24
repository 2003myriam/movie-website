// Objet de traduction
const translations = {
  tr: {
    
    episodes: "Tarih",
    characters: "Karakterler",
    annonce:"Fragmanı İzle",
    complet:"Tamamını İzle",
     titre_principal: "SAVAŞIN",
    titre_span: "KIZI",
    subtitle: "Unutulmaz Bir Gerçek Hikaye",
    watch_film: "Filmi İzle",
    note: "4.5 / 5",
    note_text: "Film Puani",
    imdb_note: "8.0",
    imdb_text: "IMDB Puani",
    year: "2017",
    vision_text: "Vizyon Tarihi",
    genre: "Dram/Tarih",
    genre_text: "Tür",
    story_title: "Gerçek Bir Hikaye",
    story_date: "_____1950 - 1953_____",
    story_desc: "1950 yılında Güney Kore ile Kuzey Kore arasındaki savaş sırasında bir Türk askeri, yetim bir küçük kızı sahiplenir ve ona Ayla adını verir. Aralarında güçlü bir bağ oluşur, ancak görevin sonunda ayrılmak zorunda kalırlar.",
    story_button: "Filmi İzle",
    serveur1:"Sunucu 1",
    serveur2:"Sunucu 2"

  },
  en: {
     
    episodes: "history",
    characters: "characters",
    annonce:"Watch the Trailer",
    complet:"Watch All",
    titre_principal: "THE",
    titre_span: "DAUGHTER OF WAR",
    subtitle: "An Unforgettable True Story",
    watch_film: "Watch the Film",
    note: "4.5 / 5",
    note_text: "Movie Rating",
    imdb_note: "8.0",
    imdb_text: "IMDB Rating",
    year: "2017",
    vision_text: "Release Date",
    genre: "Drama/History",
    genre_text: "Genre",
    story_title: "A True Story",
    story_date: "_____1950 - 1953_____",
    story_desc: "In 1950, during the war between South Korea and North Korea, a Turkish soldier adopts a little orphan girl and names her Ayla. They form a strong bond, but at the end of the mission, they must part ways.",
    story_button: "Watch the Film",
    serveur1:"Server 1",
    serveur2:"Server 2"
  }
};

// Fonction pour traduire
function translate(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Ajouter les événements aux boutons (plus sûr que onclick dans HTML)
document.getElementById('btn-tr').addEventListener('click', () => translate('tr'));
document.getElementById('btn-en').addEventListener('click', () => translate('en'));
