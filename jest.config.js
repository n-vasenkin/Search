module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  roots: ['./src', './test'],
  setupTestFrameworkScriptFile: './test/setupEnzyme.ts',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
};
