import { React, useState } from "react";
import "../asset/PaginationCss/Pagination.css";
import "../asset/PaginationCss/Pagination_responsive.css";
import { useHistory } from "react-router";

const Pagination = ({ numberPage, results, getCurrentPage }) => {
  let history = useHistory();
  const redirect = (page) => {
    history.push(`/Search/${page}`);
  }
  var arrs = [];
  for (var i = 0; i < numberPage; i++) {
    arrs.push(i + 1);
  }

  var resArr1 = [];
  const NumberAPage = 16;
  for (var i = 0; i < arrs.length; i++) {
    var resArr = [];
    var j = 0;
    for (j += i * NumberAPage; j < results.length; j++) {
      if (j < i * NumberAPage + NumberAPage) {
        resArr.push(results[j]);
      } else {
        break;
      }
    }

    resArr1.push(resArr);
  }
  const [currentPage, setCurrentPage] = useState(0);
  const checkResult = () => {
    //if(re)
  }
  // hàm check toggle cho button page or next , prev
  const checkBtnPage = (index) => {
    setCurrentPage(index);
    getCurrentPage(resArr1[index]);
    const arrBtn = document.getElementsByClassName("btn__page");
    for (var i = 0; i < arrBtn.length; i++) {
      if (i !== index) {
        arrBtn[i].classList.remove("active");
      } else {
        //arrBtn[i].classList.add("active");
      }
    }
    const btn = document.getElementsByClassName("btn__page")[index];
    btn.classList.add("active");
  };
  // click vào trang
  const clickPage = (index) => {
    redirect(index+1);
    checkBtnPage(index);
  };
  // nút nhấn trang tiếp theo
  const nextPage = (index) => {
    // khác trang cuối
    if (index !== arrs.length - 1) {
      redirect(index + 1 + 1);
      checkBtnPage(index + 1);
    }
  };
  // nút nhấn trang trước
  const prevPage = (index) => {
    // khác trang đầu
    if (index !== 0) {
      checkBtnPage(index - 1);
      redirect(index - 1 + 1);
    } else {
    }
  };
  var elmButtonPage = arrs.map((arr, index) => {
    if (index === 0) {
      return (
        <button
          key={index}
          className="btn__page active"
          onClick={() => {
            clickPage(index);
          }}
        >
          {index + 1}
        </button>
      );
    }
    else 
    {
      if (currentPage <= 2) {
        if (index === arrs.length - 1) {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else if (index === arrs.length - 2) {
          return (
            <button key={index} className="btn__page">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          );
        } else if (index > currentPage + 2 || index < currentPage - 2) {
          return (
            <button
              key={index}
              className="btn__page none"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        }
      } else if (currentPage > 3 && currentPage < arrs.length - 3) {
        if (index === arrs.length - 1 || index === 0) {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else if (index === arrs.length - 2 || index === 1) {
          return (
            <button key={index} className="btn__page">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          );
        } else if (index > currentPage + 2 || index < currentPage - 2) {
          return (
            <button
              key={index}
              className="btn__page none"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        }
      } else {
        if (index === 0) {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else if (index === 1) {
          return (
            <button key={index} className="btn__page">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          );
        } else if (index > currentPage + 2 || index < currentPage - 2) {
          return (
            <button
              key={index}
              className="btn__page none"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              className="btn__page"
              onClick={() => {
                clickPage(index);
              }}
            >
              {index + 1}
            </button>
          );
        }
      }
    }
    
  });

  return (
    <div className="Pagination">
      <button
        onClick={() => {
          prevPage(currentPage);
        }}
      >
        <i class="fas fa-angle-double-left"></i>
      </button>
      {elmButtonPage}
      <button
        onClick={() => {
          nextPage(currentPage);
        }}
      >
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
