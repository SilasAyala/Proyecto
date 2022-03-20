import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";

const MainNavigation = (props) => {
    return(
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span/>
                <span/>
                <span/>
            </button>

            <h1 className="main-navigation__title">
                <Link to="/"> Materiales de Reciclaje </Link>
            </h1>
        </MainHeader>
    );
}

export default MainNavigation;