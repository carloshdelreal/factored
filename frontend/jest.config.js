module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  setupFiles: ['jest-localstorage-mock'],
  testPathIgnorePatterns: ['cypress', 'fixtures', 'storyShots'],
  transform: { '^.+\\.(js|ts)$': 'babel-jest' },
  transformIgnorePatterns: [],
};
