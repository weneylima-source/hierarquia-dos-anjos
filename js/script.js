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
const CHOIRS = [
{ num:1, name:"Serafins", img:"serafins",
  fn:"Os mais próximos do trono de Deus; adoram sem cessar e proclamam Sua santidade absoluta.",
  canon:{
    note:"A Escritura não nomeia serafins individualmente — a única figura associada ao coro é Lúcifer, antes da queda.",
    angels:[{name:"Lúcifer",title:"tradição mais comum: identificado como serafim antes da rebelião",source:"Cânon — Isaías",refs:[{cite:"Isaías 14:12-15",quote:"Como caíste do céu, ó estrela da manhã, filho da alva!"}]}],
    readings:[{cite:"Isaías 6:1-7",quote:"Vi o Senhor assentado sobre um alto e sublime trono... serafins estavam por cima dele; e clamava um ao outro: Santo, Santo, Santo é o Senhor dos Exércitos."}]
  },
  apoc:{
    note:"No apócrifo os serafins recebem nomes próprios e postos de comando, o que não ocorre no cânon.",
    angels:[
      {name:"Seraphiel",title:"líder dos serafins, comanda o coro celestial",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 26:2",quote:"Seraphiel, o príncipe, um dos anjos gloriosos... comanda os serafins."}]},
      {name:"Kemuel",title:"porta-voz e guardião dos serafins",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 22B",quote:"Kemuel, o porta-voz que introduz as almas diante do trono."}]},
      {name:"Lúcifer",title:"estrela caída, antes contado entre os seres celestiais",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 86:1-3",quote:"Vi uma estrela cair do céu, e ela se levantou e comeu entre os touros."}]}
    ],
    readings:[
      {cite:"1 Enoque 20:7",quote:"Seraphiel, um dos santos anjos, aquele que preside sobre os que se arrependem."},
      {cite:"3 Enoque 26:2",quote:"Descrição de Seraphiel e dos serafins no sétimo céu."},
      {cite:"1 Enoque 86:1-3",quote:"A estrela caída entre os seres celestiais."}
    ]
  }
},
{ num:2, name:"Querubins", img:"querubins",
  fn:"Guardam a glória e o trono de Deus; protegem lugares sagrados e o conhecimento oculto.",
  canon:{
    note:"Nenhum querubim é nomeado individualmente no cânon, à exceção da referência a Lúcifer como “querubim ungido”.",
    angels:[{name:"Lúcifer",title:"“querubim ungido que cobre”, antes da queda",source:"Cânon — Ezequiel",refs:[{cite:"Ezequiel 28:11-17",quote:"Tu eras querubim ungido que cobre... perfeito eras nos teus caminhos, até que se achou iniquidade em ti."}]}],
    readings:[
      {cite:"Gênesis 3:24",quote:"Pôs querubins ao oriente do jardim do Éden, e uma espada flamejante, para guardar o caminho da árvore da vida."},
      {cite:"Êxodo 25:18-22",quote:"Farás dois querubins de ouro, voltados um para o outro, com as asas estendidas."},
      {cite:"Ezequiel 10:1-22",quote:"Visão dos querubins com quatro faces, quatro asas, e rodas cheias de olhos."},
      {cite:"Salmo 18:10",quote:"Cavalgava sobre um querubim, e voava; sim, voava sobre as asas do vento."},
      {cite:"Hebreus 9:5",quote:"E sobre a arca os querubins da glória, que faziam sombra ao propiciatório."}
    ]
  },
  apoc:{
    note:"Recebem nomes específicos como príncipes guardiões e comandantes dos ofanim.",
    angels:[
      {name:"Cherubiel",title:"príncipe dos querubins",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 22:7",quote:"Cherubiel, o príncipe, um dos anjos gloriosos, que comanda os querubins."}]},
      {name:"Ofaniel",title:"príncipe dos ofanim/querubins",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 25:5",quote:"Ofaniel, o príncipe, encarregado das rodas ardentes."}]},
      {name:"Lúcifer",title:"querubim ungido, antes da rebelião",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 24:3",quote:"Referência ao anjo caído entre os querubins, antes da rebelião."}]}
    ],
    readings:[
      {cite:"3 Enoque 22:7",quote:"Cherubiel comanda os querubins."},
      {cite:"3 Enoque 22:2-13",quote:"Ofaniel e os querubins em seu ofício."},
      {cite:"1 Enoque 24:3",quote:"O anjo caído entre os querubins antes da rebelião."}
    ]
  }
},
{ num:3, name:"Tronos", apocName:"Tronos (Ofanim)", img:"tronos",
  fn:"Contemplam a Deus e sustentam a justiça e o governo divino do universo.",
  canon:{
    note:"Nenhum trono é nomeado individualmente no cânon; a ordem é referida apenas de modo coletivo.",
    angels:[],
    readings:[
      {cite:"Colossenses 1:16",quote:"Por ele foram criadas todas as coisas... sejam tronos, sejam dominações, sejam principados, sejam potestades."},
      {cite:"Daniel 7:9",quote:"Vi que se colocaram tronos, e um Ancião de dias se assentou; suas vestes eram brancas como a neve."},
      {cite:"Apocalipse 4:4",quote:"Ao redor do trono havia vinte e quatro tronos; e sobre os tronos vinte e quatro anciãos assentados."}
    ]
  },
  apoc:{
    note:"Identificados com os “ofanim” (rodas) da visão de Ezequiel, na tradição mística judaica.",
    angels:[
      {name:"Ofaniel",title:"príncipe dos ofanim",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 25:5-6",quote:"Ofaniel como príncipe dos ofanim no quinto céu."}]},
      {name:"Zabkiel",title:"governante dos tronos",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque",quote:"Zabkiel citado como governante do coro dos tronos."}]},
      {name:"Rikbiel",title:"príncipe da carruagem divina (Merkavá)",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 18:1-3",quote:"Rikbiel e a carruagem divina, a Merkavá."}]}
    ],
    readings:[
      {cite:"3 Enoque 25:5-6",quote:"Ofaniel como príncipe dos ofanim no quinto céu."},
      {cite:"3 Enoque 18:1-3",quote:"Rikbiel e a carruagem divina, a Merkavá."}
    ]
  }
},
{ num:4, name:"Dominações", img:"dominacoes",
  fn:"Regulam o dever e a obediência das ordens angélicas inferiores.",
  canon:{
    note:"Nenhuma dominação é nomeada individualmente no cânon.",
    angels:[],
    readings:[
      {cite:"Colossenses 1:16",quote:"...tronos, dominações, principados, potestades — tudo foi criado por ele e para ele."},
      {cite:"Efésios 1:21",quote:"Muito acima de todo principado, e potestade, e poder, e domínio."}
    ]
  },
  apoc:{
    note:"Recebem nomes de príncipes na tradição rabínica e na literatura enóquica.",
    angels:[
      {name:"Zadkiel",title:"príncipe das dominações",source:"Apócrifo — tradição rabínica",refs:[{cite:"Tradição rabínica",quote:"Zadkiel mencionado como líder dos domínios angélicos."}]},
      {name:"Zakzakiel",title:"governante das dominações",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque",quote:"Zakzakiel citado como governante das dominações."}]}
    ],
    readings:[
      {cite:"Tradição rabínica",quote:"Zadkiel e Zakzakiel mencionados como líderes dos domínios angélicos."},
      {cite:"Pseudo-Dionísio, De Coelesti Hierarchia",quote:"Descreve as dominações como reguladoras dos deveres angélicos."}
    ]
  }
},
{ num:5, name:"Virtudes", img:"virtudes",
  fn:"Transmitem a graça divina e operam milagres; sustentam a ordem cósmica.",
  canon:{
    note:"Nenhuma virtude é nomeada individualmente no cânon.",
    angels:[],
    readings:[
      {cite:"Romanos 8:38",quote:"Nem anjos, nem principados, nem potestades... nada poderá separar-nos do amor de Deus."},
      {cite:"Efésios 1:21",quote:"Acima de todo principado, e potestade, e poder, e domínio."}
    ]
  },
  apoc:{
    note:"Associadas a arcanjos consagrados e a príncipes específicos do coro.",
    angels:[
      {name:"Gabriel",title:"também associado ao coro das virtudes",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 40:9",quote:"Gabriel como um dos quatro anjos principais diante do Senhor."}]},
      {name:"Baradiel",title:"príncipe das virtudes",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque",quote:"Baradiel como líder do coro das virtudes."}]},
      {name:"Tarshish",title:"príncipe das virtudes",source:"Apócrifo — tradição judaica",refs:[{cite:"Tradição judaica",quote:"Tarshish nomeado entre os príncipes das virtudes."}]}
    ],
    readings:[
      {cite:"1 Enoque 40:9",quote:"Gabriel como um dos quatro anjos principais diante do Senhor."},
      {cite:"1 Enoque",quote:"Baradiel como líder do coro das virtudes."}
    ]
  }
},
{ num:6, name:"Potestades", img:"potestades",
  fn:"Combatem as forças do mal e mantêm a ordem moral; são os guerreiros celestiais.",
  canon:{
    note:"Nenhuma potestade é nomeada individualmente no cânon.",
    angels:[],
    readings:[
      {cite:"Efésios 3:10",quote:"Para que agora seja manifestada aos principados e potestades, nas regiões celestiais, a multiforme sabedoria de Deus."},
      {cite:"Efésios 6:12",quote:"Não temos que lutar contra a carne e o sangue, mas... contra as potestades, contra os príncipes das trevas."},
      {cite:"Colossenses 2:15",quote:"E, despojando os principados e potestades, os exibiu publicamente, triunfando sobre eles."}
    ]
  },
  apoc:{
    note:"Lideradas por figuras que, em alguns relatos, caem junto com Lúcifer.",
    angels:[
      {name:"Kamael",title:"líder das potestades",source:"Apócrifo — 1 Enoque; Cabala",refs:[{cite:"1 Enoque",quote:"Kamael citado como príncipe das potestades."}]},
      {name:"Samael",title:"antes da queda, líder das potestades",source:"Apócrifo — Apocalipse de Moisés",refs:[{cite:"Apocalipse de Moisés",quote:"Samael como anjo caído, originalmente líder das potestades."}]}
    ],
    readings:[
      {cite:"1 Enoque",quote:"Kamael como príncipe das potestades."},
      {cite:"Apocalipse de Moisés",quote:"Samael como anjo caído, originalmente líder das potestades."}
    ]
  }
},
{ num:7, name:"Principados", img:"principados",
  fn:"Protegem nações, cidades e comunidades; são os anjos-guardiões dos povos.",
  canon:{
    note:"Miguel é a única figura nomeada nesta função no texto bíblico.",
    angels:[{name:"Miguel",title:"príncipe de Israel",source:"Cânon — Daniel",refs:[{cite:"Daniel 10:13,21; 12:1",quote:"Naquele tempo se levantará Miguel, o grande príncipe que se levanta a favor dos filhos do teu povo."}]}],
    readings:[
      {cite:"Daniel 10:13",quote:"Miguel, um dos primeiros príncipes, veio ajudar-me."},
      {cite:"Daniel 10:21",quote:"Ninguém há que se esforce comigo... a não ser Miguel, vosso príncipe."},
      {cite:"Daniel 12:1",quote:"Naquele tempo se levantará Miguel, o grande príncipe."}
    ]
  },
  apoc:{
    note:"Cada nação recebe seu príncipe angélico na tradição rabínica e mística.",
    angels:[
      {name:"Miguel",title:"príncipe de Israel",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 20:5",quote:"Miguel, um dos santos anjos, posto sobre a melhor parte da humanidade."}]},
      {name:"Samael",title:"príncipe de Roma / Edom",source:"Apócrifo — tradição rabínica",refs:[{cite:"Tradição rabínica",quote:"Samael identificado como príncipe angélico de Roma/Edom."}]},
      {name:"Lelel",title:"príncipe da noite",source:"Apócrifo — Zohar",refs:[{cite:"Zohar",quote:"Lelel como príncipe da noite."}]},
      {name:"Sandalphon",title:"príncipe do último céu",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 4:1-3",quote:"Sandalphon como príncipe do último céu."}]}
    ],
    readings:[
      {cite:"1 Enoque 20:5",quote:"Miguel, um dos santos anjos, posto sobre a melhor parte da humanidade."},
      {cite:"3 Enoque 4:1-3",quote:"Sandalphon como príncipe do último céu."},
      {cite:"Zohar",quote:"Lelel como príncipe da noite."}
    ]
  }
},
{ num:8, name:"Arcanjos", img:"arcanjos",
  fn:"Mensageiros principais de Deus; transmitem revelações e comandam os exércitos celestiais.",
  canon:{
    note:"Quatro nomes reúnem tradição canônica e deuterocanônica; apenas três têm menção plena no cânon protestante.",
    angels:[
      {name:"Miguel",title:"arcanjo guerreiro",source:"Cânon — Daniel, Judas, Apocalipse",refs:[{cite:"Daniel 10:13,21",quote:"Miguel, vosso príncipe."},{cite:"Judas 1:9",quote:"Miguel, o arcanjo, quando contendia com o diabo."},{cite:"Apocalipse 12:7",quote:"Miguel e os seus anjos batalharam contra o dragão."}]},
      {name:"Gabriel",title:"arcanjo mensageiro",source:"Cânon — Daniel, Lucas",refs:[{cite:"Daniel 8:16; 9:21",quote:"Gabriel, explica a este a visão."},{cite:"Lucas 1:19,26",quote:"Eu sou Gabriel, que assisto diante de Deus."}]},
      {name:"Rafael",title:"arcanjo curador",source:"Deuterocanônico — Tobias",refs:[{cite:"Tobias 12:15",quote:"Eu sou Rafael, um dos sete santos anjos que apresentam as orações dos santos."}]},
      {name:"Uriel",title:"tradição extracanônica; venerado em algumas igrejas orientais",source:"Fora do cânon protestante",refs:[{cite:"Tradição patrística",quote:"Nome associado à luz e ao discernimento; ausente do cânon hebraico e protestante."}]}
    ],
    readings:[
      {cite:"Daniel 8:16",quote:"Gabriel, explica a este a visão."},
      {cite:"Lucas 1:19",quote:"Eu sou Gabriel, que assisto diante de Deus."},
      {cite:"Lucas 1:26",quote:"Deus enviou o anjo Gabriel a uma cidade da Galileia, chamada Nazaré."},
      {cite:"Judas 1:9",quote:"Miguel, o arcanjo, quando contendia com o diabo."},
      {cite:"Apocalipse 12:7",quote:"Miguel e os seus anjos batalharam contra o dragão."},
      {cite:"Tobias 12:15",quote:"Eu sou Rafael, um dos sete santos anjos."}
    ]
  },
  apoc:{
    note:"A tradição enóquica amplia a lista canônica para até sete arcanjos.",
    angels:[
      {name:"Uriel",title:"um dos arcanjos principais na lista enóquica",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 9:1; 20:1-8",quote:"Miguel, Gabriel, Rafael e Uriel viram o sangue derramado sobre a terra."}]},
      {name:"Raguel",title:"arcanjo da lista enóquica",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 20:1-8",quote:"Lista dos sete arcanjos: Uriel, Rafael, Raguel, Miguel, Saraqael, Gabriel, Remiel."}]},
      {name:"Saraqael",title:"arcanjo da lista enóquica",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 20:1-8",quote:"Saraqael, encarregado dos espíritos que pecam contra o espírito."}]},
      {name:"Remiel",title:"arcanjo da lista enóquica",source:"Apócrifo — 1 Enoque",refs:[{cite:"1 Enoque 20:1-8",quote:"Remiel, posto sobre os que ressuscitam."}]}
    ],
    readings:[
      {cite:"1 Enoque 9:1",quote:"Miguel, Gabriel, Rafael e Uriel viram o sangue derramado sobre a terra."},
      {cite:"1 Enoque 20:1-8",quote:"Lista dos sete arcanjos: Uriel, Rafael, Raguel, Miguel, Saraqael, Gabriel, Remiel."},
      {cite:"4 Esdras 4:1",quote:"Uriel como guia e intérprete das visões de Esdras."},
      {cite:"Tobias 12:15",quote:"Eu sou Rafael — fonte partilhada com o cânon deuterocanônico."}
    ]
  }
},
{ num:9, name:"Anjos", apocName:"Anjos (Malakhim)", img:"anjos",
  fn:"Mensageiros e guardiões; ministram diretamente aos seres humanos e executam missões divinas.",
  canon:{
    note:"Inúmeros anjos são mencionados sem nome individual; Miguel, Gabriel e Rafael são as exceções nomeadas.",
    angels:[],
    readings:[
      {cite:"Gênesis 16:7",quote:"O anjo do Senhor a achou junto a uma fonte de água no deserto."},
      {cite:"Salmo 91:11",quote:"Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos."},
      {cite:"Mateus 18:10",quote:"Os seus anjos, nos céus, sempre veem a face de meu Pai."},
      {cite:"Hebreus 13:2",quote:"Não vos esqueçais da hospitalidade... alguns, sem o saber, hospedaram anjos."},
      {cite:"Apocalipse 5:11",quote:"A voz de muitos anjos ao redor do trono... e o número deles era milhões de milhões."}
    ]
  },
  apoc:{
    note:"Mensageiros comuns; na tradição, cada pessoa possui um anjo da guarda nomeado. O mesmo grupo de textos também nomeia os anjos que se rebelaram nesta ordem, como os Vigilantes.",
    angels:[
      {name:"Sandalphon",title:"anjo da oração, gêmeo de Metatron",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 48D",quote:"Sandalphon como intermediário entre Metatron e a oração."}]},
      {name:"Metatron",title:"anjo da face, escriba celestial",source:"Apócrifo — 3 Enoque",refs:[{cite:"3 Enoque 3-4",quote:"Metatron como 'anjo da face' e escriba celestial."}]},
      {name:"Raziel",title:"anjo dos mistérios",source:"Apócrifo — Sefer Raziel HaMalakh",refs:[{cite:"Sefer Raziel HaMalakh",quote:"Raziel como revelador dos mistérios divinos a Adão."}]},
      {name:"Ariel",title:"anjo da natureza e dos elementos",source:"Apócrifo — 3 Enoque; 2 Baruc",refs:[{cite:"2 Baruc",quote:"Ariel como anjo das dimensões e da natureza."}]},
      {name:"Azazel",title:"líder dos Vigilantes (Grigori); ensinou aos homens a guerra e a metalurgia — no cânon (Lv 16), o termo não designa explicitamente um anjo",source:"Apócrifo — 1 Enoque (Vigilantes); cf. Levítico 16 no cânon",refs:[
        {cite:"1 Enoque 8:1",quote:"Azazel ensinou os homens a fazer espadas, facas e couraças... e todo tipo de instrumentos de guerra."},
        {cite:"1 Enoque 10:4-6",quote:"Deus ordena a Rafael que amarre Azazel e o lance nas trevas do deserto, por ter revelado toda iniquidade aos homens."},
        {cite:"Levítico 16:8-10",quote:"...um bode para o Senhor, e o outro para Azazel... para enviá-lo ao deserto, a Azazel."}
      ]}
    ],
    readings:[
      {cite:"3 Enoque 3-4",quote:"Metatron como 'anjo da face' e escriba celestial."},
      {cite:"3 Enoque 48D",quote:"Sandalphon como intermediário entre Metatron e a oração."},
      {cite:"Sefer Raziel HaMalakh",quote:"Raziel como revelador dos mistérios divinos a Adão."},
      {cite:"2 Baruc",quote:"Ariel como anjo das dimensões e da natureza."},
      {cite:"1 Enoque 8:1-2; 10:4-8",quote:"Azazel, líder dos Vigilantes: uniu-se a mulheres humanas, gerando os Nefilins, e ensinou a guerra e a metalurgia — por isso é acorrentado no deserto por ordem divina."},
      {cite:"Levítico 16:8-10",quote:"No texto canônico, 'Azazel' surge apenas associado ao ritual do bode expiatório no Yom Kipur — sem ser identificado ali como uma entidade angélica."}
    ]
  }
}
];

/* ---------- render choirs ---------- */
const choirsEl = document.getElementById("choirs");
const orderItems = document.getElementById("orderItems");
let angelSeq = 0;

function readingsHtml(list){
  return list.map(r => '<div class="reading"><span class="cite">'+r.cite+'</span><span class="quote">"'+r.quote+'"</span></div>').join("");
}
function chipHtml(a,id){
  return '<button type="button" class="angel-chip" data-angel="'+id+'"><span class="nm">'+a.name+'</span><span class="role">'+a.title+'</span></button>';
}
function medallionHtml(ch){
  return '<div class="badge-frame">'+
    '<img src="img/'+ch.img+'.webp" alt="Selo do coro dos '+ch.name+'" loading="lazy">'+
    '<span class="num-chip">'+ch.num+'</span>'+
    '</div>'+
    '<span class="medal-name">'+ch.name+'</span>';
}

const angelRegistry = {};

CHOIRS.forEach(function(ch){
  const row = document.createElement("section");
  row.className = "choir-row";
  row.id = "choir-"+ch.num;

  const canonChips = ch.canon.angels.length
    ? ch.canon.angels.map(a=>{ const id="a"+(angelSeq++); angelRegistry[id]={angel:a,choir:ch,side:"canon"}; return chipHtml(a,id); }).join("")
    : '<span class="empty">Nenhum nome individual no cânon</span>';
  const apocChips = ch.apoc.angels.length
    ? ch.apoc.angels.map(a=>{ const id="a"+(angelSeq++); angelRegistry[id]={angel:a,choir:ch,side:"apoc"}; return chipHtml(a,id); }).join("")
    : '<span class="empty">Sem nomes próprios registrados</span>';

  row.innerHTML =
    '<div class="choir-grid">'+
      '<article class="plate plate-canon">'+
        '<div class="plate-kicker"><span class="tag">Cânon bíblico</span></div>'+
        '<h3>'+ch.name+'</h3>'+
        '<p class="desc">'+ch.fn+'</p>'+
        '<p class="note">'+ch.canon.note+'</p>'+
        '<div class="names">'+canonChips+'</div>'+
        '<div class="readings"><p class="rd-label">Leituras</p>'+readingsHtml(ch.canon.readings)+'</div>'+
        '<button class="explode-btn ui" type="button" data-explode="'+ch.num+'"><span class="arrow">▾</span> Ver leituras</button>'+
      '</article>'+
      '<button type="button" class="medallion" data-explode="'+ch.num+'" aria-label="Explodir coro '+ch.num+': '+ch.name+'">'+
        medallionHtml(ch)+
      '</button>'+
      '<article class="plate plate-apoc">'+
        '<div class="plate-kicker"><span class="tag">Tradição apócrifa</span></div>'+
        '<h3>'+(ch.apocName||ch.name)+'</h3>'+
        '<p class="desc">'+ch.fn+'</p>'+
        '<p class="note">'+ch.apoc.note+'</p>'+
        '<div class="names">'+apocChips+'</div>'+
        '<div class="readings"><p class="rd-label">Leituras</p>'+readingsHtml(ch.apoc.readings)+'</div>'+
        '<button class="explode-btn ui" type="button" data-explode="'+ch.num+'"><span class="arrow">▾</span> Ver leituras</button>'+
      '</article>'+
    '</div>';

  choirsEl.appendChild(row);

  const navBtn = document.createElement("button");
  navBtn.type = "button";
  navBtn.className = "nav-item";
  navBtn.textContent = ch.name;
  navBtn.addEventListener("click", function(){ document.getElementById("choir-"+ch.num).scrollIntoView({behavior:"smooth", block:"start"}); });
  orderItems.appendChild(navBtn);
});

/* ---------- explode toggling ---------- */
document.body.addEventListener("click", function(e){
  const trigger = e.target.closest("[data-explode]");
  if(!trigger) return;
  // ignore clicks that originated on an angel chip nested inside a plate (handled separately)
  if(e.target.closest(".angel-chip")) return;
  const row = document.getElementById("choir-"+trigger.dataset.explode);
  if(!row) return;
  row.classList.toggle("is-exploded");
});

const explodeAllBtn = document.getElementById("explodeAll");
explodeAllBtn.addEventListener("click", function(){
  const rows = document.querySelectorAll(".choir-row");
  const anyCollapsed = Array.from(rows).some(r=>!r.classList.contains("is-exploded"));
  rows.forEach(r=> r.classList.toggle("is-exploded", anyCollapsed));
  explodeAllBtn.classList.toggle("is-on", anyCollapsed);
  explodeAllBtn.textContent = anyCollapsed ? "⊖ Recolher tudo" : "⊕ Explodir tudo";
});

/* ---------- modal ---------- */
const backdrop = document.getElementById("modalBackdrop");
const modalName = document.getElementById("modalName");
const modalOrigin = document.getElementById("modalOrigin");
const modalFunction = document.getElementById("modalFunction");
const modalHierarchy = document.getElementById("modalHierarchy");
const modalRefs = document.getElementById("modalRefs");
const modalKicker = document.getElementById("modalKicker");
let lastFocused = null;

function openModal(id){
  const rec = angelRegistry[id];
  if(!rec) return;
  const {angel, choir, side} = rec;
  modalKicker.textContent = side==="canon" ? "Ficha angelical · Cânon bíblico" : "Ficha angelical · Tradição apócrifa";
  modalName.textContent = angel.name;
  modalOrigin.textContent = angel.source;
  modalFunction.textContent = angel.title.charAt(0).toUpperCase()+angel.title.slice(1)+". "+choir.fn;
  modalHierarchy.textContent = choir.num+"ª ordem — "+(side==="apoc" && choir.apocName ? choir.apocName : choir.name);
  modalRefs.innerHTML = angel.refs.map(r=>'<div class="reading"><span class="cite">'+r.cite+'</span><span class="quote">"'+r.quote+'"</span></div>').join("");
  lastFocused = document.activeElement;
  backdrop.classList.add("open");
  document.getElementById("modalClose").focus();
}
function closeModal(){
  backdrop.classList.remove("open");
  if(lastFocused) lastFocused.focus();
}
document.body.addEventListener("click", function(e){
  const chip = e.target.closest(".angel-chip");
  if(chip){ openModal(chip.dataset.angel); }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", function(e){ if(e.target===backdrop) closeModal(); });
document.addEventListener("keydown", function(e){ if(e.key==="Escape" && backdrop.classList.contains("open")) closeModal(); });

/* ---------- theme toggle ---------- */
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
