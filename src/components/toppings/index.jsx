import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Toppings = () => {
  const [tops, setTops] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3060/soslar')
      .then((res) => setTops(res.data));
  }, []);

  const handleChange = (e, top) => {
    // paramtre olarak gelen elemanı sepetten çıkartma
    const filtred = basket.filter((i) => i.name !== top.name);

    // checked değeri true ise elemanı ekler
    // false ise çıkararır
    e.target.checked
      ? setBasket([...basket, top])
      : setBasket(filtred);
  };

  return (
    <div className="container text-dark my-5">
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi 2$</p>
      <h2>Soslar Ücreti: {basket.length * 2} $</h2>

      <div className="row gap-5 mt-4">
        {tops.map((top) => (
          <div
            key={top.name}
            className="d-flex flex-column align-items-center"
            style={{ width: '150px' }}
          >
            <img
              className="img-fluid"
              src={top.imagePath}
              alt="top"
            />
            <label className="text-nowrap" htmlFor={top.name}>
              {top.name}
            </label>
            <input
              id={top.name}
              type="checkbox"
              onChange={(e) => handleChange(e, top)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;