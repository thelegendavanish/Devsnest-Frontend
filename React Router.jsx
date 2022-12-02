import { Routes, Route, useNavigate } from "react-router-dom";
import A from './A' 
  import B from './B' 
    function Dashboard() { const navigate=useNavigate(); 
                          return <div className="dashboard"> <div className="left-bar"> 
                            <button onClick={()=>navigate('/a')}>A</button> 
                            <button onClick={()=>navigate('/b')}>B</button> 
                          </div> <div className="display"> 
                            <Routes> <Route path="/a" element={<A/>}></Route> 
                              <Route path="/b" element={<B/>}></Route> </Routes>
                          </div> </div> } 
export default Dashboard
