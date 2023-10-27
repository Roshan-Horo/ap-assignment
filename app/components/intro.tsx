import type { Base } from "./relatedVideos"
import { Twitter, Facebook, Linkedin} from 'lucide-react'

type Details = Base & {
    coursesCount: number,
    description: string,
}

export default function CourseInto({ details }: { details: Details}){
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}

              <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                        src={`${details.thumbnail.domain}/${details.thumbnail.basePath}/${details.thumbnail.qualities[details.thumbnail.qualities.length - 1]}/${details.thumbnail.key}`}
                        alt={"alt"}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
              </div>
    
              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{details.title}</h1>
    
                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">{details.subtitle}</p>
                </div>
    
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
    
                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: details.description }}
                  />
                </div>
    
                <form className="mt-6">    

                  <div>Share this Series on your socials</div>         
    
                  <div className="sm:flex-col1 mt-5 flex">

                    <button className="mr-4">
                        <Facebook size={36} fill="#3E6FA7" strokeWidth={0}/>
                    </button>

                    <button className="mr-4">
                        <Twitter fill="#08BBEE" size={36} strokeWidth={0} />
                    </button>

                    <button className="mr-4">
                        <Linkedin fill="#0A66C2" size={36} strokeWidth={0} />
                    </button>
    
                  </div>
                </form>
    
              </div>
            </div>
          </div>
        </div>
      )
}