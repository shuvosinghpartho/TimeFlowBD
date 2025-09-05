document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Citizen-white",
            category: "automatic",
            brand: "Citizen",
            price: 1200,
            originalPrice: 1530,
            image: "assets/Citizen - 1200-1.jpg",
            description: "Precision and innovation unite in this timeless Citizen watch, crafted for elegance and everyday reliability."
        },
        {
            id: 2,
            name: "Citizen-black",
            category: "automatic",
            brand: "Citizen",
            price: 1200,
            originalPrice: 1356,
            image: "assets/Citizen - 1200-2.jpg",
            description: "Precision and innovation unite in this timeless Citizen watch, crafted for elegance and everyday reliability."
        },
        {
            id: 3,
            name: "Citizen-golden-blue",
            category: "automatic",
            brand: "Citizen",
            price: 1200,
            originalPrice: 1680,
            image: "assets/Citizen - 1200-3.jpg",
            description: "Precision and innovation unite in this timeless Citizen watch, crafted for elegance and everyday reliability."
        },
        {
            id: 4,
            name: "Citizen-golden-black",
            category: "automatic",
            brand: "Citizen",
            price: 1200,
            originalPrice: 1440,
            image: "assets/Citizen - 1200-4.jpg",
            description: "Precision and innovation unite in this timeless Citizen watch, crafted for elegance and everyday reliability."
        },
        {
            id: 5,
            name: "Cureen-black",
            category: "automatic",
            brand: "Cureen",
            price: 750,
            originalPrice: 870,
            image: "assets/Cureen-750-3.jpg",
            description: "Elegant dress watch perfect for formal occasions and business settings."
        },
        {
            id: 6,
            name: "Cureen-brown",
            category: "automatic",
            brand: "Cureen",
            price: 750,
            originalPrice: 850,
            image: "assets/Cureen-750-2.jpg",
            description: "Inspired by classic designs from the golden age of watchmaking."
        },
        {
            id: 7,
            name: "Cureen-round",
            category: "automatic",
            brand: "Cureen",
            price: 750,
            originalPrice: 870,
            image: "assets/Cureen-750-1.jpg",
            description: "Robust sports chronograph with tachymeter bezel for active lifestyles."
        },
        {
            id: 8,
            name: "Poydager",
            category: "dress",
            brand: "Poydager",
            price: 850,
            originalPrice: 960,
            image: "assets/Poydager- 850-1.jpg",
            description: "Sophisticated timepiece with moonphase complication and date display."
        },
        {
            id: 9,
            name: "Poydager",
            category: "diver",
            brand: "Poydager",
            price: 850,
            originalPrice: 960,
            image: "assets/Poydager- 850-2.jpg",
            description: "Certified professional diving watch with luminescent markers and bezel."
        },
        {
            id: 10,
            name: "Poydager",
            category: "quartz",
            brand: "Poydager",
            price: 850,
            originalPrice: 1020,
            image: "assets/Poydager- 850-3.jpg",
            description: "Ultra-slim profile with Japanese quartz movement for precision timekeeping."
        },
        {
            id: 11,
            name: "Poydager",
            category: "chronograph",
            brand: "Poydager",
            price: 850,
            originalPrice: 961,
            image: "assets/Poydager- 850-4.jpg",
            description: "Dual time zone functionality for frequent travelers and global professionals."
        },
        {
            id: 12,
            name: "Tubler",
            category: "automatic",
            brand: "Tubler",
            price: 650,
            originalPrice: 750,
            image: "assets/Tubler-650-1.jpg",
            description: "Self-winding movement with day and date complications for practicality."
        },
        {
            id: 13,
            name: "Tubler",
            category: "quartz",
            brand: "Tubler",
            price: 650,
            originalPrice: 750,
            image: "assets/Tubler-650-2.jpg",
            description: "Lightweight carbon fiber case with sporty aesthetics and durability."
        },
        {
            id: 14,
            name: "Tubler",
            category: "dress",
            brand: "Tubler",
            price: 650,
            originalPrice: 750,
            image: "assets/Tubler-650-3.jpg",
            description: "Elegant rose gold plating with genuine leather strap for formal occasions."
        },
        {
            id: 15,
            name: "Tubler",
            category: "dress",
            brand: "Tubler",
            price: 650,
            originalPrice: 750,
            image: "assets/Tubler-650-4.jpg",
            description: "Professional chronograph with tachymeter and 12-hour totalizer functions."
        },
        {
            id: 16,
            name: "Hublot",
            category: "diver",
            brand: "Hublot",
            price: 1300,
            originalPrice: 1500,
            image: "assets/Hublot - 1300-1.jpg",
            description: "Automatic movement diving watch with unidirectional rotating bezel."
        },
        {
            id: 17,
            name: "Hublot",
            category: "quartz",
            brand: "Hublot",
            price: 1300,
            originalPrice: 1550,
            image: "assets/Hublot - 1300-2.jpg",
            description: "Understated elegance perfect for business professionals and daily wear."
        },
        {
            id: 18,
            name: "Hublot",
            category: "automatic",
            brand: "Hublot",
            price: 1300,
            originalPrice: 1550,
            image: "assets/Hublot - 1300-3.jpg",
            description: "Exclusive limited edition timepiece with numbered caseback and certificate."
        },
        {
            id: 19,
            name: "Hublot",
            category: "automatic",
            brand: "Hublot",
            price: 1300,
            originalPrice: 1550,
            image: "assets/Hublot - 1300-4.jpg",
            description: "Open-heart design revealing the intricate mechanical movement within."
        },
        {
            id: 20,
            name: "Hublot",
            category: "quartz",
            brand: "Hublot",
            price: 1300,
            originalPrice: 1530,
            image: "assets/Hublot - 1300-5.jpg",
            description: "Rugged field watch inspired by military specifications with luminous dial."
        }
    ];

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

    let currentPage = 1;
    const productsPerPage = 9;
    let filteredProducts = [...products];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function initShop() {
        updatePriceRangeDisplay();
        renderProducts();
        updateCartUI();
        setupEventListeners();
    }

    function updatePriceRangeDisplay() {
        priceRangeValue.textContent = `৳ ${parseInt(priceRange.value).toLocaleString()}`;
    }

    function renderProducts() {
        productsGrid.innerHTML = '';
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        productsCount.textContent = filteredProducts.length;
        updatePagination();
        productsToShow.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card-shop animate-on-scroll fade-in-up';
        const hasDiscount = product.originalPrice > product.price;
        const discountPercent = hasDiscount
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;

        // Create WhatsApp message text
        const whatsappMessage = `Hello! I'm interested in your ${product.name} watch (ID: ${product.id}). Price: ৳${product.price.toLocaleString()}. ${product.description}`;

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
                <a href="https://wa.me/8801973868913?text=${encodeURIComponent(whatsappMessage)}"
                   class="whatsapp-product-btn"
                   target="_blank"
                   title="Inquire on WhatsApp">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon">
                    WhatsApp
                </a>
            </div>
        `;
        return card;
    }

    function filterProducts() {
        const selectedCategories = Array.from(
            document.querySelectorAll('input[name="category"]:checked')
        ).map(input => input.value);
        const selectedBrands = Array.from(
            document.querySelectorAll('input[name="brand"]:checked')
        ).map(input => input.value);
        const maxPrice = parseInt(priceRange.value);
        filteredProducts = products.filter(product => {
            return (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
                (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
                product.price <= maxPrice;
        });
        currentPage = 1;
        renderProducts();
    }

    function sortProducts() {
        const sortValue = sortSelect.value;
        switch (sortValue) {
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
                filteredProducts.sort((a, b) => a.id - b.id);
        }
        renderProducts();
    }

    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        showToast(`${product.name} added to cart!`);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        renderCartItems();
        updateCartTotal();
    }

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

    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        showToast('Item removed from cart');
    }

    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `৳ ${total.toLocaleString()}`;
    }

    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function setupEventListeners() {
        priceRange.addEventListener('input', updatePriceRangeDisplay);
        applyFiltersBtn.addEventListener('click', filterProducts);
        resetFiltersBtn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = true;
            });
            priceRange.value = priceRange.max;
            updatePriceRangeDisplay();
            sortSelect.value = 'default';
            filterProducts();
        });
        sortSelect.addEventListener('change', sortProducts);
        productsGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            }
        });
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeCart.addEventListener('click', closeCartSidebar);
        cartOverlay.addEventListener('click', closeCartSidebar);
        checkoutBtn.addEventListener('click', () => {
            alert('Proceeding to checkout. This functionality would connect to a payment system in a real implementation.');
        });
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

    function closeCartSidebar() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    initShop();
});

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