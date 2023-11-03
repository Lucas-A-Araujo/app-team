import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight 
          title="Novo time"
          subtitle="crie o time para adicionar as pessoas"
        />

        <Button 
          title="Criar"
        />
      </Content>
    </Container>
  )
}