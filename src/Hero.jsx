import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FiGithub, FiFacebook, FiTwitter } from 'react-icons/fi'


const Hero = () => {
  return (
    <Container>
    <br></br>
        <Row>
            <Col>
            <div className='cards'>
            <div className='cardinner'>
            <br></br>  
            <h5 className='h5'style={{fontSize: '17px'}}> Sign in with </h5>

            {/* Social medias */}

            <a href=''>
             <Button variant="dark"> <strong className='social'> <FiGithub /> GITHUB</strong></Button> {' '}</a>

             <a href=''>
            <Button variant="primary"><strong className='social'><FiFacebook /> FACEBOOK</strong> </Button> {' '}</a>

            <a href=''>
            <Button variant="" style={{backgroundColor: 'rgb(6, 59, 158)',color:'white'}}> 
            <strong className='social'><FiTwitter /> TWITTER</strong></Button> {' '}</a>
            <br></br>  

            <hr className='hr'></hr>

            <h5 className='h5'style={{fontSize: '17px'}}> or sign in with credentials</h5>
            <br></br>

            {/* Fill in this form */}

            <form>
            <label style={{color: 'white', textAlign:'left', marginRight:'340px',fontSize:'12px'}}> EMAIL</label>
            <br></br>
            <input type="text" name="email" className='input'placeholder='Enter your email' required/>
            <br></br>
            <label style={{color: 'white',textAlign:'left',marginRight:'310px',fontSize:'12px'}}> PASSWORD</label>
            <br></br>
            <input type="text" name="password" text="hidden" className='input' placeholder='Enter your password' required/>
            <br></br> <br></br>

            <input type="radio" className='radio' style={{marginRight:'10px',textAlign:'left'}} required/>
            <label style={{color:'white'}}>Remember me</label>
            
            <br></br>
            <Button variant='primary'className='btc' type='submit'> SIGN IN </Button>{' '}
            <br></br><br></br>

            {/* links */}
            <a href=''>
            <label style={{fontSize: '13px', marginLeft: '-10px', textDecoration:'none', color:'#cec3c3',cursor:'pointer'}}>
             Forgot Password? </label>  </a>
             <a href=''>
             <label style={{fontSize: '13px', marginLeft: '180px',textDecoration:'none', color: '#cec3c3',cursor:'pointer'}}> 
             Create Password </label>
             </a>
            
</form>


</div>
</div>

            </Col>

            {/* White Forms */}
           
            <Col md='6'>
            <div className='cards2'>
            <div className='cardinner'>
            <br></br>  
            <h5 className='h5'style={{fontSize: '17px',color:'black'}}> Sign in with </h5>

            {/* Social medias */}

            <a href=''>
             <Button variant="dark"> <strong className='social'> <FiGithub /> GITHUB</strong></Button> {' '}</a>

             <a href=''>
            <Button variant="primary"><strong className='social'><FiFacebook /> FACEBOOK</strong> </Button> {' '}</a>

            <a href=''>
            <Button variant="" style={{backgroundColor: 'rgb(6, 59, 158)',color:'white'}}> 
            <strong className='social'><FiTwitter /> TWITTER</strong></Button> {' '}</a>
            <br></br>  

            <hr className='hr'></hr>

            <h5 className='h5'style={{fontSize: '17px',color:'black'}}> or sign in with credentials</h5>
            <br></br>

            {/* Fill in this form */}

            <form>
            <label style={{color: 'white', textAlign:'left', marginRight:'340px',fontSize:'12px',color:'gray'}}> EMAIL</label>
            <br></br>
            <input type="text" name="email" className='input'placeholder='Enter your email' required/>
            <br></br>
            <label style={{color: 'white',textAlign:'left',marginRight:'310px',fontSize:'12px',color:'gray'}}> PASSWORD</label>
            <br></br>
            <input type="text" name="password" text="hidden" className='input' placeholder='Enter your password' required/>
            <br></br> <br></br>

            <input type="radio" className='radio' style={{marginRight:'10px',textAlign:'left'}} required/>
            <label style={{color:'gray'}}>Remember me</label>
            
            <br></br>
            <Button variant='primary'className='btc' type='submit'> SIGN IN </Button>{' '}
            <br></br><br></br>

            {/* links */}
            <a href=''>
            <label style={{fontSize: '13px', marginLeft: '-10px', textDecoration:'none', color:'gray',cursor:'pointer'}}>
             Forgot Password? </label>  </a>
             <a href=''>
             <label style={{fontSize: '13px', marginLeft: '180px',textDecoration:'none', color: 'gray',cursor:'pointer'}}> 
             Create Password </label>
             </a>
            
</form>


</div>
</div>

            </Col>
        </Row>
        <br></br>
    </Container>
  )
}

export default Hero
