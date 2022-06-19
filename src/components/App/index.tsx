import { useEffect, useState } from 'react';
import * as S from './styles';
import LeaderPage from '../../pages/LeaderPage';
import GamePage from '../../pages/GamePage';

function App() {
  const [leader, setLeader] = useState<number>(-1);

  useEffect(() => {
    const checkLeader = () => {
      const hasLeader = localStorage.getItem("leader");
      hasLeader && setLeader(+hasLeader);
    }
    checkLeader();
  }, [])

  return (
    <S.Container>
      {leader < 0 ?
        <LeaderPage changePage={setLeader} />
        :
        <GamePage changePage={setLeader} leader={leader} />}
    </S.Container>
  );
}

export default App;
