import React from 'react';
import {TableCell as SpectacleTableCell} from 'spectacle';


function TableCell({children, textAlign='center', ...props}) {
    return (
        <SpectacleTableCell {...props} textAlign={textAlign} fontSize={"28px"}>
            {children}
        </SpectacleTableCell>

    );
}
export default TableCell;
