import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import '../pages/HouseProperty.css'
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";

const HouseProperty = () => {
  const item = [
    {
      id: "1",
      title: "Fully Detached Duplex",
      price_naira: "₦1,425,000,000",
      price_usd: "$950,000",
      location: "Victoria Island, Lagos",
      beds: 5,
      baths: 5,
      size: "3,200 sqft",
      type: "For Sale",
      bed_icon: <IoBedOutline size={20} />,
      bath_icon: <LuBath size={20} />,
      size_icon: <CgNotes size={20} />,
      img: "/px1.jpg",
    },
    {
      id: "2",
      title: "Modern Terrace House",
      price_naira: "₦975,000,000",
      price_usd: "$650,000",
      location: "Lekki Scheme II, Lagos",
      beds: 3,
      baths: 4,
      size: "2,100 sqft",
      type: "For Sale",
      bed_icon: <IoBedOutline size={20} className="icon" />,
      bath_icon: <LuBath size={20} className="icon" />,
      size_icon: <CgNotes size={20} className="icon" />,
      img: "/px2.jpg",
    },
    {
      id: "3",
      title: "Modern Terrace House",
      price_naira: "₦975,000,000",
      price_usd: "$650,000",
      location: "Lekki Scheme II, Lagos",
      beds: 3,
      baths: 4,
      size: "2,100 sqft",
      type: "For Sale",
      bed_icon: <IoBedOutline size={20} className="icon" />,
      bath_icon: <LuBath size={20} className="icon" />,
      size_icon: <CgNotes size={20} className="icon" />,
      img: "/px2.jpg",
    },
    {
      id: "4",
      title: "Residential Plot in Ikoyi",
      price_naira: "₦2,250,000,000",
      price_usd: "$1,500,000",
      location: "Ikoyi, Lagos",
      land_size: "1.5 Acres",
      type: "Land",
      size_icon: <CgNotes size={20} className="icon" />,
      img: "/px3.jpg",
    },
    {
      id: "5",
      title: "Residential Plot in Ikoyi",
      price_naira: "₦2,250,000,000",
      price_usd: "$1,500,000",
      location: "Ikoyi, Lagos",
      land_size: "1.5 Acres",
      type: "Land",
      size_icon: <CgNotes size={20} className="icon" />,
      img: "/px3.jpg",
    },
  ]
  return (
    <div className='house'>
      <Nav/>
      <header className='header'>
        <div className="heading">
          <div className="headingCon">
            <h1>Houses for Sale</h1>
            <p>Find the home that fits your lifestyle crafted from a <br></br>handpicked selection of properties.</p>
          </div>
        </div>
        <Filter/>
      </header>
      <main className='main'>
        <div className='propertCon'>
                  {item.map((items)=>(
                    
                      <div className='propertyCard' key={item.id}>
                        <a href="/property/${items.id}" >
                          <div className='itemImgCon'>
                            <img src={items.img} alt={items.title} className=''/>
                            <p className='property_type'>{items.type}</p>
                          </div>
                          <div className="itemDet">
                           <div className='itemCon'> 
                              <h2>{items.title}</h2>
                              <h3>{items.price_naira}</h3>
                              <h4>{items.price_usd}</h4>
                              <p className='locationP'><span><CiLocationOn size={20} className='icon'/></span>{items.location}</p>
                            </div>
                            <div className='utilCon'>
                              <p>{items.bed_icon} {items.beds } beds</p>
                              <p>{items.bath_icon}{items.baths} baths</p>
                              <p>{items.size_icon}{items.land_size} sqft</p>
                            </div>
                          </div> 
                        </a>
                      </div>

                  ))}
                </div>
      </main>
      <Footer/>
    </div>
  )
}

export default HouseProperty
