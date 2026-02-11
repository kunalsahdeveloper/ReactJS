import {useState} from 'react'

function MultiInputForm() {

    const [formData, setFormData] = useState(
        { name: "",
          email: "",
          age: "",
        }
    )

    const message="";

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)
   }

   const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
   }

  return (
    <div>
        <h1>{message}</h1>
        
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='name' 
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
            
            />
            <br />
            <input 
                type='email' 
                name='email' 
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                
            />
            <br />
            <input 
                type='text' 
                name='age' 
                placeholder='Age' 
                value={formData.age}
                onChange={handleChange}
            
            />
            <br />
            <button type='submit'>Submit</button> 

        </form>
      

    </div>
  )
}

export default MultiInputForm
