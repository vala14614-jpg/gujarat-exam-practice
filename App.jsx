import React, { useMemo, useState } from 'react';
import { BookOpen, ClipboardList, Home, Search, Trophy, ChevronRight, CheckCircle2, XCircle, RotateCcw, ExternalLink, Timer, GraduationCap } from 'lucide-react';
import { subjects, exams, questionBank, paperResources } from './data';

export default function App() {
  const [tab, setTab] = useState('home');
  const [subject, setSubject] = useState('all');
  const [exam, setExam] = useState('all');
  const [grade, setGrade] = useState('all');
  const [query, setQuery] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('quiz-history') || '[]'); } catch { return []; }
  });

  const filtered = useMemo(() => questionBank.filter(q =>
    (subject === 'all' || q.subject === subject) &&
    (exam === 'all' || q.exam === exam) &&
    (grade === 'all' || q.grade === grade || q.grade === 'all') &&
    (!query || q.q.toLowerCase().includes(query.toLowerCase()))
  ), [subject, exam, grade, query]);

  const startQuiz = (list = filtered) => {
    if (!list.length) return;
    setQuizQuestions([...list].sort(() => Math.random() - 0.5));
    setIndex(0); setAnswers({}); setSubmitted(false); setTab('quiz');
  };
  const finishQuiz = () => {
    setSubmitted(true);
    const score = quizQuestions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
    const entry = { date: new Date().toLocaleDateString('gu-IN'), score, total: quizQuestions.length };
    const next = [entry, ...history].slice(0, 20);
    setHistory(next);
    try { localStorage.setItem('quiz-history', JSON.stringify(next)); } catch {}
  };
  const score = quizQuestions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
  const current = quizQuestions[index];
  const subjectName = id => subjects.find(s => s.id === id)?.name || id;
  const examName = id => exams.find(e => e.id === id)?.name || id;

  return <div className="app-shell">
    <header className="topbar">
      <div className="brand-mark"><GraduationCap size={25}/></div>
      <div><div className="brand-title">ગુજરાત Exam Practice</div><div className="brand-subtitle">શીખો • પ્રેક્ટિસ કરો • સફળ બનો</div></div>
    </header>

    {tab !== 'quiz' && <nav className="tabs">
      <button className={tab === 'home' ? 'tab active' : 'tab'} onClick={() => setTab('home')}><Home size={18}/> હોમ</button>
      <button className={tab === 'practice' ? 'tab active' : 'tab'} onClick={() => setTab('practice')}><BookOpen size={18}/> પ્રેક્ટિસ</button>
      <button className={tab === 'papers' ? 'tab active' : 'tab'} onClick={() => setTab('papers')}><ClipboardList size={18}/> પેપર</button>
      <button className={tab === 'results' ? 'tab active' : 'tab'} onClick={() => setTab('results')}><Trophy size={18}/> પરિણામ</button>
    </nav>}

    <main>
      {tab === 'home' && <>
        <section className="hero">
          <span className="eyebrow">ગુજરાતી માધ્યમ • તમામ ધોરણો</span>
          <h1>તમારી પરીક્ષાની તૈયારી<br/><span>આજથી શરૂ કરો!</span></h1>
          <p>7 વિષયો, વિષયવાર ટેસ્ટ અને પરીક્ષા આધારિત પ્રેક્ટિસ.</p>
          <button className="primary" onClick={() => { setTab('practice'); startQuiz(); }}>પ્રેક્ટિસ ટેસ્ટ શરૂ કરો <ChevronRight size={18}/></button>
          <div className="hero-stats"><div><b>7</b><span>વિષયો</span></div><div><b>{questionBank.length}</b><span>નમૂના પ્રશ્નો</span></div><div><b>{history.length}</b><span>તમારા ટેસ્ટ</span></div></div>
        </section>
        <div className="section-heading"><div><h2>વિષય પસંદ કરો</h2><p>તમારા મનપસંદ વિષયની પ્રેક્ટિસ કરો</p></div></div>
        <div className="subject-grid">{subjects.map(s => <button className="subject-card" key={s.id} onClick={() => {setSubject(s.id); setTab('practice');}}><span className="subject-emoji">{s.emoji}</span><b>{s.name}</b><span className="small-muted">પ્રેક્ટિસ કરો <ChevronRight size={14}/></span></button>)}</div>
      </>}

      {tab === 'practice' && <>
        <div className="page-title"><h1>પ્રેક્ટિસ ટેસ્ટ</h1><p>વિષય, પરીક્ષા અને ધોરણ પ્રમાણે પ્રશ્નો શોધો.</p></div>
        <label className="searchbox"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="પ્રશ્ન શોધો..." /></label>
        <div className="filters">
          <label>વિષય<select value={subject} onChange={e => setSubject(e.target.value)}><option value="all">બધા વિષયો</option>{subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
          <label>પરીક્ષા<select value={exam} onChange={e => setExam(e.target.value)}>{exams.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}</select></label>
          <label>ધોરણ<select value={grade} onChange={e => setGrade(e.target.value)}><option value="all">બધાં ધોરણો</option><option value="5">ધોરણ 5</option><option value="6–8">ધોરણ 6 થી 8</option><option value="8">ધોરણ 8</option></select></label>
        </div>
        <div className="result-line">{filtered.length} પ્રશ્નો ઉપલબ્ધ</div>
        <div className="panel">
          <div className="panel-icon"><BookOpen size={22}/></div><div className="panel-content"><h3>મિશ્ર પ્રેક્ટિસ ટેસ્ટ</h3><p>પસંદ કરેલા ફિલ્ટર મુજબ પ્રશ્નો રેન્ડમ ક્રમમાં આવશે.</p></div>
          <button className="primary compact" disabled={!filtered.length} onClick={() => startQuiz()}>ટેસ્ટ શરૂ કરો</button>
        </div>
        <div className="question-list">{filtered.map((q, i) => <button key={q.id} className="question-row" onClick={() => startQuiz([q])}><span className="question-number">{i+1}</span><span className="question-text"><b>{q.q}</b><small>{subjectName(q.subject)} · {examName(q.exam)}</small></span><ChevronRight size={18}/></button>)}</div>
        {!filtered.length && <div className="empty">આ પસંદગીમાં પ્રશ્નો મળ્યા નથી. ફિલ્ટર બદલીને ફરી પ્રયાસ કરો.</div>}
      </>}

      {tab === 'quiz' && current && <>
        <button className="back-button" onClick={() => setTab('practice')}>← પ્રેક્ટિસ પર પાછા</button>
        {!submitted ? <section className="quiz-card">
          <div className="quiz-meta"><span>{subjectName(current.subject)}</span><span><Timer size={15}/> પ્રશ્ન {index+1} / {quizQuestions.length}</span></div>
          <div className="progress"><span style={{width: `${((index+1)/quizQuestions.length)*100}%`}}/></div>
          <h2>{current.q}</h2>
          <div className="options">{current.options.map((option, i) => <button key={option} className={`option ${answers[index] === i ? 'selected' : ''}`} onClick={() => setAnswers(a => ({...a, [index]: i}))}><span className="option-letter">{String.fromCharCode(65+i)}</span>{option}</button>)}</div>
          <div className="quiz-actions"><button className="secondary" disabled={index===0} onClick={() => setIndex(i=>i-1)}>પાછળ</button>{index < quizQuestions.length-1 ? <button className="primary" disabled={answers[index] === undefined} onClick={() => setIndex(i=>i+1)}>આગળ <ChevronRight size={17}/></button> : <button className="primary" disabled={answers[index] === undefined} onClick={finishQuiz}>ટેસ્ટ પૂર્ણ કરો</button>}</div>
        </section> : <section className="quiz-card result-card">
          <div className="result-icon"><Trophy size={34}/></div><h1>ટેસ્ટ પૂર્ણ થયો!</h1><div className="score">{score}<span> / {quizQuestions.length}</span></div><p>{Math.round(score/quizQuestions.length*100)}% સાચા જવાબ</p>
          <div className="review-list">{quizQuestions.map((q,i)=><div className="review-item" key={q.id}><div className="review-status">{answers[i]===q.answer?<CheckCircle2 color="#159957"/>:<XCircle color="#d92d20"/>}</div><div><b>{q.q}</b><p>સાચો જવાબ: {q.options[q.answer]}</p><small>{q.why}</small></div></div>)}</div>
          <button className="primary full" onClick={() => startQuiz()}>ફરીથી પ્રેક્ટિસ કરો <RotateCcw size={17}/></button>
          <button className="secondary full" onClick={() => setTab('results')}>પરિણામ જુઓ</button>
        </section>}
      </>}

      {tab === 'papers' && <>
        <div className="page-title"><h1>જૂના પ્રશ્નપત્રો</h1><p>સત્તાવાર વેબસાઇટ પરથી ઉપલબ્ધ પ્રશ્નપત્રો અને પરીક્ષા માહિતી જુઓ.</p></div>
        <div className="notice"><b>મહત્વપૂર્ણ નોંધ</b><p>આ પ્રોજેક્ટમાં આપેલા નમૂના પ્રશ્નો પ્રેક્ટિસ માટે બનાવેલા છે; તેમને સત્તાવાર જૂના પ્રશ્નપત્ર તરીકે રજૂ કરવામાં આવતા નથી. અહીં સત્તાવાર સ્રોતોની લિંક્સ છે.</p></div>
        {paperResources.map((r,i)=><a className="resource-card" href={r.url} target="_blank" rel="noreferrer" key={r.url}><span className="resource-number">{String(i+1).padStart(2,'0')}</span><span className="resource-text"><b>{r.title}</b><small>{r.detail}</small><em>{r.url.replace('https://','')}</em></span><ExternalLink size={18}/></a>)}
        <div className="panel note-panel"><div className="panel-icon">📄</div><div className="panel-content"><h3>વર્ષ પ્રમાણે પેપર ઉમેરવા</h3><p>સત્તાવાર PDF લિંક અથવા ફાઇલ મળ્યા પછી data.js માં તેને ઉમેરવાથી અહીં દેખાડી શકાય છે.</p></div></div>
      </>}

      {tab === 'results' && <>
        <div className="page-title"><h1>તમારા પરિણામો</h1><p>આ ડિવાઇસમાં સાચવેલા તાજેતરના પ્રેક્ટિસ ટેસ્ટ.</p></div>
        {history.length ? history.map((h,i)=><div className="history-row" key={i}><span className="history-trophy"><Trophy size={20}/></span><div className="history-main"><b>{h.date}</b><small>પ્રેક્ટિસ ટેસ્ટ</small></div><strong>{h.score} / {h.total}</strong><span className="percent">{Math.round(h.score/h.total*100)}%</span></div>) : <div className="empty"><Trophy size={28}/><b>હજુ કોઈ પરિણામ નથી</b><span>પ્રેક્ટિસ ટેસ્ટ પૂર્ણ કર્યા પછી પરિણામ અહીં દેખાશે.</span></div>}
        {!!history.length && <button className="secondary full clear-button" onClick={() => {setHistory([]); try {localStorage.removeItem('quiz-history')} catch {}}}>પરિણામ સાફ કરો</button>}
      </>}
    </main>
    <footer>ગુજરાત Exam Practice · શીખતા રહો, આગળ વધતા રહો</footer>
  </div>;
}