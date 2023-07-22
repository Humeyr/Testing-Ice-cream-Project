import Scoops from '../../components/scoops/index';
import Toppings from '../../components/toppings/index';
import Form from '../../components/form/index';

const MainPage = () => {
  return (
    <div>
      {/* Kategoriler */}
      <Scoops />
      {/* Soslar */}
      <Toppings />
      {/* Form */}
      <Form />
    </div>
  );
};

export default MainPage;