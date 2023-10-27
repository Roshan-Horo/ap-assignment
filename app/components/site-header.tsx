import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import {Search} from 'lucide-react'

export function SiteHeader() {

    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-2 md:container md:mx-auto flex h-14 items-center justify-between">

          <div>
            <img className="w-32" src="https://acharyaprashant.org/images/ic_videoseries.png" alt="logo" />
          </div>

          <div className="sr-only md:not-sr-only">
            <div className="flex w-full max-w-sm items-center">
              <Input className="w-full rounded-none rounded-tl-lg rounded-bl-lg" type="email" placeholder="Search for video series" />
              <Button className="rounded-none rounded-br-lg rounded-tr-lg" type="submit">
                <Search color="white" size="20" />
              </Button>
            </div>
          </div>

          <div className="">
           <Button>My Video Series</Button>
          </div>

        </div>
      </header>
      
    )
  }