import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Job ({ jobTitle, jobDescription, date, skills }) {
  return (
    <Row
      style={{ marginBottom: '4rem' }}
    >
      <Col style={{ paddingLeft: '2.6rem' }} md={6} xs={12}>
        {/* Hardcoded data */}
        <div className='circle' />
        <span className='date'>{date}</span>
        <h3 className='jobTitle'>{jobTitle}</h3>
        <p className='jobDescription'>{jobDescription}</p>
        {
          skills.map((skill, index) => {
            return (
              <img src={skill} alt='' key={index} className='jobIcon' />
            )
          })
        }
      </Col>
    </Row>
  )
}
