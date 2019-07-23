import React, { useState } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';
import { Search } from '../components/Search';
import { Results } from '../components/Results';
import { Result } from '../components/ResultCard';

export const MainPage: React.FC<{}> = () => {
  const [username, setUsername] = useState('');

  const onSearch = (text: string) => {
    setUsername(text);
    console.log(`search: ${username}`);
  };

  return (
    <>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Search onSearch={onSearch} />
          <Results results={mockResults} />
        </Content>
      </Container>
    </>
  );
};

const mockResults: Result[] = [
  {
    service: 'Facebook',
    url: 'https://www.facebook.com/usernam',
    availability: true,
  },
  {
    service: 'Twitter',
    url: 'https://www.twitter.com/username',
    availability: true,
  },
  {
    service: 'Instagram',
    url: 'https://www.instagram.com/username',
    availability: false,
  },
  {
    service: 'Youtube',
    url: 'https://www.youtube.com/username',
    availability: true,
  },
];
