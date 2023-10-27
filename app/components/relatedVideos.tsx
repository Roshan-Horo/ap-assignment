import { Badge } from "@components/ui/badge"

export type Base = {
    id: string,
    contentType: string,
    title: string,
    subtitle: string,
    language: string,
    thumbnail: {
      aspectRatio: number,
      basePath: string,
      domain: string,
      id: string,
      key: string,
      version: number,
      qualities: number[]
    },

}

type Video = Base & {
  coursesCount: number,
  relatedType: number
}

export default function RelatedVideos({ videos }: {videos: Video[]}){
  return (
    <div className="px-2">
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    {videos?.map((file) => (
      <li key={file.id} className="relative">
        <div className="group aspect-video block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img src={`${file.thumbnail.domain}/${file.thumbnail.basePath}/${file.thumbnail.qualities[0]}/${file.thumbnail.key}`} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {file.title}</span>
          </button>
        </div>
        <p className="pointer-events-none mt-2 block truncate text-md font-bold">{file.title}</p>
        <p className="pointer-events-none block truncate text-md font-medium text-gray-500">{file.subtitle}</p>
        <p className="pointer-events-none block text-sm font-medium text-gray-500 flex ">
          <Badge className="mr-2" variant="secondary">{`${file.coursesCount ?? 1} Video Series`}</Badge>
          <Badge>{`${file.language}`.toUpperCase()}</Badge>
        </p>
      </li>
      ) 
    )
    }
  </ul>
  </div>
  )
}