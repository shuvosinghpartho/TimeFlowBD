document.addEventListener('DOMContentLoaded', () => {
    // Sample product data (20 products)
    const products = [
        {
            id: 1,
            name: "Elegant Chrono",
            category: "chronograph",
            brand: "timeflow",
            price: 29900,
            originalPrice: 34900,
            image: "assets/watch2.jpg",
            description: "Sophistication meets functionality with this elegant chronograph timepiece."
        },
        {
            id: 2,
            name: "Classic Automatic",
            category: "automatic",
            brand: "prestige",
            price: 34900,
            originalPrice: 39900,
            image: "assets/watch3.jpg",
            description: "Timeless design, enduring quality with self-winding mechanical movement."
        },
        {
            id: 3,
            name: "Modern Minimalist",
            category: "quartz",
            brand: "elite",
            price: 19900,
            originalPrice: 24900,
            image: "assets/watch4.jpg",
            description: "Clean lines, contemporary style for the modern individual."
        },
        {
            id: 4,
            name: "Deep Sea Diver",
            category: "diver",
            brand: "timeflow",
            price: 45900,
            originalPrice: 51900,
            image: "assets/watch1.jpg",
            description: "Professional diving watch with water resistance up to 300m."
        },
        {
            id: 5,
            name: "Executive Dress",
            category: "dress",
            brand: "prestige",
            price: 27900,
            originalPrice: 32900,
            image: "assets/watch5.jpg",
            description: "Elegant dress watch perfect for formal occasions and business settings."
        },
        {
            id: 6,
            name: "Vintage Heritage",
            category: "automatic",
            brand: "heritage",
            price: 38900,
            originalPrice: 44900,
            image: "assets/watch2.jpg",
            description: "Inspired by classic designs from the golden age of watchmaking."
        },
        {
            id: 7,
            name: "Sport Chronograph",
            category: "chronograph",
            brand: "elite",
            price: 31900,
            originalPrice: 37900,
            image: "assets/watch3.jpg",
            description: "Robust sports chronograph with tachymeter bezel for active lifestyles."
        },
        {
            id: 8,
            name: "Moonphase Classic",
            category: "dress",
            brand: "prestige",
            price: 52900,
            originalPrice: 59900,
            image: "assets/watch4.jpg",
            description: "Sophisticated timepiece with moonphase complication and date display."
        },
        {
            id: 9,
            name: "Professional Diver",
            category: "diver",
            brand: "timeflow",
            price: 48900,
            originalPrice: 54900,
            image: "assets/watch5.jpg",
            description: "Certified professional diving watch with luminescent markers and bezel."
        },
        {
            id: 10,
            name: "Slim Quartz",
            category: "quartz",
            brand: "elite",
            price: 15900,
            originalPrice: 19900,
            image: "assets/watch1.jpg",
            description: "Ultra-slim profile with Japanese quartz movement for precision timekeeping."
        },
        {
            id: 11,
            name: "GMT Master",
            category: "chronograph",
            brand: "prestige",
            price: 41900,
            originalPrice: 47900,
            image: "assets/watch2.jpg",
            description: "Dual time zone functionality for frequent travelers and global professionals."
        },
        {
            id: 12,
            name: "Automatic Day-Date",
            category: "automatic",
            brand: "heritage",
            price: 36900,
            originalPrice: 42900,
            image: "assets/watch3.jpg",
            description: "Self-winding movement with day and date complications for practicality."
        },
        {
            id: 13,
            name: "Carbon Fiber Sport",
            category: "quartz",
            brand: "elite",
            price: 27900,
            originalPrice: 32900,
            image: "assets/watch4.jpg",
            description: "Lightweight carbon fiber case with sporty aesthetics and durability."
        },
        {
            id: 14,
            name: "Rose Gold Dress",
            category: "dress",
            brand: "prestige",
            price: 45900,
            originalPrice: 51900,
            image: "assets/watch5.jpg",
            description: "Elegant rose gold plating with genuine leather strap for formal occasions."
        },
        {
            id: 15,
            name: "Chronograph Pro",
            category: "chronograph",
            brand: "timeflow",
            price: 38900,
            originalPrice: 44900,
            image: "assets/watch1.jpg",
            description: "Professional chronograph with tachymeter and 12-hour totalizer functions."
        },
        {
            id: 16,
            name: "Automatic Diver",
            category: "diver",
            brand: "heritage",
            price: 42900,
            originalPrice: 48900,
            image: "assets/watch2.jpg",
            description: "Automatic movement diving watch with unidirectional rotating bezel."
        },
        {
            id: 17,
            name: "Business Classic",
            category: "quartz",
            brand: "elite",
            price: 22900,
            originalPrice: 27900,
            image: "assets/watch3.jpg",
            description: "Understated elegance perfect for business professionals and daily wear."
        },
        {
            id: 18,
            name: "Limited Edition",
            category: "automatic",
            brand: "heritage",
            price: 59900,
            originalPrice: 69900,
            image: "assets/watch4.jpg",
            description: "Exclusive limited edition timepiece with numbered caseback and certificate."
        },
        {
            id: 19,
            name: "Skeleton Automatic",
            category: "automatic",
            brand: "prestige",
            price: 51900,
            originalPrice: 59900,
            image: "assets/watch5.jpg",
            description: "Open-heart design revealing the intricate mechanical movement within."
        },
        {
            id: 20,
            name: "Military Field Watch",
            category: "quartz",
            brand: "timeflow",
            price: 18900,
            originalPrice: 22900,
            image: "assets/watch1.jpg",
            description: "Rugged field watch inspired by military specifications with luminous dial."
        }
    ];

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    const productsCount = document.getElementById('productsCount');
    const sortSelect = document.getElementById('sortSelect');
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const resetFiltersBtn = document.querySelector('.reset-filters');
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartCount = document.querySelector('.cart-count');
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');
    const pageInfo = document.querySelector('.page-info');

    // State variables
    let currentPage = 1;
    const productsPerPage = 9;
    let filteredProducts = [...products];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize the shop
    function initShop() {
        updatePriceRangeDisplay();
        renderProducts();
        updateCartUI();
        setupEventListeners();
    }

    // Update price range display
    function updatePriceRangeDisplay() {
        priceRangeValue.textContent = `৳ ${parseInt(priceRange.value).toLocaleString()}`;
    }

    // Render products based on current filters and page
    function renderProducts() {
        // Clear existing products
        productsGrid.innerHTML = '';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        
        // Update products count
        productsCount.textContent = filteredProducts.length;
        
        // Update pagination buttons
        updatePagination();
        
        // Render each product
        productsToShow.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    // Create product card HTML
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card-shop animate-on-scroll fade-in-up';
        
        const hasDiscount = product.originalPrice > product.price;
        const discountPercent = hasDiscount 
            ? Math.round((1 - product.price / product.originalPrice) * 100) 
            : 0;
        
        card.innerHTML = `
            <div class="product-image-shop">
                <img src="${product.image}" alt="${product.name}">
                ${hasDiscount ? `<div class="product-badge">Save ${discountPercent}%</div>` : ''}
            </div>
            <div class="product-info-shop">
                <h4>${product.name}</h4>
                <span class="product-category">${product.category} • ${product.brand}</span>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <div>
                        <span class="price-shop">৳ ${product.price.toLocaleString()}</span>
                        ${hasDiscount ? `<span class="original-price">৳ ${product.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        return card;
    }

    // Filter products based on selected filters
    function filterProducts() {
        // Get selected categories
        const selectedCategories = Array.from(
            document.querySelectorAll('input[name="category"]:checked')
        ).map(input => input.value);
        
        // Get selected brands
        const selectedBrands = Array.from(
            document.querySelectorAll('input[name="brand"]:checked')
        ).map(input => input.value);
        
        // Get max price
        const maxPrice = parseInt(priceRange.value);
        
        // Apply filters
        filteredProducts = products.filter(product => {
            return selectedCategories.includes(product.category) &&
                   selectedBrands.includes(product.brand) &&
                   product.price <= maxPrice;
        });
        
        // Reset to first page
        currentPage = 1;
        
        // Re-render products
        renderProducts();
    }

    // Sort products
    function sortProducts() {
        const sortValue = sortSelect.value;
        
        switch(sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Default sorting (by ID)
                filteredProducts.sort((a, b) => a.id - b.id);
        }
        
        renderProducts();
    }

    // Update pagination UI
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        
        // Update page info
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        // Update button states
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartUI();
        
        // Show confirmation
        showToast(`${product.name} added to cart!`);
    }

    // Update cart UI
    function updateCartUI() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items
        renderCartItems();
        
        // Update cart total
        updateCartTotal();
    }

    // Render cart items
    function renderCartItems() {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart-message">
                    <p>Your cart is empty</p>
                    <a href="shop.html" class="btn primary-btn">Continue Shopping</a>
                </div>
            `;
            checkoutBtn.disabled = true;
            return;
        }
        
        checkoutBtn.disabled = false;
        
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">৳ ${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to cart item buttons
        document.querySelectorAll('.decrease-quantity').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.increase-quantity').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                removeFromCart(id);
            });
        });
    }

    // Update item quantity in cart
    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        
        if (!item) return;
        
        item.quantity += change;
        
        // Remove item if quantity is 0
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartUI();
    }

    // Remove item from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartUI();
        
        // Show confirmation
        showToast('Item removed from cart');
    }

    // Update cart total
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `৳ ${total.toLocaleString()}`;
    }

    // Show toast notification
    function showToast(message) {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast');
        
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        // Set message and show
        toast.textContent = message;
        toast.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Price range slider
        priceRange.addEventListener('input', updatePriceRangeDisplay);
        
        // Apply filters button
        applyFiltersBtn.addEventListener('click', filterProducts);
        
        // Reset filters button
        resetFiltersBtn.addEventListener('click', () => {
            // Reset checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = true;
            });
            
            // Reset price range
            priceRange.value = priceRange.max;
            updatePriceRangeDisplay();
            
            // Reset sort
            sortSelect.value = 'default';
            
            // Apply reset
            filterProducts();
        });
        
        // Sort select
        sortSelect.addEventListener('change', sortProducts);
        
        // Add to cart buttons (using event delegation)
        productsGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            }
        });
        
        // Cart icon
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close cart
        closeCart.addEventListener('click', closeCartSidebar);
        cartOverlay.addEventListener('click', closeCartSidebar);
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            alert('Proceeding to checkout. This functionality would connect to a payment system in a real implementation.');
        });
        
        // Pagination buttons
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Close cart sidebar
    function closeCartSidebar() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Initialize the shop
    initShop();
});

// Add CSS for toast notifications
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        padding: 16px;
        position: fixed;
        z-index: 1002;
        left: 50%;
        bottom: 30px;
        font-size: 0.9em;
        opacity: 0;
        transition: opacity 0.3s, bottom 0.3s, visibility 0.3s;
    }
    
    .toast.show {
        visibility: visible;
        opacity: 0.9;
        bottom: 50px;
    }
`;
document.head.appendChild(toastStyles);