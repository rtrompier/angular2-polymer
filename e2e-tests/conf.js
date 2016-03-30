exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['dashboard/dashboard.js'],
    baseUrl: 'http://localhost:3000',
    useAllAngular2AppRoots: true
};