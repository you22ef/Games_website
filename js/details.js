import { nav } from "./games.js";
import { data } from "./ui.js";
class Details
{

    constructor()
    {
        
        this.data;
        this.display = document.querySelector('.display .row');
        this.parent = document.querySelector('.display');
        this.close = document.querySelector('.display .btn-close');
        this.container = document.querySelector('.dataCon');
        this.spinner = document.querySelector('.spinner');
    }
    async getData(id)
    {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ef41ef2867msh8cb94ea7058ece3p1026c2jsn9533f0d7f6b4',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            this.data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async displayData(id) 
    {
        let p = this.parent;
        p.classList.remove('d-none');
        await this.getData(id);
        let display = this.display;
        const data = this.data;
        let cartoona = `<div class="col-lg-4">
        <h1 class="text-white h3 pb-4">Details Game</h1>
        <img src="${data.thumbnail}"  alt="game">
      </div>
      <div class="col-lg-8 pt-5">
        <div class="title pt-3 text-white">
          <h1 class="h3" >Title: ${data.title}</h1>
        </div>
        <div class="text text-white">
          <p>Category: <span>${data.genre}</span></p>
          <p>Platform: <span>${data.platform}</span></p>
          <p>Status: <span>${data.status}</span></p>
          <p class="fs-p">${data.description}</p>
        </div>
        <a class="btn btn-outline-warning text-white mb-4" target="_blank" href="${data.game_url}">Show Game</a>
      </div>`;
        
        display.innerHTML = cartoona;
        this.spinner.classList.add('d-none');

    }


    closeButton()
    {
        let close = this.close;
        console.log(this.parent);
        close.addEventListener('click', async () => {
            this.spinner.classList.remove('d-none');
            let p = this.parent;
            p.classList.add("d-none");
            let display = this.display;
            display.innerHTML = "";
            let container = this.container;
            container.classList.remove("d-none");
            nav.displayNav();
            if(nav.value == undefined)
            {
                await data.displayData("mmorpg");
            }
            else
            {
                await data.displayData(nav.value);
            }
            
        });

    }
    
}

export let details = new Details();

details.closeButton();

