import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';
import { themeStyles } from '../themes/utils';

const background = themeStyles({
  light: Colors.LIGHT_GRAY5,
  dark: Colors.BLACK,
});

const MainContent = styled.div`
  background: ${background};
  padding: 10px;
`;

export default MainContent;
