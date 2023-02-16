import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function BestBodyBox(){
  return(
    <div className='py-20 '>
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 flex justify-items-center">
        <Image
       
        width={300}
        height={460}
        src='/image78.png'
        />
        <div className='px-8'>
          <h1 className='py-8 text-5xl font-base'>Best full body workout to lose fat</h1>
          <p className='text-gray-400 '>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
          <div className='py-4'>
          <button className='bg-blue-900 rounded-md py-2 px-10 text-white'>Get Started <span className='ml-10'><FontAwesomeIcon icon={faArrowRight} /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}