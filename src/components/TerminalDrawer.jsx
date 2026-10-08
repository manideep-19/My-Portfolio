import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';
import { sound } from '../utils/soundEngine';
import { personalInfo, featuredProjects, experienceData } from '../data/projects';

const INITIAL_OUTPUT = [
  { type: 'sys', text: '==================================================' },
  { type: 'sys', text: '  MANIDEEP CHILUKURI — DEVELOPER KERNEL v2.6.4' },
  { type: 'sys', text: '  Full Stack Developer • AI & IoT Product Builder' },
  { type: 'sys', text: '==================================================' },
  { type: 'info', text: 'Type "help" or click any quick command below to explore.' }
];

export default function TerminalDrawer({ isOpen, onClose }) {
  const [history, setHistory] = useState(INITIAL_OUTPUT);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 80);
      sound.playSuccess();
    }
  }, [isOpen]);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawInput) => {
    const trimmed = (rawInput ?? '').trim();
    const cmd = trimmed.toLowerCase();

    sound.playClick();
    setInputVal('');
    setCmdIndex(-1);

    if (cmd) {
      setCmdHistory((prev) => [...prev, cmd]);
    }

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([
        { type: 'sys', text: 'Terminal buffer cleared.' },
        { type: 'info', text: 'Type "help" to view available commands.' }
      ]);
      return;
    }

    if (cmd === 'exit' || cmd === 'quit') {
      onClose();
      return;
    }

    setHistory((prev) => {
      const next = [...prev, { type: 'cmd', text: `guest@manideep:~$ ${trimmed}` }];

      if (!cmd) {
        return next;
      }

      switch (cmd) {
        case 'help':
        case 'h':
        case '?':
        case 'menu':
          next.push(
            { type: 'output', text: 'AVAILABLE SYSTEM COMMANDS:' },
            { type: 'output', text: '  help       - Display this assistance directory' },
            { type: 'output', text: '  about      - Engineering background & positioning' },
            { type: 'output', text: '  skills     - Technical competencies breakdown' },
            { type: 'output', text: '  projects   - Flagship production apps & architecture' },
            { type: 'output', text: '  exp        - Professional timeline & client delivery' },
            { type: 'output', text: '  contact    - Email, LinkedIn, GitHub endpoints' },
            { type: 'output', text: '  resume     - Get resume & credentials information' },
            { type: 'output', text: '  whoami     - Current user session details' },
            { type: 'output', text: '  audio      - Toggle tactile mechanical sound FX' },
            { type: 'output', text: '  clear      - Clear terminal screen buffer' },
            { type: 'output', text: '  exit       - Close this terminal drawer' }
          );
          break;

        case 'hi':
        case 'hello':
        case 'hey':
        case 'yo':
          next.push(
            { type: 'output', text: 'Hey there! 👋 Welcome to Manideep Chilukuri\'s terminal.' },
            { type: 'output', text: 'Full Stack Developer | Backend Engineer | AI & IoT Product Builder.' },
            { type: 'output', text: 'Try clicking [help], [skills], or [projects] below to explore!' }
          );
          break;

        case 'about':
        case 'bio':
        case 'info':
          next.push(
            { type: 'output', text: `NAME:     ${personalInfo.name}` },
            { type: 'output', text: `TITLE:    ${personalInfo.title}` },
            { type: 'output', text: `LOCATION: ${personalInfo.location}` },
            { type: 'output', text: `STATUS:   ${personalInfo.status}` },
            { type: 'output', text: `ABOUT:    ${personalInfo.heroSubtext}` }
          );
          break;

        case 'skills':
        case 'stack':
        case 'tech':
          next.push(
            { type: 'output', text: 'CORE TECHNICAL STACK:' },
            { type: 'output', text: '  [LANGUAGES]    JavaScript (ES6+), TypeScript, Python, Dart, Go, C++, SQL' },
            { type: 'output', text: '  [FRONTEND]     React.js, Next.js, Redux, Responsive UI, Micro-interactions' },
            { type: 'output', text: '  [BACKEND]      Node.js, Express, FastAPI, REST APIs, WebSockets, Microservices' },
            { type: 'output', text: '  [MOBILE]       Flutter, Dart, Android Native, Background Services, State Mgmt' },
            { type: 'output', text: '  [HARDWARE/IOT] NFC (NTAG213/PN532), ESP32, Arduino, MicroPython, Sensor telemetry' },
            { type: 'output', text: '  [DATA & CLOUD] Firebase, Firestore, MongoDB, PostgreSQL, GCP, Docker, Git' }
          );
          break;

        case 'projects':
        case 'work':
        case 'apps':
          next.push(
            { type: 'output', text: 'FLAGSHIP DEPLOYED PLATFORMS:' },
            ...featuredProjects.map((p) => ({
              type: 'output',
              text: `  * ${p.title} (${p.categoryLabel}) — ${p.tagline}`
            }))
          );
          break;

        case 'exp':
        case 'experience':
        case 'history':
          next.push(
            { type: 'output', text: 'PROFESSIONAL EXPERIENCE TIMELINE:' },
            ...experienceData.map((e) => ({
              type: 'output',
              text: `  * [${e.period}] ${e.role} @ ${e.company} (${e.location})`
            }))
          );
          break;

        case 'contact':
        case 'email':
        case 'socials':
          next.push(
            { type: 'output', text: 'COMMUNICATION CHANNELS:' },
            { type: 'output', text: `  EMAIL:    ${personalInfo.socials.email}` },
            { type: 'output', text: `  GITHUB:   ${personalInfo.socials.github}` },
            { type: 'output', text: `  LINKEDIN: ${personalInfo.socials.linkedin}` },
            { type: 'output', text: '  STATUS:   Actively building and shipping products.' }
          );
          break;

        case 'resume':
        case 'cv':
          next.push(
            { type: 'output', text: 'RESUME & CREDENTIALS:' },
            { type: 'output', text: `  Request official PDF directly: ${personalInfo.socials.email}` },
            { type: 'output', text: `  LinkedIn: ${personalInfo.socials.linkedin}` }
          );
          break;

        case 'whoami':
          next.push(
            { type: 'output', text: 'guest (authenticated visitor session on port 5173)' }
          );
          break;

        case 'pwd':
          next.push({ type: 'output', text: '/home/manideep/portfolio' });
          break;

        case 'ls':
          next.push({ type: 'output', text: 'about.md  skills.json  projects/  experience/  contact.txt  resume.pdf' });
          break;

        case 'date':
          next.push({ type: 'output', text: new Date().toUTCString() });
          break;

        case 'sudo':
          next.push({ type: 'error', text: 'guest is not in the sudoers file. This incident will be reported to Manideep.' });
          break;

        case 'audio':
        case 'sfx': {
          const muted = sound.toggleMute();
          next.push({
            type: 'output',
            text: `Tactile Sound Engine is now: ${muted ? 'MUTED [OFF]' : 'ACTIVE [ON]'}`
          });
          if (!muted) sound.playSuccess();
          break;
        }

        default:
          next.push({
            type: 'error',
            text: `Command not recognized: "${trimmed}". Type "help" to see available commands.`
          });
          break;
      }

      return next;
    });

    // Re-focus the input
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 10);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = cmdIndex + 1 < cmdHistory.length ? cmdIndex + 1 : cmdIndex;
      setCmdIndex(nextIndex);
      setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex] || '');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const nextIndex = cmdIndex - 1;
        setCmdIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex] || '');
      } else {
        setCmdIndex(-1);
        setInputVal('');
      }
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="terminal-drawer-window mechanical-box" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Title Bar */}
        <div className="terminal-top-bar">
          <div className="terminal-traffic-lights">
            <span className="dot dot-red" onClick={onClose} title="Close Terminal" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="terminal-bar-title">
            <Terminal size={14} className="text-orange" />
            <span>manideep_terminal // bash_emulation.sh</span>
          </div>
          <button
            type="button"
            className="terminal-close-btn"
            onClick={onClose}
            aria-label="Close terminal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="terminal-body-scroll" onClick={() => inputRef.current && inputRef.current.focus()}>
          {history.map((item, idx) => {
            if (item.type === 'sys') {
              return <div key={idx} className="term-line term-sys">{item.text}</div>;
            }
            if (item.type === 'info') {
              return <div key={idx} className="term-line term-info">{item.text}</div>;
            }
            if (item.type === 'cmd') {
              return <div key={idx} className="term-line term-cmd">{item.text}</div>;
            }
            if (item.type === 'error') {
              return <div key={idx} className="term-line term-error">{item.text}</div>;
            }
            return <div key={idx} className="term-line term-out">{item.text}</div>;
          })}

          {/* Active Input Line */}
          <form
            className="term-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(inputVal);
            }}
          >
            <span className="term-prompt">guest@manideep:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                sound.playHover();
              }}
              onKeyDown={handleKeyDown}
              className="term-input-field"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <span className="blinking-block-cursor">█</span>
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Pills for Instant Execution */}
        <div className="terminal-quick-pills">
          <span className="pills-label">QUICK:</span>
          {['help', 'skills', 'projects', 'exp', 'contact', 'clear'].map((c) => (
            <button
              key={c}
              type="button"
              className="quick-pill-btn"
              onClick={() => executeCommand(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
