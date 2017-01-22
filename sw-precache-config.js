module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
        'build/*.html',
        'build/manifest.json',
        'build/static/**/!(*map*)'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js',
    runtimeCaching: [
        {
            urlPattern: /^https?:\/\/apis\.google\.com/,
            handler: 'cacheFirst'
        },
        {
            urlPattern: /^https?:\/\/api\.tfl\.gov\.uk/,
            handler: 'cacheFirst'
        },
        {
            urlPattern: /^https?:\/\/transportapi\.com/,
            handler: 'cacheFirst'
        },
        {
            urlPattern: /^https?:\/\/api\.brfares\.com/,
            handler: 'cacheFirst'
        }
    ]
};