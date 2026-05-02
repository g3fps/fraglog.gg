export const MAPS = [
  { id:"ascent",   name:"Ascent",   img:"https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png" },
  { id:"bind",     name:"Bind",     img:"https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png" },
  { id:"haven",    name:"Haven",    img:"https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png" },
  { id:"split",    name:"Split",    img:"https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png" },
  { id:"fracture", name:"Fracture", img:"https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png" },
  { id:"pearl",    name:"Pearl",    img:"https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png" },
  { id:"icebox",   name:"Icebox",   img:"https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png" },
  { id:"breeze",   name:"Breeze",   img:"https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png" },
  { id:"lotus",    name:"Lotus",    img:"https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png" },
  { id:"sunset",   name:"Sunset",   img:"https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png" },
  { id:"abyss",    name:"Abyss",    img:"https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png" },
  { id:"corrode",  name:"Corrode",  img:"https://media.valorant-api.com/maps/1c18ab1f-420d-0d8b-71d0-77ad3c439115/splash.png" },
];

export const AGENTS = [
  {id:"jett",     name:"Jett",       role:"Duelist"},
  {id:"reyna",    name:"Reyna",      role:"Duelist"},
  {id:"raze",     name:"Raze",       role:"Duelist"},
  {id:"neon",     name:"Neon",       role:"Duelist"},
  {id:"phoenix",  name:"Phoenix",    role:"Duelist"},
  {id:"yoru",     name:"Yoru",       role:"Duelist"},
  {id:"iso",      name:"Iso",        role:"Duelist"},
  {id:"waylay",   name:"Waylay",     role:"Duelist"},
  {id:"omen",     name:"Omen",       role:"Controller"},
  {id:"viper",    name:"Viper",      role:"Controller"},
  {id:"brimstone",name:"Brimstone",  role:"Controller"},
  {id:"astra",    name:"Astra",      role:"Controller"},
  {id:"harbor",   name:"Harbor",     role:"Controller"},
  {id:"clove",    name:"Clove",      role:"Controller"},
  {id:"miks",     name:"Miks",       role:"Controller"},
  {id:"sage",     name:"Sage",       role:"Sentinel"},
  {id:"cypher",   name:"Cypher",     role:"Sentinel"},
  {id:"killjoy",  name:"Killjoy",    role:"Sentinel"},
  {id:"chamber",  name:"Chamber",    role:"Sentinel"},
  {id:"deadlock", name:"Deadlock",   role:"Sentinel"},
  {id:"vyse",     name:"Vyse",       role:"Sentinel"},
  {id:"veto",     name:"Veto",       role:"Sentinel"},
  {id:"sova",     name:"Sova",       role:"Initiator"},
  {id:"breach",   name:"Breach",     role:"Initiator"},
  {id:"skye",     name:"Skye",       role:"Initiator"},
  {id:"kayo",     name:"KAY/O",      role:"Initiator"},
  {id:"fade",     name:"Fade",       role:"Initiator"},
  {id:"gekko",    name:"Gekko",      role:"Initiator"},
  {id:"tejo",     name:"Tejo",       role:"Initiator"},
];

export const ROLES_ORDER = ["Duelist","Controller","Sentinel","Initiator"];
export const ROLE_DOTS = {Duelist:"#FF8C42",Controller:"#4A9EFF",Sentinel:"#6BCF6B",Initiator:"#FF6B9D"};

export const VODS = {
  ascent: {
    jett: [
      { id:"7R6AVy9l2u4", title:"ENVY ion Jett Ascent OPERATOR GOAT", player:"ion2x", date:"2026-04-30" },
      { id:"KM0I4IvErIo", title:"FUR koalanoob Jett Ascent RADIANT RANKED", player:"koalanoob", date:"2026-04-30" },
    ],
    reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  bind: {
    jett: [
      { id:"J8uWgFK_aU0", title:"florescent Jett Bind ONE TAPS", player:"florescent", date:"2026-04-23" },
      { id:"5MnQqTe22Ng", title:"florescent Jett Bind STRETCH RES GOAT", player:"florescent", date:"2026-04-08" },
      { id:"dxEJFSpu06k", title:"ENVY demon1 Jett Bind RADIANT RANKED", player:"demon1", date:"2026-04-11" },
      { id:"nXt4SR-lDcA", title:"MIBR aspas Jett Bind RADIANT GOAT", player:"aspas", date:"2026-02-04" },
    ],
    reyna: [
      { id:"YvCpKibWrTg", title:"C9 OXY Reyna Bind ONE TAPS", player:"OXY", date:"2026-04-10" },
      { id:"SOLF1b7zWy8", title:"C9 OXY Reyna Bind REYNA MASTER", player:"OXY", date:"2026-04-07" },
    ],
    raze: [
      { id:"EyMk929uvbw", title:"Meiy Raze Bind RADIANT RANKED", player:"Meiy", date:"2026-04-27" },
      { id:"ZubGAiJStwQ", title:"Tarik Raze Bind RANKED DOMINATION", player:"Tarik", date:"2026-04-24" },
      { id:"bWVrVMP2tuE", title:"NRG s0m Raze Bind CHAMPION ENTRY", player:"s0m", date:"2026-04-18" },
      { id:"Xs1azsao9eQ", title:"DFM meiy Raze Bind APAC DOMINATION", player:"meiy", date:"2026-04-30" },
      { id:"adXIGnXEhNc", title:"M8 marteen Raze Bind LOW SENS GOD", player:"marteen", date:"2026-02-18" },
    ],
    neon: [
      { id:"9hyZXjUtu98", title:"C9 OXY Neon Bind RADIANT RANKED", player:"OXY", date:"2026-04-28" },
      { id:"K2b9lpVZZ1Q", title:"C9 OXY Neon Bind RADIANT", player:"OXY", date:"2026-04-25" },
      { id:"c70REF7I5PQ", title:"C9 OXY Neon Bind MVP", player:"OXY", date:"2026-04-26" },
      { id:"0JR2vWlKaj4", title:"TenZ Neon Bind RADIANT RANKED", player:"TenZ", date:"2026-04-09" },
      { id:"mbQKhu1V_OA", title:"canezerra Neon Bind RADIANT MVP", player:"canezerra", date:"2026-03-22" },
      { id:"eVCvhwiCNIs", title:"C9 OXY Neon Bind RADIANT RANKED", player:"OXY", date:"2026-04-10" },
      { id:"fLj-n6g5Nv0", title:"C9 OXY Neon Bind RADIANT SHOTGUN", player:"OXY", date:"2026-04-11" },
    ],
    phoenix: [
      { id:"5YgWGGvgitM", title:"NRG s0m Phoenix Bind RANKED DOMINATION", player:"s0m", date:"2026-04-23" },
      { id:"BOs80ecs7aA", title:"DFM akame Phoenix Bind APAC RADIANT MVP", player:"akame", date:"2026-04-27" },
    ],
    yoru: [
      { id:"vCFkSKCOS_k", title:"ENVY Eggsterr Yoru Bind RADIANT MVP", player:"Eggsterr", date:"2026-01-22" },
    ],
    iso: [], waylay: [
      { id:"I_OHZP8iKtw", title:"GEN Karon Waylay Bind INSANE ENTRY", player:"Karon", date:"2026-04-06" },
    ],
    omen: [],
    viper: [
      { id:"oXNMqWmByWE", title:"NRG s0m Viper Bind RADIANT RANKED", player:"s0m", date:"2026-04-25" },
      { id:"r3id0ymV5f8", title:"TL nAts Viper Bind SMOKES", player:"nAts", date:"2026-04-20" },
      { id:"u8niDrEEYlQ", title:"nAts Viper Bind PRO SMOKES", player:"nAts", date:"2026-04-30" },
      { id:"8coM4-osiMM", title:"TL nAts Viper Bind RADIANT RANKED", player:"nAts", date:"2026-04-05" },
      { id:"CGxAXp9Bo7g", title:"TL nAts Viper Bind SMOKES MASTER", player:"nAts", date:"2026-04-14" },
      { id:"yAW8BRd1ITY", title:"TL nAts Viper Bind SMOKES GOAT", player:"nAts", date:"2026-04-09" },
    ],
    brimstone: [], astra: [], harbor: [],
    clove: [
      { id:"vFTJnO-7Dj4", title:"Marved Clove Bind RADIANT RANKED", player:"Marved", date:"2026-04-28" },
    ],
    miks: [], sage: [], cypher: [], killjoy: [],
    chamber: [
      { id:"7cJSL26ceNY", title:"aleksandar Chamber Bind RADIANT ONE TAPS", player:"aleksandar", date:"2026-04-18" },
      { id:"p_kNEhm9tBM", title:"NRG s0m Chamber Bind RADIANT AIM", player:"s0m", date:"2026-04-12" },
    ],
    deadlock: [], vyse: [], veto: [],
    sova: [
      { id:"Mzikz9_mPYg", title:"PRX f0rsaken Sova Bind LATAM RADIANT", player:"f0rsaken", date:"2026-03-11" },
    ],
    breach: [],
    skye: [
      { id:"npYkkGSRO-k", title:"aleksandar Skye Bind RADIANT AIMER", player:"aleksandar", date:"2026-04-23" },
      { id:"RQpkYV17hZ4", title:"NRG s0m Skye Bind RANKED", player:"s0m", date:"2026-04-23" },
      { id:"p6Z8iDbUGIg", title:"s0m Skye Bind RANKED", player:"s0m", date:"2026-04-23" },
      { id:"Bikt3AwN-Pg", title:"aleksandar Skye Bind RADIANT UTIL", player:"aleksandar", date:"2026-04-24" },
      { id:"KCjLPjt7_dE", title:"NRG s0m Skye Bind RADIANT FLASHES", player:"s0m", date:"2026-04-04" },
      { id:"KTHm7l_8N4o", title:"MIBR Sacy Skye Bind RADIANT MVP", player:"Sacy", date:"2026-05-02" },
    ],
    kayo: [], fade: [], gekko: [], tejo: [],
  },
  haven: {
    jett: [
      { id:"SdQGH21gDvE", title:"ENVY ion Jett Haven RADIANT RANKED w/NRG s0m", player:"ion2x", date:"2026-04-26" },
    ],
    reyna: [
      { id:"GkkolEIngtQ", title:"florescent Reyna Haven RADIANT RANKED", player:"florescent", date:"2026-05-01" },
      { id:"sgLH4Z8IRpA", title:"C9 OXY Reyna Haven INSANE AIM", player:"OXY", date:"2026-04-12" },
      { id:"ADCeejaYgFM", title:"florescent Reyna Haven ONE TAP INSANITY", player:"florescent", date:"2026-05-02" },
    ],
    raze: [],
    neon: [
      { id:"FoR9881M0lY", title:"100T Asuna Neon Haven RADIANT SHOTGUN", player:"Asuna", date:"2026-04-18" },
      { id:"s7uUPgHjhuM", title:"C9 OXY Neon Haven TENZ RANKED", player:"OXY", date:"2026-04-18" },
      { id:"j6vaAXceK6Y", title:"ZETA Absol Neon Haven RADIANT RANKED", player:"Absol", date:"2026-02-21" },
    ],
    phoenix: [
      { id:"kJkmPye26Ew", title:"NRG s0m Phoenix Haven RADIANT RANKED", player:"s0m", date:"2026-04-25" },
      { id:"UaAUxFETSoI", title:"florescent Phoenix Haven RADIANT RANKED", player:"florescent", date:"2026-04-22" },
      { id:"I98Ccnia6q0", title:"ENVY demon1 Phoenix Haven RADIANT FLASHES", player:"demon1", date:"2026-04-19" },
      { id:"HwMnbjWb4Ek", title:"QOR derrek Phoenix Haven RADIANT RANKED", player:"derrek", date:"2026-04-19" },
      { id:"lsGS9jmCtGQ", title:"NRG brawk Phoenix Haven RADIANT FLASHES", player:"brawk", date:"2026-04-13" },
    ],
    yoru: [], iso: [
      { id:"2hiEiJjmYPY", title:"canezerra Iso Haven RADIANT RANKED", player:"canezerra", date:"2026-04-08" },
    ],
    waylay: [],
    omen: [],
    viper: [
      { id:"Ao43i-YAfOs", title:"NAVI hiro Viper Haven RADIANT", player:"hiro", date:"2026-04-13" },
    ],
    brimstone: [], astra: [],
    harbor: [
      { id:"1A9M5fk-Lpg", title:"NRG s0m Harbor Haven RADIANT SMOKES", player:"s0m", date:"2026-04-03" },
    ],
    clove: [
      { id:"VQ5eQo_uT64", title:"dapr Clove Haven SMOKES", player:"dapr", date:"2026-04-14" },
      { id:"PSRZJBmdfZU", title:"NS Xross Clove Haven MASTERS CHAMPION", player:"Xross", date:"2026-04-13" },
      { id:"u4caHTd04f0", title:"yanyan Clove Haven NO MAP COVER", player:"yanyan", date:"2026-03-18" },
    ],
    miks: [
      { id:"_bLFgur4qNw", title:"TL nAts Miks Haven RADIANT SMOKES", player:"nAts", date:"2026-03-21" },
      { id:"qrTbIcHXag0", title:"canezerra Miks Haven RADIANT RANKED", player:"canezerra", date:"2026-03-20" },
    ],
    sage: [],
    cypher: [
      { id:"CrMu154qGPE", title:"TL nAts Cypher Haven RADIANT", player:"nAts", date:"2026-04-21" },
      { id:"oqRYPJEkZiY", title:"NRG s0m Cypher Haven RADIANT CAMERAS", player:"s0m", date:"2026-04-19" },
      { id:"j7apmHfiZWQ", title:"ENVY demon1 Cypher Haven TIER 1 SENTI", player:"demon1", date:"2026-04-20" },
      { id:"OsVy3UdPijE", title:"NRG s0m Cypher Haven RADIANT RANKED", player:"s0m", date:"2026-04-17" },
    ],
    killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  split: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  fracture: {
    jett: [
      { id:"WQFVi2Hqwh4", title:"ENVY ion Jett Fracture RADIANT RANKED", player:"ion2x", date:"2026-04-29" },
      { id:"xrGnIm0yWlQ", title:"C9 OXY Jett Fracture RADIANT RANKED", player:"OXY", date:"2026-04-19" },
    ],
    reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [],
    killjoy: [
      { id:"9v9iD-WvQ6s", title:"Inspire Killjoy Fracture RADIANT SETUPS", player:"Inspire", date:"2026-04-05" },
    ],
    chamber: [
      { id:"Sego0UGSJRk", title:"LEV Sato Chamber Fracture RADIANT RANKED", player:"sato", date:"2026-04-28" },
      { id:"f6G6AVh80pY", title:"C9 OXY Chamber Fracture RADIANT ONLY HEADS", player:"OXY", date:"2026-04-21" },
      { id:"ZxLpo92IIf4", title:"ENVY ion Chamber Fracture PRO AIM", player:"ion2x", date:"2026-03-25" },
      { id:"zIunHkgYq5Q", title:"ENVY demon1 Chamber Fracture RADIANT NEW ACT", player:"demon1", date:"2026-05-01" },
      { id:"w9utq_kRY6o", title:"ENVY demon1 Chamber Fracture RADIANT MVP", player:"demon1", date:"2026-05-02" },
      { id:"BfN0D19Nb58", title:"KRU less Chamber Fracture RADIANT RANKED", player:"less", date:"2026-05-02" },
      { id:"9ObKjuKssng", title:"G2 jawgemo Chamber Fracture RADIANT RANKED", player:"jawgemo", date:"2026-05-01" },
    ],
    deadlock: [], vyse: [], veto: [], sova: [],
    breach: [
      { id:"0INbba0OWNE", title:"NRG s0m Breach Fracture UTIL MASTER", player:"s0m", date:"2026-04-17" },
      { id:"LXawAs7uKSI", title:"QOR derrek Fracture Breach FLASH GOAT", player:"derrek", date:"2026-04-16" },
      { id:"oCTPObW6XCg", title:"NRG s0m Breach Fracture RADIANT RANKED", player:"s0m", date:"2026-04-16" },
      { id:"2DvoWIZfZT4", title:"NRG s0m Breach Fracture RADIANT RANKED", player:"s0m", date:"2026-04-06" },
    ],
    skye: [
      { id:"UXqu0RnwgNw", title:"ENVY demon1 Skye Fracture PRO UTIL", player:"demon1", date:"2026-04-13" },
      { id:"pvjJI6gb2sQ", title:"ENVY POPPIN Skye Fracture TIER 1 RECON", player:"POPPIN", date:"2026-03-21" },
      { id:"6v7GDjnhq1E", title:"NRG brawk Skye Fracture WORLD MVP", player:"brawk", date:"2026-04-18" },
    ],
    kayo: [],
    fade: [
      { id:"3REvnHBdIf4", title:"NRG brawk Fade Fracture RADIANT RANKED", player:"brawk", date:"2026-04-28" },
      { id:"hF_MJeRDE4U", title:"NRG s0m Fade Fracture RADIANT RANKED", player:"s0m", date:"2026-04-11" },
    ],
    gekko: [],
    tejo: [
      { id:"FE3OmMI5Lyw", title:"FUR Nerve Tejo Fracture NA RANKED RADIANT", player:"nerve", date:"2026-04-28" },
      { id:"M3g-yMQWdqY", title:"C9 OXY Tejo Fracture RADIANT RANKED", player:"OXY", date:"2026-04-24" },
      { id:"bBzD8QkwjBc", title:"ZETA hatto Tejo Fracture RADIANT MVP", player:"hatto", date:"2026-03-29" },
      { id:"poGEyEw6grU", title:"FUR nerve Tejo Fracture RADIANT RANKED", player:"nerve", date:"2026-05-02" },
    ],
  },
  pearl: {
    jett: [
      { id:"V1_TNR0yaao", title:"TenZ Jett Pearl RADIANT GOAT", player:"TenZ", date:"2026-04-23" },
      { id:"7xKD0ojyGcA", title:"LOUD luk xo Jett Pearl RADIANT AIMER", player:"luk xo", date:"2026-04-23" },
      { id:"48BArO8rCZE", title:"NRG s0m Jett Pearl RADIANT AIM", player:"s0m", date:"2026-04-08" },
    ],
    reyna: [
      { id:"bFHRVyIIoco", title:"Inspire Reyna Pearl PRO RANKED", player:"Inspire", date:"2026-03-14" },
    ],
    raze: [
      { id:"LP4a3zQsxfw", title:"MIBR zekken Raze Pearl", player:"zekken", date:"2026-04-30" },
    ],
    neon: [
      { id:"o3-doqnC2FI", title:"MIBR zekken Neon Pearl RADIANT", player:"zekken", date:"2026-04-23" },
      { id:"awft5rh83dQ", title:"C9 OXY Neon Pearl RADIANT RANKED", player:"OXY", date:"2026-04-20" },
      { id:"H1bDliO3jss", title:"C9 OXY Neon Pearl RADIANT RANKED", player:"OXY", date:"2026-04-16" },
    ],
    phoenix: [
      { id:"9dL4B3C4aEA", title:"aleksandar Phoenix Pearl RADIANT RANKED", player:"aleksandar", date:"2026-04-25" },
      { id:"ZvTGWJxdcIE", title:"C9 OXY Phoenix Pearl RADIANT RANKED", player:"OXY", date:"2026-04-25" },
      { id:"vlFIURAn1Wk", title:"C9 OXY Phoenix Pearl RADIANT MASTERCLASS", player:"OXY", date:"2026-04-22" },
      { id:"W_HBNqpsnu8", title:"DRX Yong Phoenix Pearl FLASH KING", player:"Yong", date:"2026-04-23" },
      { id:"FD36SpdoCig", title:"NRG s0m Phoenix Pearl RADIANT RANKED", player:"s0m", date:"2026-04-17" },
      { id:"lglL26mk7sQ", title:"C9 OXY Phoenix Pearl RADIANT MVP", player:"OXY", date:"2026-03-15" },
      { id:"Ii4ARRVwtwI", title:"cheatcode Pearl Phoenix RADIANT AIM", player:"cheatcode", date:"2026-04-25" },
      { id:"awUvf_tgESA", title:"RC hiroronn Phoenix Pearl RADIANT RANKED", player:"hiroronn", date:"2026-04-24" },
    ],
    yoru: [
      { id:"qujRF2QbAfU", title:"ENVY Eggsterr Yoru Pearl YORU MASTERY", player:"Eggsterr", date:"2026-03-13" },
      { id:"4y1H4jPrY0U", title:"BBL Larok Yoru Pearl GOAT", player:"Larok", date:"2026-03-01" },
    ],
    iso: [], waylay: [
      { id:"Grjvr-N_qXw", title:"SEN nightz Waylay Pearl RADIANT RANKED", player:"nightz", date:"2026-01-29" },
      { id:"2SYs00C8Woc", title:"TL MiniBoo Waylay Pearl EU RANKED", player:"MiniBoo", date:"2026-04-14" },
    ],
    omen: [], viper: [], brimstone: [],
    astra: [
      { id:"pddLuOe9M2k", title:"Xander Astra Pearl RADIANT SMOKES", player:"Xander", date:"2026-04-14" },
      { id:"_mHTEFp8t4o", title:"Zander Astra Pearl RADIANT SMOKES", player:"Zander", date:"2026-04-21" },
      { id:"EahHLew5RI0", title:"SEN JohnQT Astra Pearl PRO SMOKES", player:"JohnQT", date:"2026-04-22" },
    ],
    harbor: [],
    clove: [
      { id:"1d_y2e3NqS8", title:"NRG s0m Clove Pearl RADIANT SMOKES", player:"s0m", date:"2026-04-03" },
      { id:"vsW9zyqplQM", title:"aleksandar Clove Pearl MVP", player:"aleksandar", date:"2026-02-07" },
    ],
    miks: [
      { id:"lXoQRdyVTeQ", title:"C9 OXY Miks Pearl RADIANT RANKED NEW", player:"OXY", date:"2026-03-26" },
      { id:"OWqaXaj2E4M", title:"aleksandar Miks Pearl NEW AGENT MASTERY", player:"aleksandar", date:"2026-04-03" },
    ],
    sage: [], cypher: [],
    killjoy: [
      { id:"dQsUBU-mlS8", title:"TL nAts Killjoy Pearl RADIANT RANKED", player:"nAts", date:"2026-04-30" },
      { id:"TQrbDrik9pY", title:"TL nAts Killjoy Pearl RADIANT RANKED", player:"nAts", date:"2026-04-08" },
      { id:"h8508GsjE1s", title:"NS Rb Killjoy Pearl RADIANT MVP", player:"Rb", date:"2026-04-21" },
    ],
    chamber: [
      { id:"r583kLoILW0", title:"C9 OXY Chamber Pearl RADIANT AIM", player:"OXY", date:"2026-04-21" },
      { id:"JveGDMyeSto", title:"ENVY ion Chamber Pearl RANK 1 ONE TAPS", player:"ion2x", date:"2026-04-15" },
      { id:"PaK7rCarcgA", title:"NRG s0m Chamber Pearl WORLD CHAMP DIFF", player:"s0m", date:"2026-04-09" },
      { id:"fhqfBZ-Mbds", title:"C9 OXY Chamber Pearl RADIANT RANK 1", player:"OXY", date:"2026-04-22" },
      { id:"obKb-iokbBU", title:"SEN johnQT Chamber Pearl TIER 1 AIM", player:"johnQT", date:"2026-05-02" },
    ],
    deadlock: [],
    vyse: [
      { id:"d5OhIxVZli0", title:"NRG s0m Vyse Pearl RADIANT RANKED", player:"s0m", date:"2026-04-23" },
    ],
    veto: [],
    sova: [
      { id:"Sn41Z_-NG18", title:"NRG brawk Sova Pearl RADIANT LINEUPS", player:"brawk", date:"2026-04-14" },
      { id:"XlipvE2uLno", title:"NRG brawk Sova Pearl WORLD CHAMP RANKED", player:"brawk", date:"2026-04-01" },
    ],
    breach: [],
    skye: [
      { id:"UAyCwrDNLT8", title:"C9 OXY Skye Pearl RADIANT RANKED", player:"OXY", date:"2026-04-05" },
    ],
    kayo: [
      { id:"i4ytszNJ_C0", title:"ENVY demon1 KAY/O Pearl RADIANT FLASHES", player:"demon1", date:"2026-04-13" },
    ],
    fade: [
      { id:"QGi_UZOitcA", title:"NRG s0m Fade Pearl RADIANT RANKED", player:"s0m", date:"2026-04-22" },
      { id:"J_ppaEeuBPg", title:"TL nAts Fade Pearl RADIANT EMEA", player:"nAts", date:"2026-04-16" },
    ],
    gekko: [],
    tejo: [
      { id:"KN4T9-ccjwU", title:"canezerra Tejo Pearl RADIANT RANKED", player:"canezerra", date:"2026-02-15" },
    ],
  },
  icebox: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  breeze: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  lotus: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  sunset: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [], clove: [], miks: [],
    sage: [], cypher: [], killjoy: [], chamber: [], deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  abyss: {
    jett: [], reyna: [], raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [],
    astra: [
      { id:"B82C03AK1Ko", title:"DFM yatsuka Astra Abyss RADIANT RANKED", player:"yatsuka", date:"2026-03-02" },
    ],
    harbor: [
      { id:"RTJKC3TyU7I", title:"Eggsterr Harbor Abyss RADIANT SMOKES", player:"Eggsterr", date:"2026-03-10" },
    ],
    clove: [
      { id:"O9Do103K0K4", title:"ENVY keznit Clove Abyss RADIANT", player:"keznitdeus", date:"2026-02-13" },
    ],
    miks: [], sage: [], cypher: [], killjoy: [],
    chamber: [
      { id:"-God72PbmnI", title:"ENVY demon1 Chamber Abyss RANKED", player:"demon1", date:"2026-04-29" },
    ],
    deadlock: [], vyse: [],
    veto: [
      { id:"RTIde3aNHWU", title:"TH benjyfishy Veto Abyss RADIANT SENTI", player:"benjyfishy", date:"2026-03-17" },
    ],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
  corrode: {
    jett: [],
    reyna: [
      { id:"QmZy1kEDy0E", title:"koalanoob Reyna Corrode INSANE AIM", player:"koalanoob", date:"2026-01-27" },
    ],
    raze: [], neon: [], phoenix: [], yoru: [], iso: [], waylay: [],
    omen: [], viper: [], brimstone: [], astra: [], harbor: [],
    clove: [
      { id:"YnFAmaY9M68", title:"haeyoday Clove Corrode RADIANT MVP", player:"haeyoday", date:"2026-03-09" },
    ],
    miks: [], sage: [], cypher: [], killjoy: [],
    chamber: [
      { id:"BjcwuPZ63hE", title:"NAVI hiro Chamber Corrode RADIANT", player:"hiro", date:"2026-04-22" },
    ],
    deadlock: [], vyse: [], veto: [],
    sova: [], breach: [], skye: [], kayo: [], fade: [], gekko: [], tejo: [],
  },
};

export function vodCount(mapId) {
  const m = VODS[mapId];
  if (!m) return 0;
  return Object.values(m).reduce((a, v) => a + v.length, 0);
}

export function agentVods(mapId, agentId) {
  return (VODS[mapId] && VODS[mapId][agentId]) || [];
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function getAllVods() {
  const results = [];
  for (const mapId in VODS) {
    const map = MAPS.find(m => m.id === mapId);
    for (const agentId in VODS[mapId]) {
      const agent = AGENTS.find(a => a.id === agentId);
      for (const v of VODS[mapId][agentId]) {
        results.push({ ...v, mapId, agentId, mapName: map?.name, agentName: agent?.name });
      }
    }
  }
  return results;
}
