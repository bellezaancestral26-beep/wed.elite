/*========================================
        BASE DE DATOS DE JUEGOS
=========================================*/

const games = [
    {
        title: "Grand Theft Auto VI",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$199.900",
        oldPrice: "$249.900",
        badge: "Nuevo",
        image: "gtaVI.jpg.png"
    },
    {
        title: "EA Sports FC 26",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$169.900",
        oldPrice: "$199.900",
        badge: "Popular",
        image: "fc26.jpg.png"
    },
    {
        title: "Minecraft",
        platform: "PC",
        category: "pc",
        price: "Gratis",
        oldPrice: "",
        badge: "Gratis",
        image: "minecraft.jpg.jpg",
        free: true,
        downloadLink: "https://www.mediafire.com/file/7wyxnv95dowmaxy/OptiCraft_JAVA_Launcher_v1.5.zip/file"  // ← Cambia este enlace por el tuyo
    },
    {
        title: "Marvel's Spider-Man 2",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$189.900",
        oldPrice: "$229.900",
        badge: "-20%",
        image: "Spiderman.jpg.png"
    },
    {
        title: "Call of Duty: Black Ops 7",
        platform: "Xbox",
        category: "xbox",
        price: "$209.900",
        oldPrice: "$249.900",
        badge: "Nuevo",
        image: "black.jpg.jpg"
    },
    {
        title: "Black Myth: Wukong",
        platform: "PC",
        category: "pc",
        price: "$179.900",
        oldPrice: "$219.900",
        badge: "Popular",
        image: "BlackMyth.jpg.png"
    },
    {
        title: "Intergalactic",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$229.900",
        oldPrice: "$259.900",
        badge: "Reserva",
        image: "inter.jpg.jpeg"
    },
    {
        title: "Silent Hill f",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$189.900",
        oldPrice: "$219.900",
        badge: "Terror",
        image: "co.jpg.jpg"
    },
    {
        title: "God of War Ragnarök",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$189.900",
        oldPrice: "$229.900",
        badge: "Éxito",
        image: "god.jpg.jpg"
    },
    {
        title: "Red Dead Redemption 2",
        platform: "Xbox",
        category: "xbox",
        price: "$99.900",
        oldPrice: "$149.900",
        badge: "-35%",
        image: "redrojo.jpg.jpeg"
    },
    {
        title: "Forza Horizon 5",
        platform: "Xbox",
        category: "xbox",
        price: "$149.900",
        oldPrice: "$189.900",
        badge: "Popular",
        image: "forza.jpg.jpg"
    },
    {
        title: "Halo Infinite",
        platform: "Xbox",
        category: "xbox",
        price: "$129.900",
        oldPrice: "$169.900",
        badge: "Acción",
        image: "Halo.jpg.png"
    },
    {
        title: "The Witcher 3",
        platform: "PC",
        category: "pc",
        price: "$79.900",
        oldPrice: "$119.900",
        badge: "Oferta",
        image: "the.jpg.jpg"
    },
    {
        title: "Cyberpunk 2077",
        platform: "PC",
        category: "pc",
        price: "$129.900",
        oldPrice: "$169.900",
        badge: "RPG",
        image: "sirver.jpg.jpg"
    },
    {
        title: "Resident Evil 4",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$169.900",
        oldPrice: "$209.900",
        badge: "Terror",
        image: "evil5.jpg.jpeg"
    },
    {
        title: "Assassin's Creed Shadows",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$209.900",
        oldPrice: "$249.900",
        badge: "Nuevo",
        image: "shadow.jpg.jpg"
    },
    {
        title: "Elden Ring",
        platform: "PC",
        category: "pc",
        price: "$159.900",
        oldPrice: "$199.900",
        badge: "RPG",
        image: "Elden.jpg.jpg"
    },
    {
        title: "Ghost of Tsushima",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$179.900",
        oldPrice: "$219.900",
        badge: "Éxito",
        image: "Ghost.jpg.jpg"
    },
    {
        title: "Death Stranding 2",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$229.900",
        oldPrice: "$259.900",
        badge: "Nuevo",
        image: "bebe.jpg.jpg"
    },
    {
        title: "DOOM: The Dark Ages",
        platform: "Xbox",
        category: "xbox",
        price: "$199.900",
        oldPrice: "$239.900",
        badge: "Acción",
        image: "doom.jpg.jpg"
    },
    {
        title: "Gran Turismo 7",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$149.900",
        oldPrice: "$189.900",
        badge: "Carreras",
        image: "carrera.jpg.jpg"
    },
    {
        title: "Hogwarts Legacy",
        platform: "PC",
        category: "pc",
        price: "$139.900",
        oldPrice: "$179.900",
        badge: "Aventura",
        image: "ho.jpg.jpg"
    },
    {
        title: "Mortal Kombat 1",
        platform: "Xbox",
        category: "xbox",
        price: "$159.900",
        oldPrice: "$199.900",
        badge: "Pelea",
        image: "mortal.jpg.jpg"
    },
    {
        title: "Marvel's Wolverine",
        platform: "PlayStation 5",
        category: "playstation",
        price: "$239.900",
        oldPrice: "$269.900",
        badge: "Próximamente",
        image: "marvel.jpg.jpg"
    },
    {
        title: "The Legend of Zelda: Tears of the Kingdom",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$199.900",
        oldPrice: "$229.900",
        badge: "Nintendo",
        image: "zelda.jpg.jpg"
    },
    {
        title: "Super Mario Odyssey",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$179.900",
        oldPrice: "$209.900",
        badge: "Clásico",
        image: "mario.jpg.jpg"
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$169.900",
        oldPrice: "$199.900",
        badge: "Top",
        image: "rst.jpg.jpg"
    },
    {
        title: "Pokémon Legends: Z-A",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$209.900",
        oldPrice: "$239.900",
        badge: "Nuevo",
        image: "pokemon.jpg.png"
    },
    {
        title: "Metroid Prime 4",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$199.900",
        oldPrice: "$229.900",
        badge: "Reserva",
        image: "pelea.jpg.png"
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$159.900",
        oldPrice: "$189.900",
        badge: "Popular",
        image: "nose.jpg.jpg"
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$149.900",
        oldPrice: "$179.900",
        badge: "Aventura",
        image: "kirbi.jpg.jpg"
    },
    {
        title: "Donkey Kong Bananza",
        platform: "Nintendo Switch",
        category: "nintendo",
        price: "$219.900",
        oldPrice: "$249.900",
        badge: "Nuevo",
        image: "mono.jpg.jpg"
    }
];


/*========================================
        CONFIGURACIÓN
=========================================*/

const gamesGrid = document.getElementById("gamesGrid");
const gamesPerPage = 8;

let currentPage = 1;
let activeFilter = "all";
let searchText = "";


/*========================================
        CARRITO
=========================================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
    if (cartCount) cartCount.textContent = cart.length;
}

function addToCart(gameTitle) {
    cart.push(gameTitle);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification(gameTitle + " fue agregado al carrito.");
}


/*========================================
        FAVORITOS
=========================================*/

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const favoritesCount = document.getElementById("favorites-count");

function updateFavoritesCount() {
    if (favoritesCount) favoritesCount.textContent = favorites.length;
}

function isFavorite(gameTitle) {
    return favorites.includes(gameTitle);
}

function toggleFavorite(gameTitle) {
    if (isFavorite(gameTitle)) {
        favorites = favorites.filter(title => title !== gameTitle);
        showNotification(gameTitle + " fue eliminado de favoritos.");
    } else {
        favorites.push(gameTitle);
        showNotification(gameTitle + " fue agregado a favoritos.");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesCount();
    renderGames(currentPage);
}


/*========================================
        FILTRAR JUEGOS
=========================================*/

function getFilteredGames() {
    return games.filter(game => {
        const matchesFilter = activeFilter === "all" || game.category === activeFilter;
        const text = searchText.toLowerCase();
        const matchesSearch =
            text === "" ||
            game.title.toLowerCase().includes(text) ||
            game.platform.toLowerCase().includes(text) ||
            game.category.toLowerCase().includes(text) ||
            game.badge.toLowerCase().includes(text);
        return matchesFilter && matchesSearch;
    });
}


/*========================================
        MOSTRAR JUEGOS
=========================================*/

function renderGames(page = 1) {
    if (!gamesGrid) return;

    const filteredGames = getFilteredGames();
    const totalPages = Math.max(1, Math.ceil(filteredGames.length / gamesPerPage));

    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    currentPage = page;

    gamesGrid.innerHTML = "";

    const start = (currentPage - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const gamesToShow = filteredGames.slice(start, end);

    if (gamesToShow.length === 0) {
        gamesGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-gamepad"></i>
                <h3>No encontramos juegos</h3>
                <p>Intenta con otro nombre, plataforma o categoría.</p>
            </div>
        `;
        updatePagination(filteredGames.length, totalPages);
        return;
    }

    gamesToShow.forEach(game => {
        const favoriteClass = isFavorite(game.title) ? "active" : "";
        const heartIcon = isFavorite(game.title) ? "fa-solid" : "fa-regular";

        const buyButtonHTML = game.free
            ? `<button class="btn-buy btn-free" data-title="${game.title}">Descargar Gratis</button>`
            : `<button class="btn-buy" data-title="${game.title}">Comprar</button>`;

        gamesGrid.innerHTML += `
            <div class="game-card">
                <span class="badge">${game.badge}</span>
                <button class="favorite-btn ${favoriteClass}" data-title="${game.title}" aria-label="Agregar a favoritos">
                    <i class="${heartIcon} fa-heart"></i>
                </button>
                <img src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p>${game.platform}</p>
                    <div class="price">
                        ${game.oldPrice ? `<span class="old-price">${game.oldPrice}</span>` : ""}
                        <span class="new-price">${game.price}</span>
                    </div>
                    <div class="game-buttons">
                        ${buyButtonHTML}
                        <button class="btn-details" data-title="${game.title}">Ver detalles</button>
                    </div>
                </div>
            </div>
        `;
    });

    updatePagination(filteredGames.length, totalPages);
}


/*========================================
        PAGINACIÓN
=========================================*/

const pageButtons = document.querySelectorAll(".page-number");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const paginationInfo = document.querySelector(".pagination-info");

function updatePagination(totalGames, totalPages) {
    pageButtons.forEach((button, index) => {
        const page = index + 1;
        if (page <= totalPages) {
            button.style.display = "flex";
            button.dataset.page = page;
            button.textContent = page;
            button.classList.toggle("active", page === currentPage);
        } else {
            button.style.display = "none";
        }
    });

    if (prevPage) prevPage.disabled = currentPage === 1 || totalGames === 0;
    if (nextPage) nextPage.disabled = currentPage === totalPages || totalGames === 0;

    if (paginationInfo) {
        if (totalGames === 0) {
            paginationInfo.innerHTML = "No se encontraron juegos.";
        } else {
            const start = (currentPage - 1) * gamesPerPage + 1;
            const end = Math.min(currentPage * gamesPerPage, totalGames);
            paginationInfo.innerHTML = `Mostrando <strong>${start}-${end}</strong> de <strong>${totalGames}</strong> juegos`;
        }
    }
}

pageButtons.forEach(button => {
    button.addEventListener("click", () => {
        const page = Number(button.dataset.page);
        renderGames(page);
        scrollToCatalog();
    });
});

if (prevPage) {
    prevPage.addEventListener("click", () => {
        if (currentPage > 1) {
            renderGames(currentPage - 1);
            scrollToCatalog();
        }
    });
}

if (nextPage) {
    nextPage.addEventListener("click", () => {
        const totalGames = getFilteredGames().length;
        const totalPages = Math.max(1, Math.ceil(totalGames / gamesPerPage));
        if (currentPage < totalPages) {
            renderGames(currentPage + 1);
            scrollToCatalog();
        }
    });
}


/*========================================
        MODAL DE COMPRA / DESCARGA
=========================================*/

const purchaseModal = document.getElementById("purchaseModal");
const purchaseOverlay = document.getElementById("purchaseOverlay");
const closePurchase = document.getElementById("closePurchase");
const purchaseForm = document.getElementById("purchaseForm");
const purchaseGame = document.getElementById("purchaseGame");
const purchasePlatform = document.getElementById("purchasePlatform");
const purchasePrice = document.getElementById("purchasePrice");
const purchaseName = document.getElementById("purchaseName");
const purchaseEmail = document.getElementById("purchaseEmail");
const purchasePhone = document.getElementById("purchasePhone");
const purchaseSubmitBtn = document.getElementById("purchaseSubmitBtn");

let selectedPurchaseGame = null;
let buyingEntireCart = false;

function loadPurchaseGames() {
    if (!purchaseGame) return;
    purchaseGame.innerHTML = `<option value="" disabled selected>Selecciona un juego</option>`;
    games.forEach(game => {
        const option = document.createElement("option");
        option.value = game.title;
        option.textContent = game.title;
        purchaseGame.appendChild(option);
    });
}

function updatePurchaseData() {
    if (!purchaseGame || buyingEntireCart) return;

    const title = purchaseGame.value;
    const game = games.find(item => item.title === title);

    if (!game) {
        selectedPurchaseGame = null;
        if (purchasePlatform) purchasePlatform.innerHTML = `<option value="" disabled selected>Selecciona una plataforma</option>`;
        if (purchasePrice) purchasePrice.textContent = "Selecciona un juego";
        updateModalButton(null);
        return;
    }

    selectedPurchaseGame = game;

    if (purchasePlatform) {
        purchasePlatform.innerHTML = "";
        const option = document.createElement("option");
        option.value = game.platform;
        option.textContent = game.platform;
        option.selected = true;
        purchasePlatform.appendChild(option);
    }

    if (purchasePrice) purchasePrice.textContent = game.price;
    updateModalButton(game);
}

function updateModalButton(game) {
    if (!purchaseSubmitBtn) return;
    if (game && game.free) {
        purchaseSubmitBtn.innerHTML = `<i class="fa-solid fa-download"></i> Confirmar Descarga Gratis`;
    } else {
        purchaseSubmitBtn.innerHTML = `<i class="fa-solid fa-credit-card"></i> Confirmar Compra`;
    }
}

function openPurchaseModal(gameTitle) {
    if (!purchaseModal) return;

    const game = games.find(item => item.title === gameTitle);
    if (!game) {
        showNotification("No se pudo encontrar el juego.");
        return;
    }

    buyingEntireCart = false;
    selectedPurchaseGame = game;

    if (purchaseGame) purchaseGame.value = game.title;

    if (purchasePlatform) {
        purchasePlatform.innerHTML = "";
        const option = document.createElement("option");
        option.value = game.platform;
        option.textContent = game.platform;
        option.selected = true;
        purchasePlatform.appendChild(option);
    }

    if (purchasePrice) purchasePrice.textContent = game.price;
    updateModalButton(game);

    purchaseModal.classList.add("show");
    purchaseModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    setTimeout(() => {
        if (purchaseName) purchaseName.focus();
    }, 300);
}

function openCartPurchase() {
    if (cart.length === 0) {
        showNotification("Tu carrito está vacío.");
        return;
    }
    if (!purchaseModal) return;

    buyingEntireCart = true;

    const cartGames = cart.map(title => games.find(g => g.title === title)).filter(Boolean);
    if (cartGames.length === 0) {
        showNotification("No hay juegos válidos en el carrito.");
        return;
    }

    selectedPurchaseGame = cartGames[0];

    if (purchaseGame) {
        purchaseGame.innerHTML = "";
        const option = document.createElement("option");
        option.value = "__CARRITO_COMPLETO__";
        option.textContent = `Compra completa - ${cartGames.length} juego(s)`;
        option.selected = true;
        purchaseGame.appendChild(option);
    }

    if (purchasePlatform) {
        purchasePlatform.innerHTML = "";
        const option = document.createElement("option");
        option.value = "Varias plataformas";
        option.textContent = "Varias plataformas";
        option.selected = true;
        purchasePlatform.appendChild(option);
    }

    const total = calculateCartTotal(cartGames);
    if (purchasePrice) purchasePrice.textContent = formatCurrency(total);
    updateModalButton(null);

    purchaseModal.classList.add("show");
    purchaseModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    setTimeout(() => {
        if (purchaseName) purchaseName.focus();
    }, 300);
}

function closePurchaseModal() {
    if (!purchaseModal) return;
    purchaseModal.classList.remove("show");
    purchaseModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    selectedPurchaseGame = null;
    buyingEntireCart = false;
    loadPurchaseGames();
    updateModalButton(null);
}

if (purchaseGame) purchaseGame.addEventListener("change", updatePurchaseData);
if (closePurchase) closePurchase.addEventListener("click", closePurchaseModal);
if (purchaseOverlay) purchaseOverlay.addEventListener("click", closePurchaseModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && purchaseModal && purchaseModal.classList.contains("show")) closePurchaseModal();
    if (event.key === "Escape" && cartModal && cartModal.classList.contains("show")) closeCartModal();
});


/*========================================
        FORMULARIO
=========================================*/

if (purchaseForm) {
    purchaseForm.addEventListener("submit", event => {
        if (!selectedPurchaseGame) {
            event.preventDefault();
            showNotification("Selecciona un juego antes de continuar.");
            return;
        }

        if (!purchaseName || !purchaseEmail || !purchasePhone) {
            event.preventDefault();
            showNotification("Completa todos los campos.");
            return;
        }

        const name = purchaseName.value.trim();
        const email = purchaseEmail.value.trim();
        const phone = purchasePhone.value.trim();

        if (name === "" || email === "" || phone === "") {
            event.preventDefault();
            showNotification("Completa todos los campos para continuar.");
            return;
        }

        // Si es gratis, abrir el enlace de descarga después de enviar
        if (selectedPurchaseGame.free && selectedPurchaseGame.downloadLink) {
            setTimeout(() => {
                showNotification("¡Descarga lista! Abriendo MediaFire...");
                window.open(selectedPurchaseGame.downloadLink, "_blank");
            }, 1000);
        }

        // El formulario sigue enviándose normalmente a FormSubmit
    });
}


/*========================================
        MODAL DEL CARRITO
=========================================*/

const cartModal = document.getElementById("cartModal");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartContent = document.getElementById("cartContent");
const cartEmpty = document.getElementById("cartEmpty");
const cartSummary = document.getElementById("cartSummary");
const cartActions = document.getElementById("cartActions");
const cartItemsTotal = document.getElementById("cartItemsTotal");
const cartTotal = document.getElementById("cartTotal");
const deleteSelectedCart = document.getElementById("deleteSelectedCart");
const buyAllCart = document.getElementById("buyAllCart");
const cartContinue = document.getElementById("cartContinue");

function priceToNumber(price) {
    if (typeof price === "number") return price;
    if (price === "Gratis") return 0;
    return Number(String(price).replace(/\$/g, "").replace(/\./g, "").replace(/,/g, "").trim()) || 0;
}

function formatCurrency(value) {
    return "$" + Number(value).toLocaleString("es-CO");
}

function calculateCartTotal(cartGames) {
    return cartGames.reduce((total, game) => total + priceToNumber(game.price), 0);
}

function createOrderText(cartGames) {
    return cartGames.map((game, index) => `${index + 1}. ${game.title} | ${game.platform} | ${game.price}`).join(" || ");
}

function openCartModal() {
    if (!cartModal) return;
    renderCart();
    cartModal.classList.add("show");
    cartModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("cart-modal-open");
}

function closeCartModal() {
    if (!cartModal) return;
    cartModal.classList.remove("show");
    cartModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cart-modal-open");
}

function renderCart() {
    if (!cartModal || !cartContent) return;
    cartContent.innerHTML = "";

    const cartGames = cart.map(title => games.find(g => g.title === title)).filter(Boolean);

    if (cartGames.length !== cart.length) {
        cart = cart.filter(title => games.some(g => g.title === title));
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    updateCartCount();

    if (cartGames.length === 0) {
        cartModal.classList.add("empty-cart");
        if (cartEmpty) cartEmpty.classList.add("show");
        if (cartSummary) cartSummary.style.display = "none";
        if (cartActions) cartActions.style.display = "none";
        return;
    }

    cartModal.classList.remove("empty-cart");
    if (cartEmpty) cartEmpty.classList.remove("show");
    if (cartSummary) cartSummary.style.display = "block";
    if (cartActions) cartActions.style.display = "grid";

    cartGames.forEach((game, index) => {
        const item = document.createElement("div");
        item.className = "cart-item";
        item.dataset.index = index;
        item.innerHTML = `
            <div class="cart-item-image"><img src="${game.image}" alt="${game.title}"></div>
            <div class="cart-item-info">
                <h3>${game.title}</h3>
                <p class="cart-item-platform"><i class="fa-solid fa-gamepad"></i> ${game.platform}</p>
                <div class="cart-item-price">${game.price}</div>
            </div>
            <div class="cart-item-actions">
                <label class="cart-select">
                    <input type="checkbox" class="cart-checkbox" data-index="${index}">
                    <span class="cart-check"><i class="fa-solid fa-check"></i></span>
                </label>
                <button type="button" class="cart-remove" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        cartContent.appendChild(item);
    });

    if (cartItemsTotal) cartItemsTotal.textContent = cartGames.length;
    if (cartTotal) cartTotal.textContent = formatCurrency(calculateCartTotal(cartGames));
}

function removeCartItem(index) {
    if (index < 0 || index >= cart.length) return;
    const removed = games.find(g => g.title === cart[index]);
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
    if (removed) showNotification(removed.title + " fue eliminado del carrito.");
}

function removeSelectedCartItems() {
    if (!cartContent) return;
    const checkboxes = cartContent.querySelectorAll(".cart-checkbox:checked");
    if (checkboxes.length === 0) {
        showNotification("Selecciona al menos un juego para eliminar.");
        return;
    }
    const indexes = Array.from(checkboxes).map(cb => Number(cb.dataset.index)).sort((a, b) => b - a);
    indexes.forEach(i => cart.splice(i, 1));
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showNotification("Juegos eliminados del carrito.");
}

const cartBtn = document.getElementById("cartBtn");
if (cartBtn) cartBtn.addEventListener("click", e => { e.preventDefault(); openCartModal(); });
if (closeCart) closeCart.addEventListener("click", closeCartModal);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartModal);
if (cartContinue) cartContinue.addEventListener("click", () => { closeCartModal(); scrollToCatalog(); });
if (deleteSelectedCart) deleteSelectedCart.addEventListener("click", removeSelectedCartItems);
if (buyAllCart) buyAllCart.addEventListener("click", () => {
    if (cart.length === 0) { showNotification("Tu carrito está vacío."); return; }
    closeCartModal();
    openCartPurchase();
});

if (cartContent) {
    cartContent.addEventListener("click", e => {
        const btn = e.target.closest(".cart-remove");
        if (!btn) return;
        removeCartItem(Number(btn.dataset.index));
    });
}


/*========================================
        EVENTOS DE TARJETAS
=========================================*/

if (gamesGrid) {
    gamesGrid.addEventListener("click", event => {
        const buyButton = event.target.closest(".btn-buy");
        const favoriteButton = event.target.closest(".favorite-btn");
        const detailsButton = event.target.closest(".btn-details");

        if (buyButton) {
            const title = buyButton.dataset.title;
            const game = games.find(g => g.title === title);
            if (game && !game.free) addToCart(title);
            openPurchaseModal(title);
            return;
        }

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.title);
            return;
        }

        if (detailsButton) {
            const game = games.find(g => g.title === detailsButton.dataset.title);
            if (game) showNotification(`${game.title} | ${game.platform} | ${game.price}`);
        }
    });
}


/*========================================
            BUSCADOR
=========================================*/

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function applySearch() {
    if (!searchInput) return;
    searchText = searchInput.value.trim();
    currentPage = 1;
    renderGames(1);
}

if (searchInput) {
    searchInput.addEventListener("input", applySearch);
    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            applySearch();
            scrollToCatalog();
        }
    });
}
if (searchBtn) searchBtn.addEventListener("click", () => { applySearch(); scrollToCatalog(); });


/*========================================
            FILTROS
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter;
        currentPage = 1;
        renderGames(1);
        scrollToCatalog();
    });
});


/*========================================
        FILTRO DESDE URL
=========================================*/

function applyCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get("categoria");
    if (categoria && ["playstation", "xbox", "nintendo", "pc"].includes(categoria)) {
        activeFilter = categoria;
        filterButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.filter === categoria);
        });
        currentPage = 1;
        renderGames(1);
        setTimeout(scrollToCatalog, 300);
    }
}


/*========================================
        OTROS EVENTOS
=========================================*/

const headerSearchBtn = document.getElementById("headerSearchBtn");
if (headerSearchBtn) {
    headerSearchBtn.addEventListener("click", () => {
        document.querySelector(".search-section")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => searchInput?.focus(), 500);
    });
}

const favoritesBtn = document.getElementById("favoritesBtn");
if (favoritesBtn) {
    favoritesBtn.addEventListener("click", () => {
        showNotification(favorites.length === 0
            ? "No tienes juegos favoritos todavía."
            : `Tienes ${favorites.length} juego(s) en favoritos.`);
    });
}

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("newsletterEmail");
        if (email && email.value.trim()) {
            showNotification("¡Te suscribiste correctamente!");
            newsletterForm.reset();
        }
    });
}


/*========================================
        NOTIFICACIÓN
=========================================*/

const notification = document.getElementById("notification");
const notificationText = document.getElementById("notification-text");
let notificationTimer;

function showNotification(message) {
    if (!notification || !notificationText) return;
    notificationText.textContent = message;
    notification.classList.add("show");
    clearTimeout(notificationTimer);
    notificationTimer = setTimeout(() => notification.classList.remove("show"), 3000);
}


/*========================================
        SCROLL Y LOADER
=========================================*/

function scrollToCatalog() {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
}

const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (!scrollTopBtn) return;
    scrollTopBtn.classList.toggle("show", window.scrollY > 300);
});
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/*========================================
        INICIAR
=========================================*/

loadPurchaseGames();
updateCartCount();
updateFavoritesCount();
applyCategoryFromURL();
renderGames(1);
renderCart();

console.log("🎮 Elite Store Catálogo cargado.");