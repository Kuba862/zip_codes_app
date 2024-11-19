import React from 'react';
import { Input as InputStyled, SearchContainer, Label } from '../styles/styles';

interface InputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    zipCode?: string;
}

const Input = ({ handleChange }: InputProps) => {
  return (
        <SearchContainer>
            <Label htmlFor="zipCode">Wprowadź adres: </Label>
            <InputStyled type="text" id="zipCode" onChange={handleChange} />
        </SearchContainer>
  )
}

export default Input