import './App.scss';
import './js/cart.js';


function App() {
  return (
    <div className="App">

    </div>
  );
}
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM elements
    const cartElement = document.querySelector('.js-slide-cart');
    const overlayElement = document.querySelector('.js-cart-overlay');
    const openCartButtons = document.querySelectorAll('.js-add-to-cart');
    const closeCartButton = document.querySelector('.js-close-cart');
    
    /**
     * @function openCart
     * Opens the slide-out cart and applies the overlay.
     */
    function openCart() {
        // Apply 'is-open' modifier classes for CSS animations
        cartElement.classList.add('slide-cart--is-open');
        overlayElement.classList.add('cart-overlay--is-open');

        // Optional: Block scrolling on the body when the cart is open
        document.body.style.overflow = 'hidden'; 
    }
});
export default App;
