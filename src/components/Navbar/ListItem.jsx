import { NavLink, useLocation } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ path, text }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  //   <li className="py-4">
  //   <NavLink
  //     to="/"
  //     className={`${
  //       location.pathname === "/"
  //         ? "text-color"
  //         : "text-white transition-all ease-in-out duration-300"
  //     } text-2xl px-10 font-semibold transition ease-in-out duration-500`}
  //     onClick={closeMenu}
  //   >
  //     Home
  //   </NavLink>
  // </li>
  return (
    <li>
      <NavLink to={path}>
        <button className="button bg-transparent" data-text="Awesome">
          <span
            className={`${
              location.pathname === path ? "text-[#ff916f]" : "actual-text"
            }`}
          >
            &nbsp;{text}&nbsp;
          </span>
          <span aria-hidden="true" className="hover-text bg-transparent">
            &nbsp;{text}&nbsp;
          </span>
        </button>
      </NavLink>
    </li>
  );
};

export default ListItem;
