import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return (
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About Us</Footer.Title>
              <Footer.Link href="#">Story</Footer.Link>
              <Footer.Link href="#">Contact us</Footer.Link>
              {/* <Footer.Link href="#">Testimonials</Footer.Link> */}
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Services</Footer.Title>
              <Footer.Link><Link to="/">Home</Link></Footer.Link>
              <Footer.Link><Link to="/news">News</Link></Footer.Link>
              <Footer.Link><Link to="/cryptocurrencies">Cryptocurrencies</Link></Footer.Link>
              <Footer.Link><Link to="/exchanges">Exchanges</Link></Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Contact Us</Footer.Title>
              <Footer.Link href="#"><Link>United States</Link></Footer.Link>
              <Footer.Link href="#"><Link>United Kingdom</Link></Footer.Link>
              <Footer.Link href="#"><Link>Australia</Link></Footer.Link>
              <Footer.Link href="#"><Link>Support</Link></Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link href="#"><Icon className="fab fa-facebook-f" /><Link>Facebook</Link></Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-instagram" /><Link>Instagram</Link></Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-youtube" /><Link>Youtube</Link></Footer.Link>
              <Footer.Link href="#"><Icon className="fab fa-twitter" /><Link>Twitter</Link></Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
    );
}
