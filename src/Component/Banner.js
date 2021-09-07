import {React} from 'react'
import '../asset/BannerCss/Banner.css'
import '../asset/BannerCss/Banner_responsive.css'

const Banner = () => {
    return(
        <div className="Banner">    
            <div className="Banner__social">
                <li>
                    <a>
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a>
                       <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
            </div>
            <div className="Banner__info">
                <h1 className="Banner__logo">Hải film</h1>
                <h5>Website xem phim miễn phí</h5>
                <p>Xem phim miễn phí trên các nền tảng khác nhau. Xem phim online chất lượng cao tại HẢI FILM</p>
                <button type="submit" id="btn_watch">Xem phim</button>
                <div className="Banner-scrollDown" onClick={() => {document.documentElement.scrollTop += 400}}>
                    <i class="fas fa-mouse"></i>
                    <span>Scroll down</span>
                    <i class="fas fa-arrow-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Banner;