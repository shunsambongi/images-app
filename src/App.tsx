import React from 'react';
import MainContent from './components/MainContent';
import TabBar from './components/TabBar';
import AddressBar from './components/AddressBar';

const App: React.FC = () => {
  return (
    <div>
      <TabBar />
      <AddressBar />
      <MainContent>hello</MainContent>
    </div>
  );
};

export default App;
