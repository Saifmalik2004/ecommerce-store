import { Billboard as BillboardType} from '@/types'

interface BillboardProps{
    data:BillboardType
}
const Billboard:React.FC<BillboardProps>=({
    data
})=> {
  return (
    <div className='p-4 sm:p-6 lg:p-8  rounded-xl overflow-hidden'>
        <div className="rounded-xl realtive aspect-[4/2] md:aspect-[4/1.5] lg:aspect-[4/1] overflow-hidden bg-cover"
        style={{backgroundImage:`url(${data?.imageUrl})`}}>
            <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
                 style={{ color: data.textColor }} >
                      {data.label}
                </div>

            </div>

        </div>
        </div>
  )
}

export default Billboard