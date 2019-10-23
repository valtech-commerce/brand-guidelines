//--------------------------------------------------------
//-- Styleguide
//--------------------------------------------------------
import pkgDir from 'pkg-dir';
import fss    from '@absolunet/fss';


const styleguide = fss.readJson(`${pkgDir.sync(__dirname)}/dist/styleguide.json`);


export { styleguide };
