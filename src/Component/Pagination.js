import {React, useState} from 'react'
import '../asset/PaginationCss/Pagination.css'
import '../asset/PaginationCss/Pagination_responsive.css';

const Pagination = ({numberPage,results,getCurrentPage}) => {
    var arrs = [];
    for(var i = 0 ; i < numberPage ; i++)
    {
        arrs.push(i+1);
    }
    
    var resArr1 = [];
    const NumberAPage = 16;
    for(var i = 0; i < arrs.length ; i++)
    {
        var resArr = [];
        var j = 0;
        for(j += i * NumberAPage ; j < results.length ; j++)
        {
            if(j < ( i * NumberAPage + NumberAPage))
            {
                resArr.push(results[j]);
            }
            else 
            {
                break;
            }
        }

        resArr1.push(resArr);
        
    }
    const [currentPage,setCurrentPage] = useState(0);
    // hàm check toggle cho button page or next , prev
    const checkBtnPage = (index) => {
            setCurrentPage(index);
            getCurrentPage(resArr1[index]);
            const arrBtn = document.getElementsByClassName("btn__page");
            for(var i = 0 ; i < arrBtn.length ; i++)
            {
                if(i !== (index))
                {
                    arrBtn[i].classList.remove("active");

                }
                else 
                {
                    //arrBtn[i].classList.add("active");
                }
        }
        const btn = document.getElementsByClassName("btn__page")[index];
        btn.classList.add("active");
    }
    // click vào trang
    const clickPage = (index) => {
        checkBtnPage(index);
    }
    // nút nhấn trang tiếp theo 
    const nextPage = ()=>{
        // khác trang cuối
        if(currentPage !== arrs.length - 1)
        {
            checkBtnPage(currentPage + 1);
        }
    }
    // nút nhấn trang trước
    const prevPage = ()=>{
        // khác trang đầu
        if(currentPage !== 0)
        {
            checkBtnPage(currentPage - 1);
            
        }
        else 
        {

        }
    }
    var elmButtonPage = arrs.map((arr,index) => {
         
            if(index === 0)
            {
                return(
                    <button key={index} className="btn__page active" onClick={() => {clickPage(index)}}>{index + 1}</button>
                );
            }

            if(currentPage <= 2)
            {
                if(index === arrs.length - 1)
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }
                else if(index === arrs.length - 2)
                {
                    return(
                        <button key={index} className="btn__page" ><i class="fas fa-ellipsis-h"></i></button>
                    );
                }
                else if(index > currentPage + 2 || index < currentPage - 2)
                {
                    return(
                        <button key={index} className="btn__page none" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                    
                }
                else 
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }

            }
            else if(currentPage > 3 && currentPage < arrs.length - 3)
            {
                if(index === arrs.length - 1 || index === 0)
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }
                else if(index === arrs.length - 2 || index === 1)
                {
                    return(
                        <button key={index} className="btn__page" ><i class="fas fa-ellipsis-h"></i></button>
                    );
                }
                else if(index > currentPage + 2 || index < currentPage - 2)
                {
                    return(
                        <button key={index} className="btn__page none" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                    
                }
                else 
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }
            }
            else 
            {
                if(index === 0)
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }
                else if(index === 1)
                {
                    return(
                        <button key={index} className="btn__page" ><i class="fas fa-ellipsis-h"></i></button>
                    );
                }
                else if(index > currentPage + 2 || index < currentPage - 2)
                {
                    return(
                        <button key={index} className="btn__page none" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                    
                }
                else 
                {
                    return(
                        <button key={index} className="btn__page" onClick={() => {clickPage(index)}}>{index + 1}</button>
                    );
                }
            }
        });

   
    return(
        <div className="Pagination">
            <button onClick={() => {prevPage()}}><i class="fas fa-angle-double-left" ></i></button>
            {elmButtonPage}
            <button onClick={() => {nextPage()}}><i class="fas fa-angle-double-right" ></i></button>
        </div>
    );
}

export default Pagination;