import { Dispatch, SetStateAction } from 'react';
interface ContextType {
  onSent: (prompt?: string) => Promise<void>;
  prevPrompts: string[];
  setPrevPrompts: Dispatch<SetStateAction<string[]>>;
  recentPrompt: string;
  setRecentPrompt: Dispatch<SetStateAction<string>>;
  showResult: boolean;
  loading: boolean;
  resultData: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  newChat: () => void;
}

export type { ContextType };
