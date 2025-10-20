import React, { useState, useEffect } from 'react';

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    // Обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Кнопка гамбургер-меню */}
            <div 
                className={`nav-button ${isMenuOpen ? 'active' : ''}`} 
                id="navToggle"
                onClick={toggleMobileMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Навигация с состоянием меню */}
            <nav className={`nav-header ${isMenuOpen ? 'active' : ''}`}>
                <ul className="header-list">
                    <li><a href="#" onClick={closeMobileMenu}>Главная</a></li>
                    <li><a href="#" onClick={closeMobileMenu}>Что такое GPT?</a></li>
                    <li><a href="#" onClick={closeMobileMenu}>Open AI</a></li>
                    <li><a href="#" onClick={closeMobileMenu}>Кейсы</a></li>
                    <li><a href="#" onClick={closeMobileMenu}>Библиотека</a></li>
                </ul>
                <div className="btn desktop-buttons">
                    <button className="btn-sign">Войти</button>
                    <button className="btn-sign-primary">Регистрация</button>
                </div>
                <div className="mobile-buttons">
                    <button className="btn-sign">Войти</button>
                    <button className="btn-sign-primary">Регистрация</button>
                </div>
            </nav>
        </>
    );
}

export default MobileMenu;