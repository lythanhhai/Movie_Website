import {React} from 'react'
import "../asset/Phimbo.css"
import "../asset/Phimbo_responsive.css"
import {useState} from 'react'

const Phimbo = ({phimBos}) => {
    const [slide,setSlide] = useState([]);
    // 80% product của 100 phần trăm container
    var width1 = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const width = width1 * 80 / 100;
    // var element = document.querySelector('.Phimbo__product');
    // const style = window.getComputedStyle(element)
    // const width = style.getPropertyValue('width');

    const onClickNext = () => {
        
        document.getElementsByClassName('Phimbo__product')[0].scrollLeft += width;
    }
    const onClickPre = () => {
        
        document.getElementsByClassName('Phimbo__product')[0].scrollLeft -= width;
    }
    
    const elmPhimbo = phimBos.map((phimBo,index) => {
        const {category,episode,imageUrl,title,url} = phimBo;
        // 5 sản paharm :V
        if(index < phimBos.length - 1)
        {
            return(
                
                <div key={index} className="Phimbo__product-cart">
                    <img src={imageUrl} alt="image" onMouseOver={() =>{
                        const addMyList = document.getElementsByClassName("add")[index];
                        addMyList.style.display = "block";
                        addMyList.style.animation = "bottom_top 0.5s linear 1";
                        
                    }}
                    onMouseOut={() => {
                        const addMyList = document.getElementsByClassName("add")[index];
                        
                        addMyList.style.animation = "top_bottom 4s linear 1";
                        addMyList.style.display = "none";
                    }}
                    />
                    <i class="fas fa-play"></i>
                    <p className="add" id="add" onMouseOver={() =>{
                        const addMyList = document.getElementsByClassName("add")[index];
                        addMyList.style.color = "#ff501a";
                        addMyList.style.display = "block";
                        
                        
                    }}>Add to my list</p>
                    <p className="title">{title}</p>
                    <div className="btn">
                        <p className="episode">{episode.length} tập</p>
                        <div>TV-MA</div>
                    </div>
                    <p className="category">{category}</p>
                </div>
            );

        }
        else 
        {
            return(
                <>
                </>
            );
        }
    });
    return(
        <div className="Phimbo">
            <div className="Phimbo__title">
                <h2 className="Phimbo__title-name">Phim bộ</h2>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            
            <div className="Phimbo__product">
                {elmPhimbo}
            </div>
            <i class="fas fa-angle-left" onClick={() => {onClickPre()}}></i>
            <i className="fas fa-angle-right" onClick={() => {onClickNext()}}></i>
            
        </div>
    );
}

export default Phimbo;