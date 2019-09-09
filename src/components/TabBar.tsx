import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Button } from '@blueprintjs/core';
import { themeStyles } from '../themes/utils';
import { IconNames } from '@blueprintjs/icons';
import Tab, { TabProps } from './Tab';
import { useTransition } from 'react-spring';
import ThemeToggle from './ThemeToggle';

// THEMES
const background = themeStyles({
  light: Colors.LIGHT_GRAY4,
  dark: Colors.DARK_GRAY1,
});

// COMPONENTS
const Container = styled.div`
  background: ${background};
  display: flex;
`;

const TabList = styled.div`
  flex: 1;
  display: flex;
  overflow: overlay;
`;

const ActionsContainer = styled.div`
  display: flex;
`;

const AddTabButton = styled(Button).attrs(props => ({
  icon: IconNames.PLUS,
  minimal: true,
}))`
  align-self: center;
  margin: 0 5px;
`;

const fakeTabs = [
  {
    title: 'first',
    active: true,
  },
  {
    title: 'second',
  },
];

const TabBar = () => {
  const [tabs, setTabs] = useState<TabProps[]>(fakeTabs);

  const handleAddTab = () => {
    setTabs([...tabs, {}]);
  };

  return (
    <Container>
      <TabList>
        {tabs.map((props, i) => (
          <Tab key={i} {...props} />
        ))}
      </TabList>
      <ActionsContainer>
        <AddTabButton onClick={handleAddTab} />
      </ActionsContainer>
    </Container>
  );
};

export default TabBar;
