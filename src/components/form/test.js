import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event/';

test('koşulların onaylanmasını göre buton aktifliği', async () => {
  render(<Form />);

  // user'ın kurulumunu yapma
  const user = userEvent.setup();

  // gerekli elemanları alma
  const termsCheck = screen.getByRole('checkbox', {
    name: 'Kosulları okudum ve kabul ediyorum',
  });

  const orderBtn = screen.getByRole('button', {
    name: /siparişi onayla/i,
  });

  // buton inaktif olmasını kontrol etme
  expect(orderBtn).toBeDisabled();

  //checbox'ın tiklenmemiş olmasını kontrol etme
  expect(termsCheck).not.toBeChecked();

  // checboxı tikle ve butonun aktif olmasını kontrol et
  await user.click(termsCheck);
  expect(orderBtn).toBeEnabled();

  // tiki kaldır ve butonun inaktif olmasını kontrol et
  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});

test('onayla butonun üstüne mouse gelmesine göre bildirim', async () => {
  render(<Form />);

  const user = userEvent.setup();

  // checbox'ı çağırma
  const termsCheck = screen.getByRole('checkbox', {
    name: 'Kosulları okudum ve kabul ediyorum',
  });

  // butonu çağırma
  const button = screen.getByRole('button', {
    name: /siparişi onayla/i,
  });

  //   checbox'ı tikleme
  await user.click(termsCheck);

  // mouse'u butonun üzerine getirme
  fireEvent.mouseEnter(button);

  // bildirimi çağırma
  const popup = screen.getByText(
    'Size gerçekten bir şey teslim etmiyeceğiz'
  );

  // bildirim görünüyor mu ?
  expect(popup).toBeVisible();

  //   mouse'u üzerinden çekme
  fireEvent.mouseLeave(button);

  //   butonun görnmediğini kontrol etme
  expect(popup).not.toBeVisible();
});