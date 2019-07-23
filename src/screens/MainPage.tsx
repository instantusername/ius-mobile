import React, { useState } from 'react'
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
      <Search onSearch={onSearch} />
      <Results results={mockResults} />
    </>
  );
}

const mockResults: Result[] = [
  {
    service: 'Facebook',
    url: 'https://www.facebook.com/usernam',
    availability: true
  },
  {
    service: 'Twitter',
    url: 'https://www.twitter.com/username',
    availability: true
  },
  {
    service: 'Instagram',
    url: 'https://www.instagram.com/username',
    availability: false
  },
  {
    service: 'Youtube',
    url: 'https://www.youtube.com/username',
    availability: true
  }
];
