import Weather from "../Api.js";

const Header = ()=>{
    return(
        <header className='Header'>
            <input type='search' placeholder='Pesquise aqui...' className='search'/>

            <button type='button' onClick={Weather}><ion-icon name="search-outline"></ion-icon></button>
        </header>
    );
}

export default Header;