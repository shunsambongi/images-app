import React from 'react';
import {
  Navbar as BpNavbar,
  Alignment,
  Button,
  NavbarDivider,
} from '@blueprintjs/core';
import styled from 'styled-components';
import DirectoryInput, { DirectoryInputProps } from './DirectoryInput';

const StyledNavbar = styled(BpNavbar)`
  display: flex;
`;

const StyledNavbarGroup = styled(BpNavbar.Group)`
  flex: 1;
`;

interface NavbarProps extends DirectoryInputProps {
  darkMode: boolean;
  onDarkModeChanged: (darkMode: boolean) => any;
}

const Navbar = ({
  onDirectorySelected,
  darkMode,
  onDarkModeChanged,
}: NavbarProps) => {
  const icon = darkMode ? 'flash' : 'moon';

  return (
    <StyledNavbar>
      <StyledNavbarGroup align={Alignment.RIGHT}>
        <DirectoryInput onDirectorySelected={onDirectorySelected} />
        <NavbarDivider />
        <Button
          icon={icon}
          minimal={true}
          onClick={() => onDarkModeChanged(!darkMode)}
        />
      </StyledNavbarGroup>
    </StyledNavbar>
  );
};

export default Navbar;
