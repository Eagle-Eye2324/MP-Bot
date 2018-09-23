const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('guildMemberAdd', (guild, member) => {          // When a user joins a guild is created
    
});

bot.on('guildCreate', (guild) => {                     // When the bot joins a guild
  
});
 
bot.connect();                                         // Get the bot to connect to Discord