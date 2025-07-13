import AppNavigator from '@navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { PersistGateWrapper } from '@/components/PersistGateWrapper/PersistGateWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGateWrapper>
        <AppNavigator />
      </PersistGateWrapper>
    </Provider>
  );
}
