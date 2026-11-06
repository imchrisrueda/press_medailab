import sys, pathlib, json, shutil
sys.path.insert(0, r'C:\Users\christianr\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\Lib\site-packages')
import pypdfium2 as pdf
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent
src = root/'reports/source-pages'
assets = root/'assets'
sources = json.loads((src/'sources.json').read_text(encoding='utf8'))
log=[]
def crop(name, origin, box):
    im=Image.open(src/(origin+'.png'))
    im.crop(box).save(assets/(name+'.png'))
    log.append({'asset':name+'.png','render':origin+'.png','crop_pixels':box})
def relative(name, origin, box):
    im=Image.open(src/(origin+'.png'))
    crop(name,origin,tuple(round(v*(im.width if i%2==0 else im.height)) for i,v in enumerate(box)))
# Logos only; personal/administrative data stays out of the deck.
relative('logo-nibio','nibio',(.16,.032,.44,.105))
relative('logo-ute','ute',(.075,.035,.19,.10))
relative('logo-upm','upm',(.045,.025,.145,.145))
relative('logo-uide','uide',(.10,.105,.33,.26))
relative('logo-puce','priscila',(.405,.15,.59,.28))
crop('logo-umu','umu-header',(80,30,516,150))
crop('logo-uco','uco-header',(443,52,580,134))
relative('clip-mutis','mutis',(.08,.09,.92,.315))
relative('clip-priscila','priscila',(.12,.35,.89,.71))
crop('clip-bryan','cv-23',(105,230,925,466))
crop('clip-rehab','cv-23',(105,746,925,1004))
crop('clip-emg','cv-24',(95,614,925,850))
crop('clip-exo','cv-24',(95,862,925,1097))
crop('clip-wrist','cv-24',(95,1108,925,1177))
crop('clip-cells','cv-24',(95,373,925,603))
relative('clip-semh','semh',(.025,.018,.98,.202))
# A real figure from the coauthored article, preserving its caption and source.
p=pdf.PdfDocument(sources['mutis']);im=p[5].render(scale=2).to_pil();im.save(src/'mutis-figure.png')
shutil.copyfile(r'C:\Users\christianr\Desktop\semh2026\presentation\semh2026_ips\assets\header_logos\Ministerio-CSIC-INIA--COLOR.svg',assets/'logo-inia.svg')
shutil.copyfile(r'C:\Users\christianr\Desktop\semh2026\presentation\semh_2026_logo.png',assets/'logo-semh.png')
(root/'sources/recortes-v2.json').write_text(json.dumps({'sources':sources,'crops':log,'other_sources':{'umu':'Downloads/Resguardo_matricula_Y5596186_2026.pdf (solo logo)','uco':'Downloads/compromiso-doctoral2025_AdC+JMP_ILCG_signed.pdf (solo logo)','semh':'Desktop/semh2026/semh2026_manuscript.pdf','cv':'Documents/CVN/cv_CRA2020.pdf'}},ensure_ascii=False,indent=2),encoding='utf8')
print('Prepared',len(log),'original crops')
