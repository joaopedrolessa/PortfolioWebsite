'use client';
import {useEffect} from 'react';
export function ScrollReveal(){useEffect(()=>{
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const sections=[...document.querySelectorAll<HTMLElement>('main > section.reveal')];
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:0,rootMargin:'0px 0px -35px 0px'});
 sections.forEach(section=>{if(motion.matches||section.getBoundingClientRect().top<innerHeight)section.classList.add('visible');else{section.classList.add('reveal-ready');observer.observe(section)}});
 function update(){if(motion.matches){sections.forEach(section=>section.classList.add('visible'));observer.disconnect()}}
 motion.addEventListener('change',update);
 return ()=>{observer.disconnect();motion.removeEventListener('change',update);sections.forEach(section=>section.classList.remove('visible','reveal-ready'))};
 },[]);return null}
