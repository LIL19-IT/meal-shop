import './Footer.css'; 

export function Footer() {
    return (
        <div className="Footer">
            <div className="footer-content">
                <h2><i className="fa fa-info-circle"></i> Contact Us</h2>
                <p><i className="fa fa-store"></i> Lilit's Shop</p>
                <p className="email"><i className="fa fa-envelope"></i> Email: lilit@example.com</p>
                <p className="phone"><i className="fa fa-phone"></i> Phone: +374-94-633-488</p>
                <p className="address"><i className="fa fa-map-marker-alt"></i> Address: 1234 Bangladesh St, Wonderland, WW 56789</p>
                <p className="creator"><i className="fa fa-copyright"></i> Created by Lilit | All rights reserved!</p>
            </div>
        </div>
    );
};
