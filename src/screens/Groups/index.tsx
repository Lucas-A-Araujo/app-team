import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Times"
        subtitle="jogue com seu Time"
      />

      <GroupCard 
        title="Dead by daylight" />
    </Container>
  );
}