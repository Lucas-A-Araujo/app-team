import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll';


import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      Alert.alert('Times', 'Não foi possível carregar os times');
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []));


  return (
    <Container>
      <Header />
      <Highlight
        title="Times"
        subtitle="jogue com seu Time"
      />


      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal cadastrar o seu primeiro time?" />
            )}
          />
      }

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}