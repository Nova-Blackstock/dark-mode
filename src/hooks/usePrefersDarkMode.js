import { useMedia } from 'react'
import useLocalStorage from './useLocalStorage'

function usePrefersDarkMode(value) {

    return useMedia(['(prefers-color-scheme: dark)'], [true], value);
}

export default usePrefersDarkMode