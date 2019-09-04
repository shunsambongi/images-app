import React, { useState } from 'react';
import DirectoryInput from './components/DirectoryInput';
import fs from 'fs';
import path from 'path';
import url from 'url';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const ImageContainer = styled.div`
  height: 100%;
  background: 'white';
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const App: React.FC = () => {
  const [pngs, setPngs] = useState<string[]>([]);

  const handleDirectorySelected = async (directory: string) => {
    const files = await fs.promises.readdir(directory, { withFileTypes: true });
    const pngs = files
      .filter(file => path.extname(file.name) === '.png')
      .map(png => path.join(directory, png.name))
      .map(png =>
        url.format({ pathname: png, protocol: 'file', slashes: true }),
      );
    setPngs(pngs);
  };

  return (
    <Container>
      <DirectoryInput onDirectorySelected={handleDirectorySelected} />
      <MainContent>
        {pngs.map(png => {
          return (
            <ImageContainer key={png}>
              <Image src={png} alt="png" />
            </ImageContainer>
          );
        })}
      </MainContent>
    </Container>
  );
};

export default App;
