module.exports = {
    module: {
        name: 'pipCss',
        index: 'styles'
    },
    build: {
        js: false,
        ts: false,
        html: false,
        css: true,
        lib: true,
        images: true
    },
    samples: {
        port: 8005,
        publish: {
            bucket: 'webui.pipdevs.com',
            accessKeyId: 'AKIAIEXTTAEEHYPHS3OQ',
            secretAccessKey: 'otMg2vQLZjF4Nkb90j1prtugoUCNm3XqLS/KkHyc',
            region: 'us-west-1'
        }
    }
};