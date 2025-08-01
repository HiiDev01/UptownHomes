import React from 'react'
import Nav from '../components/Nav'
import '../pages/Home.css'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import Footer from '../components/Footer';

const Home = () => {
  const items = [
    {
      "title": "Fully Detached Duplex",
      "price_naira": "₦1,425,000,000",
      "price_usd": "$950,000",
      "location": "Victoria Island, Lagos",
      "beds": 5,
      "baths": 5,
      "size": "3,200 sqft",
      "type": "For Sale",
      "bed_icon": <IoBedOutline size={20}/>,
      "bath_icon": <LuBath size={20}/>,
      "size_icon": <CgNotes size={20} />,
      "img": "/px1.jpg"
    },
    {
      "title": "Modern Terrace House",
      "price_naira": "₦975,000,000",
      "price_usd": "$650,000",
      "location": "Lekki Scheme II, Lagos",
      "beds": 3,
      "baths": 4,
      "size": "2,100 sqft",
      "type": "For Sale",
      "bed_icon": <IoBedOutline size={20} className='icon'/>,
      "bath_icon": <LuBath size={20} className='icon'/>,
      "size_icon": <CgNotes size={20} className='icon'/>,
      "img": "/px2.jpg"
    },
    {
      "title": "Residential Plot in Ikoyi",
      "price_naira": "₦2,250,000,000",
      "price_usd": "$1,500,000",
      "location": "Ikoyi, Lagos",
      "land_size": "1.5 Acres",
      "type": "Land",
      "size_icon": <CgNotes size={20} className='icon'/>,
      "img": "/px3.jpg"
    }
  ]
  return (
    <div className='home'>
      <Nav></Nav>
      <div className="hero">
        <div className='heroDet'>
          <h1>Find Your Next Property</h1>
          <p>
            Find your perfect home or investment property 
            with ease. Browse a wide selection of houses and 
            land using smart search tools designed to match 
            your needs. Your next property is closer than you 
            think. just one click away.
          </p>
          <div className="heroLinkCon">
            <a href="">Browse houses</a>
            <a href="">explore land</a>
          </div>
        </div>
      </div>
      <main className='main'>
        <div className='mainHeadCon'>
          <h1>Featured Properties</h1>
          <a href="/">see all <IoMdArrowRoundForward size={20}/></a>
        </div>
        <div className='propertCon'>
          {items.map((item, index)=>(
            <div key={index} className='propertyCard'>
              <div className='itemImgCon'>
                <img src={item.img} alt={item.title} className=''/>
                <p className='property_type'>{item.type}</p>
              </div>
              <div className="itemDet">
               <div className='itemCon'> 
                  <h2>{item.title}</h2>
                  <h3>{item.price_naira}</h3>
                  <h4>{item.price_usd}</h4>
                  <p className='locationP'><span><CiLocationOn size={20} className='icon'/></span>{item.location}</p>
                </div>
                <div className='utilCon'>
                  <p>{item.bed_icon} {item.beds } beds</p>
                  <p>{item.bath_icon}{item.baths} baths</p>
                  <p>{item.size_icon}{item.land_size} sqft</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
