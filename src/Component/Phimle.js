import { React } from "react";
import { useState } from "react";
import "../asset/Phimle.css";
import "../asset/Phimle_responsive.css";
import { useHistory, redirect} from 'react-router-dom';

const Phimle = ({ phimLes, getEpisodes}) => {
  let history = useHistory();
  const redirect = (title) => {
    history.push(`/Watch/${title}`);
  };
  const [slide, setSlide] = useState([]);
  const onClickNext = () => {
    var slide1 = slide + 1;
    setSlide(slide1);
    const width =
      document.getElementsByClassName("Phimle__product")[0].offsetWidth;
    document.getElementsByClassName("Phimle__product")[0].scrollLeft += width;
  };
  const onClickPre = () => {
    // if(slide > 0)
    // {
    var slide1 = slide - 1;
    setSlide(slide1);
    const width =
      document.getElementsByClassName("Phimle__product")[0].offsetWidth;
    document.getElementsByClassName("Phimle__product")[0].scrollLeft -= width;
    // }
    // else
    // {

    // }
  };
  const elmPhimbo = phimLes.map((phimLe, index) => {
    const { category, episode, imageUrl, title, url } = phimLe;
    // 5 sản paharm :V
    if (index < phimLes.length - 1) {
      return (
        <div key={index} className="Phimle__product-cart"
            onClick={() => {
              redirect(title);
              getEpisodes(episode, title);
            }}
            onMouseOver={() => {
              const addMyList = document.querySelectorAll(".Phimle__product-cart .add")[index];
              const play = document.querySelectorAll(".Phimle__product-cart i")[index];
              play.style.display = 'block';
              addMyList.style.display = "block";
              addMyList.style.animation = "bottom_top 0.5s linear 1";
            }}
            onMouseOut={() => {
              const addMyList = document.querySelectorAll(".Phimle__product-cart .add")[index];
              const play = document.querySelectorAll(".Phimle__product-cart i")[index];
              play.style.display = 'none';
              //addMyList.style.animation = "top_bottom 4s linear 1";
              addMyList.style.display = "none";
            }}
        >
          <img src={imageUrl} alt="image" />

          <i class="fas fa-play"
              onMouseOver={() => {
                const play = document.querySelectorAll(".Phimle__product-cart i")[index];
                play.style.color= 'rgb(223, 108, 0)';
                play.style.border= '2px solid rgb(223, 108, 0)';
              }}
              onMouseOut={() => {
                const play = document.querySelectorAll(".Phimle__product-cart i")[index];
                play.style.color= 'white';
                play.style.border= '2px solid white';
              }}
          >
          </i>
          <p className="add"
              onMouseOver={() => {
                const addMyList = document.querySelectorAll(".Phimle__product-cart .add")[index];
                addMyList.style.color = "#ff501a";
                addMyList.style.display = "block";
              }}
              onMouseOut={() => {
                const addMyList = document.querySelectorAll(".Phimle__product-cart .add")[index];
                addMyList.style.color = "white";
                addMyList.style.display = "block";
              }}
          >
          Add to my list</p>
          <p className="title" title={title}>
            {title}
          </p>
          <div class="btn">
            <p className="episode">{episode.length} tập</p>
            <div>TV-MA</div>
          </div>
          <p className="category">{category}</p>
        </div>
      );
    } else {
      return <></>;
    }
  });
  return (
    <section className="Phimle">
      <div className="Phimle__title">
        <h2 className="Phimle__title-name">Phim Lẻ</h2>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div className="Phimle__product">{elmPhimbo}</div>
      <i
        class="fas fa-angle-left"
        onClick={() => {
          onClickPre();
        }}
      ></i>
      <i
        className="fas fa-angle-right"
        onClick={() => {
          onClickNext();
        }}
      ></i>
    </section>
  );
};

export default Phimle;

