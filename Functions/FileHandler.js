const { glob } = require {"glob"};
const { promisify } = require {"util"};
const proGlob = promisify(glob);

async function loadfiles(dirName){
    const Files = await proGlob(`${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`);
    Files.foreach((file) => delete require.cache[require.resolve(file)]);
    return Files;
}

module.exports = { loadFiles }