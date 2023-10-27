import { Badge } from "@components/ui/badge"
import type { Base } from "./relatedVideos"

type Course = Base & {
    amount: number,
    originalAmount: number,
    contentType: string,
    courseHours: number,
    series: {
        id: string,
        order: {
            seq: number
        }
    }
}

export default function CourseVideos({ courses }: {courses: Course[]}){

    return (
        <ul role="list" className="sm:px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-primary cursor-pointer">
              <div>
              </div>
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-md font-bold text-gray-900">{course.title}</h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {`Part ${course.series.order.seq}`}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-md text-gray-500">{course.subtitle}</p>
                  <p className=" truncate text-sm text-gray-500">{`${Math.floor(course.courseHours)} hr ${Math.ceil((Math.abs(course.courseHours) - Math.floor(course.courseHours)) * 60)} mins`}</p>
                  <div className="truncate text-md pt-2 font-semibold text-gray-500">
                    <span>Contribution : </span>
                    <span>&#8377;<span className="text-primary">{`${course.amount} `}</span></span>
                    <span className="line-through">&#8377; {`${course.originalAmount} `}</span>
        
                  </div>
                </div>
                {/* <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" /> */}
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={``}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <span className="ml-3 text-primary">Add to Cart</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={``}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <span className="ml-3 text-primary">Enroll</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )
}