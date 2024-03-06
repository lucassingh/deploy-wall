import React, { createContext, useContext, useState } from 'react';
import { User } from '../interfaces/User';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (formData: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (formData: User) => {
        // Aquí iría la lógica para autenticar al usuario, como enviar los datos al backend
        // Por ahora, simplemente marcaremos al usuario como autenticado

        console.log('valor del form', formData)
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login }}>
            {children}
        </AuthContext.Provider>
    );
};