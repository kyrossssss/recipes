function openRecipe(recipeNum) {
     document.getElementById('recipe' + recipeNum).style.display = 'flex';
}


function closeModal(recipeNum) {
    document.getElementById('recipe' + recipeNum).style.display = 'none';
}


function likeRecipe(recipeNum) {
    const likeElement = document.getElementById('likes' + recipeNum);
    let likes = parseInt(likeElement.textContent);
    likes++;
    likeElement.textContent = likes;
            
  
    const heart = document.querySelector(`#recipe${recipeNum} .like-btn`);
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 300);
}


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

       
        window.onclick = function(event) {
            document.querySelectorAll('.recipe-modal').forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }
    
function openRecipe(recipeNum) {
    try {
        const modal = document.getElementById('recipe' + recipeNum);
        if (!modal) throw new Error('Modal not found');
        modal.style.display = 'flex';
    } catch (error) {
        console.error('Error opening recipe:', error);
    }
}


function openCreateRecipeModal() {
    document.getElementById('createRecipeModal').style.display = 'flex';
}

function closeModal(modalId) {
    if (modalId === 'create') {
        document.getElementById('createRecipeModal').style.display = 'none';
    } else {
        document.getElementById('recipe' + modalId).style.display = 'none';
    }
}

function addIngredient() {
    const ingredientsList = document.getElementById('ingredientsList');
    const newIngredient = document.createElement('div');
    newIngredient.className = 'ingredient-item';
    newIngredient.innerHTML = `
        <input type="text" class="ingredient-input" placeholder="Ингредиент">
        <button type="button" class="remove-ingredient" onclick="removeIngredient(this)">×</button>
    `;
    ingredientsList.appendChild(newIngredient);
}

function removeIngredient(button) {
    button.parentElement.remove();
}

document.getElementById('recipeImage').addEventListener('change', function(e) {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = '';
    
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            preview.appendChild(img);
        }
        
        reader.readAsDataURL(file);
    }
});


document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const recipeName = document.getElementById('recipeName').value;
    const recipeAuthor = document.getElementById('recipeAuthor').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;
    

    const ingredients = [];
    document.querySelectorAll('.ingredient-input').forEach(input => {
        if (input.value.trim() !== '') {
            ingredients.push(input.value.trim());
        }
    });
    

    const imageFile = document.getElementById('recipeImage').files[0];
    let imageUrl = '';
    if (imageFile) {
        imageUrl = URL.createObjectURL(imageFile);
    } else {
        imageUrl = 'placeholder.jpg'; 
    }
    

    const newRecipeId = Date.now(); 
    createNewRecipeCard(newRecipeId, recipeName, recipeAuthor, imageUrl);
    createNewRecipeModal(newRecipeId, recipeName, recipeAuthor, imageUrl, ingredients, recipeInstructions);
    
    closeModal('create');
    this.reset();
    document.getElementById('imagePreview').innerHTML = '';
});

function createNewRecipeCard(id, name, author, imageUrl) {
    const recipeContainer = document.querySelector('.recipe-container');
    
    const newCard = document.createElement('div');
    newCard.className = 'recipe-card';
    newCard.setAttribute('onclick', `openRecipe(${id})`);
    newCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}" class="recipe-image">
        <div class="recipe-info">
            <h3 class="recipe-title">${name}</h3>
            <p class="recipe-author">Автор: ${author}</p>
        </div>
    `;
    
    recipeContainer.appendChild(newCard);
}

function createNewRecipeModal(id, name, author, imageUrl, ingredients, instructions) {
    const newModal = document.createElement('div');
    newModal.id = `recipe${id}`;
    newModal.className = 'recipe-modal';
    
    const ingredientsList = ingredients.map(ing => `<li>${ing}</li>`).join('');
    
    newModal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal(${id})">&times;</span>
            <h2>${name}</h2>
            <p><strong>Автор:</strong> ${author}</p>
            <img src="${imageUrl}" style="width:100%; max-height:300px; object-fit:cover; margin:10px 0;">
            <h3>Ингредиенты:</h3>
            <ul>${ingredientsList}</ul>
            <h3>Приготовление:</h3>
            <p>${instructions.replace(/\n/g, '<br>')}</p>
            <button class="like-btn" onclick="likeRecipe(${id})">❤️ <span class="like-count" id="likes${id}">0</span></button>
        </div>
    `;
    
    document.body.appendChild(newModal);
}

