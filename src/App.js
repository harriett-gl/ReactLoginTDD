import Login from './Components/Login.jsx'

export default function App() {
  const manejarSubmit = (payload) => {
    alert(`Login: ${JSON.stringify(payload)}`)
  }

  return (
      <div style={{ padding: 16 }}>
        <Login onSubmit={manejarSubmit} />
      </div>
  )
}
