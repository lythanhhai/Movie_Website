import {React} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { redirect } from "react-dom";
import { useHistory, Redirect } from "react-router-dom";
import '../asset/Search/Search.css'
import '../asset/Search/Search_respon.css'

const Search = ({getResultSearch}) => {
    let history = useHistory();
    const redirect = () => {
        history.push("/Search");
    }
    return(
        <div className="Header__browser-modal">
          <div className="Header__search-mobile">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="Find movies, TV shows and more"
              className="Header__search-input--mobile"
              onInput={() => {
                redirect()
                getResultSearch(
                  document.getElementsByClassName(
                    "Header__search-input--mobile"
                  )[0].value
                );

                
              }}
            ></input>
          </div>
          <div className="Header__info">
            <p>Genres</p>
            <Link to="/Home" className="home">
              Home
            </Link>
            <Link to="/phimbo" className="phimbo">
              Phim bộ
            </Link>
            <Link to="/phimle" className="phimle">
              Phim lẻ
            </Link>
            <Link to="/phimhoathinh" className="phimhoathinh">
              Phim hoạt hình
            </Link>
            <Link to="/phimchieurap" className="phimchieurap">
              Phim chiếu rạp
            </Link>
            <a href="#Contact">Contact me</a>
          </div>
          <i
            class="fas fa-times closeModal"
            onClick={() => {
              document.getElementsByClassName(
                "Header__browser-modal"
              )[0].style.left = "-100%";
              document.getElementsByClassName(
                "Header__browser-modal"
              )[0].style.transition = "all 0.5s linear";
            }}
          ></i>
        </div>
    );
}

export default Search;