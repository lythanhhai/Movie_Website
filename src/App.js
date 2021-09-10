import "./App.css";
import "./App_responsive.css";
import { useEffect, useState, useRef } from "react";
// component
import Header from "./Component/Header";
import Phimbo from "./Component/Phimbo";
import Phimle from "./Component/Phimle";
import PhimHoatHinh from "./Component/PhimHoatHinh";
import Phimchieurap from "./Component/PhimChieuRap";
import ResultSearch from "./Component/ResultSearch";
import Banner from "./Component/Banner";
import ContactMe from "./Component/ContactMe";
import NotfoundFilm from "./Component/NotfoundFilm";
import Footer from "./Component/Footer";
import Film from "./Component/Film";

// import react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { redirect } from "react-dom";
import { useHistory, Redirect } from "react-router-dom";
// font-awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// import data
import keyApiDesk from "./Api/keyAPI";
const keyAPI =
  "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR02wpHNAaR8yyhpYRWK3912FE17bcAMmRiHm058OCIQkNiCVbi9BmoaBNk";
function App() {
  let history = useHistory();
  const redirect = () => {
    history.push("/Search");
  };
  const gotoURL = (usr) => {
    let url = `/${usr}`;
    //console.log(url);
    this.props.history.push(url);
  };
  const [phimBos, setPhimBos] = useState([]);
  const [phimLes, setPhimLes] = useState([]);
  const [phimHoatHinhs, setPhimHoatHinhs] = useState([]);
  const [phimChieuRaps, setPhimChieuRaps] = useState([]);
  const [allPhim, setAllPhim] = useState([]);

  const getData = () => {
    setPhimBos(keyApiDesk.phim.phimbo);
    setPhimLes(keyApiDesk.phim.phimle);
    setPhimHoatHinhs(keyApiDesk.phim.phimhoathinh);
    setPhimChieuRaps(keyApiDesk.phim.phimchieurap);
    // đặt tất cả các phim
    var arrAllPhim = [];
    for (var i = 0; i < keyApiDesk.phim.phimbo.length; i++) {
      arrAllPhim.push(keyApiDesk.phim.phimbo[i]);
    }
    for (var i = 0; i < keyApiDesk.phim.phimle.length; i++) {
      arrAllPhim.push(keyApiDesk.phim.phimle[i]);
    }
    for (var i = 0; i < keyApiDesk.phim.phimhoathinh.length; i++) {
      arrAllPhim.push(keyApiDesk.phim.phimhoathinh[i]);
    }
    for (var i = 0; i < keyApiDesk.phim.phimchieurap.length; i++) {
      arrAllPhim.push(keyApiDesk.phim.phimchieurap[i]);
    }
    setAllPhim(arrAllPhim);
  };
  useEffect(() => {
    getData();
  }, []);
  // const fetchMovies = async () => {

  //   try {
  //     const response = await fetch(keyAPI)
  //     const movies = await response.json()
  //     setPhimBos(movies.phim.phimbo)
  //     setPhimLes(movies.phim.phimle)
  //     setPhimHoatHinhs(movies.phim.phimhoathinh)
  //     setPhimChieuRaps(movies.phim.phimchieurap)
  //     // đặt tất cả các phim
  //     var arrAllPhim = [];
  //     for(var i = 0 ; i < movies.phim.phimbo.length ; i++)
  //     {
  //       arrAllPhim.push(movies.phim.phimbo[i]);
  //     }
  //     for(var i = 0 ; i < movies.phim.phimle.length ; i++)
  //     {
  //       arrAllPhim.push(movies.phim.phimle[i]);
  //     }
  //     for(var i = 0 ; i < movies.phim.phimhoathinh.length ; i++)
  //     {
  //       arrAllPhim.push(movies.phim.phimhoathinh[i]);
  //     }
  //     for(var i = 0 ; i < movies.phim.phimchieurap.length ; i++)
  //     {
  //       arrAllPhim.push(movies.phim.phimchieurap[i]);
  //     }
  //     setAllPhim(arrAllPhim);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //     fetchMovies()
  // },[])

  // useState phim kết quả
  const [resultPhim, setResultPhim] = useState("");
  const [phimBySearch, setPhimBySearch] = useState([]);
  const getResultSearch = (result) => {
    setResultPhim(result);
    var arr = [];
    allPhim.forEach((allPhims, index) => {
      var phim = allPhims.title.toLowerCase();
      var result1 = result.toLowerCase();
      var category = allPhims.category.toLowerCase();

      if (category.includes(result1)) {
        arr.push(allPhims);
      } else if (phim.includes(result1)) {
        arr.push(allPhims);
      }
    });
    setPhimBySearch(arr);
  };
  const setAllPhimInList = () => {};

  // search bởi tên phim
  // const searchByTitle = () => {
  //   var arr = []
  //   phimHoatHinhs.forEach((phimHoatHinh,index) => {
  //     var phim = phimHoatHinh.title.toLowerCase();
  //     if(phim.indexOf(resultPhim) !== -1)
  //     {
  //       arr.push(phimHoatHinh);
  //     }
  //   });
  //   setPhimBySearch(arr);
  // }
  // hàm click category
  const modal__browser = () => {
    document.getElementsByClassName("Header__browser-modal")[0].style.left =
      "0%";
    document.getElementsByClassName(
      "Header__browser-modal"
    )[0].style.transition = "all 0.5s linear";
  };
  // kiểm tra xem người dùng có bấm nút load more
  const [click, setClick] = useState(true);

  const onClickBtnLoadMore = () => {
    setClick(true);
  };
  const methodSetClick = () => {
    setClick(false);
  };
  const result = (phim) => {
    // return(
    //   <Phimbo phimBos={phim} onLoad={() => {methodSetClick()}}/>
    // )
  };
  const [episodes, setEpisodes] = useState([]);
  const [title, setTilte] = useState("");
  const epiRef = useRef();
  //epiRef.current = episodes;

  useEffect(() => {}, [episodes, title]);
  const getEpisodes = (Episodes, Title) => {
    setEpisodes(Episodes);
    setTilte(Title);
  };

  return (
    <Router>
      <div className="App" onLoad={() => {}}>
        <div className="Header__browser-modal">
          <div className="Header__search-mobile">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="Find movies, TV shows and more"
              className="Header__search-input--mobile"
              onInput={() => {
                getResultSearch(
                  document.getElementsByClassName(
                    "Header__search-input--mobile"
                  )[0].value
                );

                <Redirect to="/Search" />;
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
        <Header
          getResultSearch={getResultSearch}
          modal__browser={modal__browser}
        />
        <Banner episodes={episodes} />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Phimbo phimBos={phimBos} />
              <Phimle phimLes={phimLes} />
              <PhimHoatHinh phimHoatHinhs={phimHoatHinhs} />
              <Phimchieurap phimChieuRaps={phimChieuRaps} />
              {click === true ? result(phimHoatHinhs) : ""}
              {click === true ? result(phimChieuRaps) : ""}
              <button
                type="submit"
                id="btn_loadmore"
                onClick={() => {
                  onClickBtnLoadMore();
                }}
              >
                Load More
              </button>
            </>
          )}
        />

        <Route
          path="/Home"
          render={() => (
            <>
              <Phimbo phimBos={phimBos} />
              <Phimle phimLes={phimLes} />
              <PhimHoatHinh phimHoatHinhs={phimHoatHinhs} />
              <Phimchieurap phimChieuRaps={phimChieuRaps} />
              {click === true ? result(phimHoatHinhs) : ""}
              {click === true ? result(phimChieuRaps) : ""}
              <button
                type="submit"
                id="btn_loadmore"
                onClick={() => {
                  onClickBtnLoadMore();
                }}
              >
                Load More
              </button>
            </>
          )}
        />

        <Route
          path="/Search"
          render={() => (
            <>
              {resultPhim === "11111111111" ? <Redirect to="/Home" /> : "bbb"}

              {phimBySearch.length > 1 && resultPhim !== "" ? (
                <ResultSearch
                  results={phimBySearch}
                  resultPhim={resultPhim}
                  getEpisodes={getEpisodes}
                />
              ) : (
                <NotfoundFilm />
              )}
            </>
          )}
        />
        <Route
          path="/Film/"
          render={() => (
            <>
              {episodes.length !== 0 ? (
                <Film episodes={episodes} title={title} />
              ) : (
                "aaaa"
              )}
            </>
          )}
        />

        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// <ResultSearch results={phimHoatHinhs}/>    <ResultSearch results={phimBySearch}/>

// {resultPhim!=="" ? result() : ""}
// <Phimbo phimBos={phimBos}/>
// <Phimle phimLes={phimLes}/>
// {click===true ? result() : ""}

// <Phimbo phimBos={phimBySearch} /> {click===true ? result() : ""}

// <img src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg" alt="image" />
// <Header getResultSearch={getResultSearch}/>
// <Phimbo phimBos={phimBos}/>
// <Phimle phimLes={phimLes}/>
// <button type="submit" id="btn_loadmore" onClick={() => {onClickBtnLoadMore()}}>Load More</button>

// <img src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg" alt="image" />
