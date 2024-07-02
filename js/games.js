class Nav
{
    constructor()
    {
        this.background = document.querySelector('.background');
        this.navbar = document.querySelector('.navbar');
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
}



export let nav = new Nav();

nav.displayNav();