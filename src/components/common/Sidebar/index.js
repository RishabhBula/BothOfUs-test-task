import React from "react";
import history from "../../../services/history";
import Messages from "../../../icons/Messages";
import Product from "../../../icons/Product";
import Questionare from "../../../icons/Questionare";
import Therepists from "../../../icons/Therepists";
import User from "../../../icons/User";
import LogoImg from "../../../images/Logo.png";

const Sidebar = () => {
  const moveToRoute = (route) => {
    history.push(route);
  };

  return (
    <>
      <div className="logo">
        <img onClick={() => moveToRoute("/")} src={LogoImg} alt="" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Questionare />
            Questionare
          </li>
          <li>
            <Therepists />
            Therepists
          </li>
          <li onClick={() => moveToRoute("/brands")}>
            <Product />
            Product
          </li>
          <li onClick={() => moveToRoute("/")}>
            <User />
            User
          </li>
          <li>
            <Messages />
            Messages
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
