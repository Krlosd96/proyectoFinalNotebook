import { useState } from 'react'
import Layout from './components/Layout'
import './styles/Layout.css'
import LandingPage from './components/LadingPage'


function App() {
  const [user,setUser]=useState(null)
  const [password,setPassword]=useState(null)
  const [userList,setUserList]=useState([{
    id:1,
    username:"Carlos",
    password:"1234"
  }])
  const [activeTab,setActiveTab]=useState("overview")

  
  const handleLogin=(name,pass)=>{
    const userExists=userList.find(user=>user.username===name && user.password===pass)
    if(!userExists){
      alert("Usuario o contraseña incorrectos")
      return
    }
    setUser(name)
    setPassword(pass)
  }
  return (
    <div className="App">
      <main>
         
          
        </main>
      
      { !user?(
      <LandingPage onLogin={handleLogin} />
    ):(
      <Layout user={user} activeTab={activeTab} setActiveTab={setActiveTab}>
      </Layout>)}
    </div>
  )
}

export default App
