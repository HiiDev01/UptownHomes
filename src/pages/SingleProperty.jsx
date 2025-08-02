import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";

const SingleProperty = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) return;
    const controller  = new AbortController();
    const handleFetch = async() => {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:4000/properties/${encodeURIComponent(id)}`, { signal: controller.signal })
        if(!res.ok){ 
          /*if (res.status === 404) throw new Error('Property not found');*/
          throw new Error('can not fetch the endpoint');
        };
        const data = await res.json()
        setItem(data);
        setError(null);
      } catch (error) {
        if(error.name === 'AbortError'){
          console.log('fetch aborted')
        }
        console.log(error);
        setError('error fetching single properties')
      } finally{
        setLoading(false)
      }
    }
    handleFetch();
    return () =>{
      controller.abort();
    }
  },[id])

  return (
    <div className='singleProperty'>
            {loading && <div className="status">Loading property...</div>}

      {error && (
        <div className="status error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && item && (
        <div className="propertyWrapper">
          <div className="imageSection">
            {item?.images?.length > 0 ? (
              <img
                src={item.images[0]}
                alt={item.title || 'Property'}
                className="mainImage"
              />
            ) : (
              <div className="imagePlaceholder">No image available</div>
            )}
            <p className="property_type">{item.type}</p>
          </div>

          <div className="detailsSection">
            <div className="titleRow">
              <h1>{item.title || 'Untitled Property'}</h1>
              <div className="priceGroup">
                <span className="price_naira">{item.price_naira}</span>
                <span className="price_usd">{item.price_usd}</span>
              </div>
            </div>

            <p className="locationP">
              <CiLocationOn size={20} className="icon" /> {item.location}
            </p>

            <div className="stats">
              <div className="stat">
                <IoBedOutline size={20} className="icon" />{' '}
                {item.beds != null ? item.beds : '—'} beds
              </div>
              <div className="stat">
                <LuBath size={20} className="icon" />{' '}
                {item.baths != null ? item.baths : '—'} baths
              </div>
              <div className="stat">
                <CgNotes size={20} className="icon" />{' '}
                {item.land_size || item.size || '—'} sqft
              </div>
            </div>

            <div className="description">
              <h2>Description</h2>
              <p>{item.description || 'No description provided.'}</p>
            </div>

            {/* Example action buttons */}
            <div className="actions">
              <button className="contactBtn">Contact Agent</button>
              <button className="shareBtn">Share</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleProperty
