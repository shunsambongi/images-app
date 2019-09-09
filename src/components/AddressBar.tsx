import React from 'react';
import {
  Navbar,
  NavbarGroup,
  InputGroup,
  Button,
  NavbarDivider,
  Colors,
} from '@blueprintjs/core';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { themeStyles } from '../themes/utils';
import { borderStyle } from './Tab';

const background = themeStyles({
  light: Colors.WHITE,
  dark: Colors.DARK_GRAY3,
});

const StyledNavbar = styled(Navbar)`
  display: flex;
  box-shadow: none !important;
  background: ${background} !important;
  border-bottom: 1px solid ${borderStyle};
  border-top: 1px solid ${borderStyle};
`;

const StyledNavbarGroup = styled(NavbarGroup)`
  flex: 1;
`;

const StyledInputGroup = styled(InputGroup)``;

const StyledThemeToggle = styled(ThemeToggle)`
  align-self: center;
`;

const AddressBar = () => {
  const browse = (
    <Button intent="primary" minimal>
      Browse
    </Button>
  );
  return (
    <StyledNavbar>
      <StyledNavbarGroup>
        <StyledInputGroup
          placeholder="Type a file or directory"
          rightElement={browse}
          fill
        />
      </StyledNavbarGroup>
      <NavbarGroup>
        <NavbarDivider />
        <ThemeToggle minimal />
      </NavbarGroup>
    </StyledNavbar>
  );
};

export default AddressBar;
