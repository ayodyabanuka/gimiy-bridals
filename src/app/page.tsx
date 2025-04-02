import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex h-[94vh] w-full text-white'>
      <div className='bg-[url("/back.png")] w-full h-full bg-cover bg-right lg:bg-center bg-no-repeat'>
        <div className='max-w-screen-xl mx-auto flex flex-col w-full h-full '>
          <div className='h-full flex flex-col gap-2 lg:p-20 justify-center items-center lg:items-start'>
            <Image src={'/logo.png'} alt={''} width={200} height={200} />
            <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-left leading-8 md:leading-14 lg:leading-20'>
              Where Your <br /> Dream Dress <br /> Comes to Life
            </div>
            <div className='text-3xl md:text-4xl lg:text-6xl'>
              Launching Soon!{' '}
            </div>
            <div className='text-base md:text-xl lg:text-2xl'>
              Stay tuned for our grand reveal.
            </div>
            <div className='flex items-center gap-1 text-2xl'>
              <Link
                href={'/https://www.facebook.com/gimiy.bridals'}
                className='p-5'
              >
                <FaFacebookF className='group hover:scale-125 transition-all duration-300' />
              </Link>
              <Link
                href={'/https://www.instagram.com/gimiy_bridals/'}
                className='p-5'
              >
                <FaInstagram className='group hover:scale-125 transition-all duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
