import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
    ),
    url("https://wallpaperaccess.com/full/4621939.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    justify-content: center;
    ${mobile({ width: "75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-style: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>sign in</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login