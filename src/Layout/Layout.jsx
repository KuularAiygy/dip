import { Link, Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
               <div>
                    <div> <Link to="/">Главная</Link></div>
                    <div> <Link to="/about">О нас</Link></div>
                </div>
                <main>
                    <Outlet/>
                </main>
                <footer>sadasdassda</footer>
        </>
    )
}

export default Layout