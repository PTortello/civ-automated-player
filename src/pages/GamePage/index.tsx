import { useEffect, useState } from 'react';
import * as S from './styles';
import leaders from "../../constants/leaders";

const cardEra = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0]];

function GamePage({changePage, leader}: any) {
  const [cardNumber, setCardNumber] = useState(cardEra);
  const [showModal, setShowModal] = useState(0);

  const getImage = (img: number) => {
   return require("../../images/card"+img+".webp");
  }

  const minusTrade = (key: number) => {
    let tempCardNumber = [...cardNumber];
    if (tempCardNumber[key][1] > 0) {
      tempCardNumber[key][1]--;
    }
    setCardNumber(tempCardNumber);
  }

  const plusTrade = (key: number) => {
    let tempCardNumber = [...cardNumber];
    tempCardNumber[key][1]++;
    setCardNumber(tempCardNumber);
  }

  const upgradeCard = (key: number) => {
    let tempCardNumber = [...cardNumber];
    if (tempCardNumber[key][0] < 40) {
      tempCardNumber[key][0] += 10;
    } else {
      tempCardNumber[key][0] -= 30;
    }
    setCardNumber(tempCardNumber);
  }

  const nextRound = () => {
    let tempCardNumber = [...cardNumber];
    for (let i = 4; i > 0; i--) {
      [tempCardNumber[i-1], tempCardNumber[i]] = [tempCardNumber[i], tempCardNumber[i-1]];
    }
    setCardNumber(tempCardNumber);
  }

  useEffect(() => {
    let tempCardNumber = [...cardNumber];
    for (let i = 0; i < 5; i++) {
      tempCardNumber[i][0] = cardEra[i][0] + leaders[leader].focus[i];
    }
    setCardNumber(tempCardNumber);
  }, [])

  return (
    <>
      {showModal ? 
        <S.Modal onClick={() => setShowModal(0)}>
          <img src={getImage(showModal)} alt={showModal.toString()} style={{height: '390px'}}/>
        </S.Modal>
      :
        <>
          <S.Back onClick={() => changePage(-1)}>Voltar</S.Back>
          <S.Round onClick={() => nextRound()}>Turno</S.Round>
          <S.Title>{ leaders[leader].civ }</S.Title>
          <S.Focus>
            <img src={require("../../images/focus.webp")} alt={"focus bar"} style={{height: '47.8px'}}/>
          </S.Focus>
          {cardNumber.map((value, key) => {
            return (
              <S.Container>
                <S.Bottom>
                  <S.Item onClick={() => minusTrade(key)}>-</S.Item>
                  <S.Item>{value[1]}</S.Item>
                  <S.Item onClick={() => plusTrade(key)}>+</S.Item>
                </S.Bottom>
                <S.Card onClick={() => setShowModal(value[0])}>
                  <S.Image src={getImage(value[0])} alt={value[0].toString()} />
                </S.Card>
                <S.Upgrade onClick={() => upgradeCard(key)}>&#62;</S.Upgrade>
              </S.Container>
            )
          })}
        </>
      }
    </>
  );
}

export default GamePage;
