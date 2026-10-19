import {Header,Hero,About,Education,Resume,Contact,Footer} from '@/components/Sections';
import {Projects} from '@/components/Projects';
import {Skills} from '@/components/Skills';
import {ScrollReveal} from '@/components/ScrollReveal';
export default function Home(){return <><a className="skip" href="#main">Ir para o conteúdo</a><div className="site-shell"><Header/><main id="main"><Hero/><Projects/><About/><Skills/><Education/><Resume/><Contact/></main><Footer/></div><ScrollReveal/></>}
