import React from 'react';
import { useTheme } from '../themes/ThemeWrapper';
import { IconNames } from '@blueprintjs/icons';
import { Button, IButtonProps } from '@blueprintjs/core';

type ThemeToggleProps = Omit<IButtonProps, 'icon'> & Omit<React.FC, 'onClick'>;

const ThemeToggle: React.FC<ThemeToggleProps> = props => {
  const [theme, toggle] = useTheme();
  const icon = theme.mode === 'light' ? IconNames.MOON : IconNames.FLASH;

  return <Button icon={icon} onClick={toggle} {...props} />;
};

export default ThemeToggle;
