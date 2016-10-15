module.exports = {
    module: {
        name: 'pipCssFrameWork',
        styles: 'styles'
    },
    build: {
        js: false,
        ts: false,
        html: false,
        css: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../pip-webui-test/dist/**/*',
            '../pip-webui-lib/dist/**/*',
        ]
    },
    samples: {
        port: 8030
    },
    api: {
        port: 8031
    }
};
