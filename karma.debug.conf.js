module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            'src/**/*.ts' // *.tsx for React Jsx
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript' // *.tsx for React Jsx
        },
        reporters: ['progress', 'karma-typescript'],
        karmaTypescriptConfig: {
            compilerOptions: {
                lib: ['es6', 'dom']
            }
        },
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333']
            }
        },
        browsers: ['ChromeDebugging']
    });
};
