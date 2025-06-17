import facebookIcon from './icons/facebook.svg';
import instagramIcon from './icons/instagram.svg';
import twitterIcon from './icons/twitter.svg';

export function contactModule(){
    const divContainer = document.getElementById("content");
    
    const contacts = document.createElement("div");
    contacts.classList.add("contacts");
    contacts.innerHTML = `
        <h2>Come visit, or reach out!</h2>
        <div class="categories">
            <div class="contact-category">
                <h3>Order Here!</h3>
                <p>128 Rustic Lane, Maplewood, ON M4B 1A9, Canada</p>
                <p>Phone: (455) 189-4747</p>
                <p>Email: rustico@business.com</p>
            </div>
            <div class="contact-category">
                <h3>Our Hours!</h3>
                <p>Monday-Friday: 12:00 PM - 11:00 PM</p>
                <p>Saturday: 12:00 PM - 12:00 AM</p>
                <p>Sunday: 12:00 PM - 10:00 PM</p>
            </div>
        </div>
        <div class="contact-category">
            <h3>Socials!</h3>
            <ul class="social-links">
                <li>
                    <img src="${facebookIcon}" alt="Facebook">
                </li>
                <li>
                    <img src="${instagramIcon}" alt="Instagram">
                </li>
                <li>
                    <img src="${twitterIcon}" alt="Twitter">
                </li>
            </ul>
        </div>
        
    `;
    divContainer.appendChild(contacts);
}