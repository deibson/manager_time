# Manager Time: Painel de Gerenciamento de Tempo com Picture-in-Picture

**PAGE**: https://deibson.github.io/manager_time/

Manager Time é uma ferramenta completa para gerenciamento de tempo, desenvolvida para rodar diretamente no seu navegador. Ele oferece um conjunto de funcionalidades para ajudar você a se manter organizado, focado e dentro do prazo. De um simples relógio a múltiplos alarmes e temporizadores, esta ferramenta permite aos usuários que precisam de um hub centralizado para suas tarefas relacionadas ao tempo.

Um dos principais diferenciais é o inovador modo **"Painel Flutuante" (Picture-in-Picture)**, que permite que você monitore seus timers e alarmes enquanto trabalha em outras aplicações. Todas as suas configurações e timers ativos são salvos localmente no navegador, garantindo que suas sessões persistam mesmo que você feche a aba.

## ✨ Funcionalidades

* **Relógio e Data em Tempo Real**: Um display claro e proeminente da hora e data atuais.
* **Tocador de Música & Sons**: Um player integrado para ouvir e gerenciar todos os seus arquivos de áudio, que serve como biblioteca central para os sons dos alarmes e timers.
* **Alarmes**: Crie múltiplos alarmes com nomes e sons personalizáveis. A aplicação irá notificá-lo com um alerta no desktop e o som escolhido.
* **Temporizadores (Countdown)**: Defina contagens regressivas para diversas tarefas, especificando horas, minutos e segundos.
* **Cronômetro**: Inicie um cronômetro para medir o tempo decorrido com um único clique.
* **Painel Flutuante (Picture-in-Picture)**: Destaque a dashboard em uma pequena janela flutuante que permanece sobre outros aplicativos, permitindo o monitoramento constante.
* **Personalização de Sons**: Faça o upload de seus próprios arquivos MP3. Os sons ficam salvos no navegador para uso futuro.
* **Sessões Persistentes**: Todos os alarmes, timers e configurações de som são salvos no armazenamento local do navegador. Seus timers continuarão de onde pararam, mesmo que a página seja recarregada.
* **Temas Claro e Escuro**: Alterne entre os modos claro e escuro para se adequar à sua preferência visual e reduzir o cansaço visual.
* **Tempos Pré-definidos**: Configure timers e alarmes rapidamente com botões de tempos comuns (ex: 5 min, 15 min, 1h).
* **Notificações no Desktop**: Receba notificações na sua área de trabalho quando um temporizador terminar ou um alarme disparar.

## 🚀 Como Usar

1.  **Abra o arquivo `manager_time.html`** em qualquer navegador moderno. Para a funcionalidade completa do Painel Flutuante, recomenda-se o uso de navegadores baseados em Chromium (como Google Chrome ou Microsoft Edge).
2.  **Para carregar sons e músicas**:
    * No card "Tocador de Música & Sons", clique em "Carregar Músicas (.mp3)" para adicionar seus arquivos de áudio.
    * **Nota**: O repositório já inclui uma pasta `sounds/` com alguns arquivos de áudio que você pode carregar para começar a usar.
    * As músicas carregadas aparecerão na playlist e estarão disponíveis nos seletores de som dos alarmes e timers.
3.  **Para criar um Alarme**:
    * No card "Criar Despertador", defina um nome (opcional) e a hora desejada.
    * Escolha um som na lista.
    * Clique no botão "Despertador". Seu alarme aparecerá na seção "Alarmes Ativos".
4.  **Para criar um Temporizador ou Cronômetro**:
    * No card "Criar Timer", defina um nome (opcional).
    * Para um **temporizador**, ajuste as horas, minutos e segundos e clique em "Temporizador".
    * Para um **cronômetro**, apenas clique em "Cronômetro" para iniciar a contagem.
5.  **Para usar o Painel Flutuante**:
    * Clique no botão "Painel Flutuante" no topo da página.
    * Uma mini-dashboard interativa irá aparecer, permitindo que você controle seus timers enquanto usa outros programas.

## 🛠️ Tecnologias Utilizadas

Este projeto é uma aplicação de página única (SPA) construída inteiramente com tecnologias front-end:

* **HTML5**: Estrutura e conteúdo da dashboard.
* **CSS3**: Estilização para uma interface de usuário moderna, responsiva e com suporte a temas.
* **JavaScript (ES6+)**: Lógica principal da aplicação, incluindo relógios, timers, alarmes e interações.
* **IndexedDB**: Banco de dados do navegador utilizado para armazenar os arquivos de som personalizados.
* **Local Storage**: Usado para salvar o estado dos timers/alarmes ativos e a preferência de tema do usuário, garantindo a persistência dos dados.
* **Document Picture-in-Picture API**: API da web que possibilita a funcionalidade de "Painel Flutuante".
* **Web Notifications API**: Utilizada para enviar notificações para a área de trabalho do usuário.
