import { Menu } from 'electron';

const menuTemplate =   [
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Copy',
            accelerator: 'CommandOrControl+C',
            role: 'copy',
          },
          {
            label: 'Paste',
            accelerator: 'CommandOrControl+V',
            role: 'paste',
          },
        ]
      }
    ];

  module.exports = Menu.buildFromTemplate(menuTemplate);