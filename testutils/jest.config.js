srcjs = `${__dirname}/src/js`

module.exports = {
    // rootDir: "../",
    roots: ["test/js/"],
    verbose: true,
    testURL: "http://localhost/",
    transform: {
        ".js$": `${srcjs}/transform.js`,
        ".html$": "html-loader-jest"
    },
    transformIgnorePatterns: ["/node_modules/(?!lit-html).+\\.js"],
    automock: false,
    setupFiles: [`${srcjs}/beforeEachSpec.js`],
    reporters: ["default", `${srcjs}/reporter.js`],
    globalSetup: `${srcjs}/globalSetup.js`,
    globalTeardown: `${srcjs}/globalTeardown.js`
};
