export const MAPS = [
  { id:"ascent",   name:"Ascent",   img:"/maps/ascent.webp" },
  { id:"bind",     name:"Bind",     img:"/maps/bind.webp" },
  { id:"haven",    name:"Haven",    img:"/maps/haven.webp" },
  { id:"split",    name:"Split",    img:"/maps/split.webp" },
  { id:"fracture", name:"Fracture", img:"/maps/fracture.webp" },
  { id:"pearl",    name:"Pearl",    img:"/maps/pearl.webp" },
  { id:"icebox",   name:"Icebox",   img:"/maps/icebox.webp" },
  { id:"breeze",   name:"Breeze",   img:"/maps/breeze.webp" },
  { id:"lotus",    name:"Lotus",    img:"/maps/lotus.webp" },
  { id:"sunset",   name:"Sunset",   img:"/maps/sunset.webp" },
  { id:"abyss",    name:"Abyss",    img:"/maps/abyss.webp" },
  { id:"corrode",  name:"Corrode",  img:"/maps/corrode.webp" },
];

export const AGENTS = [
  {id:"jett",     name:"Jett",       role:"Duelist",    portrait:"/agents/jett.webp",    color:"#25607a"},
  {id:"reyna",    name:"Reyna",      role:"Duelist",    portrait:"/agents/reyna.webp",    color:"#662d62"},
  {id:"raze",     name:"Raze",       role:"Duelist",    portrait:"/agents/raze.webp",    color:"#742e1e"},
  {id:"neon",     name:"Neon",       role:"Duelist",    portrait:"/agents/neon.webp",    color:"#413476"},
  {id:"phoenix",  name:"Phoenix",    role:"Duelist",    portrait:"/agents/phoenix.webp",    color:"#74321c"},
  {id:"yoru",     name:"Yoru",       role:"Duelist",    portrait:"/agents/yoru.webp",    color:"#222b67"},
  {id:"iso",      name:"Iso",        role:"Duelist",    portrait:"/agents/iso.webp",    color:"#30336e"},
  {id:"waylay",   name:"Waylay",     role:"Duelist",    portrait:"/agents/waylay.webp",    color:"#482e61"},
  {id:"omen",     name:"Omen",       role:"Controller", portrait:"/agents/omen.webp",    color:"#433178"},
  {id:"viper",    name:"Viper",      role:"Controller", portrait:"/agents/viper.webp",    color:"#1a5f46"},
  {id:"brimstone",name:"Brimstone",  role:"Controller", portrait:"/agents/brimstone.webp",    color:"#363c4f"},
  {id:"astra",    name:"Astra",      role:"Controller", portrait:"/agents/astra.webp",    color:"#26146c"},
  {id:"harbor",   name:"Harbor",     role:"Controller", portrait:"/agents/harbor.webp",    color:"#275146"},
  {id:"clove",    name:"Clove",      role:"Controller", portrait:"/agents/clove.webp",    color:"#4b1d80"},
  {id:"miks",     name:"Miks",       role:"Controller", portrait:"/agents/miks.webp",    color:"#462b75"},
  {id:"sage",     name:"Sage",       role:"Sentinel",   portrait:"/agents/sage.webp",    color:"#1f5148"},
  {id:"cypher",   name:"Cypher",     role:"Sentinel",   portrait:"/agents/cypher.webp",    color:"#2f5078"},
  {id:"killjoy",  name:"Killjoy",    role:"Sentinel",   portrait:"/agents/killjoy.webp",    color:"#522162"},
  {id:"chamber",  name:"Chamber",    role:"Sentinel",   portrait:"/agents/chamber.webp",    color:"#20435b"},
  {id:"deadlock", name:"Deadlock",   role:"Sentinel",   portrait:"/agents/deadlock.webp",    color:"#425495"},
  {id:"vyse",     name:"Vyse",       role:"Sentinel",   portrait:"/agents/vyse.webp",    color:"#492280"},
  {id:"veto",     name:"Veto",       role:"Sentinel",   portrait:"/agents/veto.webp",    color:"#1a5d65"},
  {id:"sova",     name:"Sova",       role:"Initiator",  portrait:"/agents/sova.webp",    color:"#355285"},
  {id:"breach",   name:"Breach",     role:"Initiator",  portrait:"/agents/breach.webp",    color:"#81331a"},
  {id:"skye",     name:"Skye",       role:"Initiator",  portrait:"/agents/skye.webp",    color:"#436a51"},
  {id:"kayo",     name:"KAY/O",      role:"Initiator",  portrait:"/agents/kayo.webp",    color:"#1c2a69"},
  {id:"fade",     name:"Fade",       role:"Initiator",  portrait:"/agents/fade.webp",    color:"#1d2846"},
  {id:"gekko",    name:"Gekko",      role:"Initiator",  portrait:"/agents/gekko.webp",    color:"#371c5c"},
  {id:"tejo",     name:"Tejo",       role:"Initiator",  portrait:"/agents/tejo.webp",    color:"#80451b"},
];

export const ROLES_ORDER = ["Duelist","Controller","Sentinel","Initiator"];
export const ROLE_DOTS = {Duelist:"#FF8C42",Controller:"#4A9EFF",Sentinel:"#6BCF6B",Initiator:"#FF6B9D"};

export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

