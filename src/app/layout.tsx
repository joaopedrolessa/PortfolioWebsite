import type {Metadata} from 'next';
import {site} from '@/lib/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(site.url),title:site.title,description:site.description,alternates:{canonical:'/'},openGraph:{title:site.title,description:site.description,type:'website',locale:'pt_BR',url:'/',siteName:site.name},twitter:{card:'summary',title:site.title,description:site.description},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
