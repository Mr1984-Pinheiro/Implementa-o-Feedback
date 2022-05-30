import { CloseButton } from "./CloseButton";

import bagImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
     BUG: {
        title: 'Problema',
        image: {
            source: bagImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'idea',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem e uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamentos'
        },
    },
       
};

export function WidgetForm () {
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
           <header>
               <span className="text-xl leading-6">Deixe seu feedback</span>

               <CloseButton />

           </header>

           <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return();
                })}
           </div>

           <footer className="text-xs text-neutral-400">
                Feito com 💙 por  <a className="underline underline-offset-2" href="https://www.linkedin.com/in/carlospinheiro2021/" target="_blank">Carlos Pinheiro</a> 
           </footer>
        </div>
    );
}