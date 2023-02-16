import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight,faCirclePlay } from '@fortawesome/free-solid-svg-icons'



export default function HeroUi() {
  return(
    <div className={styles.heroUi}>
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="flex justify-center">
          <div className='py-20 px-30'>
            <h1 className='py-4 text-6xl font-bold font-base mr-20 px-4'>Healthy in side <span className='text-indigo-500'>fresh</span> out side</h1>
            <p className='text-neutral-600 py-4 px-4'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
            <div className='drop-shadow-2xl flex gap-8 px-4'>
            <button className='bg-blue-900 rounded-md py-2 px-10 text-white'>Get Start<span className='ml-8'><FontAwesomeIcon icon={faCircleArrowRight} /></span></button>
            <button className='bg-white rounded-md py-2 px-10 text-cyan-900'><span className='mr-4'><FontAwesomeIcon icon={faCirclePlay} /></span>Learn More</button>
            </div>
            <div>
              <p className='py-4 px-4'>Brands:</p>
              <div className='flex gap-10 px-4'>
                  <Image 
                  width={50}
                  height={10}
                  src='/nike-logo.png'/>
                  <Image 
                  width={50}
                  height={10}
                  src='/adidas.png'/>
                  <Image 
                  width={50}
                  height={10}
                  src='/puma.png'/>
                  <Image 
                  width={50}
                  height={10}
                  src='/reebok.png'/>
              </div>
            </div>
          </div>
          </div>
          
          <div className="flex justify-center py-20">
            <Image
            className='drop-shadow-2xl'
            width={260}
            height={200}
            alt="logo"
            src="/image77.png" />
          </div>
        
      </div>
    </div>
  )
}