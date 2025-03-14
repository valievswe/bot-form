const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");

dotenv.config();

const token = process.env.BOT_TOKEN;
let bot;

function initializeBot() {
  bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = [
      [
        {
          text: "Ro'yxatdan o'tish",
          web_app: { url: "https://fee8-213-230-78-196.ngrok-free.app/" },
        },
      ], // Button to open web app
    ];
    const replyMarkup = {
      keyboard,
      resize_keyboard: true,
      one_time_keyboard: true,
    };

    bot.sendMessage(
      chatId,
      "Salom! Quyidagi tugmani bosib ro'yxatdan o'ting.",
      {
        reply_markup: replyMarkup,
      }
    );
  });
}

module.exports = initializeBot;
