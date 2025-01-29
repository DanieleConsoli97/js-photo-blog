const cards = document.getElementById("cards_main")
   
console.log(cards)
axios
      .get("https://lanciweb.github.io/demo/api/pictures/")
      .then((rensponse) => {
       
         const data = rensponse.data
         data.forEach(element => {
            console.log(element)
            console.log(element.date)
            console.log(element.title)
            cards.innerHTML+=
            `
            <div class="card">
                    <picture class="container_img">
                        <img class="img" src=${element.url} alt="">
                    </picture>
                    <div class="text">
                        <div class="date_cont">
                            <p class="date">${element.date}</p>
                        </div>
                        <div class="place_cont">
                            <p class="place">${element.title}</p>
                        </div>
                    </div>
                </div>
            `
    });

      });
     
