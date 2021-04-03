import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredientImg.module.css';

//Importing images
import BreadTop from '../../../assets/ingredients/bread/top/shutterstock_1445626547_33.png';
import BreadBottom from '../../../assets/ingredients/bread/bottom/shutterstock_1445626547_40.png';
import Meat from '../../../assets/ingredients/meat/shutterstock_1445626547_14.png';
import Cheese from '../../../assets/ingredients/cheese/shutterstock_1445626547_17.png';

class BurgerIngredientImg extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'bread-top':
        ingredient = (
          <div>
            <img className={classes.IngredientImg} src={BreadTop} alt='Logo' />
          </div>
        );
        break;
      case 'bread-bottom':
        ingredient = (
          <div>
            <img
              className={classes.IngredientImg}
              src={BreadBottom}
              alt='Logo'
            />
          </div>
        );
        break;
      case 'meat':
        ingredient = (
          <div>
            <img className={classes.IngredientImg} src={Meat} alt='Logo' />
          </div>
        );
        break;
      case 'cheese':
        ingredient = (
          <div>
            <img className={classes.IngredientImg} src={Cheese} alt='Logo' />
          </div>
        );
        break;

      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredientImg.propTypes = { type: PropTypes.string };

export default BurgerIngredientImg;
