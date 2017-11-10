const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('ROBLOX', 'https://www.twitch.tv/roblox');
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('✓');
  	}
});

client.on('guildMemberAdd', member => {
       member.user.send(`Welcome to the server, ${member}!`);
       member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
       console.log(`${member.user.username} has joined`);
       member.addRole('340748473421004801').catch(console.error);
});

client.on("message", message => {
	let prefix = "!";
	
	console.log(0)
	if(!message.content.startsWith(prefix)) return;
	
	console.log("help command")
	if (message.content.startsWith(prefix + "help")) {
		message.reply("Here are my commands: !help,")
	}
	
	let userData = XP[message.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[message.author.id] ? XP[message.author.id].XP : 10;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
		message.reply(`You have lvled ^ to lvl **${curLevel}**!`);
	}
	
	console.log("level")
	if (message.content.startsWith(prefix + "level")) {
		message.reply(`You are lvl ${userData.level}, with ${userData.XP} XP Right Now.`);
	}
	
	if (!XP[message.author.id]) XP[message.author.id] = {XP: 0, level: 0}
	
	
	
	console.log("Example")
	if (message.content.startsWith(prefix + "killExample")) {
		userData.XP += 10
		message.channel.sendMessage(`${message.author} has killed an Example!`)
	}
	
	console.log(XP)
	fs.writeFile('https://github.com/systembotroblox/bottest/blob/master/XP.json', JSON.stringify(XP), console.error);
	
});

client.login(process.env.BOT_TOKEN);
