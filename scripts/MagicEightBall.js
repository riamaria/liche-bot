var MagicEightBall = function MagicEightBall(robot) {
  var responses = [
    'As I see it, yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'My reply is no',
    'My sources say no',
    'Outlook good',
    'Outlook not so good',
    'Reply hazy, try again',
    'Signs point to yes',
    'Very doubtful',
    'Without a doubt',
    'Yes',
    'Yes, definitely',
    'You may rely on it.'
  ];

  var shakeBall = function shakeBall() {
    var i = Math.floor(Math.random() * (responses.length + 1));

    return responses[i];
  }

  robot.hear(/^\/ask\s+?(\s+.*)?*$/, function askQuestion(msg) {
    var question = parseInt(msg.match[1]);
    var answer = shakeBall();

    msg.reply('Magic 8 Ball says.. "' + answer + '"');
  });
};

module.exports = MagicEightBall;
