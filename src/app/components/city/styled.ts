import styled from 'styled-components'

interface ContainerProps {x: number, y: number}

export const Container = styled.div`
  position: absolute;
  top: ${({y}: ContainerProps) => y}%;
  left: ${({x}: ContainerProps) => x}%;
  text-align: center;
  color: white;
  transform: translate(-50%, -50%);
`

export const Name = styled.span`
  align: center;
  width: 100%;
  margin: 0;
`

interface InfectionProps { x: number }

export const Infection = styled.span`
  font-size: ${({x}: InfectionProps) => (
    x === 0 ? '20px' :
    x === 1 ? '24px' :
    x === 2 ? '28px' :
    '32px'
  )};
`
interface CircleProps { colour: 'blue' | 'red' | 'yellow' | 'black'}

export const Circle = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 50%;
  border: 2px solid white;

  margin: auto;
  display:flex;
  justify-content: center;
  align-items: center;

  background-color: ${({colour}: CircleProps) => (
    colour === 'yellow' ? '#F5D547' :
    colour === 'black'  ? '#3C3C3B' :
    colour === 'blue'   ? '#192BC2' :
    colour === 'red'    ? '#DB3069' :
    ''
  )}
`