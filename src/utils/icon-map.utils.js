const fileList = require.context('../icons', true, /[\s\S]*$/);

const iconMap = {};
fileList.keys().forEach((x) => {
  const filename = x.replace('./', '');
  const iconName = filename.replace('.js', '');

  // eslint-disable-next-line global-require, import/no-dynamic-require
  iconMap[iconName] = require(`../icons/${filename}`).default;
});

export default iconMap;
