import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { register } from '../redux/apiCalls'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerSuccess } from '../redux/userRedux';



const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    border: 1px solid gray;
    background-color: white;
    ${mobile({ width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-style: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const navigate = useNavigate(); 
    
    const handleClick = (e) => {
      e.preventDefault();
      register(dispatch, { first_name, last_name, email, username, password });
/*       if(registerSuccess){
        let path = "/"; 
      navigate(path);
      } */
    };

   
    const routeChange = () =>{ 
    let path = "/login"; 
    navigate(path);
    }

  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input 
                placeholder="name"
                onChange={(e) => setFirst_name(e.target.value)}
                />
                <Input 
                placeholder="last name"
                onChange={(e) => setLast_name(e.target.value)}
                />
                <Input 
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}/>
                <Input 
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                placeholder="confirm password"
                />
                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem consequatur, amet repellendus quo accusantium unde sint nemo magnam explicabo saepe animi facilis quae. Delectus beatae nisi facere repellendus aspernatur.</Agreement>
                <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                <Button onClick={routeChange}>LOG IN</Button>
            </Form>
            

        </Wrapper>
    </Container>
    </div>
  )
}

export default Register