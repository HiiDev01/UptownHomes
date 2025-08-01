import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleProperty = () => {
  const { id } = useParams()
  const [item, setItem] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) return;
    const controller  = new AbortController();
    setStatus("Loading");
    const handleFetch =  async() => {
      try {
        const res = await fetch(`/api/product/${encodeURIComponent(id)}`, {signal: controller.signal})
        if(!res.ok){ throw new Error('can not fetch the endpoint');};
        const data = await res.json()
        setItem(data);
      } catch (error) {
        console.log('error.message');
        setError('error.message')
      }
    }
    handleFetch();
    return () =>{
      controller.abort();
    }
  },[id])

  return (
    <div className='singleProperty'>
      
    </div>
  )
}

export default SingleProperty
