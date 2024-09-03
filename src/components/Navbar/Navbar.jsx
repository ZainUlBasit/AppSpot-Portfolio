import { Link, NavLink, useLocation } from "react-router-dom";
import ListItem from "./ListItem";
import Logo from "../../assets/images/Logo.png";
import NavItem from "./NavItem";
import "./ListItem.css";
const menuItems = [];

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  function handleBurger(e) {
    const element = document.querySelector(".menu-responsive");
    if (e.target.checked) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  }

  function closeMenu() {
    const checkbox = document.getElementById("openSidebarMenu");
    if (checkbox) {
      checkbox.checked = false;
      handleBurger({ target: checkbox });
    }
  }

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add("animateMenu");
      } else {
        nav.classList.remove("animateMenu");
      }
    }
  });

  return (
    <nav className="nav bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-12 " />
        </a>
        <ul className="hidden text-xs nmd:flex justify-between items-center font-spartan gap-x-7"></ul>
        {pathname !== "/" ? (
          <a href="#contact" className="hidden nmd:inline-block">
            <button className="inline-block px-6 py-3 font-semibold text-white hover:bg-main rounded-full transition-all ease-in-out duration-500  border border-main p-[2px]">
              Contact Us
            </button>
          </a>
        ) : (
          <div className="select-none px-6 py-3">Contact Us</div>
        )}
        <input type="checkbox" id="openSidebarMenu" onChange={handleBurger} />
        <label
          htmlFor="openSidebarMenu"
          className="sidebarIconToggle pr-4 nmd:hidden"
        >
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <ul className="menu-responsive d-none z-50 bg-transparent ">
          {menuItems.map((item) => (
            <NavItem
              pathname={location.pathname}
              nv={item}
              closeMenu={closeMenu}
            />
          ))}

          <li className="py-4 bg-transparent">
            <a href="#contact" className="bg-transparent">
              <button
                className="inline-block px-6 py-3 font-semibold text-white hover:bg-main rounded-full transition-all ease-in-out duration-500  border border-main p-[2px] bg-transparent"
                onClick={closeMenu}
              >
                Contact Us
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
