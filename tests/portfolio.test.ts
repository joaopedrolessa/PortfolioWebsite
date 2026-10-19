import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {matchesProject,type Project} from '../src/lib/projects.ts';
const projects=JSON.parse(readFileSync('src/content/projects.json','utf8')) as Project[];
test('filters combine category and search, ignoring case and accents',()=>{
 assert.deepEqual(projects.filter(p=>matchesProject(p,'backend','RAG')).map(p=>p.id),['ai']);
 assert.deepEqual(projects.filter(p=>matchesProject(p,'fullstack','vetdash')).map(p=>p.id),['vet']);
 assert.equal(projects.some(p=>matchesProject(p,'cloud','FastAPI')),false);
 assert.equal(matchesProject(projects[0],'all','PRESCRICOES'),true);
 assert.equal(projects.filter(p=>matchesProject(p,'all',' ')).length,3);
});
test('approved project summaries and case study copy survive migration',()=>{
 const preview=readFileSync('preview/index.html','utf8');
 for(const project of projects)assert.ok(preview.includes(project.description));
 const previewScript=readFileSync('preview/script.js','utf8');
 for(const id of ['vet','ai']){
  const study=JSON.parse(readFileSync(`src/content/${id}.json`,'utf8'));
  assert.ok(study.html.includes('<h2>'));
  assert.ok(previewScript.includes(JSON.stringify(study.html)));
 }
});
test('final curriculum is copied byte for byte; test PDF is not shipped',()=>{
 const digest=(path:string)=>createHash('sha256').update(readFileSync(path)).digest('hex');
 assert.equal(digest('public/assets/Joao_Pedro_Lessa_Curriculo.pdf'),digest('preview/assets/Joao_Pedro_Lessa_Curriculo.pdf'));
});
