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
            accessKeyId: 'AKIAJCEXE5ML6CKW4I2Q',
            secretAccessKey: 'Mtqe9QlWWgRZvS8AXaZqJXaG98BR3qq8gbJqeEk+',
            region: 'us-west-1'
        },
    }
};