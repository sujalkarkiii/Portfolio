import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Blogs from "./pages/Blogs"
import Resume from "./pages/Resume"
import Homeproject from "./pages/Homeproject"
import BlogDetail1 from "./pages/BlogDetail1"
import Footer from "./components/Footer"
const App = () => {
  return (
<>
  <Navbar/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/blogs/tailwind-v4" element={<BlogDetail1 />} />
  <Route path="/projects" element={<Homeproject/>}/>
  <Route path="/resume" element={<Resume/>}/>
</Routes>
<Footer/>

</>
  )
}

export default App
