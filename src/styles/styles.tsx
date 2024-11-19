import styled from 'styled-components';
import wave from '../images/wave.svg';
import { COLORS } from '../vars';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  min-width: 400px;
  color: #333;
  background-color: ${COLORS.white};
  outline-color: ${COLORS.green};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 15px;
  background-color: ${COLORS.orange};
  color: ${COLORS.white};
  font-weight: 400;
  font-size: 1.05rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 3px 20px 0 ${COLORS.orange};
  }
  &:disabled {
    background-color: ${COLORS.gray};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const BodyContainer = styled.div`
  position: absolute; 
  background-image: url(${wave});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const MapDiv = styled.div`
margin-top: 20px;
width: 600px;
`;

export const MapsContainer = styled.div`
position: sticky;
display: flex;
flex-direction: column;
align-items: center;
top: 0;
width: 50%;
height: 80vh;
overflow-y: auto;
`;