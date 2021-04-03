import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredientImg from './BurgerIngredientImg/BurgerIngredientImg';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredientImg type='bread-top' />
      <BurgerIngredientImg type='cheese' />
      <BurgerIngredientImg type='meat' />
      <BurgerIngredientImg type='bread-bottom' />
    </div>
  );
};

export default burger;
