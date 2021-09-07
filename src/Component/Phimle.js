import {React} from 'react'
import {useState} from 'react'
import '../asset/Phimle.css';
import "../asset/Phimle_responsive.css"

const Phimle = ({phimLes}) => {
    const [slide,setSlide] = useState([]);
    const onClickNext = () => {
        document.getElementsByClassName('Phimle__product')[0].scrollLeft += 600;
    }
    const onClickPre = () => {
        document.getElementsByClassName('Phimle__product')[0].scrollLeft -= 600;
    }
    const elmPhimbo = phimLes.map((phimLe,index) => {
        const {category,episode,imageUrl,title,url} = phimLe;
        // 5 sản paharm :V
        if(index < phimLes.length - 1)
        {
            return(
                
                <div key={index} className="Phimle__product-cart">
                    <img src={imageUrl} alt="image"/>
                    <i class="fas fa-play"></i>
                    <p className="add">Add to my list</p>
                    <p className="title">{title}</p>
                    <div class="btn">
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
    })
    return(
        <div className="Phimle">
            <div className="Phimle__title">
                <h2 className="Phimle__title-name">Phim Lẻ</h2>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            
            <div className="Phimle__product">
                {elmPhimbo}
            </div>
            <i class="fas fa-angle-left" onClick={() => {onClickPre()}}></i>
            <i className="fas fa-angle-right" onClick={() => {onClickNext()}}></i>
        </div>
    );
}

export default Phimle;