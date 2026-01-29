import React  , {useState}from 'react'
import NavBar from './NavBar'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


     const handleChange = (e) =>{
setFormData({...formData, [e.target.name]: e.target.value})
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        alert("form submitted")

     }



  return (
    <>
      <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
           <input type="text" name='name' value={formData.name} placeholder='your name' onChange={handleChange}/>
            <input type='email' name='email' value={formData.email} placeholder='your email' onChange={handleChange } />
            <textarea name='message' value={formData.message} placeholder='your message'  onChange={handleChange}/>
            <button type='submit'>send messaage</button>
        </form>
    </>
  )
}

export default Contact