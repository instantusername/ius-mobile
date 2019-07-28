import React, { useReducer } from 'react';
import { Container, Header, Content, Button, Left, Right, Body, Icon } from 'native-base';
import { Search } from '../components/Search';
import { Results } from '../components/Results';
import MainProvider from '../components/MainProvider';

export const MainPage: React.FC<{}> = () => {
  return (
    <MainProvider>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>{/* <Title>Header</Title> */}</Body>
          <Right />
        </Header>
        <Content>
          <Search />
          <Results />
        </Content>
      </Container>
    </MainProvider>
  );
};
