import { ReactNode, createContext, useState } from 'react';
import run from '../config/gemini';
import { ContextType } from '../lib/types';

export const Context = createContext<null | ContextType>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState<string>('');
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const delayPara = (index: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt?: string) => {
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    let response;
    if (prompt) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    const responseArray = response.split('**');
    let newResponse = '';

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += '<b>' + responseArray[i] + '</b>';
      }
    }
    const newResponse2 = newResponse.split('*').join('</br>');
    const newResponseArray = newResponse2.split(' ');

    for (let i = 0; i < newResponseArray.length; i++) {
      const newWord = newResponseArray[i];
      delayPara(i, newWord + ' ');
    }
    setLoading(false);
    setInput('');
  };

  const contextValue: ContextType = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
