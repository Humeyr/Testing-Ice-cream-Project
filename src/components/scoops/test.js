import {
    findAllByRole,
    render,
    screen,
  } from '@testing-library/react';
  import Scoops from './Scoops';
  import userEvent from '@testing-library/user-event';
  
  
  
  test("API'den gelen her kategori için ekrana bir kart basılır", async () => {
    render(<Scoops />);
  
    // bütün resimleri çek
    const images = await screen.findAllByRole('img', { name: 'type' });
  
    //   gelen resimlerin sayısının 4 olduğunu kontrol etme
    expect(images).toHaveLength(4);
  });
  
  test('Dondurma çeşitlerinde ekleme ve sıfırlamaya göre toplamın değişmi ', async () => {
    const user = userEvent.setup();
    render(<Scoops />);
    // gerekli elemanları alalım
  
    const total = screen.getByRole('heading', {
      name: /Price: /i,
    });
  
    // ekle butonlarını alma
    const addBtns = await screen.findAllByRole('button', {
      name: 'Add',
    });
  
    // sıfırlama butonlarını çekme
    const clearBtns = await screen.findAllByRole('button', {
      name: 'Reset',
    });
  
    // Ekleme butonlarına basılınca toplam artar
    await user.click(addBtns[0]);
  
    expect(total).toHaveTextContent('3');
  
    // vanillanın ekle butonuna çift tıklama
    await user.dblClick(addBtns[1]);
  
    expect(total).toHaveTextContent('9');
  
    // vanilnan temizleme butonuna tıklama
    await user.click(clearBtns[1]);
  
    expect(total).toHaveTextContent('3');
  });