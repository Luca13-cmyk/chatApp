const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
       app: './public/src/app.js',
       'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry.js'
    }, 
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname + '/public', 'dist'),
        publicPath: 'dist'
    }

}