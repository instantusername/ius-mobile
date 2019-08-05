import React, { useReducer, useState, Component } from 'react';
import { Container, Header, Content, Button, Left, Right, Body, Icon } from 'native-base';
import { Search } from '../components/Search';
import { Results } from '../components/Results';
import { ServiceResult } from '../api';

export class MainPage extends Component<{}, { results: ServiceResult[] }> {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  addResult = (res: ServiceResult): void => {
    let newResults: ServiceResult[] = [...this.state.results];
    newResults.push(res);
    this.setState({ results: newResults });
  };

  clearResults = (): void => {
    console.log('clear');
    // setResults([]);
    this.setState({ results: [] });
  };
  render() {
    return (
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
          <Search addResult={this.addResult} clear={this.clearResults} />
          <Results results={this.state.results} />
        </Content>
      </Container>
    );
  }
}
