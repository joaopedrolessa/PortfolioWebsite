'use client';
import {useState} from 'react';
export function CopyEmail(){const [status,setStatus]=useState('');async function copy(){try{await navigator.clipboard.writeText('joaopedro.lessa@outlook.com');setStatus('E-mail copiado.')}catch{setStatus('Não foi possível copiar. Use joaopedro.lessa@outlook.com.')}}return <><button id="copy" className="button copy" onClick={copy}>Copiar e-mail</button><p id="copy-status" role="status">{status}</p></>}
