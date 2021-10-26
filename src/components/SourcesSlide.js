import React from 'react';
import { Heading } from 'spectacle';
import Slide from './Slide';

function SourcesSlide({ children }) {
  return (
    <Slide>
      <Heading>Quellen</Heading>
      {children}
    </Slide>
  );
}
export default SourcesSlide;
