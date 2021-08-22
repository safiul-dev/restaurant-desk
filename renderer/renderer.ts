const { ipcRenderer } = require('electron')


export function loadDataFromStorage() {
    ipcRenderer.send("FETCH_DATA_FROM_STORAGE", 'items')
    console.log("Saving data in storage "+ "item")
}

export function saveDataInStorage(item: any) {
    console.log("Saving data in storage "+item)
    ipcRenderer.send("SAVE_DATA_IN_STORAGE",item)
}