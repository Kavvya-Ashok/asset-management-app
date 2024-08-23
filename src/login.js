// to sign up and log in the user using supabase authentication

import React, { useState } from 'react';
import supabase from './supabaseAuth';
import { Button, PasswordInput, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.layer.css';

const Login = ( {onLogin} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, { toggle }] = useDisclosure(false);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log(data.user);
    console.log(error);
    if (error) {
        alert(error.message);
    } else {
        console.log(data.user.email);
        console.log(await supabase.from('Assets').select('*'))
        const { userData, err } = await supabase
            .from('Users')
            .select('*')
            // .eq('email', data.user.email)
        console.log(userData);
        console.log(err);
        onLogin();
    };
  };

  const handleSignUp = async () => {
    const {data, error} = await supabase.auth.signUp({ email, password });
    console.log(data);
    if (error) {
        alert(error.message);
    } else {
        onLogin();
    };
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '10% 20% 10% 20%'
        }}
    >
        <div style={{
            display: 'grid',
            gridTemplateColumns: '25% 50%'
        }}>
            <Text>Email</Text>
            <TextInput
                value={email}
                onChange={handleEmail}
            />
        </div>
        <div style={{
            display: 'grid',
            gridTemplateColumns: '25% 50%'
        }}>
            <Text>Password</Text>
            <PasswordInput
                value={password}
                onChange={handlePassword}
                visible={visible}
                onVisibilityChange={toggle}
            />
        </div>
        <div  style={{
            alignItems: 'center'
        }}>
            <Button
                variant='filled'
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>
        <div style={{
            display: 'flex',
        }}>
            <Text>Don't have an account? </Text>
            <Button
                variant='filled'
                onClick={handleSignUp}
            >
                Sign Up
            </Button>
        </div>
    </div>
  );
};

export default Login;
