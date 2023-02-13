import React from 'react'
import './footer.css'
import logoP from './img/logoP.png';
import { IoCallOutline } from "react-icons/io5";
import { BiPrinter } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";

function Footer() {
  return (
    <div className='footerdiv'>
      <ul className=''>
          <li>
            <img className='plogo' src={logoP} />
            <p className='boldtext'>บริษัท ทุนภัทร จำกัด (มหาชน)</p>
            <p className='ntext'>ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 256/6</p>
            <p className='ntext'>ถนนรัชดาภิเษก แขวงห้วยขวาง</p>
            <p className='ntext'>กรุงเทพมหานคร 10310</p>
          </li>
          <li className='tab2'>
            <p className='boldtext'>เมนู</p>
            <p className='ntext'><a>รู้จัก บลจ.ภัทร</a></p>
            <p className='ntext'><a>เกี่ยวกับเรา</a></p>
            <p className='ntext'><a>ติดต่อเรา</a></p>
            <p className='ntext'><a>คำถามที่พบบ่อย</a></p>
            <p className='ntext'><a>สมัครงาน</a></p>
            <p className='ntext'><a>Links</a></p>
          </li>
          <li className='tab2'>
            <p className='boldtext'>เมนู</p>
            <p className='ntext'><a>รู้จัก บลจ.ภัทร</a></p>
            <p className='ntext'><a>เกี่ยวกับเรา</a></p>
            <p className='ntext'><a>ติดต่อเรา</a></p>
            <p className='ntext'><a>คำถามที่พบบ่อย</a></p>
            <p className='ntext'><a>สมัครงาน</a></p>
            <p className='ntext'><a>Links</a></p>
          </li>
          <li className='tab3'>
          <p className='boldtext'>ติดต่อเรา</p>
          <p className='ntext'><IoCallOutline className='contacti'/> {'\u00A0'}{'\u00A0'}(66) 2305 9800</p>
          <p className='ntext'><BiPrinter className='contacti'/>{'\u00A0'}{'\u00A0'}(66) 2305 9803</p>
          <p className='ntext'><TfiEmail className='contacti'/>{'\u00A0'}{'\u00A0'}customerservice@phatraasset.com</p>
          <ul>
            <li><a><SiFacebook className='facebooki'/></a></li>
            <li><a><AiFillTwitterCircle className='twitti'/></a></li>
            <li><a><TiSocialYoutubeCircular className='youti'/></a></li>
          </ul>
          </li>
      </ul>
      <ul className='bottombar'>
        <li><a>แผนผังเว็บไซต์</a></li>
        <p className='spacebott'>|</p>
        <li className='spacebott'><a>ข้อตกลงและเงื่อนไข</a></li>
        <p className='spacebott'>|</p>
        <li className='spacebott'><a>นโยบายข้อมูลส่วนตัว</a></li>
        <li className='spacebott2'><p>@2019 Phratra A© สงวนลิขสิทธิ์ 2562 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัดssec. All rights reserved.</p></li>
      </ul>
    </div>
  )
}

export default Footer