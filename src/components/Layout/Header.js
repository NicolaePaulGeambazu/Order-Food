import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg';

const Header = props => {
    return<Fragment>
        <header>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage} alt="few plate with food"/>
        </div>
    </Fragment>
};

export default Header;