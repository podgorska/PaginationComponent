// Zadanie 2.
// Napisz komponent paginacji, który bedzie przyjmowal propsy:
// itemsCount:
// itemsPerPage:
// currentPage:
// onChange:
//
// paginacja ma zawsze wyswietlac:
// strzalke do tylu
// maksymalnie trzy numerki
// strzalke do przodu
// strzalki maja sie blokowac w uzasadnionych przypadkach
import React from 'react';
import arrow from './arrow.svg';
import './PaginationComponent.css';

const PaginationComponent = ({
    itemsCount,
    itemsPerPage,
    currentPage,
    onChange,
}) => (
    <div className="paginationContainer">
        <button className="button" disabled={currentPage === 1} onClick={() => onChange('previous')}>
            <img src={arrow} alt="leftArrow" />
        </button>
        <div className="currentPage">
        {currentPage}
        </div>
        <button className="button" disabled={currentPage === 999 || currentPage === Math.floor(itemsCount / itemsPerPage)} onClick={() => onChange('next')}>
            <img src={arrow} className="rightArrow" alt="rightArrow" />
        </button>
    </div>
);

export default PaginationComponent;