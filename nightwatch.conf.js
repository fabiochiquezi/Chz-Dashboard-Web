module.exports = {
    src_folders: ['__e2e__'],
    filter: '**/*.e2e.js',
    page_objects_path: ['__e2e__/utils'],

    webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
        timeout_options: {
            timeout: 10000,
            retry_attempts: 0
        }
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: '__e2e__/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            }
        }
    }
}
