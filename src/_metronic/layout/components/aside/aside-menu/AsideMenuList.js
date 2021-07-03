/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/my-farm", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-farm">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Custom/briefcase.svg")}
              />
            </span>
            <span className="menu-text">MY FARM</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/items", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/items">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Custom/basket3.svg")} />
            </span>
            <span className="menu-text">ITEMS</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/csa-boxes", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/csa-boxes">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Custom/box-seam.svg")}
              />
            </span>
            <span className="menu-text">CSA BOXES</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/shipment", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/shipment">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Custom/cart-dash.svg")}
              />
            </span>
            <span className="menu-text">SHIPMENT</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/orders", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/orders">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Custom/receipt.svg")} />
            </span>
            <span className="menu-text">ORDERS</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/files", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/files">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Custom/folder.svg")} />
            </span>
            <span className="menu-text">FILES</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/settings", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/settings">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Custom/gear.svg")} />
            </span>
            <span className="menu-text">SETTINGS</span>
          </NavLink>
        </li>
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
