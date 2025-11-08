import useLoginForm from "../Hooks/useLoginForm";
import '../styles/Login.css';

export default function Login({onSubmit}) {
    const {
        usuario,
        setUsuario,
        password,
        setPassword,
        puedeLoguear
    } = useLoginForm();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!puedeLoguear) return
        if (typeof onSubmit === 'function') {
            onSubmit({ usuario: usuario.trim(), password: password.trim() })
        }
    };

    return (
        <form className="login-card" onSubmit={handleSubmit} noValidate>
            <h1 className="login-title">TDD Login: Login</h1>

            <label className="login-label" htmlFor="usuario">Usuario</label>
            <input
                id="usuario"
                className="login-input"
                type="text"
                placeholder="Tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />

            <label className="login-label" htmlFor="contrasena">Contraseña</label>
            <input
                id="contrasena"
                className="login-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button" disabled={!puedeLoguear}>
                Login
            </button>
        </form>
    )
}