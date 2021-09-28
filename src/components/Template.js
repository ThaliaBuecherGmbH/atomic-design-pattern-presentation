import React from 'react';
import { Box, FlexBox, FullScreen, Progress } from 'spectacle';

import theme from '../theme/default-theme';

function Template() {
  return (
    <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
      <Box padding="0 1em">
        <FullScreen color={theme.colors.primary}/>
      </Box>
      <Box padding="1em">
        <Progress color={theme.colors.secondary} />
      </Box>
    </FlexBox>
  );
}
export default Template;
