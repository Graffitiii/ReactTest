import React from 'react'
import './article.css'
import { IoIosArrowDropright } from "react-icons/io";
import content1 from './img/content1.png';
import content2 from './img/content2.png';
import content3 from './img/content3.png';
import content4 from './img/content4.png';
import content5 from './img/content5.png';

function Article() {
  return (
    <div>
        <div class="main">
            <ul className='topic1'>
              <li><p className='arti'>Article</p></li>
              <li><a className='marginseeall'>ดูทั้งหมด</a></li>
              <li><a>< IoIosArrowDropright className='arricon' /></a></li>
              <li><p className='news2'>News</p></li>
              <li><a className='marginseeall2'>ดูทั้งหมด</a></li>
              <li><a>< IoIosArrowDropright className='arricon' /></a></li>
            </ul>
            <ul className='imgcontent1'>
              <li><img className='' src={content1}  /></li>
              <li className='textcont1'>
                <h2 className='texttop'>Margin of Safety กลยุทธ์การลงทุนอย่างปลอดภัย หลักการลงทุนของเบนจามิน เกรแฮม</h2>
                <p className='textdis'>ตอบคําถามที่ว่า คุณมีความจำเป็น พร้อมเป็น เจ้าของหรือยัง เช่น เพื่อหน้าที่การงาน อาชีพ หรือการเดินทาง ความสะดวกสบาย เพราะการซื้อ รถนอกจากรถแล้ว ยังมีค่าน้ำมัน ค่าบำรุงรักษา ค่าประกันภัย ซึ่งเป็นค่าใช้จ่ายในระยะยาว</p>
                <a className='invest'><strong>|  การลงทุน</strong></a>
              </li>
              <li><img className='imgcontent2' src={content2}  /></li>
            </ul>
            <ul className='imgcontent3'>
              <li className='imgcontent4'>
                <img className='' src={content3}  /> 
                <h2 className='texttop'>จับจังหวะการลงทุนเป็นก็สร้างเงินล้านได้ง่ายๆใกล้แค่เอื้อม</h2>
                <a className='invest'><strong>|  การลงทุน</strong></a>
              </li>
              <li className='imgcontent5'>
                <img className='' src={content4}  /> 
                <h2 className='texttop'>Margin of Safety กลยุทธ์การลงทุนอย่างปลอดภัย Margin of Safety</h2>
                <a className='invest'><strong>|  การลงทุน</strong></a>
              </li>
              <li><img className='imgcontent6' src={content5}  /></li>
            </ul>
        </div>
        <div class="cornered"></div>
    </div>
  )
}

export default Article