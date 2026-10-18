export const subjects = [
  { id: 'gujarati', name: 'ગુજરાતી', emoji: '📚' },
  { id: 'hindi', name: 'હિન્દી', emoji: '🔤' },
  { id: 'english', name: 'અંગ્રેજી', emoji: '🌍' },
  { id: 'maths', name: 'ગણિત', emoji: '➗' },
  { id: 'science', name: 'વિજ્ઞાન', emoji: '🔬' },
  { id: 'social', name: 'સામાજિક વિજ્ઞાન', emoji: '🗺️' },
  { id: 'gk', name: 'સામાન્ય જ્ઞાન', emoji: '💡' }
];

export const exams = [
  { id: 'all', name: 'બધી પરીક્ષાઓ' },
  { id: 'nmms', name: 'NMMS' },
  { id: 'pse', name: 'PSE / SSE' },
  { id: 'school', name: 'શાળાની પરીક્ષા' },
  { id: 'other', name: 'બીજી સરકારી પરીક્ષાઓ' }
];

// These are original practice questions, not claimed to be official past-paper questions.
export const questionBank = [
  { id: 1, subject: 'science', exam: 'school', grade: '6–8', q: 'છોડ પ્રકાશસંશ્લેષણ દરમિયાન મુખ્યત્વે કયો વાયુ લે છે?', options: ['ઑક્સિજન', 'કાર્બન ડાયૉક્સાઇડ', 'નાઇટ્રોજન', 'હાઇડ્રોજન'], answer: 1, why: 'છોડ પ્રકાશસંશ્લેષણ દરમિયાન કાર્બન ડાયૉક્સાઇડ અને પાણીનો ઉપયોગ કરીને ખોરાક બનાવે છે.' },
  { id: 2, subject: 'science', exam: 'nmms', grade: '8', q: 'કોષનું ઊર્જાઘર કયા અંગિકાને કહેવામાં આવે છે?', options: ['કેન્દ્રક', 'રાઇબોઝોમ', 'માઇટોકોન્ડ્રિયા', 'કોષપટલ'], answer: 2, why: 'માઇટોકોન્ડ્રિયા કોષને ઉપયોગી ઊર્જા ઉત્પન્ન કરવામાં મદદ કરે છે.' },
  { id: 3, subject: 'maths', exam: 'school', grade: '6–8', q: '200 ના 15% કેટલા થાય?', options: ['20', '25', '30', '35'], answer: 2, why: '200 × 15 ÷ 100 = 30.' },
  { id: 4, subject: 'maths', exam: 'pse', grade: '5', q: 'એક સંખ્યાનો 3 ગણો 27 છે. સંખ્યા કઈ?', options: ['6', '8', '9', '12'], answer: 2, why: '27 ને 3 વડે ભાગતાં 9 મળે છે.' },
  { id: 5, subject: 'social', exam: 'school', grade: '6–8', q: 'ભારતને સ્વતંત્રતા ક્યારે મળી?', options: ['26 જાન્યુઆરી 1950', '15 ઑગસ્ટ 1947', '2 ઑક્ટોબર 1947', '15 ઑગસ્ટ 1950'], answer: 1, why: 'ભારત 15 ઑગસ્ટ 1947ના રોજ સ્વતંત્ર થયું.' },
  { id: 6, subject: 'gk', exam: 'other', grade: 'all', q: 'ભારતની રાજધાની કઈ છે?', options: ['મુંબઈ', 'અમદાવાદ', 'નવી દિલ્હી', 'જયપુર'], answer: 2, why: 'ભારતની રાજધાની નવી દિલ્હી છે.' },
  { id: 7, subject: 'gujarati', exam: 'school', grade: '6–8', q: '“સૂર્ય” શબ્દનો સમાનાર્થી કયો છે?', options: ['ચંદ્ર', 'રવિ', 'પવન', 'વાદળ'], answer: 1, why: '“રવિ” શબ્દ “સૂર્ય”નો સમાનાર્થી છે.' },
  { id: 8, subject: 'hindi', exam: 'school', grade: '6–8', q: '“जल” का समानार्थी शब्द कौन-सा है?', options: ['अग्नि', 'नीर', 'वायु', 'धरा'], answer: 1, why: '“नीर” का अर्थ जल या पानी होता है।' },
  { id: 9, subject: 'english', exam: 'school', grade: '6–8', q: 'Choose the plural form of “child”.', options: ['childs', 'childes', 'children', 'childrens'], answer: 2, why: 'The plural form of child is children.' },
  { id: 10, subject: 'maths', exam: 'nmms', grade: '8', q: 'ક્રમ પૂર્ણ કરો: 2, 6, 12, 20, __', options: ['26', '28', '30', '32'], answer: 2, why: 'દર વખતે +4, +6, +8 પછી +10 થાય છે. 20 + 10 = 30.' },
  { id: 11, subject: 'science', exam: 'pse', grade: '5', q: 'પાણીનું રાસાયણિક સૂત્ર કયું છે?', options: ['CO₂', 'O₂', 'H₂O', 'NaCl'], answer: 2, why: 'પાણીના એક અણુમાં બે હાઇડ્રોજન અને એક ઑક્સિજન પરમાણુ હોય છે.' },
  { id: 12, subject: 'social', exam: 'nmms', grade: '8', q: 'યુરોપ અને એશિયા વચ્ચેની પરંપરાગત કુદરતી સીમા કઈ પર્વતમાળા છે?', options: ['હિમાલય', 'એન્ડીઝ', 'યુરલ', 'આલ્પ્સ'], answer: 2, why: 'યુરલ પર્વતમાળાને યુરોપ અને એશિયાની પરંપરાગત સીમા માનવામાં આવે છે.' },
  { id: 13, subject: 'gk', exam: 'pse', grade: '5', q: 'ભારતનો રાષ્ટ્રીય પક્ષી કયો છે?', options: ['કબૂતર', 'મોર', 'ગરુડ', 'કાગડો'], answer: 1, why: 'મોર ભારતનો રાષ્ટ્રીય પક્ષી છે.' },
  { id: 14, subject: 'gujarati', exam: 'pse', grade: '5', q: '“મીઠું” શબ્દનો વિરુદ્ધાર્થી કયો છે?', options: ['ખારું', 'મધુર', 'સરસ', 'સ્વાદિષ્ટ'], answer: 0, why: 'સ્વાદના સંદર્ભમાં “મીઠું”નો વિરુદ્ધાર્થી “ખારું” છે.' },
  { id: 15, subject: 'english', exam: 'nmms', grade: '8', q: 'What is the opposite of “early”?', options: ['Soon', 'Late', 'Quick', 'Fast'], answer: 1, why: 'The opposite of early is late.' }
];

export const paperResources = [
  { title: 'GCERT / રાજ્ય શૈક્ષણિક સામગ્રી', detail: 'પાઠ્યપુસ્તકો અને શૈક્ષણિક સામગ્રી માટે સત્તાવાર સ્ત્રોત', url: 'https://gcert.gujarat.gov.in/' },
  { title: 'GSEB', detail: 'ગુજરાત બોર્ડની સૂચનાઓ અને પરીક્ષા સંબંધિત માહિતી', url: 'https://www.gseb.org/' },
  { title: 'Digital Gujarat', detail: 'રાજ્યની સેવાઓ અને સંબંધિત જાહેર માહિતી', url: 'https://www.digitalgujarat.gov.in/' },
  { title: 'National Scholarship Portal', detail: 'શિષ્યવૃત્તિ યોજનાઓની સત્તાવાર માહિતી', url: 'https://scholarships.gov.in/' }
];