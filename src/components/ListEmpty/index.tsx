import { Container, Messenger } from "./styles";

import React from "react";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Messenger>{message}</Messenger>
    </Container>
  );
}
