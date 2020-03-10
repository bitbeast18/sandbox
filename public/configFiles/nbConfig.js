const {ipcRenderer} = require('electron');

ipcRenderer.on('removeElement', (event, id) => {
    document.getElementById(id).style.display = 'none';
});

ipcRenderer.on('removeButton', (ev, query)=>{
    document.querySelector(query).style.display = 'none';
});

ipcRenderer.on('saveNotebook', () => {
    document.getElementById('save-notbook').childNodes[0].click();
})