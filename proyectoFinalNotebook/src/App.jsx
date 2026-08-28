import { useState } from 'react'
import Layout from './components/Layout'
import './styles/Layout.css'
import Login from './components/Login'


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
          <div className="balance-card title-specs">
          <h1>WealthWise Dashboard</h1>
          <p>Welcome to your financial dashboard!</p>
          </div>
          
        </main>
      
      { !user?(
      <Login onLogin={handleLogin}/>
    ):(
      <Layout user={user} activeTab={activeTab} setActiveTab={setActiveTab}>
      </Layout>)}
    </div>
  )
}

export default App
