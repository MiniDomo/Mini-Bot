import Discord = require('discord.js');
import Settings = require('../../structs/Settings');
import Util = require('../../util/Util');

const { object: settings } = Settings;

export = {
    name: 'add',
    description: 'Adds songs to a playist.',
    usage: 'add <playlist name> <?url|title|id>',
    validate(msg: Discord.Message, { args }: { base: string, args: string[] }) {
        if (args.length === 0) {
            Util.Message.correctUsage(msg, this.usage);
            return false;
        }
        const [name] = args;
        const playlists = settings.get(msg.guild!.id).playlists;
        if (!playlists.has(name)) {
            Util.Message.playlistNotFound(msg, name);
            return false;
        }
        return true;
    },
    async execute(msg: Discord.Message, { args }: { base: string, args: string[] }) {
        const guild = msg.guild!;
        const [name, ...rest] = args;
        const playlist = settings.get(guild.id).playlists.get(name);
        const message = await msg.channel.send(`Processing data. This may take several seconds/minutes.`) as Discord.Message;
        let count = 0;
        if (args.length === 1) {
            const queue = settings.get(guild.id).queue;
            queue.list.forEach(song => {
                if (!playlist.has(song)) {
                    playlist.add(song);
                    count++;
                }
            });
        } else {
            count = await playlist.addInput(rest);
        }
        message.edit(`Added ${count} song(s) to the playist, \`${name}\``);
    }
};