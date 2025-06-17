export function homeModule(){
    const divContainer = document.getElementById("content");

    divContainer.innerHTML = `
    <section class="home-section">
        <h2>Welcome to Rustico</h1>
        <p>
            Nestled in the heart of the city, Rustico brings the warmth of a rustic Italian kitchen to your table. 
            From hand-tossed pizzas to slow-cooked pastas, every dish is crafted with fresh, authentic ingredients and a whole lot of love. 
            Whether you're joining us for a casual lunch or a cozy dinner, we invite you to relax, unwind, and savor the flavors of Italy.
        </p>
        <p>
            We're excited to share our love of Italian cooking with you. 
            Sit back, relax, and enjoy the warm, rustic flavors of home.
        </p>
    </section>
    `;

}