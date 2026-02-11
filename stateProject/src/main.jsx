import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import ToggleText from './ToggleText.jsx'
import MultiInputForm from './MultiInputForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MultiInputForm />
    <Counter />
    <ToggleText />
  </StrictMode>,
)
