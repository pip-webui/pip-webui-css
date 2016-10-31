module.exports = {
    module: {
        name: 'pipCssFrameWork',
        styles: 'styles',
        export: 'pip.css',
        standalone: 'pip.css'
    },
    build: {
        js: false,
        ts: false,
        tsd: false,
        bundle: false, 
        html: false,
        less: true,
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
