import React from "react";
import {View} from "react-native";
import ChatDisplay from './displays/ChatDisplay.tsx';

function App(): React.ReactElement {
  return (
      <>
        <View style={{ flex: 1, padding: 10 }}>
          <ChatDisplay />
        </View>
      </>
  );
}

export default App;
