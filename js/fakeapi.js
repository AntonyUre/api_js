const course = [
  {
    date: "29/06/2022",
    title: "Explicación proyecto final HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/t2QcDbVM8E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "29/06/2022",
    title: "Repaso git y resumen HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/DcN7MpJpbgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "28/06/2022",
    title: "Navigation Bar HTML",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/hBB0ZyEqJk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "28/06/2022",
    title: "Preprocesador CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/A60uWXv2Q-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "27/06/2022",
    title: "Live-code Session",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/XZ37KcVzm7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "27/06/2022",
    title: "Introducción a git, github & gitflow",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-iIKo9XmnVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "24/06/2022",
    title: "Live-code Session",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/RabW8B1188s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "24/06/2022",
    title: "animando un poco nuestro CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/WdiKJyfM-Lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "24/06/2022",
    title: "Pseudo elements y classes CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/5y7vky0snqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

let cardsContainer = document.querySelector(".container__cards");
let info = document.querySelector(".list__item");

for (i = 0; i < course.length; i++) {
  console.log(course[i].title);
  (cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
  ${course[i].video}
  <div class="card__text-container">
  <div><h2>${course[i].title}</h2>
  <span>${course[i].date}</span></div>
  </div>
  </div>
  `),
    (info.innerHTML += `<a href="#${course[i].date}" >
  <p>${course[i].title}</p>
  <span>${course[i].date}</span>`);
}

// 
// const get = async () => {
//   let data = await axios.get(
//     "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"
//   );
//   console.log(data.data.communityCategories);
//   const course = data.data.communityCategories;
//   print(course);
// };

// This logs errors when the app gets from the API on page load