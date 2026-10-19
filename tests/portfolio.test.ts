import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {matchesProject,type Project} from '../src/lib/projects.ts';
const projects=JSON.parse(readFileSync('src/content/projects.json','utf8')) as Project[];
test('filters combine category and search, ignoring case and accents',()=>{
 assert.deepEqual(projects.filter(p=>matchesProject(p,'backend','RAG')).map(p=>p.id),['ai']);
 assert.deepEqual(projects.filter(p=>matchesProject(p,'fullstack','vetdash')).map(p=>p.id),['vet']);
 assert.equal(projects.some(p=>matchesProject(p,'cloud','FastAPI')),false);
 assert.equal(matchesProject(projects[0],'all','PRESCRICOES'),true);
 assert.equal(projects.filter(p=>matchesProject(p,'all',' ')).length,3);
});
test('published projects have complete case studies and valid public links',()=>{
 for(const id of ['vet','ai']){
  const study=JSON.parse(readFileSync(`src/content/${id}.json`,'utf8'));
  assert.ok(study.html.includes('<h2>'));
  const links=[...study.html.matchAll(/href="([^"]+)"/g)].map(match=>match[1]);
  assert.ok(links.length>0);
  for(const link of links)assert.equal(new URL(link).protocol,'https:');
 }
});
test('public curriculum is a PDF and no test curriculum is shipped',()=>{
 const pdf=readFileSync('public/assets/Joao_Pedro_Lessa_Curriculo.pdf');
 assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
 assert.ok(pdf.subarray(-1024).toString().includes('%%EOF'));
 assert.equal(readdirSync('public/assets').some(name=>/teste/i.test(name)),false);
});
