'use strict';

let config = {};

// discord token
config.token = process.env.BOT_TOKEN;

// command prefix
config.prefix = '!!';

// bot activity
config.activity = { name: '!!help', options: { url: null, type: null } };

// bot API keys
config.api_keys = {
    youtube: process.env.YOUTUBE_API_KEY
};

// servers
config.servers = {
    connect4: {},
    audio: {},
    tictactoe: {}
};

// features
config.features = {
    'active': ['in_the_chat'],
    'inactive': []
};

// commands
config.commands = {
    'c4': {
        visible: true,
        useable: true,
        desc: `Connect 4 base command. \`${config.prefix}c4 help\` for sub-commands.`,
        usage: 'c4',
        subcommands: {
            'ff': {
                visible: true,
                useable: true,
                desc: 'Surrender your current game.',
                usage: 'ff',
                subcommands: null
            },
            'help': {
                visible: true,
                useable: true,
                desc: `Shows the sub-commands of \`${config.prefix}c4\`.`,
                usage: 'help',
                subcommands: null
            },
            'p': {
                visible: true,
                useable: true,
                desc: 'Places your piece on the board.',
                usage: 'p <coordinate>',
                subcommands: null
            },
            'start': {
                visible: true,
                useable: true,
                desc: 'Start a game with another player.',
                usage: 'start <user1> <user2>',
                subcommands: null
            }
        }
    },
    'clear': {
        visible: true,
        useable: true,
        desc: 'Clears the queue.',
        usage: 'clear',
        subcommands: null
    },
    'help': {
        visible: true,
        useable: true,
        desc: 'Shows the available commands.',
        usage: 'help',
        subcommands: null
    },
    'info': {
        visible: true,
        useable: true,
        desc: 'Shows information about the bot.',
        usage: 'info',
        subcommands: null
    },
    'move': {
        visible: true,
        useable: true,
        desc: 'Moves an audio track to a specified position.',
        usage: 'move <old position> <new position>',
        subcommands: null
    },
    'pause': {
        visible: true,
        useable: true,
        desc: 'Pauses the current audio.',
        usage: 'pause',
        subcommands: null
    },
    'play': {
        visible: true,
        useable: true,
        desc: 'Adds an audio track to the queue.',
        usage: 'play <url|video title>',
        subcommands: null
    },
    'queue': {
        visible: true,
        useable: true,
        desc: 'Shows the current audio tracks in the queue.',
        usage: 'queue',
        subcommands: null
    },
    'redirect': {
        visible: true,
        useable: true,
        desc: 'Directs \'Playing\' messages created from playing audio to the current text channel.',
        usage: 'redirect',
        subcommands: null
    },
    'remove': {
        visible: true,
        useable: true,
        desc: 'Remove an audio from the queue.',
        usage: 'remove <audio number>',
        subcommands: null
    },
    'repeat': {
        visible: true,
        useable: true,
        desc: 'Turn repeat on/off for either the current track or the whole queue.',
        usage: 'repeat <state>',
        subcommands: {
            'queue': {
                visible: true,
                useable: true,
                desc: 'Repeats the current queue.',
                usage: 'queue',
                subcommands: null
            },
            'current': {
                visible: true,
                useable: true,
                desc: 'Repeats the current audio track.',
                usage: 'current',
                subcommands: null
            }
        }
    },
    'resume': {
        visible: true,
        useable: true,
        desc: 'Resumes the current audio.',
        usage: 'resume',
        subcommands: null
    },
    'rps': {
        visible: true,
        useable: true,
        desc: 'An RNG Rock Paper Scissors game.',
        usage: 'rps <user1> <user2>',
        subcommands: null
    },
    'search': {
        visible: true,
        useable: true,
        desc: 'Searches for 5 YouTube videos.',
        usage: 'search <video title>',
        subcommands: null
    },
    'shuffle': {
        visible: true,
        useable: true,
        desc: 'Shuffles the queue.',
        usage: 'shuffle',
        subcommands: null
    },
    'skip': {
        visible: true,
        useable: true,
        desc: 'Skips the current audio.',
        usage: 'skip',
        subcommands: null
    },
    'stop': {
        visible: true,
        useable: true,
        desc: 'Stops the audio, and the bot leaves.',
        usage: 'stop',
        subcommands: null
    },
    't': {
        visible: true,
        useable: true,
        desc: `Tic Tac Toe base command. \`${config.prefix}t help\` for sub-commands.`,
        usage: 't',
        subcommands: {
            'ff': {
                visible: true,
                useable: true,
                desc: 'Surrender your current game.',
                usage: 'ff',
                subcommands: null
            },
            'help': {
                visible: true,
                useable: true,
                desc: `Shows the sub-commands of \`${config.prefix}t\`.`,
                usage: 'help',
                subcommands: null
            },
            'p': {
                visible: true,
                useable: true,
                desc: 'Places your piece on the board.',
                usage: 'p [coordinate]',
                subcommands: null
            },
            'start': {
                visible: true,
                useable: true,
                desc: 'Start a game with another player.',
                usage: 'start [user1] [user2]',
                subcommands: null
            }
        }
    },
    'url': {
        visible: true,
        useable: true,
        desc: 'Gets the URL of the specified audio track in the queue.',
        usage: 'url <position>',
        subcommands: null
    }
};

module.exports = config;