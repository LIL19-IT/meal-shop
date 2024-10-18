import React from "react";
import "./AboutPage.css";

export function AboutPage() {
    return (
        <div className="AboutPage">
            <h2>About Male's Shop</h2>
            <p>
                Welcome to Male's Shop, your one-stop destination for high-quality products designed for men. 
                We specialize in clothing, accessories, and grooming products that enhance your style and 
                confidence. Explore our collection and discover the perfect items that suit your lifestyle.
            </p>
            <img src="https://i.pinimg.com/564x/46/e1/4a/46e14abd6e162eaae7a24d316bdda3e6.jpg" alt="Male's Shop" />
            <input type="text" placeholder="Enter your email" />
            <button className="action-button">Subscribe</button>

            <div className="icons">
                <i className="fas fa-facebook"></i>
                <i className="fas fa-twitter"></i>
                <i className="fas fa-instagram"></i>
                <i className="fas fa-linkedin"></i>
            </div>
        </div>
    );
}

