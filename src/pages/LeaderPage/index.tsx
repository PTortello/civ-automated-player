import * as S from './styles';

function LeaderPage({changePage}: any) {
  const rnd = Math.floor(Math.random() * 8);

  return (
    <>
      <S.Container>
        <S.Button onClick={() => changePage(rnd)}>Jogar</S.Button>
      </S.Container>
    </>
  );
}

export default LeaderPage;
