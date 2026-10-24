import React, { useState , useEffect} from 'react'
import Layout from './components/Layout'
import './styles/Layout.css'
import LandingPage from './components/LandingPage'


function App() {
  const [user,setUser]=useState(null)
  const [password,setPassword]=useState(null)
  const [userList,setUserList]=useState(
  ()=>{
    const usersGuardados=localStorage.getItem("userList")
    try{
      return usersGuardados?JSON.parse(usersGuardados):[]
    }catch(error){
      console.error("Error parsing userList from localStorage:",error)
      return []
    }
  }
)

  const [activeTab,setActiveTab]=useState("overview")

  const handleRegister=({username,email,password})=>{
    const userExists=userList.find(u=>String(u.username).toLocaleLowerCase() === String(username).toLocaleLowerCase())
    if(userExists){
      alert("El usuario ya existe")
      return
    }
    const newUser={
      id: Date.now(),
      username: username,
      email: email,
      password: password,
      transactions: [],
      
    }
    setUserList([... userList,newUser])
  }
  
  const handleLogin=(username,password)=>{
    const userExist=userList.find(user=>String(user.username).toLocaleLowerCase() === String(username).toLocaleLowerCase() && user.password===password)
    if(!userExist){
      alert("Usuario o contraseña incorrectos")
      return
    }
    setUser(username)
    setPassword(password)
  }
  
    const handleNewTransaction=(nuevaTransaccion)=>{
    const updatedUserList=userList.map(u=>{
      if(u.username===user){
        
        return {
          ...u,
          transactions: [...u.transactions, nuevaTransaccion]
          
        }
      }
      return u
    })
    setUserList(updatedUserList)  
  }

  const onDeleteTransaction=(id)=>{
    setUserList(prevUserList=>{
      return prevUserList.map(u=>{
        if(u.username===user){
          return {
            ...u,
            transactions: u.transactions.filter(tx=>tx.id!==id)
          }
        }
        return u
      })
    })
  }

  const handleLogout=()=>{
    setUser(null)
    setPassword(null)
    setActiveTab("overview")
  }

  useEffect(()=>{
    localStorage.setItem("userList",JSON.stringify(userList))
  },[userList])

  const activeUser=userList.find(u=>u.username===user && u.password===password)

  return (
    <div className="App">
      { !user?(
      <LandingPage 
      user={user} 
      onLogin={handleLogin} 
      onRegister={handleRegister}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
     />
    ):(
      <Layout 
      user={user} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}
      onAddTransaction={handleNewTransaction}
      activeUser={activeUser}
      onDeleteTransaction={onDeleteTransaction}
      >
      
      </Layout>)}
    </div>
  )
}

export default App
