import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import {getDoc,doc,collection} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Singleblog = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [data,setData] = useState({})
  const colRef = collection(db,'blog')
  const singleData = doc(db,'blog',id)
  useEffect (()=>{
  const singlefetch = ()=>{
    getDoc(singleData).then((doc)=>setData(doc.data()))
  }
  singlefetch()
  },[id])
  return (
    <>
    <Navbar/>
      <div className='container  d-flex justify-content-center align-items-center my-4'>
        <div className='left-img'>
          <img src={data.imgUrl} alt='img' className='img-fluid' style={{width:'200%'}}/>
        </div>
        <div className='right-data'>
        <div className='user-content d-flex justify-content-center align-items-center flex-column' >
      
      <img src={data.authorImg} alt='' style={{width:'5%', borderRadius:'50%', margin:'0.5rem'}} />
      <h4>{data.authorName} </h4>
      </div>
      <div className='text-center'>
      <h2>{data.title}</h2>
      <h3>{data.shortDesc}</h3>
      <h5>{data.fullDesc}</h5>
      </div>
        </div>
      </div>
    </>
  )
}

export default Singleblog
