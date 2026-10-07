// Workaround for https://github.com/slidevjs/slidev/issues/2761
// @comark/markdown-it (pulled in by Slidev 53) imports `markdown-it/lib/token.mjs`,
// which only exists in markdown-it 14. Its markdown-it peer otherwise resolves to
// the 15.x copy shiki needs, so give it a private markdown-it 14 dependency instead.
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === '@comark/markdown-it') {
        delete pkg.peerDependencies?.['markdown-it']
        delete pkg.peerDependenciesMeta?.['markdown-it']
        pkg.dependencies = { ...pkg.dependencies, 'markdown-it': '^14.1.0' }
      }
      return pkg
    },
  },
}
