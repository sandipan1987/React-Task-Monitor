import { Link } from 'react-router-dom'

const About = (imgPath) => {
  return (
    <div>
      <img src={imgPath} alt="test"/>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
