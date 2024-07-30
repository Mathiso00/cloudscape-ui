import { useState } from 'react'
import { cn } from '@/utils'
import { Text } from '@/components/typography'

interface QuestProps {
  name?: string
  icon?: string
  description?: string
  percentage?: number
  tags?: string[]
}

function Quest({ name, icon, description, percentage, tags }: QuestProps) {
  const [_, setHovered] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group w-300px font-lexend h-300px p-2 relative border-2 rounded-md border-[#54504F] hover:border-[#7D6D49] transition-all shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-[#7D6D49]"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4.3 w-8 h-8 bg-neutral-900 border-2 transition-colors border-[#54504F]  group-hover:border-[#7D6D49]  flex items-center justify-center rotate-45 z-100 ">
        <div className={cn('-rotate-45 text-[#54504F] transition-colors group-hover:text-[#7D6D49] text-2xl', icon)} />
      </div>

      <div className="from-[#1C1F26] to-[#111317] bg-gradient-to-br flex flex-col w-full h-full rounded-sm relative">

        { /* Top banner URL */}
        <QuestHeader name={name} />

        <div className="h-full relative overflow-hidden">

          { !percentage && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className=" i-mdi-lock text-white/40 rounded-sm w-10 h-10" />
            </div>
          )}

          { percentage && (
            <>

              { /* Icon */}
              <div className={cn(icon, 'w-50 h-50 op-2.5 mt-38% -ml-10')} />
              <div className="absolute flex flex-col inset-0 p-6">
                <div className="h-full" />

                <div className="flex flex-row gap-1 mb-1">
                  { tags?.slice(0, 2).map((tag, index) => (
                    <div key={index} className="bg-white/4 text-white/30 rounded-sm px-2 py-1 text-[10px]">
                      { tag }
                    </div>
                  ))}
                  { tags && tags?.length > 2 && (
                    <div className="bg-white/4 text-white/30 rounded-sm px-2 py-1 text-[10px]">
                      +
                      { tags.length - 2 }
                    </div>
                  )}
                </div>
                {/* Progress Bar */}
                <div className="flex flex-row gap-2 items-center mb-2">
                  <div className="w-full rounded-sm overflow-hidden bg-gray/30 h-1">
                    <div className="bg-[#7D6D49] h-full" style={{ width: `${percentage}%` }} />
                  </div>
                  <Text color="gray" className="op-30" size="1">
                    { percentage }
                    %
                  </Text>
                </div>
                <Text color="gray" className="op-50" size="2">
                  { description }
                </Text>
              </div>

            </>
          ) }
        </div>
      </div>
    </div>
  )
}

function QuestHeader({ name }: { name?: string }) {
  return (
    <div className="w-full h-1/4 relative">

      <div className="absolute inset-0 h-full bg-hero-temple-[#54504F]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/29 to-[#1C1F26]" />
      </div>

      <div className="max-w-110px font-500 text-center h-50px flex items-center justify-center uppercase  text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2  text-[#54504F] group-hover:text-[#7D6D49]">
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
