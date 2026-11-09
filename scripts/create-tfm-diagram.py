import sys,pathlib,re,base64,xml.etree.ElementTree as ET
sys.path.insert(0,r'C:\Users\christianr\Desktop\AI_tools\presentation-studio\diagram_designer')
from diagram_designer.builder import DiagramBuilder
from diagram_designer.constants import ThemeTokens
from diagram_designer.themes import THEME_TOKENS_CATALOG
root=pathlib.Path(__file__).resolve().parent.parent
for mode,paper,ink,accent,teal in [('light','#fff9eb','#112c32','#b2381d','#005f68'),('dark','#071b22','#fff9eb','#ffc278','#89e5d7')]:
 THEME_TOKENS_CATALOG['chris']=ThemeTokens(paper=paper,paper_2=paper,ink=ink,ink_strong=ink,muted=ink,soft=ink,rule=teal,rule_solid=teal,accent=accent,accent_tint=paper,link=teal)
 b=DiagramBuilder('Imágenes sintéticas útiles para reconocer Amaranthus',diagram_type='data-flow',theme='chris',offline_fonts=True,transparent_bg=True,slug='tfm-'+mode,description='Las imágenes reales permiten entrenar el clasificador base. El generador produce candidatas que se filtran con el clasificador y se revisan por expertos. Solo las aprobadas se consideran para ampliar el entrenamiento.')
 b.doc.view_width=880;b.doc.view_height=360
 for id,name,sub,x,y in [('real','Imágenes reales','Tres especies · vista nadir',20,20),('classifier','Clasificador base','Aprende con datos reales',320,20),('generator','Generador','Produce imágenes candidatas',20,200),('filter','Filtrado','Umbrales del clasificador',320,200),('experts','Revisión experta','Selecciona imágenes útiles',620,200),('approved','Imágenes aprobadas','Posible aumento de datos',620,20)]:
  b.add_node(id,name,sublabel=sub,x=x,y=y,width=240,height=140,treatment='focal' if id=='filter' else 'default')
 for a,z,ss,ts in [('real','classifier','right','left'),('real','generator','bottom','top'),('classifier','filter','bottom','top'),('generator','filter','right','left'),('filter','experts','right','left'),('experts','approved','top','bottom')]:b.add_edge(a,z,source_side=ss,target_side=ts,role='accent' if z=='filter' else 'default',stroke_width=2)
 svg=b.render_svg().replace('font-size="12"','font-size="19"').replace('font-size="9"','font-size="14"')
 svg=re.sub(r'font-family="[^"]+"','font-family="Segoe UI, Arial, sans-serif"',svg)
 ns='http://www.w3.org/2000/svg'; ET.register_namespace('',ns)
 tree=ET.fromstring(svg)
 data='data:image/png;base64,'+base64.b64encode((root/'assets/tfm-generated-examples.png').read_bytes()).decode()
 for cx,top,panel in [(140,20,0),(140,200,1),(740,20,2)]:
  for el in tree.iter('{'+ns+'}text'):
   if float(el.get('x','-1'))==cx and top<float(el.get('y','-1'))<top+140:
    el.set('y',str(top+(24 if el.get('font-size')=='19' else 43)))
  sub=ET.SubElement(tree,'{'+ns+'}svg',{'x':str(cx-56),'y':str(top+52),'width':'112','height':'80','viewBox':f'{panel*682.67} 85 682.67 488','preserveAspectRatio':'xMidYMid meet','overflow':'hidden'})
  ET.SubElement(sub,'{'+ns+'}image',{'href':data,'width':'2048','height':'683'})
 svg=ET.tostring(tree,encoding='unicode')
 (root/'assets'/('tfm-diagram-'+mode+'.svg')).write_text(svg,encoding='utf8')
 (root/'content'/('tfm-diagram-'+mode+'.html')).write_text('<!doctype html><meta charset="utf-8">'+svg,encoding='utf8')
print('Created with Presentation Studio DiagramBuilder')
