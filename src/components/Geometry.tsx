'use client';
import {useEffect,useRef} from 'react';
import {mountGeometry} from '@/lib/geometry';
export function Geometry(){const anchor=useRef<HTMLSpanElement>(null);useEffect(()=>{const hero=anchor.current?.closest<HTMLElement>('.hero');if(hero)return mountGeometry(hero)},[]);return <span ref={anchor} className="hidden" aria-hidden="true"/>}
