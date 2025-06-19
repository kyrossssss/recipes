function showFullSize(imgElement) {
    const fullImg = document.getElementById('full-img');
    // Получаем путь из data-src
    fullImg.src = imgElement.dataset.src;

    // Показываем модальное окно
    document.getElementById("full-image").classList.add("show");

    // Обработчик кликов для закрытия окна
    document.getElementById("full-image").addEventListener("click", function(event) {
        if (event.target.id === "full-image" || event.target.classList.contains("close-btn")) {
            hideFullScreen();
        }
    });
}

// Функция для закрытия модального окна
function hideFullScreen() {
    document.getElementById("full-image").classList.remove("show");
}
// Функция для открытия модального окна с увеличенным изображением
function zoomImage(imageElement) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-modal');
  closeBtn.textContent = '×';
  closeBtn.onclick = () => {
    modalOverlay.remove(); // Удаляем модальное окно при закрытии
  };

  const modalImage = document.createElement('img');
  modalImage.src = imageElement.src;
  modalImage.alt = imageElement.alt;
  modalImage.classList.add('modal-image');

  modalOverlay.appendChild(closeBtn);
  modalOverlay.appendChild(modalImage);

  document.body.appendChild(modalOverlay); // Добавляем модальное окно в DOM
}

// Закрываем модальное окно при клике вне его
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.remove();
  }
});