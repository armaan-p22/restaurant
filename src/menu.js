export function menuModule(){
    const divContainer = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
        <h2>Our Menu</h2>

        <div class="menu-category">
            <h3>Pizza</h3>
            <div class="menu-item">
                <h4>Meat Lover's</h4>
                <p>Pepperoni, Italian Sausage, Bacon, Ham, Ground Beef, Salami</p>
                <span class="price">Large: $13.99, Medium: $11.99, Small: $9.99</span>
            </div>
            <div class="menu-item">
                <h4>Veggie</h4>
                <p>Mushrooms, Onions, Spinach, Olives, Jalapenos, Tomatoes</p>
                <span class="price">Large: $12.99, Medium: $10.99, Small: $8.99</span>
            </div>
            <div class="menu-item">
                <h4>Four Cheese</h4>
                <p>Mozzarella, Parmesan, Gorgonzola, Ricotta</p>
                <span class="price">Large: $11.99, Medium: $9.99, Small: $7.99</span>
            </div>
        </div>
        <div class="menu-category">
            <h3>Pasta</h3>
            <div class="menu-item">
                <h4>Spaghetti</h4>
                <p>Classic Spaghetti tossed in our house-made marinara sauce, slow-simmered with ripe tomatoes, garlic, and fresh herbs. Finished with a sprinkle of parmesan and served with warm, rustic bread.</p>
                <span class="price">Large: $13.99, Medium: $11.99, Small: $9.99</span>
            </div>
            <div class="menu-item">
                <h4>Fettuccine Alfredo</h4>
                <p>Silky fettuccine noodles coated in a rich, creamy Alfredo sauce made with butter, garlic, and parmesan. Add grilled chicken or shrimp for the perfect touch.</p>
                <span class="price">Large: $13.99, Medium: $11.99, Small: $9.99</span>
            </div>
            <div class="menu-item">
                <h4>Rigatoni Bolognese</h4>
                <p>Hearty rigatoni pasta served with our slow-cooked beef and tomato Bolognese sauce, infused with red wine, garlic, and aromatic herbs. Finished with fresh basil and shaved parmesan for a bold, satisfying dish.</p>
                <span class="price">Large: $13.99, Medium: $11.99, Small: $9.99</span>
            </div>
        </div>
        <div class="menu-category">
            <h3>Desserts</h3>
            <div class="menu-item">
                <h4>Tiramisu</h4>
                <p>A timeless Italian dessert layered with espresso-soaked ladyfingers, whipped mascarpone cream, and a dusting of rich cocoa. Light, luscious, and perfectly indulgent.</p>
                <span class="price">Price: $8.99</span>
            </div>
            <div class="menu-item">
                <h4>Cannoli</h4>
                <p>Crispy, golden pastry shells filled with sweet ricotta cream, dotted with chocolate chips and finished with a sprinkle of powdered sugar. A Sicilian classic with every bite.</p>
                <span class="price">Price: $7.99</span>
            </div>
            <div class="menu-item">
                <h4>Gelato</h4>
                <p>Authentic Italian-style ice cream, churned slow for a dense, creamy texture. Available in rotating flavors like pistachio, hazelnut, chocolate, and vanilla bean.</p>
                <span class="price">Price: $6.99</span>
            </div>
        </div>
        
    `;
    divContainer.appendChild(menu);

}