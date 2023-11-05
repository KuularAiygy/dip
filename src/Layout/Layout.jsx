import { Link, Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
               <div className="menu">
                    <Link to="/" className="llink">Главная</Link>
                    <Link to="/about" className="llink">О нас</Link>
                </div>
                <main >
                    <Outlet/>
                </main>
                <footer>sadasdassda</footer>
        </>
    )
}

export default Layout