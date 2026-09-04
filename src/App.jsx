import { useState } from 'react';
import { ArrowUp, ExternalLink, FileText, Scale, Sparkles } from 'lucide-react';

const SAMPLE_QUESTION =
  'In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?';

const response = {
  answer:
    'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
  citations: [
    {
      text:
        '“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.”',
      source: 'Dani_Devi_v_Pritam_Singh.pdf',
      paragraph: 'Paragraph 7',
      link: 'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz'
    }
  ]
};

function App() {
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitQuestion = () => {
    const value = question.trim();
    if (!value || loading) return;

    setLoading(true);
    setShowAnswer(false);
    setSubmittedQuestion(value);

    window.setTimeout(() => {
      setShowAnswer(true);
      setLoading(false);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      submitQuestion();
    }
  };

  const useExample = () => {
    setQuestion(SAMPLE_QUESTION);
    setShowAnswer(false);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Scale size={19} strokeWidth={2.2} /></div>
          <div>
            <div className="brand-name">Lexi</div>
            <div className="brand-subtitle">Legal Assistant</div>
          </div>
        </div>
        <div className="status-pill"><span className="status-dot" /> Demo mode</div>
      </header>

      <main className="chat-container">
        <section className="welcome" aria-labelledby="welcome-title">
          <div className="welcome-icon"><Sparkles size={22} /></div>
          <h1 id="welcome-title">Ask a legal question</h1>
          <p>Get a concise answer with a source you can trace back to the original judgment.</p>
        </section>

        <section className="conversation" aria-live="polite">
          {submittedQuestion && (
            <div className="message user-message">
              <div className="avatar user-avatar">You</div>
              <div className="message-body">
                <div className="message-label">You</div>
                <div className="user-bubble">{submittedQuestion}</div>
              </div>
            </div>
          )}

          {loading && (
            <div className="message assistant-message">
              <div className="avatar assistant-avatar"><Scale size={17} /></div>
              <div className="message-body">
                <div className="message-label">Lexi</div>
                <div className="typing-bubble">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}

          {showAnswer && (
            <div className="message assistant-message answer-message">
              <div className="avatar assistant-avatar"><Scale size={17} /></div>
              <div className="message-body">
                <div className="message-label">Lexi</div>
                <div className="answer-card">
                  <p>{response.answer}</p>
                </div>

                {response.citations.map((citation) => (
                  <a
                    className="citation-card"
                    href={citation.link}
                    target="_blank"
                    rel="noreferrer"
                    key={citation.source}
                    title="Open source document"
                  >
                    <div className="citation-topline">
                      <div className="file-icon"><FileText size={18} /></div>
                      <div className="citation-source">
                        <span>Source document</span>
                        <strong>{citation.source}</strong>
                      </div>
                      <ExternalLink className="external-icon" size={17} />
                    </div>
                    <div className="citation-text">{citation.text}</div>
                    <div className="citation-footer">
                      <span>{citation.paragraph}</span>
                      <span className="open-label">Open document ↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        {!submittedQuestion && (
          <button className="example-button" onClick={useExample}>
            Try the assignment's sample question
          </button>
        )}

        <section className="composer" aria-label="Legal question input">
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a legal question..."
            rows={3}
            disabled={loading}
          />
          <div className="composer-bottom">
            <span>Ctrl + Enter to submit</span>
            <button
              className="submit-button"
              onClick={submitQuestion}
              disabled={!question.trim() || loading}
            >
              {loading ? 'Thinking…' : 'Submit'}
              {!loading && <ArrowUp size={16} />}
            </button>
          </div>
        </section>

        <p className="disclaimer">This interface uses simulated API data for demonstration purposes.</p>
      </main>
    </div>
  );
}

export default App;
