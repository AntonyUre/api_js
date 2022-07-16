const get = async () => {
  let data = await axios.get(
    "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"
  );
  console.log(data.data.communityCategories);
  const course = data.data.communityCategories;
  print(course);
};
get();

let cardsContainer = document.querySelector(".container__cards");
let info = document.querySelector(".list__video");

function print(course) {
  for (let i = 0; i < course.length; i++) {
    const element = course[i];

    console.log(element.icon);
    if (element.name !== "testeo" && element.background !== null) {
      cardsContainer.innerHTML += `
    <div class="card__item">
    <div class="card__img-container">
    <img class="card__background"
    src="${element.background}"
    alt="Logo LarnU"/>  
    <img class="card__logo"
    src="${element.icon}"
    alt="Logo LarnU"/> 
    </div>
  <div class="card__text-container">
  <div><h2>${element.name}</h2>
  </div>
  </div>
    `, info.innerHTML += `<a href="#${element.name}" >
    <p>${element.name}</p>
    <span>Usuarios ${element.users}</span>`;
    }
  }
}
