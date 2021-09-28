import React from 'react';
import { Deck, Heading, Text } from 'spectacle';

import theme from './theme/default-theme';
import './App.css';
import TitleSlide from './components/TitleSlide';
import SourcesSlide from './components/SourcesSlide';
import EndSlide from './components/EndSlide';
import ContentListSlide from './components/ContentListSlide';
import Template from './components/Template';

function App() {
  return (
    <Deck theme={theme} template={Template}>
      <TitleSlide>
        <Heading>Atomic Design Patterns</Heading>
        <img src="logo.png" alt="Logo" className="Logo" />
        <Text>Reusable solutions to commonly occurring problems</Text>
      </TitleSlide>
      <ContentListSlide
        contentList={['General', 'History', 'Categories', 'Most important design patterns', 'Design patterns in bella']}
      />
      <EndSlide />
      <SourcesSlide />
    </Deck>
  );
}
export default App;
