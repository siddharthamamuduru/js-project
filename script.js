
// document.addEventListener("DOMContentLoaded", () => {
//   // --- Search Suggestion Logic ---
//   const suggestionsBox = document.getElementById('suggestions');
//   const searchBox = document.getElementById('search-box');
//   const suggestionsList = ['Shirt', 'Trousers', 'Shoes', 'Dresses', 'Tops', 'Accessories'];

//   function performSearch() {
//     const query = searchBox.value.toLowerCase();
//     if (!query) {
//       suggestionsBox.style.display = 'none';
//       return;
//     }

//     const results = suggestionsList.filter(item => item.toLowerCase().includes(query));
//     displaySuggestions(results);
//   }

//   function displaySuggestions(results) {
//     if (results.length === 0) {
//       suggestionsBox.style.display = 'none';
//       return;
//     }

//     suggestionsBox.innerHTML = results.map(item => `<div onclick="selectSuggestion('${item}')">${item}</div>`).join('');
//     suggestionsBox.style.display = 'block';
//   }

//   window.selectSuggestion = function (value) {
//     searchBox.value = value;
//     suggestionsBox.style.display = 'none';
//   }

//   document.addEventListener('click', (e) => {
//     if (e.target !== searchBox) {
//       suggestionsBox.style.display = 'none';
//     }
//   });

//   searchBox.addEventListener("input", performSearch);





//   // Cart Count Logic
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   document.getElementById('cart-count').innerText = cart.length;

//   function addToCart(item) {
//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     document.getElementById('cart-count').innerText = cart.length;
//     alert(`${item.name} added to cart`);
//   }

    
// });


document.addEventListener("DOMContentLoaded", () => {
  // --- Search Suggestion Logic ---
  const suggestionsBox = document.getElementById('suggestions');
  const searchBox = document.getElementById('search-box');
  const suggestionsList = ['Shirt', 'Trousers', 'Shoes', 'Dresses', 'Tops', 'Accessories', 'Men', 'Women', 'Kids'];

  // Function to perform search when Enter key is pressed
  searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchBox.value.trim().toLowerCase();
    if (!query) {
      suggestionsBox.style.display = 'none';
      return;
    }

    // Redirect to appropriate page based on search query
    if (query.includes('men') || query.includes('shirt') || query.includes('pant') || query.includes('sport')) {
      window.location.href = './products/menproducts.html';
    } 
    else if (query.includes('women') || query.includes('dress') || query.includes('top') || query.includes('skirt')) {
      window.location.href = './products/womenproducts.html';
    } 
    else if (query.includes('kid') || query.includes('child') || query.includes('baby')) {
      window.location.href = './products/kidsproducts.html';
    } 
    else if (query.includes('accessor') || query.includes('bag') || query.includes('watch') || query.includes('jewel')) {
      window.location.href = './products/accessories.html';
    } 
    else {
      // Default search behavior - show suggestions
      const results = suggestionsList.filter(item => 
        item.toLowerCase().includes(query)
      );
      displaySuggestions(results);
    }
  }

  function displaySuggestions(results) {
    if (results.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
    }

    suggestionsBox.innerHTML = results.map(item => 
      `<div class="suggestion-item" onclick="selectSuggestion('${item}')">${item}</div>`
    ).join('');
    suggestionsBox.style.display = 'block';
  }

  window.selectSuggestion = function (value) {
    searchBox.value = value;
    suggestionsBox.style.display = 'none';
    performSearch();
  }

  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target !== searchBox && !e.target.classList.contains('suggestion-item')) {
      suggestionsBox.style.display = 'none';
    }
  });

  // Show suggestions when search box is clicked
  searchBox.addEventListener('click', () => {
    if (searchBox.value.trim() === '') {
      displaySuggestions(suggestionsList);
    }
  });

  // Cart Count Logic
  updateCartCount();

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }

  // Make the updateCartCount function available globally
  window.updateCartCount = updateCartCount;
});
