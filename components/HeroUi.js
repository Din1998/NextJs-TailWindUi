import styles from '@/styles/Home.module.css'
import Image from 'next/image';


export default function HeroUi() {
  return(
    <div className={styles.heroUi}>
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="flex justify-center">
          <div className='py-20 px-30'>
            <h1 className='py-4 text-5xl font-bold font-mono'>Healthy in side <span className='text-indigo-500'>fresh</span> out side</h1>
            <p className='text-neutral-600 py-4 '>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
            <div className='drop-shadow-2xl flex gap-8'>
            <button className='bg-cyan-900 rounded-md py-2 px-10 text-white'>Get Start</button>
            <button className='bg-white rounded-md py-2 px-10 text-cyan-900'>Learn More</button>
            </div>
            <div>
              <p className='py-4'>Brands:</p>
              <div className='flex gap-10'>
                  <Image 
                  width={60}
                  height={10}
                  src='/nike-logo.png'/>
                  <Image 
                  width={60}
                  height={10}
                  src='/adidas.png'/>
                  <Image 
                  width={60}
                  height={10}
                  src='/puma.png'/>
                  <Image 
                  width={60}
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