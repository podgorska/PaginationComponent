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