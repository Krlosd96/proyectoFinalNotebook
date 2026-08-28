import '../styles/MainContent.css'
import { useState, useEffect } from 'react'
import TransactionHistory from './TransactionHistory'
import Overview from './Overview'

export default function MainContent({children, user, activeTab}) {
    
    const [transacciones,setTransacciones] = useState(()=> {
        const transaccionesGuardadas = localStorage.getItem("transacciones")
        try {
            return transaccionesGuardadas ? JSON.parse(transaccionesGuardadas) : []
        } catch (error) {
            console.error("Error parsing transacciones from localStorage:", error)
            return []
        }
    })
    const saldo= () => {
        return transacciones.reduce((acc, tx) => {
            return tx.tipo === 'ingreso' ? acc + tx.monto : acc - tx.monto
        }, 0)
    }
    const agregarTransaccion = (monto, tipo) => {
        const nuevaTransaccion = {
            id: Date.now(),
            monto: monto,
            tipo: tipo,
            fecha: new Date().toLocaleString()
        }

        setTransacciones([nuevaTransaccion, ...transacciones])
    }
console.log(transacciones.map(tx => new Date(tx.fecha)))
    useEffect(() => {
        localStorage.setItem("transacciones", JSON.stringify(transacciones))
    }, [transacciones])

    const renderActiveTab=()=>{switch(activeTab){
          case 1:
            return <Overview transacciones={transacciones} user={user}/>
            break;
          case 2:
            return <TransactionHistory transacciones={transacciones} />
            break;
          case 3:
            return <div>Budgets</div>
            break;
          case 4:
            return <div>Reports</div>
            break;
          case 5:
            return <div>Settings</div>
            break;
          default:
            return <Overview transacciones={transacciones} user={user}/>
        }}

    return (
        <main className="main-content-area">
            {children}
            <div className="balance-card">
            <h2>
                Mi saldo:<span className={saldo()<0?"negative-amount":"balance-amount"}> {saldo()}</span>
            </h2>
            <div className="button-container">
            <button 
            className="button" 
            onClick={() => agregarTransaccion(100, 'ingreso')}>
                Agregar $100
            </button>
            <button 
            className="button" 
            onClick={() => agregarTransaccion(50, 'egreso')}
            disabled={saldo() < 50}>
                Retirar $50
            </button>
            </div>
            </div>
            <div>{renderActiveTab()}</div>
        </main>
    )
}