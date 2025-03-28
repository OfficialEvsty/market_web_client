import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className='header'>
                <div>
                    <image></image>
                </div>
                <nav>
                    <input/>
                    <button></button>
                    <button></button>
                </nav>
            </header>
            <main className='content'>
                <Outlet />
            </main>
            <footer className='footer'>

            </footer>
        </>
    )
}

export default Layout