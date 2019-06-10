import React from 'react';
import { Grommet } from 'grommet';
import { observer, Provider } from 'mobx-react';
import {ThemeStore, ThemeStoreName} from "./stores/ThemeStore";
import {ThemeEditor} from "./components/ThemeEditor";

const ObserverGrommet = observer(Grommet);

const stores : any = {
};

stores[ThemeStoreName] = new ThemeStore();

const App: React.FC = () => {
  return (
    <ObserverGrommet plain>
      <Provider {...stores}>
          <ThemeEditor></ThemeEditor>
      </Provider>
    </ObserverGrommet>
  );
}

export default App;
