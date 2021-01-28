import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean; isFontSize: boolean }>`
  color: ${(props) => (props.isBlue ? props.theme.blueColor : "balck")};
  font-size: ${(props) => (props.isFontSize ? "30px" : "")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => {
  return (
    <Container isBlue={count > 10} isFontSize={count > 10}>
      {count}
    </Container>
  );
};

export default Number;
