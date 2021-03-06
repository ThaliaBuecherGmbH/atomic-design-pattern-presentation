import React from 'react';
import { FlexBox, Slide as SpectacleSlide } from 'spectacle';

import theme from '../theme/default-theme';

function Slide({ children, ...props }) {
  return (
    <SpectacleSlide backgroundColor={theme.colors.background}>
      <FlexBox flexDirection={'column'} alignItems="center" {...props}>
        {children}
      </FlexBox>
    </SpectacleSlide>
  );
}
export default Slide;
