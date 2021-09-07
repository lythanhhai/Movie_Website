// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Header from './Component/Header'
import Phimbo from './Component/Phimbo';
import Phimle from './Component/Phimle';
import ResultSearch from './Component/ResultSearch'
import Banner from './Component/Banner';
import ContactMe from './Component/ContactMe';
import NotfoundFilm from './Component/NotfoundFilm';
// import react-router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const keyAPI = "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR02wpHNAaR8yyhpYRWK3912FE17bcAMmRiHm058OCIQkNiCVbi9BmoaBNk";
function App() {
  const [phimBos,setPhimBos] = useState([]);
  const [phimLes,setPhimLes] = useState([]);
  const [phimHoatHinhs,setPhimHoatHinhs] = useState([]);
  const [phimChieuRaps,setPhimChieuRaps] = useState([]);
  const [allPhim,setAllPhim] = useState([]);

 
  const fetchMovies = async () => {

    try {
      const response = await fetch(keyAPI)
      const movies = await response.json()
      setPhimBos(movies.phim.phimbo)
      setPhimLes(movies.phim.phimle)
      setPhimHoatHinhs(movies.phim.phimhoathinh)
      setPhimChieuRaps(movies.phim.phimchieurap)
      // đặt tất cả các phim
      var arrAllPhim = [];
      for(var i = 0 ; i < movies.phim.phimbo.length ; i++)
      {
        arrAllPhim.push(movies.phim.phimbo[i]);
      }
      for(var i = 0 ; i < movies.phim.phimle.length ; i++)
      {
        arrAllPhim.push(movies.phim.phimle[i]);
      }
      for(var i = 0 ; i < movies.phim.phimhoathinh.length ; i++)
      {
        arrAllPhim.push(movies.phim.phimhoathinh[i]);
      }
      for(var i = 0 ; i < movies.phim.phimchieurap.length ; i++)
      {
        arrAllPhim.push(movies.phim.phimchieurap[i]);
      }
      setAllPhim(arrAllPhim);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
      fetchMovies()
  },[])

  const onLoadSlideShow = () => {
    const App = document.querySelector(".App img");
    
  }
  const result = (phim) => {
    return(
      <Phimbo phimBos={phim}/>
    )
  }
  // kiểm tra xem người dùng có bấm nút load more
  const [click,setClick] = useState(false);
  // 0 với chứa bấm , 1 là đã bấm
  var count = 0;
  const onClickBtnLoadMore = () => {
    const App = document.querySelector(".App");
    if(count === 0)
    {
      setClick(true);
      count++;
    }
    else 
    {
      setClick(false);
      count--;
    }
    // App.innerHTML += {result()};
  }
  // useState phim kết quả
  const [resultPhim,setResultPhim] = useState("");
  const [phimBySearch,setPhimBySearch] = useState([]);
  const getResultSearch = (result) => {
    //setAllPhimInList();
    setResultPhim(result);
    var arr = [];
    //alert(result);
    allPhim.forEach((allPhims,index) => {

        var phim = allPhims.title.toLowerCase();
        var result1 = result.toLowerCase();
        // alert(phim)
        // alert(phim.indexOf(result))
        if(phim.includes(result1))
        {
          arr.push(allPhims);
        }
     
    });
    setPhimBySearch(arr);
  }
  const setAllPhimInList = () => {
    
  }
  
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
  return (
    <Router>
      <div className="App" onLoad={() => {onLoadSlideShow()}}>
        
        
        <Header getResultSearch={getResultSearch}/> 
        <Banner />
        
        <Route path='/Home' render={() =>
          <>
            <Phimbo phimBos={phimBos}/>
            <Phimle phimLes={phimLes}/>
            {click===true ? result(phimHoatHinhs) : ""}
            <button type="submit" id="btn_loadmore" onClick={() => {onClickBtnLoadMore()}}>Load More</button>
          </>
        } />
        <Route path="/Search" render={() => 
            <>
              {phimBySearch.length > 1 && resultPhim !== "" ? <ResultSearch results={phimBySearch} resultPhim={resultPhim}/> : <NotfoundFilm />}
            </>
        }/>
        <ContactMe />
        
        
        
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