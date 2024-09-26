import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaTwitch, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              E-Sports Central is your go-to source for the latest news, events,
              and insights in the world of competitive gaming.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-primary"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-muted-foreground hover:text-primary"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email: info@esportscentral.com
            </p>
            <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaTwitch size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; 2023 E-Sports Central. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
