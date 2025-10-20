// Sample products data
const products = [
    { id: 1, name: 'Wireless Earbuds', price: 149, description: 'High-quality wireless earbuds with active noise cancellation and long battery life.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop' },
    { id: 2, name: 'Over-Ear Headphones', price: 299, description: 'Comfortable over-ear headphones with superior sound quality and noise isolation.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop' },
    { id: 3, name: 'Gaming Headset', price: 199, description: 'Immersive gaming headset with surround sound and built-in microphone.', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=200&fit=crop' },
    { id: 4, name: 'Bluetooth Headphones', price: 249, description: 'Wireless Bluetooth headphones perfect for music lovers and daily use.', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop' },
    { id: 5, name: 'Noise-Cancelling Earbuds', price: 179, description: 'Advanced noise-cancelling earbuds for immersive listening in any environment.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9bf1d?w=300&h=200&fit=crop' },
    { id: 6, name: 'Sports Earphones', price: 99, description: 'Sweat-resistant earphones designed for active lifestyles and workouts.', image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop' },
    { id: 7, name: 'Studio Headphones', price: 349, description: 'Professional studio headphones with flat response for accurate sound monitoring.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop' },
    { id: 8, name: 'Wireless Gaming Headset', price: 229, description: 'Wireless gaming headset with low latency and crystal-clear communication.', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=200&fit=crop' },
    { id: 9, name: 'In-Ear Monitors', price: 199, description: 'High-fidelity in-ear monitors for audiophiles seeking premium sound.', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop' },
    { id: 10, name: 'Foldable Headphones', price: 159, description: 'Portable foldable headphones that are easy to carry and store.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop' },
    { id: 11, name: 'Bass-Boosted Earbuds', price: 129, description: 'Earbuds engineered for deep bass and powerful sound performance.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop' },
    { id: 12, name: 'Open-Back Headphones', price: 279, description: 'Open-back design headphones for natural sound and spatial awareness.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop' },
    { id: 13, name: 'Kids Headphones', price: 89, description: 'Safe, comfortable headphones designed specifically for children.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop' },
    { id: 14, name: 'ANC Over-Ear Headphones', price: 329, description: 'Over-ear headphones with advanced active noise cancellation technology.', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop' },
    { id: 15, name: 'True Wireless Earbuds', price: 169, description: 'Truly wireless earbuds with seamless connectivity and compact charging case.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9bf1d?w=300&h=200&fit=crop' },
    { id: 16, name: 'DJ Headphones', price: 399, description: 'Professional DJ headphones with detachable cable and rugged build.', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=200&fit=crop' },
    { id: 17, name: 'Waterproof Earphones', price: 119, description: 'Waterproof earphones resistant to sweat and light rain for outdoor use.', image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop' },
    { id: 18, name: 'Hi-Res Audio Headphones', price: 449, description: 'High-resolution audio headphones for audiophiles demanding the best.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop' },
    { id: 19, name: 'Compact Earbuds', price: 79, description: 'Ultra-compact earbuds perfect for travel and everyday carry.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop' },
    { id: 20, name: 'Wireless Headset', price: 189, description: 'Versatile wireless headset ideal for calls, music, and gaming.', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop' },
    { id: 21, name: 'Bone Conduction Headphones', price: 259, description: 'Innovative bone conduction headphones that leave ears open for ambient sounds.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop' },
    { id: 22, name: 'Wireless Neckband Earphones', price: 139, description: 'Comfortable neckband earphones with wireless connectivity and long battery life.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop' },
    { id: 23, name: 'Audiophile Headphones', price: 499, description: 'Premium audiophile headphones designed for the most discerning music lovers.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop' },
    { id: 24, name: 'Kids Wireless Earbuds', price: 69, description: 'Safe and fun wireless earbuds designed specifically for children with parental controls.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9bf1d?w=300&h=200&fit=crop' },
    { id: 25, name: 'Noise-Isolating Earphones', price: 159, description: 'Passive noise-isolating earphones for focused listening without active cancellation.', image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop' },
    { id: 26, name: 'Bluetooth Speaker Headphones', price: 219, description: 'Headphones with built-in Bluetooth speaker for sharing music with friends.', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=200&fit=crop' },
    { id: 27, name: 'Foldable Bluetooth Headphones', price: 189, description: 'Portable foldable Bluetooth headphones with quick charging and voice assistant.', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop' },
    { id: 28, name: 'Wireless Earbuds Pro', price: 299, description: 'Professional-grade wireless earbuds with premium sound and advanced features.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c9bf1d?w=300&h=200&fit=crop' },
    { id: 29, name: 'Gaming Earbuds', price: 149, description: 'High-performance gaming earbuds with low latency and immersive sound.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop' },
    { id: 30, name: 'Travel Headphones', price: 229, description: 'Compact travel headphones with noise cancellation and comfortable fit for long flights.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop' }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = count;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    showNotification('Added to cart!', 'success');
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function displayProducts(filteredProducts = products) {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return; // Prevents errors on pages without #products

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="col-md-4 mb-4 fade-in">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h5>${product.name}</h5>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                <a href="product-detail.html?id=${product.id}" class="btn btn-secondary ms-2">View Details</a>
            </div>
        </div>
    `).join('');
}

function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        const container = document.getElementById('product-detail');
        if (container) container.innerHTML = '<p>Product not found.</p>';
        return;
    }

    const name = document.getElementById('product-name');
    const desc = document.getElementById('product-description');
    const price = document.getElementById('product-price');
    const image = document.getElementById('product-image');
    const btn = document.getElementById('add-to-cart');

    if (name) name.textContent = product.name;
    if (desc) desc.textContent = product.description;
    if (price) price.textContent = `$${product.price}`;
    if (image) image.src = product.image;
    if (btn) btn.onclick = () => addToCart(product.id);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        if (cartTotalElement) cartTotalElement.textContent = 'Total: $0';
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5>${item.name}</h5>
                    <p>$${item.price} each</p>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm me-2" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm ms-2" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="btn btn-outline-danger btn-sm ms-3" onclick="removeItem(${item.id})">🗑️</button>
                </div>
                <div class="text-end">
                    <p class="fw-bold">$${item.price * item.quantity}</p>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotalElement) cartTotalElement.textContent = `Total: $${total}`;
}

function checkout() {
    alert('Checkout functionality not implemented yet.');
}

// Dark mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    const btn = document.getElementById('dark-mode-toggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

function loadDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('dark-mode-toggle');
        if (btn) btn.textContent = '☀️';
    }
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    displayProducts(filtered);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadDarkMode();
    updateCartCount();

    if (document.getElementById('products')) displayProducts();
    if (document.getElementById('product-name')) displayProductDetails();
    if (document.getElementById('cart-items')) displayCart();

    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn) checkoutBtn.onclick = checkout;

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.addEventListener('input', handleSearch);
});
