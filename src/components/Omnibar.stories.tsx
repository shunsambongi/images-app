import React, { MouseEvent, KeyboardEvent } from 'react';
import { storiesOf } from '@storybook/react';
import Omnibar from './Omnibar';
import { Classes } from '@blueprintjs/core';

storiesOf('Omnibar', module)
  .addDecorator(storyFn => <div style={{ padding: '10px' }}>{storyFn()}</div>)
  .add('default', () => <Omnibar />)
  .add('dark mode', () => (
    <div className={Classes.DARK}>
      <Omnibar />
    </div>
  ));
