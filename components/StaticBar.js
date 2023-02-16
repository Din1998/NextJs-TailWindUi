import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function StatiBar() {
  return(
    <div className="container mx-auto mt-8 px-4">
      <div className="bg-indigo-400 py-16 rounded-3xl ">
       <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3'>
          <div className="grid justify-items-center  ">
            <div className='flex py-8'>
            <Image
            className='backdrop-blur-xl bg-white/30 rounded-md'
            width={50}
            height={50}
            src='/Vector.png'
            />
            <div className='ml-4'>
            <h1 className='text-white'>Get that 11 line in 30 days</h1>
            <p className='text-slate-300'>Learn more <span className='ml-4'><FontAwesomeIcon icon={faArrowRight} /></span></p>
            </div>
            </div>
            
          </div>
          <div className='grid justify-items-center'>
            <div className='flex py-8'>
              <Image
              className='backdrop-blur-xl bg-white/30 rounded-md' 
              width={50}
              height={50}
              src='/Vector1.png'
              />
              <div className='ml-4 '>
              <h1 className='text-white'>14 Days sherd challenge</h1>
              <p className='text-slate-300'>Learn more <span className='ml-12'><FontAwesomeIcon icon={faArrowRight} /></span></p>
              </div>
            </div>
          </div>
          <div className='grid justify-items-center'>
            <div className='flex py-8'>
              <Image 
              className='backdrop-blur-xl bg-white/30 rounded-md' 
              width={50}
              height={50}
              src='/Vector2.png'
              />
              <div className='ml-4 '>
              <h1 className='text-white'>Get flat belly in 30 days</h1>
              <p className='text-slate-300'>Learn more <span className='ml-4'><FontAwesomeIcon icon={faArrowRight} /></span></p>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}