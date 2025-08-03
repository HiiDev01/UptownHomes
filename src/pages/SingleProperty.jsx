import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Nav from '../components/Nav';
import '../pages/SingleProperty.css'



const SingleProperty = () => {
  const { type, id } = useParams()
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
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
        }
        const data = await res.json()
        setItem(data);
        if(type && data.type && data.type.toLowerCase !==type.toLowerCase()){
            console.warn('URL type does not match fetched property type')
        }
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
  },[type, id]);

  const images = item?.images || [];

  const prev = () => {
    setCurrentIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  }
  const next = () => {
    setCurrentIdx((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className='singleProperty'>
      <Nav/>
      {loading && <div className="status">Loading property...</div>}

      {error && (
        <div className="status error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && item && (
        <div className='allCon'>
          <div className='wrapMainOne'>
            <div className="wrapOne">
              <div className="carousel">
                {images.length > 0 ? (
                  <>
                    <div className="carousel-inner">
                      <img
                        src={images[currentIdx]}
                        alt={`Slide ${currentIdx + 1}`}
                      />
                    </div>
                    {images.length > 1 && (
                      <div className="controls">
                        <button onClick={prev} aria-label="Previous image" >
                          <FaArrowLeft size={16}/>
                        </button>
                        <span>
                          {currentIdx + 1} / {images.length}
                        </span>
                        <button onClick={next} aria-label="Next image">
                          <FaArrowRight size={16}/>
                        </button>
                      </div>
                    )}
                    <div className="thumbnails">
                      {images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Thumb ${idx + 1}`}
                          onClick={() => setCurrentIdx(idx)}
                          style={{
                            width: 100,
                            height: 40,
                            objectFit: 'cover',
                            marginRight: 4,
                            border: idx === currentIdx ? '2px solid blue' : '1px solid #ccc',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="imagePlaceholder">No images available</div>
                )}
              </div>
            </div>
            <div className="wrapTwo">
              <h2>Description</h2>
              <p>{item.title}</p>
            </div>
          </div>
          <div className='wrapMainTwo'>
            <div className="cardDet">
              <h2>{item.title}</h2>
              <h4>{item.price_naira}</h4>
              <p>{item.price_usd}</p>
              if()
            </div>
          </div>
        </div>
      )} 
    </div>
  )
}

export default SingleProperty
