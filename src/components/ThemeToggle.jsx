import React, { use, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
function ThemeToggle() {
    const {systemTheme} = useTheme()
    const {theme,setTheme}= useTheme()
    const [darkMode,setDarkMode]=useState(false)
    useEffect(()=>{
      if(systemTheme==="dark"){
        setDarkMode(true)
      }
    },[])
    useEffect(()=>{
        if(darkMode){
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    },[darkMode])

  return (
    <label className="ui-switch">
  <input type="checkbox" checked={darkMode} onChange={(e)=>{setDarkMode(e.target.checked)}}/>
  <div className="theme-slider">
    <div className="theme-circle"></div>
  </div>
</label>

  )
}

export default ThemeToggle
