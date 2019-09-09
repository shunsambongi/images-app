import React from 'react';
import styled, { StyledComponentInnerAttrs } from 'styled-components';
import { themeStyles } from '../themes/utils';
import { Colors, Button } from '@blueprintjs/core';

export interface TabProps {
  title?: string;
  active?: boolean;
  className?: string | undefined;
}

const Tab: React.FC<TabProps> = ({
  title = 'New Tab',
  active = false,
  className = undefined,
}) => {
  return <div className={className}>{title}</div>;
};

const backgroundActive = themeStyles({
  light: Colors.WHITE,
  dark: Colors.DARK_GRAY3,
});

const backgroundInactive = themeStyles({
  light: Colors.LIGHT_GRAY5,
  dark: Colors.DARK_GRAY2,
});

export const borderStyle = themeStyles({
  light: Colors.LIGHT_GRAY2,
  dark: Colors.DARK_GRAY4,
});

const colorInactive = themeStyles({
  light: Colors.GRAY1,
  dark: Colors.GRAY4,
});

const StyledTab = styled(Tab)`
  max-width: 200px;
  min-width: 70px;
  flex: 1;
  padding: 12px;
  border-right: 1px solid ${borderStyle};
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: none;
  position: relative;
  color: ${props => (props.active ? 'inherit' : colorInactive(props))};

  background: ${props =>
    props.active ? backgroundActive(props) : backgroundInactive(props)};
`;

export default StyledTab;
