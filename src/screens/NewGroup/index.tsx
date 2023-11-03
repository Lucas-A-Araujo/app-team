import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

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

        <Input />


        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}