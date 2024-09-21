// Array of products with links
const products = [
    {
        id: 1,
        name: "Groot",
        image: "https://drive.google.com/thumbnail?id=1lgImTI5jNX3AcEmwKwULKpVpJvbhCIJe",
        description: "Naruto Miniature & Wall-Mounted shelf. It was include the two Products. Naruto Miniature and Wall-Mounted shelf. There are 3 Type of Size for both products are S, M, L also Custom sizes are available",
        likes: 0,
        link: "Gifts Products Pages/Groot.html" // Link to the external HTML for the iframe
    },
    {
        id: 2,
        name: "Penguin",
        image: "https://drive.google.com/thumbnail?id=1RNQmtyV-sbdPEJ6mWQJwyIEiIk5zpZ8Q",
        description: "This is the description for Product 2.",
        likes: 0,
        link: "Gifts Products Pages/Penguin.html"
    },
    {
        id: 3,
        name: "Voronoi Lamp",
        image: "https://drive.google.com/thumbnail?id=1thl0o5yXDTfZfAghC-GYs8KiUtiUHZtE",
        description: "This is the description for Product 3.",
        likes: 0,
        link: "Gifts Products Pages/Voronoi#Lamp.html"
    },
    {
        id: 4,
        name: "F1 Car Kit",
        image: "https://drive.google.com/thumbnail?id=1MXxF4W7icETmuTwmwfqs_Nq59FfQpbvU",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/F1#Car#Kit.html"
    },
    {
        id: 5,
        name: "Mother's Day Gift",
        image: "https://drive.google.com/thumbnail?id=1kd9rlRy6sHwb8CyvI8jXUnqnQWKZiGCz",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Mother's#Day#Gift.html"
    },
    {
        id: 6,
        name: "Candle Holder",
        image: "https://drive.google.com/thumbnail?id=1fyeg8N8xUNZmCn1ChpD3vd_ldWL3wMpj",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Candle#Holder.html"
    },
    {
        id: 7,
        name: "Little Mummy",
        image: "https://drive.google.com/thumbnail?id=1Ufaz1pxtKhrE-MVODlwSpHceYuYBrTu2",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Little#Mummy.html"
    },
    {
        id: 8,
        name: "Scarlet Witch",
        image: "https://drive.google.com/thumbnail?id=1JTQJkT9OfWLoBRvzp634jHEkaOhCZS-t",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Scarlet#Witch.html"
    },
    {
        id: 9,
        name: "Party Glass",
        image: "https://drive.google.com/thumbnail?id=1Y9Hmgh9T2gpdlcYg7ONLDOUBDrIW3UO9",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Party#Glass.html"
    },
    {
        id: 10,
        name: "Wall-Mounted Shelf",
        image: "https://drive.google.com/thumbnail?id=1XZ_IwseIBPkbUx5XboQyhHN5vWhGtsQW",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Wall-Mounted#Shelf.html"
    },
    {
        id: 11,
        name: "Naruto Miniature",
        image: "https://drive.google.com/thumbnail?id=1RFJG93--Sv48C6ZLSaE3qVWDYSgWaaZH",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Naruto#Miniature.html"
    },
    {
        id: 12,
        name: "Naruto Miniature & Wall-Mounted Shelf (Combo)",
        image: "https://drive.google.com/thumbnail?id=1MXxF4W7icETmuTwmwfqs_Nq59FfQpbvU",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/Naruto#Miniature#&#Wall-Mounted#Shelf#(Combo).html"
    }
];

// Load likes from local storage
function loadLikes() {
    const storedLikes = JSON.parse(localStorage.getItem('productLikes'));
    if (storedLikes) {
        products.forEach(product => {
            if (storedLikes[product.id]) {
                product.likes = storedLikes[product.id];
            }
        });
    }
}

// Save likes to local storage
function saveLikes() {
    const likesToStore = {};
    products.forEach(product => {
        likesToStore[product.id] = product.likes;
    });
    localStorage.setItem('productLikes', JSON.stringify(likesToStore));
}

// Function to render products
function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear the container

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="overlay">
                    <button class="like-btn" onclick="likeProduct(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="share-btn" onclick="copyLink('${product.link}')">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
            <h2 class="product-title">${product.name}</h2>
            <button class="buy-now-btn" onclick="window.location.href='${product.link}'">
                Buy Now
            </button>
            <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                <i class="fas fa-eye"></i>
            </button>
            <span class="like-count">${product.likes} Likes</span>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Open the Quick View Modal and populate with product data
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Load the product page into the iframe
        document.getElementById('miniScreen').src = product.link; // Load the external HTML page
        document.getElementById('quickViewModal').style.display = 'block'; // Show the modal
    }
}

// Close the Quick View Modal
function closeQuickView() {
    document.getElementById('quickViewModal').style.display = 'none'; // Hide the modal
    document.getElementById('miniScreen').src = ''; // Clear the iframe src
}

// Like a product
function likeProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.likes++;
        saveLikes(); // Save likes to local storage
        renderProducts(); // Re-render products to update the like count
    }
}

// Copy product link to clipboard
function copyLink(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('Link copied to clipboard: ' + link);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target === modal) {
        closeQuickView();
    }
}

// Call the function to load likes and render the products when the page loads
window.onload = function() {
    loadLikes();
    renderProducts();
};
