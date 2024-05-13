import { createContext } from 'react'

const ThemeContext = createContext('dark')
const AuthContext = createContext(null)

module.exports = {
    ThemeContext,
    AuthContext
}