import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  height: 20.2%;
  width: 85%;
`

export const Card = styled.div`
  transform: rotateZ(90deg);
  padding-right: 60px;
  `

export const Image = styled.img`
  width: 140px;
`

export const Bottom = styled.div`
  width: 30px;
  height: 130px;
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  `

export const Item = styled.div`
  transform: rotateZ(90deg);
  text-align: center;
  font-size: 1.2rem;
  background-color: lightgrey;
  border: 1px solid gray;
  border-radius: 2px;
  width: 25px;
`

export const Title = styled.div`
  transform: rotateZ(90deg);
  font-size: 1.5rem;
  position: absolute;
  top: 340px;
  right: -10px;
  width: 100px;
  height: 40px;
`

export const Back = styled.button`
  transform: rotateZ(90deg);
  font-size: 1.1rem;
  width: 80px;
  height: 40px;
  position: absolute;
  top: 40px;
  right: -5px;
`

export const Round = styled(Back)`
  top: 640px;
`

export const Focus = styled.div`
  transform: rotateZ(90deg);
  position: absolute;
  top: 41px;
  right: 31px;
  width: 100px;
  height: 40px;
  z-index: -1;
`

export const Upgrade = styled.button`
  position: relative;
  top: 20px;
  left: -241px;
  font-weight: bold;
  width: 22px;
  height: 100px;
`

export const Modal = styled.div`
  position: absolute;
  top: 160px;
  left: 70px;
  transform: rotateZ(90deg);
  z-index: 1;
`
