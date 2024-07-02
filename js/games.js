import { data } from "./ui.js";
class Nav
{
    constructor()
    {
        this.background = document.querySelector('.background');
        this.navbar = document.querySelector('.navbar');
        this.links = document.querySelectorAll('.navbar .nav-link');
        this.value;
    }
    displayNav()
    {
        let background = this.background;
        let navbar = this.navbar;
        background.classList.remove('d-none');
        navbar.classList.remove('d-none');
    }
    removeNav()
    {
        let background = this.background;
        let navbar = this.navbar;
        background.classList.add('d-none');
        navbar.classList.add('d-none');
    }
    changeSection()
    {   
        let links = this.links;
        let len = links.length;
        for (let i = 0; i < len; i++) 
        {
            links[i].addEventListener('click', () => 
            {
                data.spinner.classList.remove('d-none');
                let active = document.querySelector('.active');
                active.classList.remove('active');
                links[i].classList.add('active');
                let value = links[i].innerText;
                this.value = value;
                data.displayData(value.toLowerCase());
            });
        }
        
    }
}



export let nav = new Nav();

nav.displayNav();
nav.changeSection()