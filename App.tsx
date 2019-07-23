import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { MainPage } from './src/screens/MainPage';


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(()=>{
    async function load(): Promise<void> {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setFontLoaded(true);
    }
    load();
  },[]);


  return (
    // TODO: very bad solution to wait for expo fonts to load. fix it somehow
    fontLoaded ? <MainPage /> : <></>
  );
}

