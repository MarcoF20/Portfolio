import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'

export function ProjectButton ({ demo, repo }) {
  if (demo !== false) {
    return (
      <Dropdown as={ButtonGroup}>
        <Button as='a' className='projectButton' href={repo} target='_blank' rel='noreferrer'>Repository</Button>

        <Dropdown.Toggle split variant='primary' id='dropdown-split-basic' className='toggleDropdown' />

        <Dropdown.Menu>
          <Dropdown.Item href={demo} as='a' target='_blank' rel='noreferrer'>Live demo</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  } else {
    return (
      <Button as='a' href={repo} className='projectButton' target='_blank' rel='noreferrer'>Repository</Button>
    )
  }
}
