const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const colors = ["45A8FB","00E2FA","91FFE0","42EE8C","FEE040","FE6C2A"];
const stop = [];
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find('name', 'Magic');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 1500).then(color);
}
client.on('ready', () => {
    color();
});
client.on('guildCreate', (guild) => {
    let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
    if (channels.size > 0) channels.first().send('You have invited a rainbow Role bot.\nFor its correct functioning, you must have a Magic role on the server, the bot role must have the right to manage roles, and be above the Rainbow role.\nTo control the bot there are commands:\n::stop-stops the rainbow role color change\n::start-restores rainbow role color change\nBoth commands require Administrator or server Management rights!\nIf you have any difficulties-please contact.\n@𝑹𝒐𝒔𝒉𝒂𝒏45 ( 𝑹𝒐𝒔𝒉𝒂𝒏45#4939)');});
client.on('message', (message) => {
    if (message.channel.type !== 'text') return;
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('ADMINISTRATOR') || message.member.id === message.guild.owner.id) {
        if (message.content === '::stop') {stop.push(message.guild.id); return message.channel.send('❌stopped sucessfully\n Made by roshan45');}
        if (message.content === '::start') {stop.splice(stop.indexOf(message.guild.id),1); return message.channel.send('✅Started sucessfully\n Made by roshan45');}
    }
})
client.login("NjcwMjUyMTA2NTk4MzE4MTE4.XirrPQ.iOkXcTB9W2La_iWtmZnKmcD5XlM");
