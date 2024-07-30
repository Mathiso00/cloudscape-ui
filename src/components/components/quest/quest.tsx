import { useState } from 'react'
import { cn } from '@/utils'

interface QuestProps {
  name?: string
  icon?: string

}

function Quest({ name, icon }: QuestProps) {
  const [_, setHovered] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group w-300px font-lexend h-420px p-2 relative border-2 rounded-md border-[#54504F] hover:border-[#7D6D49] transition-all shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-[#7D6D49]"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4.3 w-8 h-8 bg-neutral-900 border-2 transition-colors border-[#54504F]  group-hover:border-[#7D6D49]  flex items-center justify-center rotate-45 z-100 ">
        <div className={cn('-rotate-45 text-[#54504F] transition-colors group-hover:text-[#7D6D49] text-2xl', icon)} />
      </div>

      {/* <div */}
      {/*  className="[clip-path:_polygon(100%_50%,50%_100%,_100%_100%)] absolute bottom-0 z-60 right-0 min-h-10 min-w-10 bg-primary/90" */}
      {/* /> */}
      <div className="from-[#1C1F26] to-[#111317] bg-gradient-to-br flex flex-col w-full h-full rounded-sm relative">

        { /* Top banner URL */}
        <QuestHeader name={name} />

        <div className="h-full" />

      </div>
    </div>
  )
}

function QuestHeader({ name }: { name?: string }) {
  return (
    <div className="w-full h-1/5 relative">

      <div className="absolute inset-0 h-full bg-hero-temple-[#54504F]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/29 to-[#1C1F26]" />
      </div>

      <div className="max-w-110px font-500 text-center h-50px flex items-center justify-center uppercase  text-xl absolute top-1.1/2 left-1/2 transform -translate-x-1/2  text-[#54504F] group-hover:text-[#7D6D49]">
        { name }
      </div>

      <div className="absolute bottom-1 inset-x-0 flex justify-between">
        <div className="w-12% transition-width group-hover:w-18% h-.4 bg-[#54504F] group-hover:bg-[#7D6D49]" />
        <div className="w-12% transition-width group-hover:w-18% h-.4 bg-[#54504F] group-hover:bg-[#7D6D49]" />
      </div>
      <div className="absolute bottom-0 inset-x-0 flex justify-between">
        <div className="w-20% transition-width group-hover:w-24% h-.5 bg-[#54504F] group-hover:bg-[#7D6D49]" />
        <div className="w-20% transition-width group-hover:w-24% h-.5 bg-[#54504F] group-hover:bg-[#7D6D49]" />
      </div>
    </div>
  )
}

export { Quest }
