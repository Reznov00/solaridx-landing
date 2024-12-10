import React, { Suspense, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from 'src/navigation';
import { SplashScreen } from 'src/screens';

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1730);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {loading ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={<SplashScreen />}>
          <RootNavigator />
        </Suspense>
      )}
    </GestureHandlerRootView>
  );
}

export default App;
