import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface IMentors {
  name: string,
  linkdinUrl: string,
  imageUrl: string,
  program: string,

}

const cartBackground = 'https://res.cloudinary.com/denikmblr/image/upload/v1762778366/1_1_y4qowb.png'

const MentorsCart = ({ mentor }: { mentor: IMentors }) => {
  return (
    <div className='relative  rounded-lg overflow-hidden flex-shrink-0 min-w-[280px] min-h-[380px]'>
      <div className='absolute inset-0'>
        <Image alt='' src={cartBackground} className='w-full h-full object-contain' fill loading='lazy' title='bg-image'/>
      </div>
      <div className='z-30 relative flex flex-col gap-1 h-full p-2 text-black text-center items-center'>
        <div className=' shadow-xl shadow-gray-400 w-[100px] h-[100px] rounded-full overflow-hidden'>
          <Image alt='photo' src={mentor.imageUrl} width={100} height={100} className='object-contain' loading='lazy' title={mentor.name}/>
        </div>
        <h3 className=' font-extrabold text-2xl mb-1 mt-5'>{mentor.name}</h3>
        <p className=' text-lg font-semibold'>({mentor.program})</p>
        {/* LinkedIn */}
       {mentor.linkdinUrl && <Link href={mentor.linkdinUrl} target="_blank" rel="noopener noreferrer" className='mt-2 cursor-pointer'>
          <Image
            className="mx-auto rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
            alt="LinkedIn"
            width={50} height={50}

          />
        </Link>}
      </div>


    </div>
  )
}

export default MentorsCart;
