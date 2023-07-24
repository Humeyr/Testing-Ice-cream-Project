import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from './Toppings';

test("sos kartlarının sepet state'i üzerinde yaptığı değişim", async () => {
  render(<Toppings />);

  const user = userEvent.setup();

  //   toplam başlığını çağırma
  const total = screen.getByRole('heading', {
    name: /Price: /i,
  });

  // kiraz inputun alınması
  const cherryCheck = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  const mochiCheck = await screen.findByRole('checkbox', {
    name: /mochi/i,
  });

  // soslardan birini ekleme
  await user.click(mochiCheck);

  // toplamın yeni değerini kontrol etme
  expect(total).toHaveTextContent(2);

  // soslardan birini ekleme
  await user.click(cherryCheck);

  // toplamın yeni değerini kontrol etme
  expect(total).toHaveTextContent(4);

  // soslardan birini çıkarma
  await user.click(mochiCheck);

  // toplamın yeni değerini kontrol etme
  expect(total).toHaveTextContent(2);
});