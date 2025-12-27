import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Blogs from "./pages/Blogs"
import Resume from "./pages/Resume"
import Homeproject from "./pages/Homeproject"
const App = () => {
  return (
<>
  <Navbar/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/projects" element={<Homeproject/>}/>
  <Route path="/resume" element={<Resume/>}/>
</Routes>
</>
  )
}

export default App
