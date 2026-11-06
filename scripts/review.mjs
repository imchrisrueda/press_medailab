import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {slides} from './story.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const {chromium}=await import(pathToFileURL('C:/Users/christianr/Desktop/semh2026/presentation/ips_runtime/node_modules/playwright/index.mjs'));
const browser=await chromium.launch({channel:'chrome',headless:true});
const out=path.join(root,'reports/captures');await fs.mkdir(out,{recursive:true});
const page=await browser.newPage({viewport:{width:1280,height:720}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(pathToFileURL(path.join(root,'outputs/life-of-chris.html')).href);await page.evaluate(()=>document.fonts.ready);
const report={errors,slides:[],interactions:[],network:'file:// delivery, assets embedded; no external service required'};
for(const mode of ['light','dark'])for(let n=1;n<=slides.length;n++){
 await page.evaluate(({n,mode})=>{document.documentElement.classList.toggle('dark',mode==='dark');show(n-1)},{n,mode});await page.waitForTimeout(70);
 const details=await page.evaluate(()=>{const p=document.querySelector('.offline-slide.active .chris-page'),r=p.getBoundingClientRect();return {overflow:[...p.querySelectorAll('.copy,.copy h1,.copy p,.cover-copy,.cover-copy h1,.subtitle,.steps,.editorial-lines,.photo-caption,.closing-copy')].filter(e=>{const b=e.getBoundingClientRect();return b.bottom>r.bottom-20||b.right>r.right+1||b.left<r.left-1||b.top<r.top-1}).map(e=>({class:e.className,text:e.textContent.slice(0,70)})),broken:[...p.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.alt)}});
 report.slides.push({mode,n,...details});await page.screenshot({path:path.join(out,`${mode}-${String(n).padStart(2,'0')}.png`)});
}
for(const vp of [{width:1280,height:720},{width:1024,height:768}])for(const mode of ['light','dark']){
 await page.setViewportSize(vp);await page.evaluate(m=>{close();show(0);document.documentElement.classList.toggle('dark',m==='dark')},mode);await page.keyboard.press('m');
 const fits=await page.evaluate(()=>{const c=document.querySelector('#canvas').getBoundingClientRect(),i=document.querySelector('#index').getBoundingClientRect();return c.right<=i.left+1});
 await page.screenshot({path:path.join(out,`menu-${mode}-${vp.width}.png`)});
 await page.locator('#index button[data-slide="7"]').click();const selection=await page.evaluate(()=>current===6&&!document.body.classList.contains('index-open'));
 await page.keyboard.press('n');const notes=await page.locator('#notes').isVisible();await page.keyboard.press('Escape');await page.keyboard.press('End');const end=await page.evaluate(n=>current===n-1,slides.length);await page.keyboard.press('Home');await page.keyboard.press('ArrowRight');const next=await page.evaluate(()=>current===1);
 report.interactions.push({vp,mode,indexFits:fits,selection,notes,end,next});
}
await page.setViewportSize({width:1280,height:720});await page.evaluate(()=>{close();document.documentElement.classList.remove('dark');show(6)});
await page.locator('.offline-slide.active .clipping').first().click();
const clipZoom=await page.locator('#clip-dialog').evaluate(e=>e.open);
await page.screenshot({path:path.join(out,'clip-zoom.png')});
await page.keyboard.press('Escape');
report.clippingZoom={opens:clipZoom,closes:await page.locator('#clip-dialog').evaluate(e=>!e.open),preservesSlide:await page.evaluate(()=>current===6)};
await page.evaluate(()=>show(0));
await page.pdf({path:path.join(root,'outputs/life-of-chris.pdf'),printBackground:true,preferCSSPageSize:true});
await fs.writeFile(path.join(root,'reports/browser-review.json'),JSON.stringify(report,null,2));
await browser.close();console.log(JSON.stringify({slides:report.slides.length,errors,overflow:report.slides.filter(s=>s.overflow.length),broken:report.slides.filter(s=>s.broken.length),interactions:report.interactions}));
