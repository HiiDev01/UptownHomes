import { useEffect, useRef, useState } from 'react';
import '../components/Filter.css'
import { FiSearch } from "react-icons/fi";
import { IoCaretDownOutline } from "react-icons/io5";


const Filter = ({onFilter}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [select, setSelect] = useState('Any');
  const [location, setLocation] = useState("")
  const options = ["Any", "house", "land"];
  const [price, setPrice] = useState(1000000);
  const closeRef  = useRef();

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

  const handleSearch = (e) =>{
    e.preventDefault();

    let query = [];
    if(location || select !== "Any" || price !== 1000000){
      query.push(`location=${location}`);
      query.push(`type=${select}`);
      query.push(`price=${price}`)
    }
    const queryString = query.join("&");
    onFilter(queryString)
  }

  return (
    <div className='filter'>
      <h1>Advanced Search</h1>
      <div className='filterCon'>
        <form onSubmit={handleSearch}>
          <div  className='filterForm'>
            <div className='filterBox'>
              <label htmlFor="location">location</label>
              <input 
                type="text" 
                id='location' 
                placeholder='e.g location or address' 
                className='location'
                value={location}
                onChange={(e) =>setLocation(e.target.value)}
              />
            </div>
            <div className='filterBox'>
              <label htmlFor="type">Property Type</label>
              <div className='selectDiv' id='type' ref={closeRef}>
                <button
                  type="button"   
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
            <button type="submit" className='searchBtn'><FiSearch size={16}/> search</button>  
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
