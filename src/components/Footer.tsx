import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:opacity-70 transition-opacity">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:opacity-70 transition-opacity">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:opacity-70 transition-opacity">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/sale" className="hover:opacity-70 transition-opacity">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-bold mb-4">SPORTS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sports" className="hover:opacity-70 transition-opacity">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:opacity-70 transition-opacity">
                  Soccer
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:opacity-70 transition-opacity">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:opacity-70 transition-opacity">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:opacity-70 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:opacity-70 transition-opacity">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:opacity-70 transition-opacity">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:opacity-70 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:opacity-70 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:opacity-70 transition-opacity">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm opacity-70">
              © 2025 Hekla All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
