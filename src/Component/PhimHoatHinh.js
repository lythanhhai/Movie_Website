import { React } from "react";
import "../asset/PhimHoatHinh/Phimhoathinh.css";
import "../asset/PhimHoatHinh/Phimhoathinh_respon.css";
import { useState } from "react";
import { useHistory, redirect} from 'react-router-dom';

const PhimHoatHinh = ({ phimHoatHinhs, getEpisodes }) => {
  const [slide, setSlide] = useState(1);
  let history = useHistory();
  const redirect = (title) => {
    history.push(`/Watch/${title}`);
  };
  // 80% product của 100 phần trăm container
  // var width1 = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  // const width = (width1 * 80) / 100;
  // var element = document.querySelector('.Phimbo__product');
  // const style = window.getComputedStyle(element)
  // const width = style.getPropertyValue('width');

  const onClickNext = () => {
    var slide1 = slide + 1;
    setSlide(slide1);
    const width =
      document.getElementsByClassName("Phimhoathinh__product")[0].offsetWidth;
    document.getElementsByClassName("Phimhoathinh__product")[0].scrollLeft += width;
  };
  const onClickPre = () => {
    // if(slide > 0)
    // {
    var slide1 = slide - 1;
    setSlide(slide1);
    const width =
      document.getElementsByClassName("Phimhoathinh__product")[0].offsetWidth;
    document.getElementsByClassName("Phimhoathinh__product")[0].scrollLeft -= width;
    // }
    // else
    // {

    // }
  };

  const elmPhimhoathinh = phimHoatHinhs.map((phimHoatHinh, index) => {
    const { category, episode, imageUrl, title, url } = phimHoatHinh;
    // 5 sản paharm :V
    // if(index < phimBos.length - 1)
    if (index < phimHoatHinhs.length - 1) {
      return (
        <div key={index} className="Phimhoathinh__product-cart"
            onClick={() => {
              redirect(title);
              getEpisodes(episode, title);
            }}
            onMouseOver={() => {
              const addMyList = document.querySelectorAll(".Phimhoathinh__product-cart .add")[index];
              const play = document.querySelectorAll(".Phimhoathinh__product-cart i")[index];
              play.style.display = 'block';
              addMyList.style.display = "block";
              addMyList.style.animation = "bottom_top 0.5s linear 1";
            }}
            onMouseOut={() => {
              const addMyList = document.querySelectorAll(".Phimhoathinh__product-cart .add")[index];
              const play = document.querySelectorAll(".Phimhoathinh__product-cart i")[index];
              play.style.display = 'none';
              //addMyList.style.animation = "top_bottom 4s linear 1";
              addMyList.style.display = "none";
            }}
        >
          <img
            src={imageUrl}
            alt=""
          />
          <i class="fas fa-play"
              onMouseOver={() => {
                const play = document.querySelectorAll(".Phimhoathinh__product-cart i")[index];
                play.style.color= 'rgb(223, 108, 0)';
                play.style.border= '2px solid rgb(223, 108, 0)';
              }}
              onMouseOut={() => {
                const play = document.querySelectorAll(".Phimhoathinh__product-cart i")[index];
                play.style.color= 'white';
                play.style.border= '2px solid white';
              }}
          >
          </i>
          <p
            className="add"
            id="add"
            onMouseOver={() => {
              const addMyList = document.querySelectorAll(".Phimhoathinh__product-cart .add")[index];
              addMyList.style.color = "#ff501a";
              addMyList.style.display = "block";
            }}
            onMouseOut={() => {
              const addMyList = document.querySelectorAll(".Phimhoathinh__product-cart .add")[index];
              addMyList.style.color = "white";
              addMyList.style.display = "block";
            }}
          >
            Add to my list
          </p>
          <p className="title" title={title}>
            {title}
          </p>
          <div className="btn">
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
    <section className="Phimhoathinh">
      <div className="Phimhoathinh__title">
        <h2 className="Phimhoathinh__title-name">Phim hoạt hình</h2>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div className="Phimhoathinh__product">{elmPhimhoathinh}</div>
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

export default PhimHoatHinh;
