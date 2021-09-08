import { React } from "react";
import { Link } from "react-router-dom";
import "../asset/Header.css";
import "../asset/Header_responsive.css"
import { useHistory,Redirect } from 'react-router-dom';

const Header = ({getResultSearch , modal__browser}) => {
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
    document.getElementsByClassName("Header__browser-modal")[0].style.left = "0%";
    document.getElementsByClassName("Header__browser-modal")[0].style.transition = "all 0.5s linear";
  }
  return (
    <header className="Header">
      <i class="fas fa-bars" id="Header__navbar" onClick={() => {onClickNavbar()}}></i>
      <Link to="/Home" className="Header__logo">Hải Film</Link>
      <div className="Header__browse" onClick={() => {modal__browser()}}>
         <p >
            Category
         </p>
         
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
    </header>
  );
};

export default Header;
