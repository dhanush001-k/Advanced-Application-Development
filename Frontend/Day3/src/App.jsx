// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import Signin from "./Components/Signin"
import Home from "./Components/Home"
import Applyloan from "./Components/Applyloan"
import Applyform from "./Components/Applyform"
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="Applyloan" element={<Applyloan/>}></Route>
        <Route path="Applyform" element={<Applyform/>}></Route>
      </Routes>
  
    </div>
    </BrowserRouter>
  )
}

export default App


// import React from 'react'
// import Slide from './Components/Slide'
// // import { Slide } from "react-slideshow-image"
// const App = () => {
//   return (
//     <div>
//       <Slide></Slide>
//     </div>
//   )
// }

// export default App








 
