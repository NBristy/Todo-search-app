module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(jsx?)$': 'babel-jest',
    '\\.css$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './jest.setup.js']
};
