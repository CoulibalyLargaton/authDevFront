import Link from "next/link";

export const TeamUser=({image, author, jobName, linkFacebook, linkTwitter, linkInsta, linkLinkedIn})=>{

    return(
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                
        <div className="bg-gray-50 p-8">
          
          <img
            className="mb-6 w-full object-cover h-56"
            src={image}
            alt= {author}
          />
          <h3 className="text-green-500 text-xl font-bold text-center mb-1">
          {author}
          </h3>
          <h3 className="font-bold text-center mb-4">{jobName}</h3>
          <div className="flex items-center justify-center gap-8">
            
            <Link href={linkFacebook}>
              
              <img
                src="authdev-assets/logos/brands/facebook.svg"
                alt="lien reseau sociaux"
              />
            </Link>
            <Link href={linkTwitter}>
              
              <img
                src="authdev-assets/logos/brands/twitter.svg"
                alt="lien reseau sociaux"
              />
            </Link>
            <Link href={linkInsta}>
              
              <img
                src="authdev-assets/logos/brands/Instagram.svg"
                alt="lien reseau sociaux"
              />
            </Link>
            <Link href={linkLinkedIn}>
              
              <img
                src="authdev-assets/logos/brands/LinkedIn.svg"
                alt="lien reseau sociaux"
              />
            </Link>
          </div>
        </div>
      </div>
    )
}