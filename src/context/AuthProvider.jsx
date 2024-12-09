import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Initialize localStorage if it's empty or doesn't have employees data
        // localStorage.clear()
        const storedData = getLocalStorage()
        if (!storedData.employees) {
            // If employees data doesn't exist, set it with an empty array or default data
            setLocalStorage({ employees: [] }) // Or default data if you need
        }

        // Retrieve data from localStorage
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
