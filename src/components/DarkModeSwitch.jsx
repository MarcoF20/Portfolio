export function DarkModeSwitch ({ darkMode, setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', darkMode === true ? 'dark' : 'light')
    window.navigator.vibrate(200)
  }
  return (
    <>
      <label className='switch'>
        <input type='checkbox' onChange={handleDarkMode} checked={darkMode} />
        <span className='slider' />
      </label>
    </>
  )
}
