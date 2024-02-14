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
import AdSignin from "./Components/AdSignin"
import Home from "./Components/Home"
import Applyloan from "./Components/Applyloan"
import Appliedloan from "./Components/Appliedloan"
import Applyform from "./Components/Applyform"
import FAQs from "./Components/FAQs"
import Dashboard from "./Components/Dashboard"
import AdHome from "./Components/AdHome"
import Role from "./Components/Role"
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Role/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="Applyloan" element={<Applyloan/>}></Route>
        <Route path="Applyform" element={<Applyform/>}></Route>
        <Route path="FAQs" element={<FAQs/>}></Route>
        <Route path="AdHome" element={<AdHome/>}></Route>
        <Route path="Appliedloan" element={<Appliedloan/>}></Route>
        <Route path="/AdSignin" element={<AdSignin/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
  
    </div>
    </BrowserRouter>
  )
}

export default App








// import Login from "./Components/Login"

// const App = () => {
//   return (
//     <div>
//       <Login/>
//     </div>
//   )
// }

// export default App








 
