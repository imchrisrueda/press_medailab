import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {slides} from './story.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const tool='C:/Users/christianr/Desktop/AI_tools/presentation-studio/ips';
const api=await import(pathToFileURL(tool+'/packages/core/dist/index.js'));
const unwrap=r=>{if(!r.ok)throw Error(JSON.stringify(r.error));return r.value};
const dir=path.join(root,'presentation');
let manifest;
try{manifest=JSON.parse(await fs.readFile(path.join(dir,'project.json'),'utf8'))}catch{unwrap(await api.createProject({name:'presentation',root,config:{language:'es',aspectRatio:'16/9',engineId:'slidev',title:'Life of Brian Chris: Robótica, IA y Agricultura Digital'}}));manifest=JSON.parse(await fs.readFile(path.join(dir,'project.json'),'utf8'))}
manifest.engine.version='0.49.29';await fs.writeFile(path.join(dir,'project.json'),JSON.stringify(manifest,null,2));
let revision=api.computeCanonicalRevision(manifest);
const sourceIds=['cv','vault2026','memory2025','semh2026','user','photos'];
const req=unwrap(await api.applyRequirements({projectDir:dir,expectedRevision:revision,request:'El usuario autoriza comenzar la generación, con aproximadamente el doble de slides, siguiendo el enfoque y diseño ya definidos en el plan y revisiones.',authorizedSourceIds:sourceIds,proposal:{schemaVersion:'1.0',projectId:manifest.projectId,objective:'Presentar la trayectoria de Christian y su trabajo actual en agricultura digital, de forma visual e informal.',audience:'MEDAILAB, Universidad de Murcia',durationMinutes:10,requiredTopics:slides.map(s=>s.title),outputs:['web','pdf'],constraints:['Borrador visual amplio de 20 pantallas para recortar posteriormente','Título con Brian tachado; tono personal inspirado en comedia británica','Distinguir trabajo realizado y plan de TFM','Notas con atribuciones, fuentes y límites','Usar el diseño personal ya autorizado en la conversación'],unresolvedQuestions:['Ensayo real del ponente pendiente','Denominación oficial y diploma del premio SEMH2026 pendientes']}}));revision=req.revision;
const sb=unwrap(await api.applyStoryboard({projectDir:dir,expectedRevision:revision,requirementsRevision:revision,sourceIds,proposal:{schemaVersion:'1.0',projectId:manifest.projectId,requirementsRevision:revision,slides:slides.map((s,i)=>({slideId:`chris-${i+1}`,purpose:s.title,message:s.title,sourceIds,assetIds:[],estimatedSeconds:s.seconds})),unresolvedItems:[]}}));revision=sb.revision;
await fs.writeFile(path.join(dir,'reports/design-options.json'),JSON.stringify(unwrap(api.suggestDesigns({projectId:manifest.projectId,revision,storyboardRevision:revision,formats:['web','pdf'],requestedCount:2,criteria:{audience:'cientifica',presentationTone:'personal',dataDensity:'baja'}})),null,2));
await fs.mkdir(path.join(dir,'assets'),{recursive:true});
async function copyAssets(from,to){await fs.mkdir(to,{recursive:true});for(const f of await fs.readdir(from,{withFileTypes:true})){if(f.name.endsWith('.md'))continue;if(f.isDirectory())await copyAssets(path.join(from,f.name),path.join(to,f.name));else await fs.copyFile(path.join(from,f.name),path.join(to,f.name));}}
await copyAssets(path.join(root,'assets'),path.join(dir,'assets'));
const pics={'DSC_0047_1.JPG':'team-drone.jpg','DSC_0047.JPG':'field-maize.jpg','DSC04890.JPG':'pots.jpg','DSC_0147.JPG':'drone-flight.jpg','DSC_0173.JPG':'field-close.jpg'};
for(const [src,dst]of Object.entries(pics))await fs.copyFile(path.join(root,'src',src),path.join(dir,'assets',dst));
const generated=unwrap(await api.generateSlides({projectDir:dir,expectedRevision:revision,storyboardRevision:sb.revision,designRef:'scientific-minimal',proposal:slides.map((s,i)=>({slideId:`chris-${i+1}`,resourceIds:sourceIds,markdown:`---\nlayout: default\ntitle: ${JSON.stringify(s.title)}\n---\n\n<div class="chris-page ${s.kind}">\n${s.body}\n<div class="page-meta"><span>${s.chapter}</span><span>${String(i+1).padStart(2,'0')} / ${slides.length}</span></div>\n</div>\n\n<!--\n${s.notes}\n\nFuente: ${s.source}\nTiempo previsto: ${s.seconds} s.\n-->\n`}))}));
await fs.copyFile(path.join(root,'scripts/deck.css'),path.join(dir,'style.css'));
const entry=`---\ntheme: default\ncolorSchema: auto\nfonts:\n  sans: Segoe UI\n  local: Segoe UI\n  provider: none\ninfo: false\nmdc: false\naspectRatio: 16/9\ncanvasWidth: 980\ntransition: fade\ntitle: 'Life of Chris: Robótica, IA y Agricultura Digital'\n`+generated.slidePaths.map((p,i)=>`${i?'---\n':''}src: ./${p.replaceAll('\\','/')}\n---\n\n`).join('');
await fs.writeFile(path.join(dir,'slides.md'),entry);
await fs.writeFile(path.join(dir,'global-top.vue'),'<template></template>');
try{await fs.access(path.join(dir,'node_modules'))}catch{await fs.symlink(tool+'/node_modules',path.join(dir,'node_modules'),'junction')}
await fs.writeFile(path.join(root,'content/guion.md'),'# Guion de trabajo · Life of Chris\n\nBorrador de 20 pantallas. Duración estimada: '+slides.reduce((n,s)=>n+s.seconds,0)+' segundos; pendiente de ensayo.\n\n'+slides.map((s,i)=>`## ${i+1}. ${s.title} · ${s.seconds} s\n\n${s.notes}\n\nFuente: ${s.source}`).join('\n\n'));
const val=unwrap(await api.validatePresentation({projectDir:dir,revision:generated.revision,profile:'mvp'}));
await fs.writeFile(path.join(root,'reports/ips-generation.json'),JSON.stringify({slideCount:slides.length,plannedSeconds:slides.reduce((n,s)=>n+s.seconds,0),validation:val},null,2));
console.log('Generated',slides.length,'slides. Planned seconds:',slides.reduce((n,s)=>n+s.seconds,0));
