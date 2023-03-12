import styled from 'styled-components';

const SquareStyled = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
`;

interface SquareProps {
  x: number,
  y: number,
  field: string[][],
  onClick: (x: number, y: number) => void
}

function Square(props: SquareProps) {
  return (
    <SquareStyled
      role="button"
      title={`square-${props.x}-${props.y}`}
      onClick={() => props.onClick(props.x, props.y)}>
      {props.field[props.x][props.y]}
    </SquareStyled>
  );
}

export { Square };