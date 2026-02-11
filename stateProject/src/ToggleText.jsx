import {useState} from 'react'

function ToggleText() {

    const [isVisible, setIsVisible] = useState(true)



  return (
    <div>
      <h1>Simple Text Toogle</h1>

        {isVisible && <h2>Hello world</h2>}


        <button type="button" onClick={()=> setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show" } Text
        </button>


    </div>
  )
}

export default ToggleText
