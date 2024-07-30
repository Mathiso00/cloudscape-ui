function Quest() {
  return (
    <div
      className="group w-300px h-420px p-2 relative border-2 rounded-md border-[#54504F] hover:border-[#7D6D49] transition-all shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-[#7D6D49]"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2  -top-4.3 w-8 h-8 bg-neutral-900 border-2 transition-colors border-[#54504F]  group-hover:border-[#7D6D49]  flex items-center justify-center rotate-45 z-100 ">
        <div className="i-game-icons:life-buoy text-[#54504F] transition-colors group-hover:text-[#7D6D49] text-2xl" />
      </div>

      {/* <div */}
      {/*  className="[clip-path:_polygon(100%_50%,50%_100%,_100%_100%)] absolute bottom-0 z-60 right-0 min-h-10 min-w-10 bg-primary/90" */}
      {/* /> */}
      <div className="bg-[#1C1F26] w-full h-full rounded-sm relative">

        { /* Top banner URL */}
        <QuestHeader />

      </div>
    </div>
  )
}

function QuestHeader() {
  return (
    <div className="w-full h-1/4  relative">

      <div className="font-serif text-xl">
        Docker
      </div>

      <div className="absolute bottom-1 inset-x-0 flex justify-between">
        <div className="w-16% transition-width group-hover:w-18% h-.4 bg-[#54504F] group-hover:bg-[#7D6D49]" />
        <div className="w-16% transition-width group-hover:w-18% h-.4 bg-[#54504F] group-hover:bg-[#7D6D49]" />
      </div>
      <div className="absolute bottom-0 inset-x-0 flex justify-between">
        <div className="w-20% transition-width group-hover:w-30% h-.5 bg-[#54504F] group-hover:bg-[#7D6D49]" />
        <div className="w-20% transition-width group-hover:w-30% h-.5 bg-[#54504F] group-hover:bg-[#7D6D49]" />
      </div>
    </div>
  )
}

export { Quest }
