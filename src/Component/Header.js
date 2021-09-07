import { React } from "react";
import { Link } from "react-router-dom";
import "../asset/Header.css";
import "../asset/Header_responsive.css"
import { useHistory,Redirect } from 'react-router-dom';

const Header = ({getResultSearch}) => {
  let history = useHistory();

  const redirect = () => {
    history.push('/Search')
  }
  const Header__account__notHover = document.getElementById("Header__account-notHover");
  const Header__account__Hover = document.getElementById("Header__account-Hover");
  const Header__account__modalUser = document.getElementsByClassName("Header__account-modalUser")[0];
  // viết hàm hover cho modal user account
  const onMouseoverUserModal = () => {
        Header__account__Hover.style.display = "block";
        Header__account__notHover.style.display = "none";
        Header__account__modalUser.style.display = "block"
  }
  // viết hàm not hover cho modal user account
  const onMouseoutUserModal = () => {
        Header__account__Hover.style.display = "none";
        Header__account__notHover.style.display = "block";
        Header__account__modalUser.style.display = "none";
  }   
  const onClickNavbar = () => {

  }
  return (
    <div className="Header">
      <i class="fas fa-bars" id="Header__navbar" onClick={() => {onClickNavbar()}}></i>
      <Link to="/Home" className="Header__logo">Hải Film</Link>
      <div className="Header__browse">
         <p>
            Category
         </p>
         <div className="Header__browser-modal">
              <div className="Header__search">
              <i class="fas fa-search"></i>
              <input
                type="text"
                placeholder="Find movies, TV shows and more"
                className="Header__search-input"
                onInput={() => {redirect();getResultSearch(document.getElementsByClassName("Header__search-input")[0].value);}}
              ></input>
              </div>
              <Link to="/phimbo">Phim bộ</Link>
              <Link to="/phimle">Phim lẻ</Link>
              <Link to="/phimhoathinh">Phim hoạt hình</Link>
              <Link to="/phimchieurap">Phim chiếu rạp</Link>
         </div>
      </div>
      <div className="Header__search">
        <i class="fas fa-search"></i>
        <input
          type="text"
          placeholder="Find movies, TV shows and more"
          className="Header__search-input"
          onInput={() => {redirect();getResultSearch(document.getElementsByClassName("Header__search-input")[0].value);}}
        ></input>
      </div>
      <div className="Header__account" onMouseOver={() => {onMouseoverUserModal()}} onMouseOut={() => {onMouseoutUserModal()}}>
        <span>Hi, Hải</span>
        <i class="fas fa-chevron-up" id="Header__account-notHover"></i>
        <i class="fas fa-chevron-down" id="Header__account-Hover"></i>
        <div className="Header__account-modalUser">
          <li>Account settings</li>
          <li>Parental Controls</li>
          <li>Help Center</li>
          <li>Activate Your Device</li>
          <li>Sign out</li>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
