"use strict";

/* global __static */

import { app, protocol, BrowserWindow, ipcMain, globalShortcut, dialog } from "electron";
import {
  createProtocol
  /* installVueDevtools */
} from "vue-cli-plugin-electron-builder/lib";
import { autoUpdater } from "electron-updater";
import path from "path";

const blockedShortcuts = [

  'CmdOrCmdOrCtrl+A',
  'CmdOrCmdOrCtrl+B',
  'CmdOrCmdOrCtrl+C',
  'CmdOrCmdOrCtrl+D',
  'CmdOrCmdOrCtrl+E',
  'CmdOrCmdOrCtrl+F',
  'CmdOrCmdOrCtrl+G',
  'CmdOrCmdOrCtrl+H',
  'CmdOrCmdOrCtrl+I',
  'CmdOrCmdOrCtrl+J',
  'CmdOrCmdOrCtrl+K',
  'CmdOrCmdOrCtrl+L',
  'CmdOrCmdOrCtrl+M',
  'CmdOrCmdOrCtrl+N',
  'CmdOrCmdOrCtrl+O',
  'CmdOrCmdOrCtrl+P',
  'CmdOrCmdOrCtrl+Q',
  'CmdOrCmdOrCtrl+R',
  'CmdOrCmdOrCtrl+S',
  'CmdOrCmdOrCtrl+T',
  'CmdOrCmdOrCtrl+U',
  'CmdOrCmdOrCtrl+V',
  'CmdOrCmdOrCtrl+W',
  'CmdOrCmdOrCtrl+X',
  'CmdOrCmdOrCtrl+Y',
  'CmdOrCmdOrCtrl+Z',

  'CmdOrCmdOrCtrl+0',
  'CmdOrCmdOrCtrl+1',
  'CmdOrCmdOrCtrl+2',
  'CmdOrCmdOrCtrl+3',
  'CmdOrCmdOrCtrl+4',
  'CmdOrCmdOrCtrl+5',
  'CmdOrCmdOrCtrl+6',
  'CmdOrCmdOrCtrl+7',
  'CmdOrCmdOrCtrl+8',
  'CmdOrCmdOrCtrl+9',

  'CmdOrCmdOrCtrl+~',
  'CmdOrCmdOrCtrl+!',
  'CmdOrCmdOrCtrl+@',
  'CmdOrCmdOrCtrl+#',
  'CmdOrCmdOrCtrl+$',

  'CmdOrCmdOrCtrl+Plus',
  'CmdOrCmdOrCtrl+Space',
  'CmdOrCmdOrCtrl+Tab',
  'CmdOrCmdOrCtrl+Capslock',
  'CmdOrCmdOrCtrl+Numlock',
  'CmdOrCmdOrCtrl+Scrollock',
  'CmdOrCmdOrCtrl+Backspace',
  'CmdOrCmdOrCtrl+Delete',
  'CmdOrCmdOrCtrl+Insert',
  'CmdOrCmdOrCtrl+Return',

  'CmdOrCmdOrCtrl+Up',
  'CmdOrCmdOrCtrl+Down',
  'CmdOrCmdOrCtrl+Left',
  'CmdOrCmdOrCtrl+Right',

  'CmdOrCmdOrCtrl+Esc',
  'CmdOrCmdOrCtrl+PageUp',
  'CmdOrCmdOrCtrl+PageDown',

  'CmdOrCmdOrCtrl+F1',
  'CmdOrCmdOrCtrl+F2',
  'CmdOrCmdOrCtrl+F3',
  'CmdOrCmdOrCtrl+F4',
  'CmdOrCmdOrCtrl+F5',
  'CmdOrCmdOrCtrl+F6',
  'CmdOrCmdOrCtrl+F7',
  'CmdOrCmdOrCtrl+F8',
  'CmdOrCmdOrCtrl+F9',
  'CmdOrCmdOrCtrl+F10',
  'CmdOrCmdOrCtrl+F11',
  'CmdOrCmdOrCtrl+F12',


  'Alt+A',
  'Alt+B',
  'Alt+C',
  'Alt+D',
  'Alt+E',
  'Alt+F',
  'Alt+G',
  'Alt+H',
  'Alt+I',
  'Alt+J',
  'Alt+K',
  'Alt+L',
  'Alt+M',
  'Alt+N',
  'Alt+O',
  'Alt+P',
  'Alt+Q',
  'Alt+R',
  'Alt+S',
  'Alt+T',
  'Alt+U',
  'Alt+V',
  'Alt+W',
  'Alt+X',
  'Alt+Y',
  'Alt+Z',

  'Alt+0',
  'Alt+1',
  'Alt+2',
  'Alt+3',
  'Alt+4',
  'Alt+5',
  'Alt+6',
  'Alt+7',
  'Alt+8',
  'Alt+9',

  'Alt+~',
  'Alt+!',
  'Alt+@',
  'Alt+#',
  'Alt+$',

  'Alt+Plus',
  'Alt+Space',
  'Alt+Tab',
  'Alt+Capslock',
  'Alt+Numlock',
  'Alt+Scrollock',
  'Alt+Backspace',
  'Alt+Delete',
  'Alt+Insert',
  'Alt+Return',

  'Alt+Up',
  'Alt+Down',
  'Alt+Left',
  'Alt+Right',

  'Alt+Esc',
  'Alt+PageUp',
  'Alt+PageDown',

  'Alt+F1',
  'Alt+F2',
  'Alt+F3',
  'Alt+F4',
  'Alt+F5',
  'Alt+F6',
  'Alt+F7',
  'Alt+F8',
  'Alt+F9',
  'Alt+F10',
  'Alt+F11',
  'Alt+F12',


  'Alt+CmdOrCmdOrCtrl+A',
  'Alt+CmdOrCmdOrCtrl+B',
  'Alt+CmdOrCmdOrCtrl+C',
  'Alt+CmdOrCmdOrCtrl+D',
  'Alt+CmdOrCmdOrCtrl+E',
  'Alt+CmdOrCmdOrCtrl+F',
  'Alt+CmdOrCmdOrCtrl+G',
  'Alt+CmdOrCmdOrCtrl+H',
  'Alt+CmdOrCmdOrCtrl+I',
  'Alt+CmdOrCmdOrCtrl+J',
  'Alt+CmdOrCmdOrCtrl+K',
  'Alt+CmdOrCmdOrCtrl+L',
  'Alt+CmdOrCmdOrCtrl+M',
  'Alt+CmdOrCmdOrCtrl+N',
  'Alt+CmdOrCmdOrCtrl+O',
  'Alt+CmdOrCmdOrCtrl+P',
  'Alt+CmdOrCmdOrCtrl+Q',
  'Alt+CmdOrCmdOrCtrl+R',
  'Alt+CmdOrCmdOrCtrl+S',
  'Alt+CmdOrCmdOrCtrl+T',
  'Alt+CmdOrCmdOrCtrl+U',
  'Alt+CmdOrCmdOrCtrl+V',
  'Alt+CmdOrCmdOrCtrl+W',
  'Alt+CmdOrCmdOrCtrl+X',
  'Alt+CmdOrCmdOrCtrl+Y',
  'Alt+CmdOrCmdOrCtrl+Z',

  'Alt+CmdOrCmdOrCtrl+0',
  'Alt+CmdOrCmdOrCtrl+1',
  'Alt+CmdOrCmdOrCtrl+2',
  'Alt+CmdOrCmdOrCtrl+3',
  'Alt+CmdOrCmdOrCtrl+4',
  'Alt+CmdOrCmdOrCtrl+5',
  'Alt+CmdOrCmdOrCtrl+6',
  'Alt+CmdOrCmdOrCtrl+7',
  'Alt+CmdOrCmdOrCtrl+8',
  'Alt+CmdOrCmdOrCtrl+9',

  'Alt+CmdOrCmdOrCtrl+~',
  'Alt+CmdOrCmdOrCtrl+!',
  'Alt+CmdOrCmdOrCtrl+@',
  'Alt+CmdOrCmdOrCtrl+#',
  'Alt+CmdOrCmdOrCtrl+$',

  'Alt+CmdOrCmdOrCtrl+Plus',
  'Alt+CmdOrCmdOrCtrl+Space',
  'Alt+CmdOrCmdOrCtrl+Tab',
  'Alt+CmdOrCmdOrCtrl+Capslock',
  'Alt+CmdOrCmdOrCtrl+Numlock',
  'Alt+CmdOrCmdOrCtrl+Scrollock',
  'Alt+CmdOrCmdOrCtrl+Backspace',
  'Alt+CmdOrCmdOrCtrl+Delete',
  'Alt+CmdOrCmdOrCtrl+Insert',
  'Alt+CmdOrCmdOrCtrl+Return',

  'Alt+CmdOrCmdOrCtrl+Up',
  'Alt+CmdOrCmdOrCtrl+Down',
  'Alt+CmdOrCmdOrCtrl+Left',
  'Alt+CmdOrCmdOrCtrl+Right',

  'Alt+CmdOrCmdOrCtrl+Esc',
  'Alt+CmdOrCmdOrCtrl+PageUp',
  'Alt+CmdOrCmdOrCtrl+PageDown',

  'Alt+CmdOrCmdOrCtrl+F1',
  'Alt+CmdOrCmdOrCtrl+F2',
  'Alt+CmdOrCmdOrCtrl+F3',
  'Alt+CmdOrCmdOrCtrl+F4',
  'Alt+CmdOrCmdOrCtrl+F5',
  'Alt+CmdOrCmdOrCtrl+F6',
  'Alt+CmdOrCmdOrCtrl+F7',
  'Alt+CmdOrCmdOrCtrl+F8',
  'Alt+CmdOrCmdOrCtrl+F9',
  'Alt+CmdOrCmdOrCtrl+F10',
  'Alt+CmdOrCmdOrCtrl+F11',
  'Alt+CmdOrCmdOrCtrl+F12',

  'Option+A',
  'Option+B',
  'Option+C',
  'Option+D',
  'Option+E',
  'Option+F',
  'Option+G',
  'Option+H',
  'Option+I',
  'Option+J',
  'Option+K',
  'Option+L',
  'Option+M',
  'Option+N',
  'Option+O',
  'Option+P',
  'Option+Q',
  'Option+R',
  'Option+S',
  'Option+T',
  'Option+U',
  'Option+V',
  'Option+W',
  'Option+X',
  'Option+Y',
  'Option+Z',

  'Option+0',
  'Option+1',
  'Option+2',
  'Option+3',
  'Option+4',
  'Option+5',
  'Option+6',
  'Option+7',
  'Option+8',
  'Option+9',

  'Option+~',
  'Option+!',
  'Option+@',
  'Option+#',
  'Option+$',

  'Option+Plus',
  'Option+Space',
  'Option+Tab',
  'Option+Capslock',
  'Option+Numlock',
  'Option+Scrollock',
  'Option+Backspace',
  'Option+Delete',
  'Option+Insert',
  'Option+Return',

  'Option+Up',
  'Option+Down',
  'Option+Left',
  'Option+Right',

  'Option+Esc',
  'Option+PageUp',
  'Option+PageDown',

  'Option+F1',
  'Option+F2',
  'Option+F3',
  'Option+F4',
  'Option+F5',
  'Option+F6',
  'Option+F7',
  'Option+F8',
  'Option+F9',
  'Option+F10',
  'Option+F11',
  'Option+F12',

  'AltGr+A',
  'AltGr+B',
  'AltGr+C',
  'AltGr+D',
  'AltGr+E',
  'AltGr+F',
  'AltGr+G',
  'AltGr+H',
  'AltGr+I',
  'AltGr+J',
  'AltGr+K',
  'AltGr+L',
  'AltGr+M',
  'AltGr+N',
  'AltGr+O',
  'AltGr+P',
  'AltGr+Q',
  'AltGr+R',
  'AltGr+S',
  'AltGr+T',
  'AltGr+U',
  'AltGr+V',
  'AltGr+W',
  'AltGr+X',
  'AltGr+Y',
  'AltGr+Z',

  'AltGr+0',
  'AltGr+1',
  'AltGr+2',
  'AltGr+3',
  'AltGr+4',
  'AltGr+5',
  'AltGr+6',
  'AltGr+7',
  'AltGr+8',
  'AltGr+9',

  'AltGr+~',
  'AltGr+!',
  'AltGr+@',
  'AltGr+#',
  'AltGr+$',

  'AltGr+Plus',
  'AltGr+Space',
  'AltGr+Tab',
  'AltGr+Capslock',
  'AltGr+Numlock',
  'AltGr+Scrollock',
  'AltGr+Backspace',
  'AltGr+Delete',
  'AltGr+Insert',
  'AltGr+Return',

  'AltGr+Up',
  'AltGr+Down',
  'AltGr+Left',
  'AltGr+Right',

  'AltGr+Esc',
  'AltGr+PageUp',
  'AltGr+PageDown',

  'AltGr+F1',
  'AltGr+F2',
  'AltGr+F3',
  'AltGr+F4',
  'AltGr+F5',
  'AltGr+F6',
  'AltGr+F7',
  'AltGr+F8',
  'AltGr+F9',
  'AltGr+F10',
  'AltGr+F11',
  'AltGr+F12',

  'Shift+Plus',
  'Shift+Space',
  'Shift+Tab',
  'Shift+Capslock',
  'Shift+Numlock',
  'Shift+Scrollock',
  'Shift+Backspace',
  'Shift+Delete',
  'Shift+Insert',
  // 'Shift+Return',

  'Shift+Up',
  'Shift+Down',
  'Shift+Left',
  'Shift+Right',

  'Shift+Esc',
  'Shift+PageUp',
  'Shift+PageDown',

  'Shift+F1',
  'Shift+F2',
  'Shift+F3',
  'Shift+F4',
  'Shift+F5',
  'Shift+F6',
  'Shift+F7',
  'Shift+F8',
  'Shift+F9',
  'Shift+F10',
  'Shift+F11',
  'Shift+F12',

  'Super+A',
  'Super+B',
  'Super+C',
  'Super+D',
  'Super+E',
  'Super+F',
  'Super+G',
  'Super+H',
  'Super+I',
  'Super+J',
  'Super+K',
  'Super+L',
  'Super+M',
  'Super+N',
  'Super+O',
  'Super+P',
  'Super+Q',
  'Super+R',
  'Super+S',
  'Super+T',
  'Super+U',
  'Super+V',
  'Super+W',
  'Super+X',
  'Super+Y',
  'Super+Z',

  'Super+0',
  'Super+1',
  'Super+2',
  'Super+3',
  'Super+4',
  'Super+5',
  'Super+6',
  'Super+7',
  'Super+8',
  'Super+9',

  'Super+~',
  'Super+!',
  'Super+@',
  'Super+#',
  'Super+$',

  'Super+Plus',
  'Super+Space',
  'Super+Tab',
  'Super+Capslock',
  'Super+Numlock',
  'Super+Scrollock',
  'Super+Backspace',
  'Super+Delete',
  'Super+Insert',
  'Super+Return',

  'Super+Up',
  'Super+Down',
  'Super+Left',
  'Super+Right',

  'Super+Esc',
  'Super+PageUp',
  'Super+PageDown',

  'Super+F1',
  'Super+F2',
  'Super+F3',
  'Super+F4',
  'Super+F5',
  'Super+F6',
  'Super+F7',
  'Super+F8',
  'Super+F9',
  'Super+F10',
  'Super+F11',
  'Super+F12',

  'CmdOrCtrl+Shift+A',
  'CmdOrCtrl+Shift+B',
  'CmdOrCtrl+Shift+C',
  'CmdOrCtrl+Shift+D',
  'CmdOrCtrl+Shift+E',
  'CmdOrCtrl+Shift+F',
  'CmdOrCtrl+Shift+G',
  'CmdOrCtrl+Shift+H',
  'CmdOrCtrl+Shift+I',
  'CmdOrCtrl+Shift+J',
  'CmdOrCtrl+Shift+K',
  'CmdOrCtrl+Shift+L',
  'CmdOrCtrl+Shift+M',
  'CmdOrCtrl+Shift+N',
  'CmdOrCtrl+Shift+O',
  'CmdOrCtrl+Shift+P',
  'CmdOrCtrl+Shift+Q',
  'CmdOrCtrl+Shift+R',
  'CmdOrCtrl+Shift+S',
  'CmdOrCtrl+Shift+T',
  'CmdOrCtrl+Shift+U',
  'CmdOrCtrl+Shift+V',
  'CmdOrCtrl+Shift+W',
  'CmdOrCtrl+Shift+X',
  'CmdOrCtrl+Shift+Y',
  'CmdOrCtrl+Shift+Z',

  'CmdOrCtrl+Shift+0',
  'CmdOrCtrl+Shift+1',
  'CmdOrCtrl+Shift+2',
  'CmdOrCtrl+Shift+3',
  'CmdOrCtrl+Shift+4',
  'CmdOrCtrl+Shift+5',
  'CmdOrCtrl+Shift+6',
  'CmdOrCtrl+Shift+7',
  'CmdOrCtrl+Shift+8',
  'CmdOrCtrl+Shift+9',

  'CmdOrCtrl+Shift+~',
  'CmdOrCtrl+Shift+!',
  'CmdOrCtrl+Shift+@',
  'CmdOrCtrl+Shift+#',
  'CmdOrCtrl+Shift+$',

  'CmdOrCtrl+Shift+Plus',
  'CmdOrCtrl+Shift+Space',
  'CmdOrCtrl+Shift+Tab',
  'CmdOrCtrl+Shift+Capslock',
  'CmdOrCtrl+Shift+Numlock',
  'CmdOrCtrl+Shift+Scrollock',
  'CmdOrCtrl+Shift+Backspace',
  'CmdOrCtrl+Shift+Delete',
  'CmdOrCtrl+Shift+Insert',
  'CmdOrCtrl+Shift+Return',

  'CmdOrCtrl+Shift+Up',
  'CmdOrCtrl+Shift+Down',
  'CmdOrCtrl+Shift+Left',
  'CmdOrCtrl+Shift+Right',

  'CmdOrCtrl+Shift+Esc',
  'CmdOrCtrl+Shift+PageUp',
  'CmdOrCtrl+Shift+PageDown',

  'CmdOrCtrl+Shift+F1',
  'CmdOrCtrl+Shift+F2',
  'CmdOrCtrl+Shift+F3',
  'CmdOrCtrl+Shift+F4',
  'CmdOrCtrl+Shift+F5',
  'CmdOrCtrl+Shift+F6',
  'CmdOrCtrl+Shift+F7',
  'CmdOrCtrl+Shift+F8',
  'CmdOrCtrl+Shift+F9',
  'CmdOrCtrl+Shift+F10',
  'CmdOrCtrl+Shift+F11',
  'CmdOrCtrl+Shift+F12',

  'Alt+CmdOrCmdOrCtrl+A',
  'Alt+CmdOrCmdOrCtrl+B',
  'Alt+CmdOrCmdOrCtrl+C',
  'Alt+CmdOrCmdOrCtrl+D',
  'Alt+CmdOrCmdOrCtrl+E',
  'Alt+CmdOrCmdOrCtrl+F',
  'Alt+CmdOrCmdOrCtrl+G',
  'Alt+CmdOrCmdOrCtrl+H',
  'Alt+CmdOrCmdOrCtrl+I',
  'Alt+CmdOrCmdOrCtrl+J',
  'Alt+CmdOrCmdOrCtrl+K',
  'Alt+CmdOrCmdOrCtrl+L',
  'Alt+CmdOrCmdOrCtrl+M',
  'Alt+CmdOrCmdOrCtrl+N',
  'Alt+CmdOrCmdOrCtrl+O',
  'Alt+CmdOrCmdOrCtrl+P',
  'Alt+CmdOrCmdOrCtrl+Q',
  'Alt+CmdOrCmdOrCtrl+R',
  'Alt+CmdOrCmdOrCtrl+S',
  'Alt+CmdOrCmdOrCtrl+T',
  'Alt+CmdOrCmdOrCtrl+U',
  'Alt+CmdOrCmdOrCtrl+V',
  'Alt+CmdOrCmdOrCtrl+W',
  'Alt+CmdOrCmdOrCtrl+X',
  'Alt+CmdOrCmdOrCtrl+Y',
  'Alt+CmdOrCmdOrCtrl+Z',

  'Alt+CmdOrCmdOrCtrl+0',
  'Alt+CmdOrCmdOrCtrl+1',
  'Alt+CmdOrCmdOrCtrl+2',
  'Alt+CmdOrCmdOrCtrl+3',
  'Alt+CmdOrCmdOrCtrl+4',
  'Alt+CmdOrCmdOrCtrl+5',
  'Alt+CmdOrCmdOrCtrl+6',
  'Alt+CmdOrCmdOrCtrl+7',
  'Alt+CmdOrCmdOrCtrl+8',
  'Alt+CmdOrCmdOrCtrl+9',

  'Alt+CmdOrCmdOrCtrl+~',
  'Alt+CmdOrCmdOrCtrl+!',
  'Alt+CmdOrCmdOrCtrl+@',
  'Alt+CmdOrCmdOrCtrl+#',
  'Alt+CmdOrCmdOrCtrl+$',

  'Alt+CmdOrCmdOrCtrl+Plus',
  'Alt+CmdOrCmdOrCtrl+Space',
  'Alt+CmdOrCmdOrCtrl+Tab',
  'Alt+CmdOrCmdOrCtrl+Capslock',
  'Alt+CmdOrCmdOrCtrl+Numlock',
  'Alt+CmdOrCmdOrCtrl+Scrollock',
  'Alt+CmdOrCmdOrCtrl+Backspace',
  'Alt+CmdOrCmdOrCtrl+Delete',
  'Alt+CmdOrCmdOrCtrl+Insert',
  'Alt+CmdOrCmdOrCtrl+Return',

  'Alt+CmdOrCmdOrCtrl+Up',
  'Alt+CmdOrCmdOrCtrl+Down',
  'Alt+CmdOrCmdOrCtrl+Left',
  'Alt+CmdOrCmdOrCtrl+Right',

  'Alt+CmdOrCmdOrCtrl+Esc',
  'Alt+CmdOrCmdOrCtrl+PageUp',
  'Alt+CmdOrCmdOrCtrl+PageDown',

  'Alt+CmdOrCmdOrCtrl+F1',
  'Alt+CmdOrCmdOrCtrl+F2',
  'Alt+CmdOrCmdOrCtrl+F3',
  'Alt+CmdOrCmdOrCtrl+F4',
  'Alt+CmdOrCmdOrCtrl+F5',
  'Alt+CmdOrCmdOrCtrl+F6',
  'Alt+CmdOrCmdOrCtrl+F7',
  'Alt+CmdOrCmdOrCtrl+F8',
  'Alt+CmdOrCmdOrCtrl+F9',
  'Alt+CmdOrCmdOrCtrl+F10',
  'Alt+CmdOrCmdOrCtrl+F11',
  'Alt+CmdOrCmdOrCtrl+F12',

  'Alt+CmdOrCmdOrCtrl+Shift+A',
  'Alt+CmdOrCmdOrCtrl+Shift+B',
  'Alt+CmdOrCmdOrCtrl+Shift+C',
  'Alt+CmdOrCmdOrCtrl+Shift+D',
  'Alt+CmdOrCmdOrCtrl+Shift+E',
  'Alt+CmdOrCmdOrCtrl+Shift+F',
  'Alt+CmdOrCmdOrCtrl+Shift+G',
  'Alt+CmdOrCmdOrCtrl+Shift+H',
  'Alt+CmdOrCmdOrCtrl+Shift+I',
  'Alt+CmdOrCmdOrCtrl+Shift+J',
  'Alt+CmdOrCmdOrCtrl+Shift+K',
  'Alt+CmdOrCmdOrCtrl+Shift+L',
  'Alt+CmdOrCmdOrCtrl+Shift+M',
  'Alt+CmdOrCmdOrCtrl+Shift+N',
  'Alt+CmdOrCmdOrCtrl+Shift+O',
  'Alt+CmdOrCmdOrCtrl+Shift+P',
  'Alt+CmdOrCmdOrCtrl+Shift+Q',
  'Alt+CmdOrCmdOrCtrl+Shift+R',
  'Alt+CmdOrCmdOrCtrl+Shift+S',
  'Alt+CmdOrCmdOrCtrl+Shift+T',
  'Alt+CmdOrCmdOrCtrl+Shift+U',
  'Alt+CmdOrCmdOrCtrl+Shift+V',
  'Alt+CmdOrCmdOrCtrl+Shift+W',
  'Alt+CmdOrCmdOrCtrl+Shift+X',
  'Alt+CmdOrCmdOrCtrl+Shift+Y',
  'Alt+CmdOrCmdOrCtrl+Shift+Z',

  'Alt+CmdOrCmdOrCtrl+Shift+0',
  'Alt+CmdOrCmdOrCtrl+Shift+1',
  'Alt+CmdOrCmdOrCtrl+Shift+2',
  'Alt+CmdOrCmdOrCtrl+Shift+3',
  'Alt+CmdOrCmdOrCtrl+Shift+4',
  'Alt+CmdOrCmdOrCtrl+Shift+5',
  'Alt+CmdOrCmdOrCtrl+Shift+6',
  'Alt+CmdOrCmdOrCtrl+Shift+7',
  'Alt+CmdOrCmdOrCtrl+Shift+8',
  'Alt+CmdOrCmdOrCtrl+Shift+9',

  'Alt+CmdOrCmdOrCtrl+Shift+~',
  'Alt+CmdOrCmdOrCtrl+Shift+!',
  'Alt+CmdOrCmdOrCtrl+Shift+@',
  'Alt+CmdOrCmdOrCtrl+Shift+#',
  'Alt+CmdOrCmdOrCtrl+Shift+$',

  'Alt+CmdOrCmdOrCtrl+Shift+Plus',
  'Alt+CmdOrCmdOrCtrl+Shift+Space',
  'Alt+CmdOrCmdOrCtrl+Shift+Tab',
  'Alt+CmdOrCmdOrCtrl+Shift+Capslock',
  'Alt+CmdOrCmdOrCtrl+Shift+Numlock',
  'Alt+CmdOrCmdOrCtrl+Shift+Scrollock',
  'Alt+CmdOrCmdOrCtrl+Shift+Backspace',
  'Alt+CmdOrCmdOrCtrl+Shift+Delete',
  'Alt+CmdOrCmdOrCtrl+Shift+Insert',
  'Alt+CmdOrCmdOrCtrl+Shift+Return',

  'Alt+CmdOrCmdOrCtrl+Shift+Up',
  'Alt+CmdOrCmdOrCtrl+Shift+Down',
  'Alt+CmdOrCmdOrCtrl+Shift+Left',
  'Alt+CmdOrCmdOrCtrl+Shift+Right',

  'Alt+CmdOrCmdOrCtrl+Shift+Esc',
  'Alt+CmdOrCmdOrCtrl+Shift+PageUp',
  'Alt+CmdOrCmdOrCtrl+Shift+PageDown',

  'Alt+CmdOrCmdOrCtrl+Shift+F1',
  'Alt+CmdOrCmdOrCtrl+Shift+F2',
  'Alt+CmdOrCmdOrCtrl+Shift+F3',
  'Alt+CmdOrCmdOrCtrl+Shift+F4',
  'Alt+CmdOrCmdOrCtrl+Shift+F5',
  'Alt+CmdOrCmdOrCtrl+Shift+F6',
  'Alt+CmdOrCmdOrCtrl+Shift+F7',
  'Alt+CmdOrCmdOrCtrl+Shift+F8',
  'Alt+CmdOrCmdOrCtrl+Shift+F9',
  'Alt+CmdOrCmdOrCtrl+Shift+F10',
  'Alt+CmdOrCmdOrCtrl+Shift+F11',
  'Alt+CmdOrCmdOrCtrl+Shift+F12'
]

const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    icon: path.join(__static, "icon.png")
  });

  win.maximize();
  win.setMenuBarVisibility(false);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
    autoUpdater.checkForUpdatesAndNotify();
  }

  ipcMain.on("session-started", () => {
    win.setKiosk(true);
    win.setAlwaysOnTop(true);
    win.setMenuBarVisibility(false);

    globalShortcut.registerAll(blockedShortcuts, () => {
      dialog.showErrorBox("Invalid Operation Detected!",
      "You have performed some invalid operation. Please do not repeat or the test will end automatically!")
    })

  });

  ipcMain.on("session-ended", () => {
    win.setKiosk(false);
    win.setAlwaysOnTop(false);
    win.setMenuBarVisibility(false);
    globalShortcut.unregisterAll();
  });

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
