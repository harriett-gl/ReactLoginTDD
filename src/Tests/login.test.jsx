import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Components/Login';

describe('Formulario TDD', () => {
    test('Botón deshabilitado al inicio', () => {
        render(<Login />);
        const boton = screen.getByRole('button', { name: /login/i });
        expect(boton).toBeDisabled();
    });

    test('Botón habilitado con 2 campos', async () => {
        const user = userEvent.setup();
        render(<Login />);

        const usuario = screen.getByLabelText(/usuario/i);
        const password = screen.getByLabelText(/contraseña/i);
        const boton = screen.getByRole('button', { name: /login/i });

        await user.type(usuario, 'sebastian');
        expect(boton).toBeDisabled();

        await user.type(password, '123456');
        expect(boton).toBeEnabled();
    });

    test('Botón deshabilitado con un solo campo', async () => {
        const user = userEvent.setup();
        render(<Login />);

        const usuario = screen.getByLabelText(/usuario/i);
        const password = screen.getByLabelText(/contraseña/i);
        const boton = screen.getByRole('button', { name: /login/i });

        await user.type(usuario, 'sebastian');
        await user.type(password, '123456');
        expect(boton).toBeEnabled();

        await user.clear(password);
        expect(boton).toBeDisabled();
    });

    test('No cuenta espacios en blanco como contenido', async () => {
        const user = userEvent.setup();
        render(<Login />);

        const usuario = screen.getByLabelText(/usuario/i);
        const password = screen.getByLabelText(/contraseña/i);
        const boton = screen.getByRole('button', { name: /login/i });

        await user.type(usuario, '   ');
        await user.type(password, '   ');
        expect(boton).toBeDisabled();
    });
});
