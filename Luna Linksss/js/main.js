// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    const slideCount = slides.length;

    // Function to update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Check if slider elements exist before adding listeners
    if (slider && prevBtn && nextBtn) {
        // Event listeners for buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }


    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-up');
                return;
            }

            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                // Scroll down
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                // Scroll up
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });
    }


    // Add animation to featured items on scroll
    const featuredItems = document.querySelectorAll('.featured-item');
    const observerOptions = {
        threshold: 0.2
    };

    if (featuredItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        featuredItems.forEach(item => {
            observer.observe(item);
        });
    }
});

// Customize Section Slider
document.addEventListener('DOMContentLoaded', function() {
    // These selectors are for a slider section, check if it exists before running
    const customizeSlider = document.querySelector('.customize-slider');
    const slides = document.querySelectorAll('.customize-slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    const slideCount = slides.length;

    if (customizeSlider && slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            showSlide(currentSlide);
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Initialize first slide
        showSlide(currentSlide);
    }
});

// Filter functionality for ear cuffs, charms, and chains
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const earCuffItems = document.querySelectorAll('.ear-cuffs-collection .collection-item');
    const charmItems = document.querySelectorAll('.charms-section .charm-item');
    const chainItems = document.querySelectorAll('.chains-section .chain-item');

    function applyFilter(items, category) {
        items.forEach(item => {
            // Add fade out effect
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Add fade in effect
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            }, 300);
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const category = button.getAttribute('data-category');

                // Apply filter to all collection types if they exist
                if (earCuffItems.length > 0) {
                    applyFilter(earCuffItems, category);
                }
                if (charmItems.length > 0) {
                    applyFilter(charmItems, category);
                }
                if (chainItems.length > 0) {
                    applyFilter(chainItems, category);
                }
            });
        });
    }
});

// Create Your Own Charm Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.create-charm-slider');
    const slides = document.querySelectorAll('.create-charm-slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;

    if (slider && slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);
        showSlide(currentSlide);
    }
});

// Login/Signup Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Use the ID from the index.html anchor tag to find the element
    const userIcon = document.getElementById('login-icon'); 
    const modal = document.createElement('div');
    modal.className = 'auth-modal'; // Matches CSS class for modal overlay
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Login</button>
                <button class="auth-tab" data-tab="signup">Sign Up</button>
            </div>
            <div class="auth-form-container">
                <form id="login-form" class="auth-form active">
                    <h2>Login</h2>
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" id="login-password" required>
                    </div>
                    <button type="submit" class="auth-btn">Login</button>
                </form>
                <form id="signup-form" class="auth-form">
                    <h2>Sign Up</h2>
                    <div class="form-group">
                        <label for="signup-name">Full Name</label>
                        <input type="text" id="signup-name" required>
                    </div>
                    <div class="form-group">
                        <label for="signup-email">Email</label>
                        <input type="email" id="signup-email" required>
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input type="password" id="signup-password" required>
                    </div>
                    <button type="submit" class="auth-btn">Sign Up</button>
                </form>
                <div class="modal-footer" style="text-align: center; margin-top: 1.5rem; font-size: 0.9rem;">
                    <!-- FIX: Ensure the link points to the dedicated login.html page -->
                    <p>Don't have an account? <a href="login.html" style="color: #5d4037; text-decoration: none; font-weight: 600;">Register here</a></p>
                </div>
            </div>
        </div>
    `;
    // FIX: Set modal display to 'none' on creation to stop it from popping up immediately
    modal.style.display = 'none'; 
    document.body.appendChild(modal);

    // Check if the userIcon element exists before adding the listener
    if (userIcon) {
        // Show modal when clicking user icon
        userIcon.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }


    // Close modal when clicking close button or outside modal
    const closeModalBtn = modal.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tab switching
    const tabs = modal.querySelectorAll('.auth-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const formId = tab.dataset.tab + '-form';
            modal.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            const activeForm = modal.querySelector(`#${formId}`);
            if (activeForm) {
                activeForm.classList.add('active');
            }
        });
    });

    // The modal creation structure includes a modal-footer inside the auth-form-container. 
    // I moved the modal-footer to the correct place in the dynamic HTML above.

    // Form submissions
    modal.querySelector('#login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        showNotification('Successfully logged in!', 'success');
        modal.style.display = 'none';
    });

    modal.querySelector('#signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add signup logic here
        showNotification('Successfully signed up!', 'success');
        modal.style.display = 'none';
    });
});

// Cart Functionality
let cart = [];

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    // Add event listener for checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
});

function addToCart(product) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Item added to cart!', 'success');
}

function updateCartUI() {
    const cartItems = document.querySelector('.cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-name="${item.name}">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="quantity">
                    <button class="quantity-btn minus" data-action="decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1">
                    <button class="quantity-btn plus" data-action="increase">+</button>
                </div>
            </div>
            <div class="item-price">
                <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item">Remove</button>
            </div>
        </div>
    `).join('');

    // Add event listeners for quantity controls
    cartItems.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const cartItem = this.closest('.cart-item');
            const itemName = cartItem.dataset.name;
            const action = this.dataset.action;
            const change = action === 'increase' ? 1 : -1;
            updateQuantity(itemName, change);
        });
    });

    // Add event listeners for quantity input
    cartItems.querySelectorAll('.quantity input').forEach(input => {
        input.addEventListener('change', function(e) {
            const cartItem = this.closest('.cart-item');
            const itemName = cartItem.dataset.name;
            updateQuantity(itemName, 0, this.value);
        });
    });

    // Add event listeners for remove buttons
    cartItems.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function(e) {
            const cartItem = this.closest('.cart-item');
            const itemName = cartItem.dataset.name;
            removeFromCart(itemName);
        });
    });

    // Update total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 10.00; // Fixed shipping cost
    const total = subtotal + shipping;

    const subtotalElement = document.querySelector('.subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    const totalElement = document.querySelector('.summary-item.total span:last-child');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Update cart count in navbar if it exists
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function updateQuantity(itemName, change, newValue = null) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        if (newValue !== null) {
            item.quantity = parseInt(newValue) || 1;
        } else {
            item.quantity = Math.max(1, item.quantity + change);
        }
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

// Checkout Functionality
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    // Show confirmation modal
    const confirmationModal = document.createElement('div');
    confirmationModal.className = 'confirmation-modal';
    confirmationModal.innerHTML = `
        <div class="modal-content">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your order has been received.</p>
            <div class="order-summary">
                <h3>Order Summary</h3>
                ${cart.map(item => `
                    <div class="order-item">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                <div class="order-total">
                    <strong>Total: $${(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + shipping).toFixed(2)}</strong>
                </div>
            </div>
            <button class="close-confirmation">Close</button>
        </div>
    `;
    document.body.appendChild(confirmationModal);

    // Close confirmation modal
    confirmationModal.querySelector('.close-confirmation').addEventListener('click', () => {
        confirmationModal.remove();
        cart = []; // Clear cart
        localStorage.removeItem('cart'); // Clear localStorage
        updateCartUI();
        showNotification('Thank you for your purchase!', 'success');
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add to cart button event listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const item = e.target.closest('.collection-item, .charm-item, .chain-item');
        if (!item) return; // Prevent error if no parent item is found

        const product = {
            name: item.querySelector('h3').textContent,
            description: item.querySelector('p').textContent,
            price: parseFloat(item.querySelector('.price').textContent.replace('$', '')),
            image: item.querySelector('img').src
        };
        addToCart(product);
    }
});
