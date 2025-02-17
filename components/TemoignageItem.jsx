
export const TemoignageItem=({message, image, author, jobName, Entreprise , directionAnimate="animate-movingLeft"})=>{

    return(
        <div className={`flex-shrink-0 w-full md:w-1/2 lg:w-5/12 p-4 ${directionAnimate}`}>
                
        <div className="border border-gray-100 p-8">
          
          <p className="text-gray-600 mb-4 max-w-xs">
            {message}
          </p>
          <div className="flex items-center">
            
            <img
              className="mr-4 w-12 h-12 object-right rounded-full object-cover"
              src={image}
              alt={`image d'un client ${author}`}
            />
            <div>
              
              <p className="font-bold text-green-500 mb-1">
               {author}
              </p>
              <p className="text-gray-500 text-xs font-bold">
                {jobName} &amp; {Entreprise}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}