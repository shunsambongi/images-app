import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import url from 'url';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { Classes, Tree, ITreeNode } from '@blueprintjs/core';

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Sidenav = styled(Content)`
  flex: none;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  padding: 20px;
`;

const App: React.FC = () => {
  const [pngs, setPngs] = useState<string[]>([]);
  const [directory, setDirectory] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDirectorySelected = async (directory: string) => {
    const files = await fs.promises.readdir(directory, { withFileTypes: true });
    const pngs = files
      .filter(file => path.extname(file.name) === '.png')
      .map(png => png.name);
    setPngs(pngs);
    setDirectory(directory);
  };

  const theme = darkMode ? Classes.DARK : undefined;

  return (
    <Container className={theme}>
      <Navbar
        onDirectorySelected={handleDirectorySelected}
        darkMode={darkMode}
        onDarkModeChanged={setDarkMode}
      />
      <MainContainer>
        <Sidenav>
          <Tree
            onNodeClick={(nodeData: ITreeNode) => {
              const loc = document.location.toString().split('#')[0];
              document.location.href = loc + `#chart-${nodeData.id}`;
            }}
            contents={pngs.map((png, i) => ({
              id: i,
              label: png,
              hasCaret: false,
              icon: 'media',
            }))}
          />
        </Sidenav>
        <Content>
          {pngs.map((png, i) => {
            const uri = url.format({
              pathname: path.join(directory, png),
              protocol: 'file',
              slashes: true,
            });
            return <Image id={`chart-${i}`} key={png} src={uri} alt="chart" />;
          })}
        </Content>
      </MainContainer>
    </Container>
  );
};

export default App;
