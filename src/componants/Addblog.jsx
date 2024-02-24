import React, { useState } from 'react'
import Navbar from './Navbar'
import {  db } from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Addblog = () => {
  const navigate = useNavigate()
   const auth  = getAuth()
  const [formData, setFormData] = useState({
    title: '',
    shortDesc: '',
    fullDesc: '',
    imgUrl: '',
    authorName:auth.currentUser.displayName,
    authorImg:auth.currentUser.photoURL
  })
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const formRef = collection(db, 'blog')
  const submithandler = async (e) => {
    e.preventDefault()
    await addDoc(formRef, formData)
    console.log('data submit')
    setFormData({
      title: '',
      shortDesc: '',
      fullDesc: '',
      imgUrl: '',
    })
    toast.success('your blog submitted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout (()=>{
    navigate('/blog')
      },2500)
  }
  

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Navbar />
      <div className='container my-3' style={{ width: '60%', lineHeight: '1rem' }}>
        <form onSubmit={submithandler}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Title</label>
            <input value={formData.title} name='title' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Short Desc</label>
            <input value={formData.shortDesc} name='shortDesc' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Full Desc</label>
            <textarea value={formData.fullDesc} name='fullDesc' onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Img Url</label>
              <input value={formData.imgUrl} name='imgUrl' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Add Blog</button>
        </form>
      </div>

    </>
  )
}

export default Addblog
