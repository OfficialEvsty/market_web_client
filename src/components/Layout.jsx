import { Outlet } from "react-router-dom";
import "/src/styles/layout.css"
import {useRef} from "react";


const Layout = () => {

    const searchRef = useRef(null);

    // focus on input if input group was focus
    const onSearchGroupClick = () => {
        if (searchRef.current !== null) {
            const input = searchRef.current.querySelector("input");
            if (input) {
                input.focus();
            }
        }
    }

    return (
        <>
            <header>
                <img src='/assets/svg/Mesto_Logo.svg' alt='logo'></img>
                <div className='navi'>
                    <div className='search-wrapper' onClick={onSearchGroupClick} ref={searchRef}>
                        <img src='/assets/svg/Search.svg' alt='Поиск'/>
                        <input type='text' className='search-box' placeholder='Искать в Месте'/>
                    </div>
                    <button className='header-btn'>
                        <img src='/assets/svg/Send.svg' alt='локация'/>
                        Москва, МО
                        <img src='/assets/svg/ChevronRight.svg' alt='список'/>
                    </button>
                    <button className='header-btn'>
                        <img src='/assets/svg/User.svg' alt='user'/>
                        Войти</button>
                </div>
            </header>
            <main className='content'>
                <Outlet />
            </main>
            <footer>
                <div className='about'>
                    <div className='pre-wrapper'>
                        <img src='/assets/svg/Mesto_Logo_Large.svg' alt='preview-logo'/>
                        <p>Место, где малый бизнес может быстро и выгодно продавать свои товары потребителям через удобную онлайн-площадку</p>
                    </div>
                    <div className='info'>
                        <div className='clmn'>
                            <p>Каталог</p>
                            <p>Каталог</p>
                            <p>Каталог</p>
                        </div>
                        <div className='clmn'>f</div>
                        <div className='clmn'>f</div>
                        <div className='clmn'>f</div>
                    </div>
                </div>
                <div className='copyright'>
                    © 2025 ООО «Место»
                </div>
            </footer>
        </>
    )
}

export default Layout