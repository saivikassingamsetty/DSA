
var FileSystem = function () {
    this.fs = {};
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
    let list = path === "/" ? [] : path.slice(1).split('/');
    let currDirectory = this.fs;

    for (let folderOrFile of list) {
        console.log(list)
        if (folderOrFile in currDirectory) currDirectory = currDirectory[folderOrFile]
        else return []
    }   

    // if file
    if (typeof currDirectory == 'string') return [list[list.length - 1]];

    // if folder
    return Object.keys(currDirectory).sort((a, b) => a.localeCompare(b));
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
    let list = path === "/" ? [] : path.slice(1).split('/');
    let currDirectory = this.fs;
    for (let folder of list) {
        if (!(folder in currDirectory)) {
            currDirectory[folder] = {};
        }

        currDirectory = currDirectory[folder];
    }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
    let list = filePath === "/" ? [] : filePath.slice(1).split('/');
    let currDirectory = this.fs;
    let file = list.pop();
    for (let folder of list) {
        if (!(folder in currDirectory)) {
            currDirectory[folder] = {};
        }

        currDirectory = currDirectory[folder];
    }

    if (!(file in currDirectory)) currDirectory[file] = '';
    currDirectory[file] += content;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
    let list = filePath === "/" ? [] : filePath.slice(1).split('/');
    let currDirectory = this.fs;
    let file = list.pop();
    for (let folder of list) {
        if (!(folder in currDirectory)) return;
        currDirectory = currDirectory[folder];
    }

    return (typeof currDirectory[file] == 'string') ? currDirectory[file] : null;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */