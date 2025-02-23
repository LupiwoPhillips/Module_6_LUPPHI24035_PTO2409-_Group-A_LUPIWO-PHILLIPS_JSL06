// Sample menu data (data from a server in a real-world scenario)
const menu = {
    Starters: { "Garlic Bread": 5.99, "Bruschetta": 6.99 },
    MainCourses: { "Margherita Pizza": 12.99, "Spaghetti Carbonara": 14.99 },
    Desserts: { "Tiramisu": 7.99, "Cheesecake": 8.99 }
};

// Order state
const order = {
    items: [],
    total: 0
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu"); // Get the menu container

    for (const category in menu) {
        // Create a category element
        const categoryElement = document.createElement("h2");
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create a list for items
        const itemList = document.createElement("ul");

        for (const item in menu[category]) {
            const price = menu[category][item];

            // Create a list item
            const listItem = document.createElement("li");
            listItem.textContent = `${item} - $${price.toFixed(2)}`;
            listItem.style.cursor = "pointer";

            // Add event listener to handle adding items to order
            listItem.addEventListener("click", () => addToOrder(item, price));

            itemList.appendChild(listItem);
        }

        menuContainer.appendChild(itemList);
    }
}

// Function to add an item to the order
function addToOrder(itemName, itemPrice) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Create a new order list item
    const orderItem = document.createElement("li");
    orderItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    orderItemsList.appendChild(orderItem);

    // Update order state
    order.items.push({ name: itemName, price: itemPrice });
    order.total += itemPrice;

    // Update total price in the UI
    orderTotalElement.textContent = `Total: $${order.total.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system
document.addEventListener("DOMContentLoaded", () => {
    initMenuSystem(menu);
});
