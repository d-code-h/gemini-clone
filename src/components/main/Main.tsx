import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import './Main.css';
import { ContextType } from '../../lib/types';

const data = {
  cards: [
    {
      text: 'Suggest beatiful places to see on an upcoming road trip',
      icon: assets.compass_icon,
    },
    {
      text: 'Briefly summarize this concept: urban planning',
      icon: assets.bulb_icon,
    },
    {
      text: 'Brainstorm team bonding activities for our work retreat',
      icon: assets.message_icon,
    },
    {
      text: 'Improve the readability of the following code',
      icon: assets.code_icon,
    },
  ],
};

export default function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context) as ContextType;

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {data.cards.map(({ text, icon }) => (
                <div key={text} className="card" onClick={() => onSent(text)}>
                  <p>{text}</p>
                  <img src={icon} alt="" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a promt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img src={assets.send_icon} alt="" onClick={() => onSent()} />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
