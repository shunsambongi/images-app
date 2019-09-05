import React from 'react';
import {
  Navbar,
  NavbarGroup,
} from '@blueprintjs/core';
import styled from 'styled-components';
import Omnibox from './Omnibox';

const StyledNavbar = styled(Navbar)`
  display: flex;
`;

const StyledNavbarGroup = styled(NavbarGroup)`
  flex: 1;
`;

const Omnibar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarGroup>
        <Omnibox rounded={true} />
      </StyledNavbarGroup>
    </StyledNavbar>
  );
};

export default Omnibar;
