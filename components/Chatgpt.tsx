import { useState, useEffect } from 'react';

interface Message {
  sender: 'ia' | 'user';
  text: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ia', text: 'Bom dia! Eu sou sua assistente. Gostaria de saber: você precisa de um site ou está pensando em rebranding?' }
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [disableSiteButton, setDisableSiteButton] = useState<boolean>(false);
  const [disableRebrandingButton, setDisableRebrandingButton] = useState<boolean>(false);
  const [currentIaMessage, setCurrentIaMessage] = useState<string>('');

  // Simulação de digitação do assistente
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'ia') {
      const message = messages[messages.length - 1].text;
      let index = 0;
      setCurrentIaMessage('');
      const typingInterval = setInterval(() => {
        if (index < message.length) {
          setCurrentIaMessage((prev) => prev + message[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);
      return () => clearInterval(typingInterval);
    }
  }, [messages]);

  const handleResponse = (response: string) => {
    const newMessages: Message[] = [...messages, { sender: 'user', text: response }];

    if (response === 'Preciso de um site') {
      setDisableSiteButton(true);
      newMessages.push({
        sender: 'ia',
        text: 'Ótimo! Podemos discutir funcionalidades e design que se alinhem com seu objetivo. Qual seria seu foco principal?'
      });
    } else if (response === 'Rebranding') {
      setDisableRebrandingButton(true);
      newMessages.push({
        sender: 'ia',
        text: 'Excelente! Vamos repensar a identidade visual e o impacto da sua marca. Tem algo específico em mente?'
      });
    }

    setMessages(newMessages);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      setUserInput('');
      setShowForm(true); // Exibir formulário quando uma mensagem for enviada
    }
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    setShowForm(false);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4 bg-blue-500 text-white rounded-t-lg">
        <h2 className="text-lg font-bold">Assistente Virtual</h2>
        <p className="text-sm">Estamos aqui para ajudar!</p>
      </div>
      {!showForm ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96 transition-all duration-300 ease-in-out">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl ${
                message.sender === 'ia' ? 'bg-gray-200 self-start' : 'bg-blue-500 text-white self-end'
              } max-w-xs shadow-md transition-transform transform ${
                message.sender === 'ia' ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              {message.sender === 'ia' ? currentIaMessage : message.text}
            </div>
          ))}
          {currentIaMessage && (
            <div className="p-3 rounded-xl bg-gray-200 self-start max-w-xs shadow-md">
              {currentIaMessage}
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmitForm} className="p-4 border-t border-gray-300 space-y-4 transition-all duration-300 ease-in-out">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Serviço Desejado</label>
            <select
              id="service"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="site">Desenvolvimento de Site</option>
              <option value="rebranding">Rebranding</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Descrição do Pedido</label>
            <textarea
              id="details"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Enviar Formulário
          </button>
        </form>
      )}
      {!showForm && (
        <div className="p-4 border-t border-gray-300 flex flex-col space-y-2">
          <div className="flex space-x-2">
            <button
              onClick={() => handleResponse('Preciso de um site')}
              className={`px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none transition-transform transform ${
                disableSiteButton ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={disableSiteButton}
            >
              Preciso de um site
            </button>
            <button
              onClick={() => handleResponse('Rebranding')}
              className={`px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 focus:outline-none transition-transform transform ${
                disableRebrandingButton ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={disableRebrandingButton}
            >
              Rebranding
            </button>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="text"
              className="flex-grow focus:outline-none p-2"
              placeholder="Digite aqui..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 ml-2 transition-transform transform"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
