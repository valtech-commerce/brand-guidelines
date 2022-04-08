//--------------------------------------------------------
//-- Brand guidelines
//--------------------------------------------------------
import pkgDir from 'pkg-dir';
import fss    from '@absolunet/fss';


const guidelines = fss.readJson(`${pkgDir.sync(__dirname)}/dist/guidelines.json`);


export { guidelines };
