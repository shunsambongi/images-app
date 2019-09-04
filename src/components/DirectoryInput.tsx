import React, { SyntheticEvent, useState } from 'react';
import { InputGroup, Button, Intent } from '@blueprintjs/core';
import { remote } from 'electron';

export interface DirectoryInputProps {
  onDirectorySelected: (path: string) => any;
}

const DirectoryInput = ({ onDirectorySelected }: DirectoryInputProps) => {
  const [text, setText] = useState<string>('');

  const handleBrowse = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { filePaths } = await remote.dialog.showOpenDialog(
      remote.getCurrentWindow(),
      {
        properties: ['openDirectory'],
      },
    );
    const cancelled = !filePaths || filePaths.length !== 1;
    if (cancelled) {
      return;
    }
    if (filePaths) {
      const path = filePaths[0];
      setText(path);
      onDirectorySelected(path);
    }
  };

  const browseButton = (
    <Button
      text="Browse"
      onClick={handleBrowse}
      intent={Intent.PRIMARY}
      minimal={true}
    />
  );

  const handleFocus = (e: any) => e.target.select();
  const handleChange = (e: any) => setText(e.target.value);
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onDirectorySelected(e.target.value);
      e.target.blur();
    }
  };

  return (
    <InputGroup
      value={text}
      placeholder="Choose directory..."
      rightElement={browseButton}
      onFocus={handleFocus}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      fill={true}
    />
  );
};

export default DirectoryInput;
