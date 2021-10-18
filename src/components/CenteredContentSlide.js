import React from 'react';
import { FlexBox, Heading, Slide as SpectacleSlide } from 'spectacle';

import theme from '../theme/default-theme';

function CenteredContentSlide({ children, title, ...props }) {
    return (
        <SpectacleSlide backgroundColor={theme.colors.background} height="100%">
            {!!title && <Heading>{title}</Heading>}
            <FlexBox flexDirection={'column'} alignItems="center" height="100%" {...props}>
                {children}
            </FlexBox>
        </SpectacleSlide>
    );
}
export default CenteredContentSlide;
