export interface Project {id:string;className:string;categories:string[];search:string;status:string;statusClass:string;name:string;technologies:string[];description:string}
export function matchesProject(project:Project,category:string,query:string):boolean{
 const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
 return (category==='all'||project.categories.includes(category))&&normalize([project.name,project.search,project.description,...project.technologies].join(' ')).includes(normalize(query.trim()));
}
