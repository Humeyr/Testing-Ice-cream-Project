import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../card/index';

const Scoops = () => {
  const [scoopsData, setScoopsData] = useState([]);
  const [scoopBasket, setScoopBasket] = useState([]);

  useEffect(() => {
    // çeşitler verisini çekme
    axios
      .get('http://localhost:3060/cesitler')
      .then((res) => setScoopsData(res.data));
  }, []);

  // sepette aynı üründen kaç tane var
  const findAmount = (scoop) => {
    const found = scoopBasket.filter((i) => i.name === scoop.name);
    return found.length;
  };

  // sıfırlama methodu
  const handleReset = (scoop) => {
    const cleared = scoopBasket.filter((i) => i.name !== scoop.name);
    setScoopBasket(cleared);
  };

  return (
    <div className="container text-light">
      <h1 className="mt-4 text-dark">Types</h1>
      <p>3$ Each</p>

      <h2 className='text-dark'>Price: {scoopBasket.length * 3}$</h2>
      <div className="row gap-5 p-3 text-dark justify-content-between text-nowrap">
        {scoopsData.map((scoop) => {
          // renderladığımız kategoriye ait kaç ürün sepette var bulma
          const amount = findAmount(scoop);

          return (
            <Card
              scoop={scoop}
              amount={amount}
              scoopBasket={scoopBasket}
              setScoopBasket={setScoopBasket}
              handleReset={handleReset}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;