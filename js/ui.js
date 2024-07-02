import { nav } from './games.js';
import {details} from './details.js';
class Data
{

    constructor()
    {
        this.data =[];
        this.row = document.querySelector('.rd');
        this.container = document.querySelector('.dataCon');
        this.spinner = document.querySelector('.spinner');
    }
    async getData(value)
    {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${value}`;
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
            console.log(this.data);
        } catch (error) {
            console.error(error);
        }
    }

    async displayData(value) 
    {

        await this.getData(value);
        let row = this.row;
        console.log(row);
        const data = this.data;
        console.log(this.data);
        const len = data.length;
        console.log(len);
        let cartoona = '';
        for (let i = 0; i < len; i++) 
        {
            const element = data[i];
            cartoona += `<div class="col">
            <div class="card border-1 bg-transparent h-100">
              <div class="content p-3">
                <img src="${element.thumbnail}" class="card-img-top" alt="game">
                <div class="card-body text-start ps-0 ">
                  <div class="kind d-flex justify-content-between align-items-center">
                    <h5 class="card-title text-white  ">${element.title}</h5>
                    <h5 class="card-title text-white free ">Free</h5>
                  </div>
                  
                  <p class="card-text text-center pb-4">${element.short_description}</p>
                </div>
              </div>
              
              <div class="card-footer d-flex justify-content-between align-items-center">
                <small >${element.genre}</small>
                <small >${element.platform}</small>
              </div>
            </div>
          </div>`;
        }
        console.log(row);
        row.innerHTML = cartoona;
        this.spinner.classList.add('d-none');
        this.cardClick();
    }

    cardClick() {

        console.log('card');
        let card = document.querySelectorAll('.card');
        let len = card.length;
        console.log(card);
        for (let i = 0; i < len; i++) 
        {
            card[i].addEventListener('click', (e) => {
                this.spinner.classList.remove('d-none');
                let container = this.container;
                let data = this.data;
                container.classList.add('d-none');
                nav.removeNav();
                details.displayData(data[i].id);
            });
        }
        
    }
    
}



export let data = new Data();

await data.displayData("mmorpg");
data.cardClick();