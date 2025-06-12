
function openRecipe(recipeNum) {
     document.getElementById('recipe' + recipeNum).style.display = 'flex';
}

// Закрытие модального окна
function closeModal(recipeNum) {
    document.getElementById('recipe' + recipeNum).style.display = 'none';
}

// Лайк рецепта
function likeRecipe(recipeNum) {
    const likeElement = document.getElementById('likes' + recipeNum);
    let likes = parseInt(likeElement.textContent);
    likes++;
    likeElement.textContent = likes;
            
    // Анимация сердца
    const heart = document.querySelector(`#recipe${recipeNum} .like-btn`);
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 300);
}

// Поиск рецептов
const searchInput = document.querySelector('.search-input');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
            
    recipeCards.forEach(card => {
        const title = card.querySelector('.recipe-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

        // Закрытие модального окна при клике вне его
        window.onclick = function(event) {
            document.querySelectorAll('.recipe-modal').forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }
