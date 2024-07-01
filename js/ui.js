class Data
{

    constructor()
    {
        this.data =[];
        this.row = document.querySelector('.row');
    }
    async getData()
    {
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg';
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

    async displayData() 
    {

        await this.getData();
        let row = this.row;
        const data = this.data;
        console.log(this.data);
        const len = data.length;
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

    }
    
}



let a = new Data();

a.displayData();