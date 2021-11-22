import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';

const Container = styled.div`
    height: 60px;
    background-color: #fff;
    border-bottom: 2px solid #000;
`
//#df0000

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    color: #000;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled(Link)`
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
    color: #000;
    text-decoration: none;
`

const NavBar = () => {
    const {user, setUser, isLogged, setIsLogged} = React.useContext(AuthContext);

    if(user.data){
        setIsLogged(true);
    }
        
    if(user.data === undefined){
        setIsLogged(false);
    }

    return (
        <Container>
            <Wrapper>
                <Left></Left>
                <Center>
                    <Logo>INGRESSOS</Logo>
                </Center>
                <Right>
                    { !isLogged &&
                        <>
                            <MenuItem to="/signup">CADASTRE-SE</MenuItem>
                            <MenuItem to="/login">LOGIN</MenuItem>
                        </>
                    }
                    { isLogged &&
                        <>
                            <MenuItem to="/profile">MINHA CONTA</MenuItem>
                            <MenuItem to="/purchase-history">HISTÓRICO COMPRAS</MenuItem>
                            <MenuItem to="/shopping-kart">CARRINHO</MenuItem>
                            <MenuItem 
                                to="/" 
                                onClick={() => {
                                    setIsLogged(false);
                                    setUser({});
                                }}
                            >
                                SAIR
                            </MenuItem>
                        </>
                    }
                </Right>
            </Wrapper>
        </Container>
    );
}

export default NavBar