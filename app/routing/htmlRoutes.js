// ============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// =============================================================================
const path = require('path');


// ============================================================================
// ROUTING
// ============================================================================

module.exports = (app) => {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get('/:page?', (req, res) => {
        const { page: urlPath } = req.params;
        let fileName;

        switch (urlPath) {
            case 'home':
            case 'survey':
                fileName = urlPath;
                break;
            default: fileName = 'home';
        }

        res.sendFile(path.join(__dirname, `../public/${fileName}.html`));
    });
};