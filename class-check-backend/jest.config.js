module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.entity.ts',
    '!**/*.module.ts',
    '!main.ts',
  ],
  coverageDirectory: '../test/coverage',
  testEnvironment: 'node',
  clearMocks: true,
};
