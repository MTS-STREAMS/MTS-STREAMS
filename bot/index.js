// Importa o Express
const express = require('express');
const app = express();

// Rota de verificação simples
app.get('/', (req, res) => {
  res.send('MTS BOT está online!');
});

// Importa o Venom
const venom = require('venom-bot');

// Cria o bot
venom
  .create()
  .then((client) => {
    console.log('🤖 Bot iniciado com sucesso');

    // Responde a mensagens
    client.onMessage((message) => {
      if (message.body === 'teste' && message.isGroupMsg === false) {
        client.sendText(message.from, 'Funcionando ✅');
      }

      if (message.body === 'planos' && message.isGroupMsg === false) {
        client.sendText(message.from, 'Temos os planos: 🟢 Básico, 🟡 Padrão e 🔴 Premium.');
      }

      if (message.body === 'pix' && message.isGroupMsg === false) {
        client.sendText(message.from, 'Chave Pix: contato@mtsstreams.com');
      }
    });
  })
  .catch((erro) => {
    console.error('Erro ao iniciar o bot:', erro);
  });

// Inicia o servidor web (usado pelo Render ou Railway)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});
