const cards = document.querySelector(".cards_main");
let modalAppend = document.querySelector(".append")
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((rensponse) => {
  const data = rensponse.data;
  let cardsIt = [];
  
  data.forEach((element) => {
    const { date, id, title, url } = element;
    cards.innerHTML += `
            <div class="card" data-attribute="${id}">
                    <img class="circle" src="./img/background/pin.svg" alt="">
                    <picture class="container_img">
                        <img class="img" src=${url} alt="">
                    </picture>
                    <div class="text">
                        <div class="date_cont">
                            <p class="date">${date}</p>
                        </div>
                        <div class="place_cont">
                            <p class="place">${title}</p>
                        </div>
                    </div>
                </div>
            `;
    cardsIt = document.querySelectorAll(".img");
  });
  let imgCorrente =""
  cardsIt.forEach((element) => {
    element.addEventListener("click", function () {
        imgCorrente = this.src
        modalAppend.innerHTML =`
        <div class="modale">
        <div class="modal-content">
            <button class="close">&times;</button>
            <img src="${this.src}" alt="">
          </div>
        </div>
        `
    });
  });
});

    
