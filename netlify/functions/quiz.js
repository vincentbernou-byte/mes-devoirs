<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Mes Devoirs">
<meta name="theme-color" content="#7C5CBF">
<title>Mes Devoirs 📚</title>
<link rel="manifest" href="manifest.json">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
:root {
  --bg:#F0EEFF;--bg2:#E8E0FF;--white:#FFFFFF;
  --purple:#7C5CBF;--purple2:#9B7FD4;--purple-l:#EDE8FF;
  --pink:#F06292;--pink-l:#FFE4EF;
  --teal:#26C6A6;--teal-l:#DFFAF4;
  --amber:#FF9F00;--amber-l:#FFF3D6;
  --red:#F44336;--red-l:#FDECEA;
  --green:#4CAF50;--green-l:#E8F5E9;
  --text:#2D2248;--muted:#7B6DAA;--border:rgba(124,92,191,0.15);
  --shadow:0 4px 20px rgba(124,92,191,0.15);--radius:18px;--rs:12px;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
.header{background:linear-gradient(135deg,var(--purple),var(--purple2));padding:16px 16px 14px;position:sticky;top:0;z-index:100;box-shadow:0 3px 16px rgba(124,92,191,0.3);}
.hrow{display:flex;align-items:center;justify-content:space-between;}
.htitle{font-size:24px;font-weight:900;color:white;letter-spacing:-0.01em;}
.hdate{font-size:12px;color:rgba(255,255,255,0.75);margin-top:2px;}
.nbtn{background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:40px;height:40px;font-size:18px;cursor:pointer;color:white;display:flex;align-items:center;justify-content:center;transition:background 0.15s;}
.nbtn:hover{background:rgba(255,255,255,0.3);}
.wnav{background:white;display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border);}
.wtitle{font-size:14px;font-weight:800;color:var(--purple);}
.navbtns{display:flex;gap:6px;}
.navbtn{background:var(--purple-l);border:none;border-radius:10px;padding:6px 14px;color:var(--purple);font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.15s;}
.navbtn:hover{background:var(--purple);color:white;}
main{max-width:960px;margin:0 auto;padding:14px 12px 100px;}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px;}
.stat{background:white;border-radius:var(--rs);padding:12px 14px;box-shadow:var(--shadow);border-top:4px solid transparent;}
.sp{border-color:var(--purple);}.sk{border-color:var(--teal);}.sm{border-color:var(--pink);}
.sn{font-size:28px;font-weight:900;line-height:1;}
.snp{color:var(--purple);}.snk{color:var(--teal);}.snm{color:var(--pink);}
.sl{font-size:11px;color:var(--muted);margin-top:2px;font-weight:600;}
.prog{background:var(--bg2);border-radius:20px;height:6px;margin-top:6px;overflow:hidden;}
.pf{height:100%;border-radius:20px;background:linear-gradient(90deg,var(--purple),var(--pink));transition:width 0.4s;}
.dgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}
.dcard{background:white;border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column;min-height:220px;border:2px solid transparent;transition:border-color 0.2s;}
.dcard.today{border-color:var(--purple);}
.dhead{padding:10px 10px 8px;background:linear-gradient(135deg,var(--purple-l),var(--bg));}
.dcard.today .dhead{background:linear-gradient(135deg,var(--purple),var(--purple2));}
.dname{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.06em;color:var(--purple);}
.dcard.today .dname{color:white;}
.ddlbl{font-size:10px;color:var(--muted);margin-top:1px;}
.dcard.today .ddlbl{color:rgba(255,255,255,0.75);}
.dbody{flex:1;padding:8px 8px 6px;}
.dfoot{padding:0 8px 8px;}
.task{display:flex;align-items:flex-start;gap:7px;padding:6px;border-radius:10px;cursor:pointer;margin-bottom:4px;transition:background 0.12s;position:relative;}
.task:hover{background:var(--bg);}
.task.ctrl{background:var(--amber-l);border-left:3px solid var(--amber);padding-left:4px;}
.task.ctrl:hover{background:#FFE8A0;}
.task.rev{background:var(--pink-l);border-left:3px solid var(--pink);padding-left:4px;}
.task.rev:hover{background:#FFD6E8;}
.chk{width:20px;height:20px;min-width:20px;border-radius:50%;border:2.5px solid #D0C8E8;display:flex;align-items:center;justify-content:center;margin-top:1px;transition:all 0.2s;background:white;flex-shrink:0;}
.chk.done{background:var(--teal);border-color:var(--teal);}
.chk.done::after{content:'';width:5px;height:9px;border:2.5px solid white;border-top:none;border-left:none;transform:rotate(45deg) translateY(-1px);display:block;}
.task.ctrl .chk{border-color:var(--amber);}
.task.ctrl .chk.done{background:var(--amber);border-color:var(--amber);}
.tbody{flex:1;min-width:0;}
.badge{display:inline-block;font-size:9px;font-weight:800;padding:2px 7px;border-radius:20px;margin-bottom:2px;text-transform:uppercase;letter-spacing:0.04em;}
.ttxt{font-size:11px;line-height:1.35;word-break:break-word;font-weight:600;}
.ttxt.done{text-decoration:line-through;color:#B0A8C8;}
.delbtn{font-size:15px;background:none;border:none;cursor:pointer;color:#D0C8E8;padding:0 2px;opacity:0;transition:opacity 0.15s;}
.task:hover .delbtn{opacity:1;}
.delbtn:hover{color:var(--red);}
.qzbtn{background:var(--amber-l);border:none;border-radius:8px;padding:3px 8px;font-size:10px;font-weight:800;color:#7A4800;cursor:pointer;font-family:'Nunito',sans-serif;margin-top:3px;display:inline-block;}
.addbtn{width:100%;background:none;border:2px dashed #D0C8E8;border-radius:10px;color:#B0A8C8;font-family:'Nunito',sans-serif;font-size:20px;font-weight:700;padding:4px;cursor:pointer;transition:all 0.15s;line-height:1;}
.addbtn:hover{border-color:var(--purple);color:var(--purple);background:var(--purple-l);}
.streak{background:linear-gradient(135deg,var(--teal-l),var(--purple-l));border:2px solid var(--teal);border-radius:var(--rs);padding:10px 16px;margin-bottom:14px;font-size:14px;font-weight:700;color:#1A8A72;display:flex;align-items:center;gap:8px;}
.nask{background:var(--amber-l);border:2px solid var(--amber);border-radius:var(--rs);padding:10px 14px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:13px;font-weight:700;color:#7A4800;}
.nask button{background:var(--amber);border:none;border-radius:10px;padding:7px 14px;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer;white-space:nowrap;}
.ov{position:fixed;inset:0;background:rgba(44,34,72,0.55);display:flex;align-items:flex-end;justify-content:center;z-index:200;backdrop-filter:blur(4px);}
.sheet{background:white;border-radius:24px 24px 0 0;padding:8px 20px 40px;width:100%;max-width:540px;max-height:92vh;overflow-y:auto;animation:up 0.22s ease;border:2px solid var(--border);border-bottom:none;}
@keyframes up{from{transform:translateY(100%);opacity:0;}to{transform:translateY(0);opacity:1;}}
.handle{width:40px;height:5px;background:#D0C8E8;border-radius:20px;margin:10px auto 18px;}
.sh3{font-size:20px;font-weight:900;color:var(--purple);margin-bottom:16px;}
.trow{display:flex;gap:8px;margin-bottom:16px;}
.tbtn{flex:1;padding:11px;border-radius:12px;border:2.5px solid var(--border);background:none;font-family:'Nunito',sans-serif;font-size:14px;font-weight:800;color:var(--muted);cursor:pointer;transition:all 0.15s;}
.tbtn.od{background:var(--purple-l);border-color:var(--purple);color:var(--purple);}
.tbtn.oc{background:var(--amber-l);border-color:var(--amber);color:#7A4800;}
.lbl{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;color:var(--muted);display:block;margin-bottom:6px;}
.inp,.sel{width:100%;padding:13px 14px;margin-bottom:14px;background:var(--bg);border:2px solid var(--border);border-radius:12px;color:var(--text);font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;outline:none;transition:border-color 0.15s;}
.inp:focus,.sel:focus{border-color:var(--purple);}
.inp::placeholder{color:#C0B8D8;font-weight:600;}
.sel option{background:white;}
.cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;}
.cal-nav button{background:var(--purple-l);border:none;border-radius:8px;padding:5px 12px;color:var(--purple);font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;font-size:14px;}
.cal-month{font-size:13px;font-weight:800;color:var(--purple);}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:6px;}
.cdh{font-size:10px;font-weight:700;text-align:center;color:var(--muted);padding:3px 0;}
.cd{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:12px;font-weight:700;cursor:pointer;transition:all 0.15s;border:none;background:none;color:var(--text);font-family:'Nunito',sans-serif;}
.cd:hover:not(.emp):not(.past){background:var(--purple-l);color:var(--purple);}
.cd.emp{cursor:default;}
.cd.past{color:#C8C0DC;cursor:default;}
.cd.sc{background:var(--amber);color:white;}
.cd.sr{background:var(--pink);color:white;}
.cd.tm{outline:2px solid var(--purple);outline-offset:1px;}
.cal-legend{display:flex;gap:12px;font-size:10px;font-weight:700;margin:4px 0 10px;}
.cal-legend span{display:flex;align-items:center;gap:4px;}
.dot{width:10px;height:10px;border-radius:50%;display:inline-block;}
.cal-info{font-size:12px;font-weight:700;margin-bottom:10px;}
.btns{display:flex;gap:10px;margin-top:6px;}
.bc{flex:1;padding:14px;border-radius:12px;border:2px solid var(--border);background:none;color:var(--muted);font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;cursor:pointer;}
.bok{flex:2;padding:14px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--purple),var(--purple2));color:white;font-family:'Nunito',sans-serif;font-size:15px;font-weight:900;cursor:pointer;}
.bok.am{background:linear-gradient(135deg,#E5A000,var(--amber));}
.quiz-sbj{display:inline-block;font-size:12px;font-weight:800;padding:4px 12px;border-radius:20px;margin-bottom:8px;}
.quiz-th{font-size:20px;font-weight:900;color:var(--purple);margin-bottom:10px;}
.notion{background:var(--purple-l);border-left:4px solid var(--purple);border-radius:var(--rs);padding:12px 14px;font-size:13px;line-height:1.6;color:var(--text);margin-bottom:16px;}
.qtxt{font-size:16px;font-weight:800;color:var(--text);margin-bottom:14px;}
.opts{display:flex;flex-direction:column;gap:8px;margin-bottom:12px;}
.opt{padding:13px 16px;border-radius:12px;border:2.5px solid var(--border);background:var(--bg);color:var(--text);font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;cursor:pointer;text-align:left;transition:all 0.15s;}
.opt:hover{border-color:var(--purple);background:var(--purple-l);}
.opt.ok{border-color:var(--teal);background:var(--teal-l);color:#1A6B58;}
.opt.bad{border-color:var(--red);background:var(--red-l);color:var(--red);}
.rvbtn{width:100%;padding:13px;border-radius:12px;border:2.5px solid var(--border);background:none;color:var(--muted);font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.15s;margin-bottom:10px;}
.rvbtn:hover{border-color:var(--purple);color:var(--purple);}
.abox{background:var(--teal-l);border:2px solid var(--teal);border-radius:12px;padding:12px 14px;font-size:14px;color:#1A6B58;font-weight:700;margin-bottom:14px;display:none;}
.abox.show{display:block;}
.qnext{width:100%;padding:14px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--pink),#F06292);color:white;font-family:'Nunito',sans-serif;font-size:15px;font-weight:900;cursor:pointer;}
.spin{width:36px;height:36px;border:4px solid var(--border);border-top-color:var(--purple);border-radius:50%;animation:sp 0.8s linear infinite;margin:24px auto;}
@keyframes sp{to{transform:rotate(360deg);}}
.s-fr{background:#FFE4EF;color:#C0185A;}
.s-lc{background:#FFF3D6;color:#7A4800;}
.s-de{background:#E3F0FF;color:#1A4F8A;}
.s-en{background:#DFFAF4;color:#0A6B54;}
.s-ma{background:#EDE8FF;color:#4A2D9C;}
.s-sv{background:#E8F5E9;color:#2E7D32;}
.s-sp{background:#FCE4EC;color:#B71C1C;}
.s-hg{background:#FFFDE7;color:#7A5800;}
.s-ap{background:#FBE9E7;color:#8D3400;}
@media(max-width:720px){.dgrid{grid-template-columns:repeat(2,1fr);}.stats{grid-template-columns:repeat(3,1fr);}}
@media(max-width:440px){.dgrid{grid-template-columns:1fr;}.stats{grid-template-columns:repeat(2,1fr);}}
</style>
</head>
<body>
<div class="header">
  <div class="hrow">
    <div><div class="htitle">📚 Mes Devoirs</div><div class="hdate" id="hdate"></div></div>
    <button class="nbtn" onclick="askNotif()" id="nbtn">🔔</button>
  </div>
</div>
<div class="wnav">
  <div class="wtitle" id="wtitle"></div>
  <div class="navbtns">
    <button class="navbtn" onclick="chWk(-1)">←</button>
    <button class="navbtn" id="todaybtn" onclick="chWk(0)" style="display:none">Aujourd'hui</button>
    <button class="navbtn" onclick="chWk(1)">→</button>
  </div>
</div>
<main id="main"></main>
<div class="ov" id="ov" style="display:none" onclick="if(event.target===this)closeSheet()">
  <div class="sheet" id="sheet"></div>
</div>
<script>
const SUBJS=[
  {k:'fr',n:'Français',cls:'s-fr'},
  {k:'lc',n:'Lecture',cls:'s-lc'},
  {k:'de',n:'Allemand',cls:'s-de'},
  {k:'en',n:'Anglais',cls:'s-en'},
  {k:'ma',n:'Mathématiques',cls:'s-ma'},
  {k:'sv',n:'SVT',cls:'s-sv'},
  {k:'sp',n:'Sport',cls:'s-sp'},
  {k:'hg',n:'Histoire-Géo',cls:'s-hg'},
  {k:'ap',n:'Arts plastiques',cls:'s-ap'},
];
const SDAYS=['Lun','Mar','Mer','Jeu','Ven'];
const DAYS=['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];

const NOW=new Date();NOW.setHours(0,0,0,0);
const todayDow=NOW.getDay();
const todayCol=(todayDow>=1&&todayDow<=5)?todayDow-1:-1;

let wk=0,addType='devoir',modalDay=0;
let ctrlDate=null,revDays=new Set(),calMonth=null,quizTurn=0;

const S=k=>SUBJS.find(s=>s.k===k)||SUBJS[0];
const fmt=d=>d.toLocaleDateString('fr-FR',{day:'numeric',month:'short'});
const fmtFull=d=>d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
const iso=d=>{const x=new Date(d);x.setHours(12,0,0,0);return x.toISOString().slice(0,10);};
const fromISO=s=>new Date(s+'T12:00:00');
const isoNow=()=>iso(NOW);

function monday(offset){
  const d=new Date(NOW);
  const dow=d.getDay()===0?6:d.getDay()-1;
  d.setDate(d.getDate()-dow+offset*7);
  return d;
}
function wkKey(o){return iso(monday(o));}
function dayDate(di,o){
  const m=monday(o!==undefined?o:wk);
  const d=new Date(m);d.setDate(m.getDate()+di);return d;
}

function loadT(di){try{return JSON.parse(localStorage.getItem('t_'+wkKey(wk)+'_'+di))||[];}catch{return[];}}
function saveT(di,a){localStorage.setItem('t_'+wkKey(wk)+'_'+di,JSON.stringify(a));}
function loadC(){try{return JSON.parse(localStorage.getItem('ctrl_v3'))||[];}catch{return[];}}
function saveC(a){localStorage.setItem('ctrl_v3',JSON.stringify(a));}

function chWk(n){wk=n===0?0:wk+n;render();}

function calcStats(){
  let tot=0,done=0;
  for(let i=0;i<5;i++){const t=loadT(i);tot+=t.length;done+=t.filter(x=>x.done).length;}
  return{tot,done,pct:tot?Math.round(done/tot*100):0};
}
function streak(){
  if(wk!==0)return 0;
  const base=todayCol>=0?todayCol:4;
  let s=0;
  for(let i=base;i>=0;i--){
    const t=loadT(i);if(!t.length)break;
    if(t.every(x=>x.done))s++;else break;
  }
  return s;
}

function render(){
  document.getElementById('hdate').textContent=fmtFull(NOW);
  const mon=monday(wk),fri=new Date(mon);fri.setDate(mon.getDate()+4);
  document.getElementById('wtitle').textContent=
    wk===0?'Cette semaine — '+fmt(mon)+' au '+fmt(fri)
    :wk===-1?'Semaine passée — '+fmt(mon)+' au '+fmt(fri)
    :fmt(mon)+' au '+fmt(fri);
  document.getElementById('todaybtn').style.display=wk!==0?'inline-block':'none';

  const st=calcStats(),str=streak();
  let h='';

  if(typeof Notification!=='undefined'&&Notification.permission==='default'){
    h+=`<div class="nask">🔔 Active les rappels à 17h !<button onclick="askNotif()">Activer</button></div>`;
  }
  if(str>=2)h+=`<div class="streak">⭐ Bravo ! ${str} jour${str>1?'s':''} de suite !</div>`;

  h+=`<div class="stats">
    <div class="stat sp"><div class="sn snp">${st.tot}</div><div class="sl">Total</div></div>
    <div class="stat sk"><div class="sn snk">${st.done}</div><div class="sl">Faits ✓</div></div>
    <div class="stat sm"><div class="sn snm">${st.pct}%</div><div class="sl">Avancement</div><div class="prog"><div class="pf" style="width:${st.pct}%"></div></div></div>
  </div><div class="dgrid">`;

  for(let i=0;i<5;i++){
    const tasks=loadT(i),isT=wk===0&&i===todayCol,dd=dayDate(i);
    h+=`<div class="dcard${isT?' today':''}">
      <div class="dhead"><div class="dname">${SDAYS[i]}</div><div class="ddlbl">${fmt(dd)}</div></div>
      <div class="dbody">`;
    tasks.forEach((t,j)=>{
      const s=S(t.subject);
      const cls=t.type==='ctrl'?'task ctrl':t.type==='rev'?'task rev':'task';
      const icon=t.type==='ctrl'?'⚠ ':t.type==='rev'?'🎯 ':'';
      h+=`<div class="${cls}" onclick="toggleT(${i},${j})">
        <div class="chk${t.done?' done':''}"></div>
        <div class="tbody">
          <span class="badge ${s.cls}">${s.n}</span>
          <div class="ttxt${t.done?' done':''}">${icon}${t.text}</div>
          ${t.type==='rev'&&!t.done?`<button class="qzbtn" onclick="openQ('${t.ctrlId}',event)">🎯 Quiz de révision</button>`:''}
        </div>
        <button class="delbtn" onclick="delT(${i},${j},event)">×</button>
      </div>`;
    });
    h+=`</div><div class="dfoot"><button class="addbtn" onclick="openAdd(${i})">+</button></div></div>`;
  }
  h+='</div>';
  document.getElementById('main').innerHTML=h;
}

function toggleT(di,ji){
  const t=loadT(di);
  const task=t[ji];
  const wasRev=task.type==='rev'&&!task.done;
  task.done=!task.done;
  saveT(di,t);schedNotifs();render();
  if(wasRev&&task.ctrlId){
    const c=loadC().find(x=>x.id===task.ctrlId);
    if(c)runQuiz(c);
  }
}
function delT(di,ji,e){e.stopPropagation();const t=loadT(di);t.splice(ji,1);saveT(di,t);render();}

function openAdd(di){
  modalDay=di;addType='devoir';ctrlDate=null;revDays=new Set();
  calMonth=new Date(NOW.getFullYear(),NOW.getMonth(),1);
  renderSheet();document.getElementById('ov').style.display='flex';
  setTimeout(()=>document.getElementById('itxt')&&document.getElementById('itxt').focus(),80);
}
function setType(t){
  const sub=document.getElementById('isub')&&document.getElementById('isub').value;
  addType=t;ctrlDate=null;revDays=new Set();
  calMonth=new Date(NOW.getFullYear(),NOW.getMonth(),1);
  renderSheet(sub);
}

function renderSheet(keepSub){
  const opts=SUBJS.map(s=>`<option value="${s.k}"${keepSub===s.k?' selected':''}>${s.n}</option>`).join('');
  const iC=addType==='controle';
  let extra='';
  if(!iC){
    const dOpts=DAYS.map((d,i)=>`<option value="${i}"${i===modalDay?' selected':''}>${d} ${fmt(dayDate(i))}</option>`).join('');
    extra=`<label class="lbl">Pour quel jour ?</label>
      <select class="sel" id="iday">${dOpts}</select>
      <label class="lbl">Description du devoir</label>
      <input class="inp" type="text" id="itxt" placeholder="Ex : exercices p.42, apprendre la leçon…" onkeydown="if(event.key==='Enter')doSave()">`;
  }else{
    const clickedDay=dayDate(modalDay);
    const tomorrow=new Date(NOW);tomorrow.setDate(NOW.getDate()+1);
    const defaultCtrl=clickedDay>NOW?clickedDay:tomorrow;
    if(!ctrlDate)ctrlDate=defaultCtrl;
    const defaultISO=iso(ctrlDate);
    const tomorrowISO=iso(tomorrow);
    calMonth=new Date(ctrlDate.getFullYear(),ctrlDate.getMonth(),1);
    extra=`<label class="lbl">Thème du contrôle</label>
      <input class="inp" type="text" id="itheme" placeholder="Ex : Les fractions, La Révolution française…">
      <label class="lbl">📅 Date du contrôle</label>
      <input class="inp" type="date" id="ictrldate" value="${defaultISO}" min="${tomorrowISO}" onchange="onCtrlDateChange(this.value)">
      <label class="lbl" style="margin-top:4px">🗓 Jours de révision (clique pour sélectionner)</label>
      <div id="calwrap">${buildRevCal()}</div>`;
  }
  document.getElementById('sheet').innerHTML=`
    <div class="handle"></div>
    <div class="sh3">${iC?'⚠️ Ajouter un contrôle':'➕ Ajouter un devoir'}</div>
    <div class="trow">
      <button class="tbtn${!iC?' od':''}" onclick="setType('devoir')">📝 Devoir</button>
      <button class="tbtn${iC?' oc':''}" onclick="setType('controle')">⚠️ Contrôle</button>
    </div>
    <label class="lbl">Matière</label>
    <select class="sel" id="isub">${opts}</select>
    ${extra}
    <div class="btns">
      <button class="bc" onclick="closeSheet()">Annuler</button>
      <button class="bok${iC?' am':''}" onclick="doSave()">${iC?'Enregistrer le contrôle':'Ajouter le devoir'}</button>
    </div>`;
  if(iC)bindRevCal();
}

function buildRevCal(){
  // Calendar showing only revision days selector (ctrl date already set via input)
  const y=calMonth.getFullYear(),m=calMonth.getMonth();
  const fd=new Date(y,m,1).getDay();
  const off=fd===0?6:fd-1;
  const days=new Date(y,m+1,0).getDate();
  const todayISO=isoNow();
  const ctrlISO=ctrlDate?iso(ctrlDate):null;
  const mn=calMonth.toLocaleDateString('fr-FR',{month:'long',year:'numeric'});

  let cells=['Lu','Ma','Me','Je','Ve','Sa','Di'].map(d=>`<div class="cdh">${d}</div>`).join('');
  for(let i=0;i<off;i++)cells+=`<button class="cd emp"></button>`;
  for(let d=1;d<=days;d++){
    const date=new Date(y,m,d,12);
    const diso=iso(date);
    // Past or same/after ctrl date = not selectable for revision
    const isCtrlDay=diso===ctrlISO;
    const isPast=date<=NOW;
    const afterCtrl=ctrlDate&&date>=ctrlDate;
    const disabled=isPast||isCtrlDay||afterCtrl;
    let cls='cd';
    if(disabled)cls+=' past';
    if(diso===todayISO&&!disabled)cls+=' tm';
    if(isCtrlDay)cls+=' sc';
    else if(revDays.has(diso))cls+=' sr';
    cells+=`<button class="${cls}"${disabled?'':` onclick="revCalClick('${diso}')"`}>${d}</button>`;
  }
  const info=`<div class="cal-info" style="color:var(--pink)">${revDays.size} jour${revDays.size>1?'s':''} de révision sélectionné${revDays.size>1?'s':''}</div>`;
  return `<div class="cal-nav">
    <button id="cprev">←</button>
    <div class="cal-month">${mn}</div>
    <button id="cnext">→</button>
  </div>
  <div class="cal-grid">${cells}</div>
  <div class="cal-legend">
    <span><span class="dot" style="background:var(--amber)"></span> Contrôle</span>
    <span><span class="dot" style="background:var(--pink)"></span> Révision</span>
  </div>${info}`;
}
function onCtrlDateChange(val){
  if(!val)return;
  ctrlDate=fromISO(val);
  revDays=new Set(); // reset revisions when ctrl date changes
  calMonth=new Date(ctrlDate.getFullYear(),ctrlDate.getMonth(),1);
  refreshRevCal();
}
function revCalClick(diso){
  revDays.has(diso)?revDays.delete(diso):revDays.add(diso);
  refreshRevCal();
}

function bindRevCal(){
  const p=document.getElementById('cprev'),n=document.getElementById('cnext');
  if(p)p.onclick=()=>{calMonth.setMonth(calMonth.getMonth()-1);refreshRevCal();};
  if(n)n.onclick=()=>{calMonth.setMonth(calMonth.getMonth()+1);refreshRevCal();};
}
function refreshRevCal(){
  const theme=document.getElementById('itheme')&&document.getElementById('itheme').value;
  const w=document.getElementById('calwrap');
  if(w){w.innerHTML=buildRevCal();bindRevCal();}
  if(theme&&document.getElementById('itheme'))document.getElementById('itheme').value=theme;
}

function doSave(){
  const sub=document.getElementById('isub')&&document.getElementById('isub').value;
  if(!sub)return;
  if(addType==='controle'){
    const theme=document.getElementById('itheme')&&document.getElementById('itheme').value.trim();
    if(!theme){alert('Écris le thème du contrôle !');return;}
    if(!ctrlDate){alert('Clique sur la date du contrôle dans le calendrier !');return;}
    const id='c'+Date.now();
    const ctrls=loadC();
    ctrls.push({id,subject:sub,date:iso(ctrlDate),theme,revDays:[...revDays].sort()});
    saveC(ctrls);
    injectCtrl(sub,theme,ctrlDate,id);
    revDays.forEach(rd=>injectRev(sub,theme,fromISO(rd),id));
    schedCtrlNotifs();closeSheet();render();
  }else{
    const di=parseInt(document.getElementById('iday').value);
    const txt=document.getElementById('itxt')&&document.getElementById('itxt').value.trim();
    if(!txt){alert('Décris le devoir !');return;}
    const tasks=loadT(di);
    tasks.push({subject:sub,text:txt,done:false});
    saveT(di,tasks);schedNotifs();closeSheet();wk=0;render();
  }
}

function injectTask(sub,text,date,type,ctrlId){
  for(let wo=-8;wo<=12;wo++){
    const mon=monday(wo);
    for(let di=0;di<5;di++){
      const dd=new Date(mon);dd.setDate(mon.getDate()+di);
      if(iso(dd)===iso(date)){
        const key='t_'+wkKey(wo)+'_'+di;
        let tasks=[];try{tasks=JSON.parse(localStorage.getItem(key))||[];}catch{}
        tasks.push({subject:sub,text,done:false,type,ctrlId});
        localStorage.setItem(key,JSON.stringify(tasks));
        return;
      }
    }
  }
}
function injectCtrl(sub,theme,date,id){injectTask(sub,'Contrôle : '+theme,date,'ctrl',id);}
function injectRev(sub,theme,date,id){injectTask(sub,'Révision '+S(sub).n+' : '+theme,date,'rev',id);}

function closeSheet(){document.getElementById('ov').style.display='none';}

// ── QUIZ ──────────────────────────────────────────────────────────────────────
function openQ(ctrlId,e){
  if(e)e.stopPropagation();
  const c=loadC().find(x=>x.id===ctrlId);
  if(!c){alert('Contrôle introuvable.');return;}
  runQuiz(c);
}
async function runQuiz(ctrl){
  const s=S(ctrl.subject);quizTurn++;
  const isMCQ=quizTurn%2===1;
  document.getElementById('ov').style.display='flex';
  document.getElementById('sheet').innerHTML=`<div class="handle"></div>
    <span class="quiz-sbj ${s.cls}">${s.n}</span>
    <div class="quiz-th">${ctrl.theme}</div>
    <div class="spin"></div>
    <p style="text-align:center;color:var(--muted);font-size:13px">Génération de la question…</p>`;
  const prompt=isMCQ
    ?`Tu es un assistant pédagogique pour un élève de 6ème en France. Sujet : "${ctrl.theme}" — matière : ${s.n}. Génère UN QCM de révision niveau 6ème. RÈGLE STRICTE : question factuelle courte avec une seule bonne réponse (un mot, une date, un nom, une règle). INTERDIT : demander de rédiger un texte, une phrase ou une production écrite. UNIQUEMENT JSON valide sans markdown : {"notion":"Rappel de cours (2-3 phrases max, niveau 6ème)","question":"Question factuelle courte","options":["A. …","B. …","C. …","D. …"],"correct":0}`
    :`Tu es un assistant pédagogique pour un élève de 6ème en France. Sujet : "${ctrl.theme}" — matière : ${s.n}. Génère UNE question de révision où l élève réfléchit puis vérifie. RÈGLE STRICTE : jamais demander de rédiger un texte complet. La réponse doit être courte et vérifiable (quelques mots). Bon exemple : "Quelles sont les terminaisons du passé simple pour le 1er groupe ?" → réponse : "-ai, -as, -a, -âmes, -âtes, -èrent". Mauvais exemple interdit : "Écris un texte avec 3 verbes au passé simple". UNIQUEMENT JSON valide sans markdown : {"notion":"Rappel de cours (2-3 phrases max, niveau 6ème)","question":"Question claire et précise","answer":"Réponse courte et vérifiable"}`;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:prompt}]})
    });
    const data=await res.json();
    const raw=data.content?.find(b=>b.type==='text')?.text||'';
    const q=JSON.parse(raw.replace(/```json|```/g,'').trim());
    showQuiz(ctrl,s,q,isMCQ);
  }catch(err){
    document.getElementById('sheet').innerHTML+=`<p style="color:var(--red);text-align:center;padding:10px">Erreur — vérifie la connexion.</p><button class="bc" onclick="closeSheet()" style="width:100%;margin-top:8px">Fermer</button>`;
  }
}
function showQuiz(ctrl,s,q,isMCQ){
  const id=ctrl.id;
  let qh='';
  if(isMCQ){
    qh=`<div class="opts">${q.options.map((o,i)=>`<button class="opt" onclick="pick(${i},${q.correct},'${id}')">${o}</button>`).join('')}</div>`;
  }else{
    qh=`<button class="rvbtn" id="rvb" onclick="reveal()">👁 Voir la réponse</button>
      <div class="abox" id="abox">✅ ${q.answer}</div>
      <div class="notion" id="notion-box" style="display:none">💡 ${q.notion}</div>
      <button class="qnext" id="qnb" style="display:none" onclick="openQ('${id}')">Autre question ✨</button>`;
  }
  document.getElementById('sheet').innerHTML=`
    <div class="handle"></div>
    <span class="quiz-sbj ${s.cls}">${s.n}</span>
    <div class="quiz-th">${ctrl.theme}</div>
    <div class="qtxt">${q.question}</div>
    ${qh}
    <div class="notion" id="notion-box" style="display:none">💡 ${q.notion}</div>
    <button class="bc" onclick="closeSheet()" style="width:100%;margin-top:12px">Fermer</button>`;
}
function pick(ch,cor,id){
  document.querySelectorAll('.opt').forEach((b,i)=>{
    b.onclick=null;b.style.cursor='default';
    if(i===cor)b.classList.add('ok');else if(i===ch)b.classList.add('bad');
  });
  setTimeout(()=>{
    const nb=document.createElement('button');
    nb.className='qnext';nb.textContent='Autre question ✨';
    nb.onclick=()=>openQ(id);
    document.querySelector('.bc').before(nb);
    const notion=document.getElementById('notion-box');
    if(notion)notion.style.display='block';
  },400);
}
function reveal(){
  document.getElementById('abox').classList.add('show');
  document.getElementById('rvb').style.display='none';
  document.getElementById('qnb').style.display='block';
  const notion=document.getElementById('notion-box');
  if(notion)notion.style.display='block';
}

// ── NOTIFICATIONS ─────────────────────────────────────────────────────────────
async function askNotif(){
  if(!('Notification'in window)){alert('Notifications non supportées.');return;}
  const p=await Notification.requestPermission();
  if(p==='granted'){schedNotifs();schedCtrlNotifs();render();}
}
function schedNotifs(){
  if(typeof Notification==='undefined'||Notification.permission!=='granted')return;
  if(!('serviceWorker'in navigator)||todayCol<0)return;
  const tasks=loadT(todayCol);
  const rem=tasks.filter(t=>!t.done).length;
  if(rem===0)return;
  const target=new Date(NOW);target.setHours(17,0,0,0);
  const delay=target-Date.now();if(delay<=0)return;
  navigator.serviceWorker.ready.then(reg=>{
    reg.active&&reg.active.postMessage({type:'SCHEDULE_NOTIF',
      title:`📚 ${rem} truc${rem>1?'s':''} à faire !`,
      body:`Tu as ${rem} devoir${rem>1?'s':''} aujourd'hui. Allez, courage ! 💪`,
      delay,tag:'daily'});
  });
}
function schedCtrlNotifs(){
  if(typeof Notification==='undefined'||Notification.permission!=='granted')return;
  if(!('serviceWorker'in navigator))return;
  const todayISO=isoNow(),ctrls=loadC();
  navigator.serviceWorker.ready.then(reg=>{
    ctrls.forEach(c=>{
      (c.revDays||[]).filter(rd=>rd===todayISO).forEach(()=>{
        const target=new Date(NOW);target.setHours(17,5,0,0);
        const delay=target-Date.now();if(delay<=0)return;
        reg.active&&reg.active.postMessage({type:'SCHEDULE_NOTIF',
          title:`🎯 Révision : ${S(c.subject).n}`,
          body:`Contrôle sur "${c.theme}" bientôt. 20 min de révision ! 📖`,
          delay,tag:'rev-'+c.id});
      });
    });
  });
}
if('serviceWorker'in navigator){
  navigator.serviceWorker.register('./sw.js').then(()=>{schedNotifs();schedCtrlNotifs();}).catch(()=>{});
}
render();
</script>
</body>
</html>
