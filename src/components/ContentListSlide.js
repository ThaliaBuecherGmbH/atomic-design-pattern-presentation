import React from 'react';
import { Heading, ListItem, OrderedList } from 'spectacle';
import Slide from './Slide';

function SourcesSlide({ contentList = [] }) {
  return (
    <Slide>
      <Heading>Content</Heading>
      <OrderedList>
        {contentList.map((entry) => (
          <ListItem key={entry}>{entry}</ListItem>
        ))}
      </OrderedList>
    </Slide>
  );
}
export default SourcesSlide;
