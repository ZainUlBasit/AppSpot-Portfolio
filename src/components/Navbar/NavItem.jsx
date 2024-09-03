import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ pathname, nv, closeMenu }) => {
  return (
    <li className="py-4 bg-transparent w-[220px]">
      <Link to={nv.link} className="bg-transparent">
        <button
          className="button bg-transparent"
          data-text="Awesome"
          onClick={closeMenu}
        >
          <span
            className={`${
              pathname === nv.link
                ? "bg-transparent text-[#ff916f]"
                : "actual-text bg-transparent"
            }`}
          >
            &nbsp;{nv.title}&nbsp;
          </span>
          <span aria-hidden="true" className="hover-text bg-transparent">
            &nbsp;{nv.title}&nbsp;
          </span>
        </button>
      </Link>
    </li>
  );
};

export default NavItem;
