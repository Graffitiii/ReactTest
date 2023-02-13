import React from 'react'
import './subcontent.css'
import content7 from './img/content7.png';
import content8 from './img/content8.png';
import content9 from './img/content9.png';
import content10 from './img/content10.png';
import { HiOutlineMinus } from "react-icons/hi2";
import { IoIosArrowDropright } from "react-icons/io";

function Subcontent() {
    return (
        <div className='headdiv'>
            <ul className='headtopic'>
                <li><HiOutlineMinus className='lineh' /></li>
                <li><h1 className='kkp'>KKP Channel</h1></li>
                <li><p className='topicdis'>อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์</p></li>
            </ul>
            <ul className='kkpmargin'>
                <li><a className='kkpmenu0'>KKP FOCUS</a></li>
                <p className='spacekkp'>|</p>
                <li><a className='kkpmenu'>OPTIMISE</a></li>
                <p className='spacekkp'>|</p>
                <li><a className='kkpmenu'>KKP Advisor</a></li>
                <p className='spacekkp'>|</p>
                
            </ul>
            <ul className='headtopic1'>
                <li><img className='imgcontent7' src={content7} /> </li>
                <li className='bkkp'><p className='kkpfocus'>KKP Focus</p>
                    <p>ฝนนักสู้ พบเรื่องราวความจริง เจ็บจริง
                        ประสบความสำเร็จจริง ที่จะเป็น
                        แรงกระตุ้นให้ SME นักสู้รุ่นต่อไป
                        ได้ก้าวไปถึงฝัน</p>
                </li>
            </ul>
            <ul className='marginseeall3'>
            <li><a >ดูทั้งหมด</a></li>
              <li><a>< IoIosArrowDropright className='arricon' /></a></li>
            </ul>
            <ul className='imglblock'>
                <li className='imglblock0'>
                    <img className='' src={content8} />
                    <p className='imglblockdis'>KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</p>
                </li>
                <li className='imglblock1'>
                    <img src={content9} />
                    <p className='imglblockdis'>KKP Focus ช่วงที่ 1 ย่อประเด็นโลกโยกประเด็นร้อน</p>
                </li>
                <li className='imglblock2'>
                    <img src={content10} />
                    <p className='imglblockdis'>KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</p>
                </li>
            </ul>
        </div>
    )
}

export default Subcontent