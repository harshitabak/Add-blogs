import { getAuth } from 'firebase/auth'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const auth = getAuth()
 const navigate = useNavigate()
 const location = useLocation()
  const logOut = () =>{
    auth.signOut()
 navigate('/')
  }

  console.log(getAuth())
  return (
    <>
    <div className='bg-primary d-flex align-items center p-2' style={{justifyContent:'space-between'}}>
      <div className='user-content d-flex justify-content-center align-items-center' >
      
        <img src={auth.currentUser.photoURL} alt='' style={{width:'15%', borderRadius:'50%', marginRight:'1rem'}} />
        <h3>{auth.currentUser.displayName} </h3>
       
      </div>
       <div className='email d-flex  justify-content-center align-items-center  ' style={{gap:'1rem'}}>
      { (location.pathname === '/blog') && (<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>)}
      { (location.pathname !== '/blog') && (<Link to={'/blog'} className='btn btn-warning'>BackToBlog</Link>)}
        <h3> {auth.currentUser.email}</h3>
        <button  onClick ={logOut}className='btn btn-danger'> Log out</button>
       </div>
    </div>
      
    </>
  )
}

export default Navbar
