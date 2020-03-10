/* global __static */

import path from 'path';

class ConfigManager{

    constructor(){
        this.configDir = path.resolve(__static, 'configFiles');
    }


    getNotebookPreload(){
        return 'file://' + path.resolve(this.configDir, 'nbConfig.js');
    }

}

export default new ConfigManager();