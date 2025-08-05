import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
 useEffect(()=>{
  fetchProperties()
 }, []);
   const fetchProperties = async (query= " ")=>{
    try {
      const res = await fetch(`http://localhost:4000/properties?${query}&type=${encodeURIComponent('For Sale')}`)
      if(!res.ok){throw new Error('can not fetch the endpoint')}
      const data = await res.json()
      setProperties(data);
      setError(null)
    } catch (error) {
      console.log(error)
      setError("Error fecthing properties")
    }
  };


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
        <Filter onFilter={fetchProperties}/>
      </header>
      <main className='main'>
        <div className='propertCon'>
          {error &&<p>{error}</p>}
            {properties.map((items)=>(
              <Link to={`/property/${items.id}`} key={items.id}>
                <div className='propertyCard'>
                  
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
                        <p><IoBedOutline size={20} className="icon" /> {items.beds } beds</p>
                        <p><LuBath size={20} className="icon" />{items.baths} baths</p>
                        <p><CgNotes size={20} className="icon" />{items.land_size} sqft</p>
                      </div>
                    </div> 
               
                </div>
              </Link>
            ))}
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default HouseProperty
