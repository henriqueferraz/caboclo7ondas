'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image_01 from '@/../public/images/promos/promo_01.png'
import image_02 from '@/../public/images/promos/promo_02.png'
import image_03 from '@/../public/images/promos/promo_03.png'
import Image from 'next/image'


export function Carousel_Home() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000 })])

    return (
        <div className='embla mx-auto mt-4
         max-w-lg'>
            <div className='embla__viewport h-56' ref={emblaRef}>
                <div className='embla__container h-full'>
                    <div className='embla__slide flex items-center justify-center'>
                        <Image
                            src={image_01}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='embla__slide flex items-center justify-center'>
                        <Image
                            src={image_02}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='embla__slide flex items-center justify-center'>
                        <Image
                            src={image_03}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
