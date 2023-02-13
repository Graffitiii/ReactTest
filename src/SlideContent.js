import './SlideContent.css';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import banner from './img/banner.jpeg';
function Slide() {
    return (
        <div className="slideBar">
            <ul>
                <li><a><IoIosArrowDropleft className='leftarrowIcon'/></a></li>     
            </ul>
            <ul>
                <li><img  src={banner}  /></li>
            </ul>
            <ul>
                <li><a><IoIosArrowDropright className='rightarrowIcon'/></a></li>
            </ul>
        </div>
    );
}









export default Slide