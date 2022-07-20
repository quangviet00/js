import Home from "../pages/home";

const Header = {
    render: function() {
        return /*html*/`
        <div>
            <a href="/">Home Page</a>
            <a href="/lien-he">Lien he</a>
            <a href="/gioi-thieu">Gioi thieu</a>
        <div class="ipn">
            <input type="text" class="input" id = "input" placeholder="Search for names..">
            <button class="bt btn-primary" id="btn">Tim Kiem</button>
            </div>
        </div>
        `
    },


   
}

export default Header