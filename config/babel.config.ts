export const babelConfig = {
  include: /\.(jsx|tsx)$/,
  babel: {
    plugins: ['babel-plugin-styled-components'],
    babelrc: false,
    configFile: false,
  },
};
