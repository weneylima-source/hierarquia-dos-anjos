(function(){
"use strict";

/* ---------- falling starfield ---------- */
(function buildStarfield(){
  const field = document.getElementById("starfield");
  if(!field) return;
  const COUNT = 80;
  for(let i=0;i<COUNT;i++){
    const star = document.createElement("span");
    star.className = "star";
    const size = (Math.random()*2.2 + 1).toFixed(2);          // 1 - 3.2px
    const left = (Math.random()*100).toFixed(2);               // 0 - 100%
    const duration = (Math.random()*12 + 8).toFixed(2);        // 8 - 20s to fall
    const delay = (-(Math.random()*duration)).toFixed(2);      // stagger: already mid-fall on load
    const opacity = (Math.random()*0.5 + 0.35).toFixed(2);     // 0.35 - 0.85
    star.style.left = left + "%";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = duration + "s";
    star.style.animationDelay = delay + "s";
    star.style.setProperty("--star-op", opacity);
    field.appendChild(star);
  }
})();

/* ---------- data ---------- */
/* `img` keys into img/*.webp (or, in the single-file build, into BADGE_DATA). */
const ANGELS = [
{ id:"jibril", name:"Jibril", altName:"Gabriel", img:"islam-jibril",
  role:"Arcanjo da revelação: transmite as mensagens divinas aos profetas, incluindo a entrega do Alcorão, versículo por versículo, ao profeta Muhammad ao longo de 23 anos.",
  meaning:'Também chamado Ruh al-Qudus ("Espírito Santo") e Ruh al-Amin ("Espírito Fiel"). É descrito em hadith com seiscentas asas, em sua forma verdadeira.',
  refs:[
    {cite:"Alcorão 2:97-98", quote:"Jibril é citado nominalmente como aquele que traz a revelação ao coração do profeta, com a permissão de Deus."},
    {cite:"Hadith — Sahih al-Bukhari 4857", quote:"Descreve Jibril em sua forma verdadeira, com seiscentas asas cobrindo o horizonte."}
  ]},
{ id:"mikail", name:"Mikail", altName:"Miguel", img:"islam-mikail",
  role:"Arcanjo responsável pela provisão: encarregado da chuva, dos ventos e do sustento das criaturas, distribuindo o alimento e os recursos da natureza por ordem de Deus.",
  meaning:"Citado ao lado de Jibril como um dos anjos aos quais é devida a mesma reverência — inimizade contra qualquer um deles é tratada, no Alcorão, como inimizade contra Deus.",
  refs:[
    {cite:"Alcorão 2:98", quote:"Quem for inimigo de Deus, de Seus anjos, de Seus mensageiros, de Jibril e de Mikail... Deus é inimigo dos incrédulos."}
  ]},
{ id:"israfil", name:"Israfil", altName:"não citado nominalmente no Alcorão", img:"islam-israfil",
  role:"Anjo da trombeta (as-Sur): soprará o chifre que anunciará o fim do mundo e, depois, a ressurreição de todas as criaturas para o Juízo Final.",
  meaning:"Seu nome não aparece no texto alcorânico; a associação com a trombeta vem da tradição exegética e dos hadiths, a partir da menção do instrumento em si.",
  refs:[
    {cite:"Alcorão 39:68", quote:"E a trombeta será soada, e todos os que estão nos céus e na terra cairão mortos, exceto quem Deus quiser; então será soada outra vez, e eis que se levantarão, olhando."}
  ]},
{ id:"malik", name:"Malik", altName:"guardião do Inferno", img:"islam-malik",
  role:"Anjo que preside e guarda o Inferno (Jahannam), chefiando os anjos guardiões (az-Zabaniyah) encarregados de castigar os condenados.",
  meaning:"É chamado nominalmente pelos condenados no Alcorão, que pedem que ele intervenha junto a Deus por eles.",
  refs:[
    {cite:"Alcorão 43:77", quote:'E clamarão: "Ó Malik! Que teu Senhor acabe conosco!" Ele dirá: "Certamente, permanecereis."'}
  ]},
{ id:"kiraman-katibin", name:"Kiraman e Katibin", altName:"os Nobres Escribas", img:"islam-kiraman-katibin",
  role:"Dupla de anjos registradores designada a cada pessoa — um sobre o ombro direito, registrando as boas ações, outro sobre o esquerdo, registrando as más — compondo o livro de cada vida.",
  meaning:'O nome significa literalmente "os nobres que escrevem", em referência à sua função de escrituração constante.',
  refs:[
    {cite:"Alcorão 82:10-12", quote:"E, sobre vós, há vigilantes, nobres escribas, que sabem o que fazeis."},
    {cite:"Alcorão 50:17-18", quote:"Quando os dois recebedores recebem, sentados à direita e à esquerda, não profere ele palavra alguma sem que haja, junto a ele, um vigia sempre pronto."}
  ]},
{ id:"munkar-nakir", name:"Munkar e Nakir", altName:"não citados no Alcorão", img:"islam-munkar-nakir",
  role:"Dupla de anjos que interroga cada pessoa em sua sepultura sobre sua fé — quem é seu Senhor, qual sua religião, quem foi seu profeta — logo após o enterro.",
  meaning:"Seus nomes não aparecem no Alcorão; a tradição que os nomeia e descreve o interrogatório da sepultura vem dos hadiths.",
  refs:[
    {cite:"Hadith — Sunan al-Tirmidhi", quote:"Primeira fonte a nomear Munkar e Nakir como os dois anjos que interrogam o morto na sepultura."}
  ]},
{ id:"azrael", name:"Malak al-Mawt", altName:"Azrael (nome popular, extra-alcorânico)", img:"islam-azrael",
  role:"O anjo da morte: encarregado de separar a alma do corpo no momento determinado por Deus para cada criatura.",
  meaning:'O Alcorão refere-se a ele apenas como "o anjo da morte" (Malak al-Mawt), sem lhe atribuir um nome próprio — "Azrael" é uma designação popular que se consolidou fora do texto sagrado, por vias da tradição judaico-islâmica posterior.',
  refs:[
    {cite:"Alcorão 32:11", quote:'Dize: "O anjo da morte, que foi encarregado de vós, tomará as vossas almas; então, ao vosso Senhor sereis retornados."'}
  ]}
];

/* ---------- gallery render ---------- */
const grid = document.getElementById("galleryGrid");
ANGELS.forEach(function(a){
  const card = document.createElement("button");
  card.type = "button";
  card.className = "angel-card";
  card.dataset.angel = a.id;
  card.innerHTML =
    '<span class="badge-frame"><img src="img/'+a.img+'.webp" alt="'+a.name+'" loading="lazy"></span>' +
    '<span class="an-name">'+a.name+'</span>' +
    '<span class="an-alt">'+a.altName+'</span>' +
    '<span class="an-role">'+a.role+'</span>' +
    '<span class="an-more">Ver ficha completa</span>';
  grid.appendChild(card);
});

/* ---------- modal ---------- */
const backdrop = document.getElementById("modalBackdrop");
const modalKicker = document.getElementById("modalKicker");
const modalName = document.getElementById("modalName");
const modalOrigin = document.getElementById("modalOrigin");
const modalFunction = document.getElementById("modalFunction");
const modalRefs = document.getElementById("modalRefs");

function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

function openModal(id){
  const a = ANGELS.find(function(x){ return x.id === id; });
  if(!a) return;
  modalKicker.textContent = "Ficha angelical · Tradição islâmica";
  modalName.textContent = a.name;
  modalOrigin.textContent = a.altName;
  modalFunction.innerHTML = esc(a.role) + (a.meaning ? " " + esc(a.meaning) : "");
  modalRefs.innerHTML = a.refs.map(function(r){
    return '<div class="reading"><span class="cite">'+esc(r.cite)+'</span><span class="quote">"'+esc(r.quote)+'"</span></div>';
  }).join("");
  backdrop.classList.add("open");
  document.body.classList.add("modal-open");
}
function closeModal(){
  backdrop.classList.remove("open");
  document.body.classList.remove("modal-open");
}

document.body.addEventListener("click", function(e){
  const card = e.target.closest(".angel-card");
  if(card){ openModal(card.dataset.angel); }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", function(e){ if(e.target===backdrop) closeModal(); });
document.addEventListener("keydown", function(e){ if(e.key==="Escape" && backdrop.classList.contains("open")) closeModal(); });

/* ---------- theme toggle (shares localStorage key with the main page) ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const SUN = '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>';
const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>';

function applyTheme(mode){
  if(mode){ root.setAttribute("data-theme", mode); } else { root.removeAttribute("data-theme"); }
  const dark = mode ? mode==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches !== false;
  themeIcon.innerHTML = dark ? SUN : MOON;
  themeLabel.textContent = dark ? "Modo diurno" : "Modo noturno";
}
let stored = null;
try{ stored = localStorage.getItem("hierarquia-tema"); }catch(err){}
applyTheme(stored);

themeToggle.addEventListener("click", function(){
  const current = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  try{ localStorage.setItem("hierarquia-tema", next); }catch(err){}
});

})();
