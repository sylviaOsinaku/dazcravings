import React, { useState } from 'react';
import CakeData from '../../Cake.json';
import classes from './CakeMeals.module.css';
import DisplayInnerMeal from './DisplayInnerMeal';
import CakeMeal from './CakeMeal';
const CakeMeals = props => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const removeModalHandler = () => {
    setDisplayModal(false);
  };
  // const addModalData = data => {

  // };

  return (
    <React.Fragment>
      {displayModal && (
        <DisplayInnerMeal
          onConfirm={removeModalHandler}
          innerItem={modalData}
        />
      )}
      <div className={classes.container}>
        {CakeData.map(data => {
          return (
            <CakeMeal
              onClick={() => {
                setModalData(data);
                setDisplayModal(true);
              }}
              key={data.id}
              price={data.price}
              image={data.image}
              cakeName={data.cakeName}
              data-mydata={data}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CakeMeals;
