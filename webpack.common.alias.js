const path = require('path');

module.exports = {
    'resolve': {

        'alias': {

            'assets': path.resolve(__dirname, 'sources/game/assets/'),
            'components': path.resolve(__dirname, 'sources/game/components/'),
            'entities': path.resolve(__dirname, 'sources/game/entities/'),
            'scenes': path.resolve(__dirname, 'sources/game/scenes/'),
            'systems': path.resolve(__dirname, 'sources/game/systems/'),
            'client': path.resolve(__dirname, 'sources/game/client/'),
            'server': path.resolve(__dirname, 'sources/game/server/'),

            'core': path.resolve(__dirname, 'sources/theatre/core/'),
            'modules': path.resolve(__dirname, 'sources/theatre/modules/'),
        }
    }
};
