import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import linkedinIcon from '../assets/icons/linkedin-icon.svg'
import githubIconDark from '../assets/icons/githubIcon-dark.svg'
import githubIconLight from '../assets/icons/githubIcon-light.svg'
import { DarkModeSwitch } from './DarkModeSwitch'

export function NavigationBar ({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar expand='lg'>
        <Container id='navContainer'>
          <Navbar.Brand href='/'>franco.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center gap-3'>
              <Nav.Link href='https://www.linkedin.com/in/marco-franco-4b2b88218/' target='_blank'>
                <img src={linkedinIcon} alt='LinkedIn Logo' className='navIcon' />
              </Nav.Link>
              <Nav.Link href='https://github.com/MarcoF20' target='_blank'>
                <img src={darkMode === false ? githubIconDark : githubIconLight} alt='GitHub Logo' className='navIcon' />
              </Nav.Link>
              <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
