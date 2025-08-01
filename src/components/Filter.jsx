import { useEffect, useRef, useState } from 'react';
import '../components/Filter.css'
import { FiSearch } from "react-icons/fi";
import { IoCaretDownOutline } from "react-icons/io5";


const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [select, setSelect] = useState('Any');
  const options = ["Any", "house", "land"];
  const closeRef  = useRef();
  const [price, setPrice] = useState(1000000)

  useEffect(()=>{
    const handleClose = (e)=>{
      if(closeRef.current && !closeRef.current.contains(e.target)){
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClose);

    return()=>{
      document.removeEventListener('mousedown', handleClose)
    }
  },[]);
  
  const priceFormat = (value) =>{
    return `${value.toLocaleString()}`
  }

  return (
    <div className='filter'>
      <h1>Advanced Search</h1>
      <div className='filterCon'>
        <div  className='filterForm'>
          <div className='filterBox'>
            <label htmlFor="location">location</label>
            <input type="text" id='location' placeholder='e.g location or address' className='location'/>
          </div>
          <div className='filterBox'>
            <label htmlFor="type">Property Type</label>
            <div className='selectDiv' id='type' ref={closeRef}>
              <button
                onClick={()=> setIsOpen(!isOpen)}
                className="TypeBtn"
               >
                {select}
                <IoCaretDownOutline />
             </button>
             {isOpen && (
              <ul className='selectOptionCon'>
                {options.map((option, index)=>(
                  <li key={index}
                    onClick={()=> 
                      {setSelect(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
             )}
              
            </div>
          </div>
          <div className='filterBox'>
            <label htmlFor="range">
              Max price:<span className='price'> &#8358; {priceFormat(price)}</span></label>
            <input   
              type="range" 
              id='range' 
              className='range'
              min="50000"
              max="10000000"
              step="50000"
              value={price}
              onChange={(e)=> setPrice(Number(e.target.value))}
              
            />
          </div>
          <button className='searchBtn'><FiSearch size={16}/> search</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
