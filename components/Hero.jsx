import React from 'react'
import HeroHello from '../public/svg/entrain_de_travailler_hello.svg'
import Image from 'next/image'
import Container from './Container'
import { Fugaz_One } from 'next/font/google';
import Button from './design-system/Button';

const fugaz = Fugaz_One({
    subsets: ["latin"],
    weight: ["400"],
  });

export default function Hero() {
  return (
    <div>
        <section className='grid grid-cols-12 gap-10'>
            <div className='md:col-span-7 xs:col-span-12'>
            <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className }>
                <span className='textGradient'> 
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </span>
                {" "} fait de votre {" "}
                <span className='textGradient'>
                    projet
                </span> une {" "}
                <span className='textGradient'>
                    reussite
                </span>
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[700px] '>
                Nous somme une startup rassemblant plusieur talent africain afin de realiser tout type de projet local
                ainsi de {' '}
                <span className='font-semibold'>permettre à l'afrique d'emboiter le pas technologie</span>
            </p>
            <div className='flex gap-4'>
                <Button children={'Obtenir un abonnement'} href='/'/>
                <Button children={'En Apprendre davanatge un abonnement'} />
            </div>
            </div>
            <div className='md:col-span-4 md:flex xs:hidden  sm:bg-blue-300 md:bg-slate-300 lg:bg-red-300'>
                <Image className='w-full h-auto' src={HeroHello} alt="Entrain de travailler" />
            </div>
        </section>
        
        </div>

        
    
    
  )
}
