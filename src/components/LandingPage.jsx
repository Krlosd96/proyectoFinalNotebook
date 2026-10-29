import Login from "./Login.jsx";
import Sidebar from "./Sidebar.jsx";
import Register from "./Register.jsx";
import "../styles/LandingPage.css";

export default function LandingPage({
  children,
  user,
  onLogin,
  activeTab,
  setActiveTab,
  onRegister,
}) {
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 1:
        return <div>Home</div>;
      case 2:
        return <Login onLogin={onLogin} />;
      case 3:
        return <Register onRegister={onRegister} />;
      default:
        return <div>Home</div>;
    }
  };
  return (
    <div className="landing-distribution">
      {children}
      <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="landing-main-area">
        {activeTab === 1 ? (
          <div className="landing-content">
            <h1>Welcome to WealthWise</h1>
            <p>Your personal finance companion.</p>
          </div>
        ) : (
          <div>{renderActiveTabContent()}</div>
        )}
      </main>
    </div>
  );
}
