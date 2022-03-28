import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <Container>
        <a href="https://github.com/chiragdatwani/mern-e-commerce" target='blank'>
          <p>06 Tran Van On Street, Phu Hoa Ward, Thu Dau Mot City, Binh Duong Province</p>
        </a>
        {/* <div>
          <a href='https://www.facebook.com/hanhdomy236/' target='blank' className='fb'>
            <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" />
          </a>
          <a href='https://www.facebook.com/hanhdomy236/' target='blank' className='ig'>
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#BC2A8D" />
          </a>
          <a href='https://www.facebook.com/hanhdomy236/' target='blank' className='em'>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div> */}



      </Container>
    </footer>
  )
}

export default Footer;

const Container = styled.div`
& a{
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  & img{
      width: 25px;
      margin-left: 10px;
  }
}
    
    
`
