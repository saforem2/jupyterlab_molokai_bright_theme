import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the molokai_bright extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'molokai_bright',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension molokai_bright is activated!');
    const style = 'molokai_bright/index.css';

    manager.register({
      name: 'molokai_bright',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
