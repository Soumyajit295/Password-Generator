import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from './Components/Container';
import PasswordContainer from './Components/PasswordContainer';
import InputArea from './Components/InputArea';
import { toast } from 'react-toastify';

function App() {
  const [length, setLength] = useState(10);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [password, setPassword] = useState('');
  const passwordReference = useRef(null);

  useEffect(() => {
    createPassword();
  }, [length, specialCharacter]);

  const changeLength = (event) => {
    setLength(event.target.value);
  };

  const changeSpecialCharacter = (event) => {
    setSpecialCharacter(event.target.checked);
  };

  const createPassword = () => {
    let characters = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    let specialCharacters = ['~', '!', '@', '#', '%', '^', '&', '*', '$'];

    if (specialCharacter) {
      characters = characters.concat(specialCharacters);
    }

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[index];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    if (passwordReference.current) {
      passwordReference.current.select();
      document.execCommand('copy');
      toast.success('Password copied to clipboard', {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return (
    <Container>
      <h1 className='mb-5 text-white font-bold text-4xl text-center'>Password Generator</h1>
      <PasswordContainer password={password} passwordReference={passwordReference} copyPassword={copyPassword} />
      <InputArea length={length} changeLength={changeLength} changeSpecialCharacter={changeSpecialCharacter} />
    </Container>
  );
}

export default App;
