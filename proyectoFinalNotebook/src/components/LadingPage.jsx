import Login from './Login'
import Sidebar from './Sidebar'
import '../styles/LandingPage.css'

export default function LandingPage({onLogin, activeTab, setActiveTab}) {

    const renderActiveTabContent = () => {
        switch (activeTab) {}}
            
    return (
        <div className="landing-distribution">
           <Sidebar user={null} activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="landing-main-area">
          <h1>WealthWise Dashboard</h1>
          <p>Welcome to your financial dashboard!</p>
          <Login onLogin={onLogin} />
          </main>
            
        </div>
    )
}