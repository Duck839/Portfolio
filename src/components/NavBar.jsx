import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = ({ constant, showBack = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="inner flex items-center justify-between relative">
        <Link className="logo" to="/">
          Jing Yuan
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {constant.map(({ link, name }) => (
              <li key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
            {showBack && (
              <li className="group">
                <Link to="/">
                  <span>← Home</span>
                  <span className="underline" />
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <img
            src={mobileOpen ? "images/x.svg" : "images/menu.svg"}
            alt="menu"
            className="w-6 h-6"
          />
        </button>

        {/* Dropdown menu (TOP) */}
        <div
          className={`absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-500 md:hidden ${
            mobileOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-lg"
                >
                  {name}
                </a>
              </li>
            ))}
            {showBack && (
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-lg"
                >
                  ← Home
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
