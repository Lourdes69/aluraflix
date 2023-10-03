import "./Header.css"

function Header(){
    return  <header className="header">
        <img src="../img/logo.png" alt="logo"/>
        <nav className="nav">
            <ul>
                <li>Inicio</li>
                <li>Peliculas</li>
                <li>Series</li>
                <li>Dramas</li>
            </ul>
            {/* <input type="text" placeholder="Buscar"></input> */}
           
        </nav>
    </header>
}

export default Header