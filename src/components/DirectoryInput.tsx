import React, { SyntheticEvent, useState } from 'react';
import { FileInput, InputGroup } from '@blueprintjs/core';
import { remote } from 'electron';

interface DirectoryInputProps {
  onDirectorySelected: (path: string) => any;
}

const DirectoryInput: React.FC<DirectoryInputProps> = ({
  onDirectorySelected,
}) => {
  const [text, setText] = useState<string>('Choose directory...');
  const handleClick = async (e: SyntheticEvent) => {
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

  return <FileInput text={text} onClick={handleClick} fill={true} />;
};

export default DirectoryInput;
