import { Outlet } from "react-router-dom";
import "/src/styles/layout.css"
import {useRef, useState} from "react";
import {LoginButton} from "./buttons/LoginButton.jsx";

const Layout = () => {

    const searchRef = useRef(null);
    const [placeholder, setPlaceholder] = useState("Искать в Месте");



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
                    <input type='text' className='search-box' maxLength='100' placeholder={placeholder} onFocus={() => {setPlaceholder('')}} onBlur={() => {setPlaceholder('Искать в Месте')}}/>

                </div>
                <button className='header-btn'>
                    <img src='/assets/svg/Send.svg' alt='локация'/>
                    Москва, МО
                    <img src='/assets/svg/ChevronRight.svg' alt='список'/>
                </button>
                <LoginButton/>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className='footer'>
            <div className='about'>
                <div className='pre-wrapper'>
                    <img src='/assets/svg/Mesto_Logo_Large.svg' alt='preview-logo'/>
                    <p>Место, где малый бизнес может быстро и выгодно продавать свои товары потребителям через удобную онлайн-площадку</p>
                </div>
                <div className='info'>
                    <div className='clmn'>
                        <h3>Каталог</h3>
                        <p>Каталог</p>
                        <p>Каталог</p>
                        <p>Каталог</p>

                    </div>
                    <div className='clmn'>
                        <h3>О месте</h3>
                        <p>Каталог</p>
                        <p>Каталог</p>
                        <p>Каталог</p>
                    </div>
                    <div className='clmn'>
                        <h3>О компании</h3>
                        <p>Каталог</p>
                        <p>Каталог</p>
                        <p>Каталог</p></div>
                    <div className='clmn'>
                        <h3>Контакты</h3>
                        <p>examplemail@mail.ru</p>
                        <p>7915-423-43-23</p>
                        <p>Улица Всемирного кота, дом 15</p>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <span>© 2025 ООО «Место»</span>
                <span>Обратная связь</span>
            </div>
        </footer>
    </>
    )
}

export default Layout