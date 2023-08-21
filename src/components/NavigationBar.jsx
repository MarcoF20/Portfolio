import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import linkedinIcon from '../assets/icons/linkedin-icon.svg'
import githubIconAlt from '../assets/icons/github-icon-alt.svg'

export function NavigationBar () {
  return (
    <>
      <Navbar expand='lg'>
        <Container id='navContainer'>
          <Navbar.Brand href='#home'>franco.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='https://www.linkedin.com/in/marco-franco-4b2b88218/' target='_blank'>
                <img src={linkedinIcon} alt='LinkedIn Logo' className='navIcon' />
              </Nav.Link>
              <Nav.Link href='https://github.com/MarcoF20' target='_blank'>
                <img src={githubIconAlt} alt='LinkedIn Logo' className='navIcon' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
