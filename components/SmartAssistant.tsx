
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const SmartAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Welkom bij KD-Projects. Ik ben uw technische assistent. Hoe kan ik u helpen met uw elektrotechnische vraagstukken?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Create instance right before call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        // Filter out initial assistant greeting to ensure history starts with a user turn
        contents: [...messages, { role: 'user', content: userMessage }]
          .filter((m, i) => !(i === 0 && m.role === 'assistant'))
          .map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
          })),
        config: {
          systemInstruction: "Je bent de technische assistent van KD-Projects, een high-end elektrotechnisch installatiebedrijf gespecialiseerd in utiliteitsbouw en luxe woningbouw. Antwoord in het Nederlands op een professionele, deskundige en behulpzame manier. Focus op precisie, innovatie en betrouwbaarheid. Als een vraag te complex is, adviseer de gebruiker om contact op te nemen via het formulier op de website.",
          temperature: 0.7,
        },
      });

      // Directly access .text property
      const assistantText = response.text || "Mijn excuses, ik ondervind een technische storing. Kunt u het later nog eens proberen?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Er is een fout opgetreden bij het verwerken van uw verzoek." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-copper hover:bg-copperLight rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-anthracite border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-copper p-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">KD Smart Assistant</h4>
            <p className="text-white/70 text-[10px]">Direct technisch advies</p>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-darkSlate">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-copper text-white' 
                    : 'bg-anthracite border border-white/5 text-gray-300'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-anthracite border border-white/5 p-3 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-copper rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-anthracite">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="flex gap-2"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Stel uw vraag..."
                className="flex-1 bg-darkSlate border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-copper transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-copper p-2 text-white disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartAssistant;
