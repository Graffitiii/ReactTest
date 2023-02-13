import Carousel from "./carousel"
import './carouselPage.css';
import banner from './img/banner.jpeg';
import phatra2 from './img/phatra2.jpg';
import phatra3 from './img/phatra3.jpg';

const Slideimg = () => {
    return (
    <div className="hbar">
        <div>
            <Carousel >
                <img  src={banner}  />
                <img  src={phatra2}  />
                <img  src={phatra3}  />
            </Carousel>
        </div>
    </div>    
    )
}

export default Slideimg