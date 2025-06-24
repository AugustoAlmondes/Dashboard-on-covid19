import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css'; // Importando como CSS Module

function Dropdown({ options, selectedOption, setSelectedOption }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            <label>Selecionar pais: </label>
            <div className={styles.dropdown} ref={dropdownRef}>
                <button onClick={toggleDropdown} className={styles.dropdownToggle}>
                    {selectedOption || 'Global'}
                </button>
                <ul className={`${styles.dropdownMenu} ${isOpen ? styles.menuOpen : ''}`}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;