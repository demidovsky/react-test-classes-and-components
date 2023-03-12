import React, { useState } from 'react';
import { TicTacToeEngine } from '../classes/TicTacToeEngine';
import { Square } from './Square';
import styled from 'styled-components';

const RowStyled = styled.div`
  display: flex;
`;

const BoardStyled = styled.div`
  background-color: #eee;
  width: 208px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 3px #eee solid;
`;

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InstructionsStyled = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

const ButtonStyled = styled.button`
  margin-top: 15px;
  margin-bottom: 16px;
  width: 80px;
  height: 40px;
  background-color: #8acaca;
  color: white;
  font-size: 16px;
`;

interface BoardProps {
  engine: TicTacToeEngine
}

function Board(props: BoardProps) {
  const [player, setPlayer] = useState(props.engine.player)

  function turn(x: number, y: number) {
    props.engine.turn(x, y);
    setPlayer(props.engine.player);
  }

  const field = props.engine.field;
  const winner = props.engine.winner;

  return (
    <ContainerStyled>
      <InstructionsStyled id="statusArea">Next player: <span>{player}</span></InstructionsStyled>
      <InstructionsStyled id="winnerArea">Winner: <span>{winner === null ? 'None' : winner}</span></InstructionsStyled>
      {/* <ButtonStyled onClick={() => restart()}>Reset</ButtonStyled> */}
      <BoardStyled>
        <RowStyled>
          <Square onClick={turn} x={0} y={0} field={field} />
          <Square onClick={turn} x={0} y={1} field={field} />
          <Square onClick={turn} x={0} y={2} field={field} />
        </RowStyled>
        <RowStyled>
          <Square onClick={turn} x={1} y={0} field={field} />
          <Square onClick={turn} x={1} y={1} field={field} />
          <Square onClick={turn} x={1} y={2} field={field} />
        </RowStyled>
        <RowStyled>
          <Square onClick={turn} x={2} y={0} field={field} />
          <Square onClick={turn} x={2} y={1} field={field} />
          <Square onClick={turn} x={2} y={2} field={field} />
        </RowStyled>
      </BoardStyled>
    </ContainerStyled>
  );
}

export { Board };