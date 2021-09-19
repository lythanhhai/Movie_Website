import {React} from 'react'
import '../asset/BannerImage/BannerImage.css'

const BannerImage = () => {
    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active');
    })
    })

    function removeActiveClass(){
    panels.forEach(panel=>{

        panel.classList.remove('active');
    })
    }
    return(
        <div className="container">
          
      </div>
    );
}

export default BannerImage;
// <div className="panel active" style={{backgroundImage: 'url(https://i.pinimg.com/564x/b5/2b/8f/b52b8f155e078e0c8dd23a799d944a21.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/bb/56/e1/bb56e100c335589a36dcd080973da5bd.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/aa/01/df/aa01df513595b40415547980d2bc65a8.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/9d/45/b9/9d45b935e293624b1774aa5528789bd2.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/83/bf/4a/83bf4a6e649dae3957dd9f8e866098d1.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/85/30/f6/8530f6c36ecf4cff51e2fc72732cab13.jpg)'}}>

//           </div>
//           <div className="panel" style={{backgroundImage: 'url(https://i.pinimg.com/564x/91/c4/c1/91c4c1a2680485143ac9d3ef680f8c03.jpg)'}}>
//           </div>