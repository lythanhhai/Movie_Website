import {React} from 'react'
import '../asset/ResultSearch.css'
import '../asset/ResultSearch_responsive.css'
import './Pagination'
import {useState} from 'react'
import Pagination from './Pagination'

const ResultSearch = ({results,resultPhim}) => {
    const numberAPage = 12;
    const [oldResult,setOldResult] = useState("");
    const [res,setRes] = useState([]); 
    const getCurrentPage = (resArr) => {
        setRes(resArr);
    }
    // hàm kiểm tra xem người dùng có chuyển trang trong lượt tìm kiếm trước đó không. nó sẽ xét về mặc định trang đầu tiên
    const checkResult = () => {
        if(resultPhim !== oldResult)
        {
            setRes([]);
            setOldResult(resultPhim);
        }
    }
    checkResult();
    var elmResult;
    
            elmResult = results.map((result,index) => {
            const {category,episode,imageUrl,title,url} = result;
            
            // 5 sản paharm :V
            if(index < numberAPage)
            {
                return(
                    
                    <div key={index} className="ResultSearch__product-cart">
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
                        <p className="title" title={title}>{title}</p>
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
        if(res.length !== 0)
        {

            elmResult = res.map((result,index) => {
            const {category,episode,imageUrl,title,url} = result;
                return(
                    
                    <div key={index} className="ResultSearch__product-cart">
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
        })
    }
    
    return(
        <div className="ResultSearch">
            <div className="ResultSearch__title">
                <h2 className="ResultSearch__title-name">Kết quả tìm kiếm</h2>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            
            <div className="ResultSearch__product">
               {elmResult}
            </div>
            
            <Pagination numberPage={Math.ceil(results.length / numberAPage)} results={results} getCurrentPage={getCurrentPage}/>
        </div>
    );

        }

export default ResultSearch;


