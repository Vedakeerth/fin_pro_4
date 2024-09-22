// Array of products with links
const products = [
    {
        id: 1,
        name: "Groot",
        image: "https://drive.google.com/thumbnail?id=1lgImTI5jNX3AcEmwKwULKpVpJvbhCIJe",
        description: "Naruto Miniature & Wall-Mounted shelf. It was include the two Products. Naruto Miniature and Wall-Mounted shelf. There are 3 Type of Size for both products are S, M, L also Custom sizes are available",
        likes: 0,
        link: "Gifts Products Pages/Groot.html", // Link to the external HTML for the iframe
        b_link: "https://wa.me/p/8213195935359813/919047573454"
    },
    {
        id: 2,
        name: "Penguin",
        image: "https://drive.google.com/thumbnail?id=1RNQmtyV-sbdPEJ6mWQJwyIEiIk5zpZ8Q",
        description: "This is the description for Product 2.",
        likes: 0,
        link: "Gifts Products Pages/Penguin.html",
        b_link: "https://wa.me/p/7994809297262552/919047573454"
    },
    {
        id: 3,
        name: "Voronoi Lamp",
        image: "https://drive.google.com/thumbnail?id=1thl0o5yXDTfZfAghC-GYs8KiUtiUHZtE",
        description: "This is the description for Product 3.",
        likes: 0,
        link: "Gifts Products Pages/VoronoiLamp.html",
        b_link: "https://wa.me/p/7932901360124767/919047573454"
    },
    {
        id: 4,
        name: "F1 Car Kit",
        image: "https://drive.google.com/thumbnail?id=1MXxF4W7icETmuTwmwfqs_Nq59FfQpbvU",
        description: "This is the description for Product 4.",
        likes: 0,
        link: "Gifts Products Pages/F1CarKit.html",
        b_link: "https://wa.me/p/7572674362836550/919047573454"
    },
    {
        id: 5,
        name: "Mother's Day Gift",
        image: "https://drive.google.com/thumbnail?id=1kd9rlRy6sHwb8CyvI8jXUnqnQWKZiGCz",
        description: "This is the description for Product 5.",
        likes: 0,
        link: "Gifts Products Pages/Mother'sDayGift.html",
        b_link: "https://wa.me/p/7385093804925494/919047573454"
    },
    {
        id: 6,
        name: "Candle Holder",
        image: "https://drive.google.com/thumbnail?id=1fyeg8N8xUNZmCn1ChpD3vd_ldWL3wMpj",
        description: "This is the description for Product 6.",
        likes: 0,
        link: "Gifts Products Pages/CandleHolder.html",
        b_link: "https://wa.me/p/7843600422359650/919047573454"
    },
    {
        id: 7,
        name: "Little Mummy",
        image: "https://drive.google.com/thumbnail?id=1Ufaz1pxtKhrE-MVODlwSpHceYuYBrTu2",
        description: "This is the description for Product 7.",
        likes: 0,
        link: "Gifts Products Pages/LittleMummy.html",
        b_link: "https://wa.me/p/7744611658969743/919047573454"
    },
    {
        id: 8,
        name: "Scarlet Witch",
        image: "https://drive.google.com/thumbnail?id=1JTQJkT9OfWLoBRvzp634jHEkaOhCZS-t",
        description: "This is the description for Product 8.",
        likes: 0,
        link: "Gifts Products Pages/ScarletWitch.html",
        b_link: "https://wa.me/p/8140247956041138/919047573454"
    },
    {
        id: 9,
        name: "Party Glass",
        image: "https://drive.google.com/thumbnail?id=1Y9Hmgh9T2gpdlcYg7ONLDOUBDrIW3UO9",
        description: "This is the description for Product 9.",
        likes: 0,
        link: "Gifts Products Pages/PartyGlass.html",
        b_link: "https://wa.me/p/8211045055622705/919047573454"
    },
    {
        id: 10,
        name: "Wall-Mounted Shelf",
        image: "https://drive.google.com/thumbnail?id=1XZ_IwseIBPkbUx5XboQyhHN5vWhGtsQW",
        description: "This is the description for Product 10.",
        likes: 0,
        link: "Gifts Products Pages/Wall-MountedShelf.html",
        b_link: "https://wa.me/p/7777421029042559/919047573454"
    },
    {
        id: 11,
        name: "Naruto Miniature",
        image: "https://drive.google.com/thumbnail?id=1RFJG93--Sv48C6ZLSaE3qVWDYSgWaaZH",
        description: "This is the description for Product 11.",
        likes: 0,
        link: "Gifts Products Pages/NarutoMiniature.html",
        b_link: "https://wa.me/p/8152953401427496/919047573454"
    },
    {
        id: 12,
        name: "Naruto Miniature & Wall-Mounted Shelf (Combo)",
        image: "https://drive.google.com/thumbnail?id=1QrMlV4QvvEELVnTPXAnjMZsoIEikcEpO",
        description: "This is the description for Product 12.",
        likes: 0,
        link: "Gifts Products Pages/NarutoMiniature&Wall-MountedShelf(Combo).html",
        b_link: "https://wa.me/p/26962832933315573/919047573454"
    }
];


// GitHub Gist ID and Token
const GIST_ID = '5da685392f8665a4249daea968e7af2d';
const GITHUB_TOKEN = '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'; // Make sure to keep this secure

// Load likes from GitHub Gist
async function loadLikes() {
    try {
        const response = await fetch(`https://api.github.com/gists/${GIST_ID}`);
        const data = await response.json();
        const likesData = JSON.parse(data.files['likes.json'].content);

        products.forEach(product => {
            if (likesData[product.id]) {
                product.likes = likesData[product.id];
            }
        });
    } catch (error) {
        console.error('Error loading likes:', error);
    }
}


// Save likes to GitHub Gist
async function saveLikes() {
    const likesToStore = {};
    products.forEach(product => {
        likesToStore[product.id] = product.likes;
    });

    try {
        await fetch(`https://api.github.com/gists/${GIST_ID}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                files: {
                    'likes.json': {
                        content: JSON.stringify(likesToStore)
                    }
                }
            }),
        });
    } catch (error) {
        console.error('Error saving likes:', error);
    }
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
            <button class="buy-now-btn" onclick="window.location.href='${product.b_link}'">
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

// Load likes from GitHub Gist
async function loadLikes() {
    try {
        const response = await fetch(`https://api.github.com/gists/${GIST_ID}`);
        const data = await response.json();
        const likesData = JSON.parse(data.files['likes.json'].content);

        // Initialize likes for each product
        products.forEach(product => {
            if (likesData[product.id] !== undefined) {
                product.likes = likesData[product.id]; // Load the stored likes
            } else {
                product.likes = 0; // Default to 0 if not set
            }
        });
    } catch (error) {
        console.error('Error loading likes:', error);
    }
}

// Call the function to load likes and render the products when the page loads
window.onload = function() {
    loadLikes()
        .then(renderProducts) // Render products after likes are loaded
        .catch(error => console.error('Error during initialization:', error));
};
