(async ([_, __, envName]) => {
  const fs = require('fs');
  const path = require('path');
  const config = require('../plugin.config.js');

  const root = __dirname.replace(path.sep + 'scripts', '');

  const base = config.manifest.base;
  const env = envName === 'prod' ? config.manifest.prod : config.manifest.dev;

  const merged = (src: any, dst: any): Record<string, any> => {
    return Object.entries(src).reduce((acc, [key, value]) => {
      if (!dst[key]) {
        return { ...acc, [key]: value };
      }

      if (typeof dst[key] === 'string') {
        return { ...acc, [key]: dst[key] };
      }

      if (Array.isArray(value) && Array.isArray(dst[key])) {
        return { ...acc, [key]: [...value, ...dst[key]] };
      }

      return { ...acc, [key]: merged(src[key], dst[key]) };
    }, {});
  };

  fs.writeFileSync(`${root}\\plugin\\manifest.json`, JSON.stringify(merged(base, env)));
})(process.argv);
