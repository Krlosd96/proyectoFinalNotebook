import Sidebar from './Sidebar'
import MainContent from './MainContent'
import '../styles/Layout.css'

export default function Layout({children, user, activeTab, setActiveTab, onLogout, onAddTransaction, activeUser}) {
    
    return (
        <div className="layout-distribution">
            <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
            <MainContent user={user} activeTab={activeTab} setActiveTab={setActiveTab} onAddTransaction={onAddTransaction} activeUser={activeUser}>
                {children}
            </MainContent>
        </div>
    )
}   