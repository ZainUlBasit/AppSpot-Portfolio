import React from "react";

const ContactLoader = () => {
  return (
    <ul className="!bg-[#141414]">
      <li>
        <div class="loaders">
          <div class="child"></div>
        </div>
      </li>

      <li>
        <div class="text"></div>
      </li>
    </ul>
  );
};

export default ContactLoader;
