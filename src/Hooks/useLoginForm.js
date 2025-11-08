import {useState, useMemo} from "react";

export default function useLoginForm() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const puedeLoguear = useMemo(() => {
        const u = usuario.trim();
        const p = password.trim();
        return u.length > 0 && p.length > 0;
    }, [usuario, password]);

    return {
        usuario,
        setUsuario,
        password,
        setPassword,
        puedeLoguear
    }
}