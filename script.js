document.addEventListener('DOMContentLoaded', () => {
  // Находим все секции с карточками
  const sections = document.querySelectorAll('.card-container');

  sections.forEach((container) => {
    const leftArrow = container.parentElement.querySelector('.arrow-left');
    const rightArrow = container.parentElement.querySelector('.arrow-right');

    // Проверяем, нужна ли прокрутка
    const checkScroll = () => {
      const isOverflowing = container.scrollWidth > container.clientWidth;
      leftArrow.classList.toggle('hidden', !isOverflowing || container.scrollLeft === 0);
      rightArrow.classList.toggle('hidden', !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth);
    };

    // Прокрутка влево
    leftArrow.addEventListener('click', () => {
      container.scrollLeft -= 260; // Прокручиваем на ширину карточки + отступ
      setTimeout(checkScroll, 200); // Проверяем состояние после анимации
    });

    // Прокрутка вправо
    rightArrow.addEventListener('click', () => {
      container.scrollLeft += 260; // Прокручиваем на ширину карточки + отступ
      setTimeout(checkScroll, 200); // Проверяем состояние после анимации
    });

    // Проверяем состояние при загрузке и изменении размера окна
    checkScroll();
    window.addEventListener('resize', checkScroll);

    // Обновляем видимость стрелок при прокрутке
    container.addEventListener('scroll', checkScroll);
  });
});
