const { ipcRenderer } = require('electron')

const { FETCH_DATA_FROM_STORAGE, SAVE_DATA_IN_STORAGE} = require('../main/constant')

export function loadDataFromStorage() {
    ipcRenderer.send(FETCH_DATA_FROM_STORAGE, 'items')
}

export function saveDataInStorage(item: any) {
    ipcRenderer.send(SAVE_DATA_IN_STORAGE, 'items')
}