import { useState } from 'react';
import { Terminal, FileCode, Check, Copy, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/soundFx';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Yahyo Terminal v2.5 initialized. 'help' yoki tugmalarni bosing."
    },
    {
      type: 'output',
      text: portfolioData.terminalCommands.whoami
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const jsonSnippet = JSON.stringify(
    {
      developer: portfolioData.personal.name,
      alias: portfolioData.personal.nick,
      github: portfolioData.personal.githubUsername,
      role: portfolioData.personal.role,
      motto: portfolioData.personal.quote,
      stats: {
        repos: 15,
        liveProjects: 8,
        experienceYears: 2
      },
      topSkills: ["React", "JavaScript", "Modern CSS", "Vite", "3D UI"],
      status: "Available for interesting projects"
    },
    null,
    2
  );

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    playClick();

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'help') {
      setHistory((prev) => [
        ...prev,
        { type: 'input', text: cmdStr },
        {
          type: 'output',
          text: "Mavjud buyruqlar: whoami, skills, projects, quote, contact, status, clear"
        }
      ]);
      return;
    }

    const matched = portfolioData.terminalCommands[cmd];
    const outputText = matched || `Buyruq topilmadi: '${cmd}'. 'help' deb yozib ko'ring.`;

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdStr },
      { type: 'output', text: outputText }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-widget glass-panel">
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="terminal-tabs">
          <button
            type="button"
            className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('terminal');
              playClick();
            }}
          >
            <Terminal size={14} />
            <span>bash ~ yahyo-dev</span>
          </button>
          <button
            type="button"
            className={`terminal-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('code');
              playClick();
            }}
          >
            <FileCode size={14} />
            <span>profile.json</span>
          </button>
        </div>

        {activeTab === 'code' && (
          <button
            type="button"
            className="copy-snippet-btn"
            onClick={handleCopyJson}
            title="Kodni nusxalash"
          >
            {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            <span>{copied ? 'Nusxalandi!' : 'Copy JSON'}</span>
          </button>
        )}
      </div>

      {/* Terminal Body */}
      {activeTab === 'terminal' ? (
        <div className="terminal-body">
          {/* Quick Command Pills */}
          <div className="terminal-pills">
            <span className="pills-label">
              <Sparkles size={13} /> Tezkor buyruqlar:
            </span>
            {['whoami', 'skills', 'projects', 'quote', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="pill-btn"
                onClick={() => handleCommand(cmd)}
              >
                ${cmd}
              </button>
            ))}
          </div>

          <div className="terminal-logs">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line ${item.type}`}>
                {item.type === 'input' && <span className="term-prompt">yahyo@dev:~$ </span>}
                {item.type === 'system' && <span className="term-sys">➜ </span>}
                {item.type === 'output' && <span className="term-out">» </span>}
                <span className="term-text">{item.text}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="terminal-input-row">
            <span className="term-prompt">yahyo@dev:~$ </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Buyruq yozing... (masalan: quote)"
              className="term-input"
              spellCheck="false"
              autoComplete="off"
            />
            <button type="submit" className="term-submit-btn" aria-label="Yuborish">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      ) : (
        <div className="code-body">
          <pre className="code-pre">
            <code>{jsonSnippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
