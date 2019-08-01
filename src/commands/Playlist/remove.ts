import Discord from 'discord.js';
import Settings from '../../structs/Settings';
import Util from '../../util/Util';

const { object: settings } = Settings;

export default {
    name: 'remove',
    description: 'Removes songs from a playlist.',
    usage: 'remove <playlist name> <?url|title|id>',
    validate(msg: Discord.Message, { args }: { base: string, args: string[] }) {
        if (args.length === 0) {
            Util.Message.correctUsage(msg, this.usage);
            return false;
        }
        const [name] = args;
        const playlists = settings.get(msg.guild.id).playlists;
        if (!playlists.has(name)) {
            Util.Message.playlistNotFound(msg, name);
            return false;
        }
        return true;
    },
    async execute(msg: Discord.Message, { args }: { base: string, args: string[] }) {
        const [name, ...rest] = args;
        const playlist = settings.get(msg.guild.id).playlists.get(name);
        const message = await msg.channel.send(`Processing data. This may take several seconds/minutes.`) as Discord.Message;
        let count = 0;
        if (args.length === 1) {
            const queue = settings.get(msg.guild.id).queue;
            queue.list.forEach(song => {
                if (playlist.has(song)) {
                    playlist.remove(song);
                    count++;
                }
            });
        } else {
            count = await playlist.removeInput(rest);
        }
        message.edit(`Removed ${count} song(s) from the playist, \`${name}\``);
    }
};