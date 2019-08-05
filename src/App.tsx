import React from 'react';
import { Grommet } from 'grommet';
import { observer, Provider } from 'mobx-react';
import {ThemeStore, ThemeStoreName} from "./stores/ThemeStore";
import {ThemeEditor} from "./components/ThemeEditor";
import {observable} from "mobx";

const ObserverGrommet = observer(Grommet);

const stores : any = {
};

stores[ThemeStoreName] = observable(new ThemeStore());

const App: React.FC = () => {
  return (
    <ObserverGrommet theme={stores.theme}>
      <Provider {...stores}>
          <ThemeEditor></ThemeEditor>
      </Provider>
    </ObserverGrommet>
  );
};

export default App;
