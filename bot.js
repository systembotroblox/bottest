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

client.on("message", msg => {
	let prefix = "!";
	
	console.log(0)
	if(!msg.content.startsWith(prefix)) return;
	
	console.log("help command")
	if (msg.content.startsWith(prefix + "help")) {
		msg.reply("Here are my commands: !help,")
	}
	
	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 10;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
		msg.reply(`You have lvled ^ to lvl **${curLevel}**!`);
	}
	
	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
		msg.reply(`You are lvl ${userData.level}, with ${userData.XP} XP Right Now.`);
	}
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}
	
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killExample")) {
		userData.XP += 10
		msg.channel.sendMessage(`${msg.author} has killed an Example!`)
	}
	
	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);
	
});

client.login(process.env.BOT_TOKEN);
