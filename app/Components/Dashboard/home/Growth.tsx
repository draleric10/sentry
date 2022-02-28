import { useOutletContext, ContextType } from "remix";
import { calculateGrowthSinceLastMonth } from '~/helpers/sales';

export default function Growth() {
    const { sales } = useOutletContext<ContextType>()
    const growthSinceLastMonth = calculateGrowthSinceLastMonth(sales)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Growth</span>
                <div className="text-900 font-medium text-xl">{growthSinceLastMonth} % </div>
            </div>
            <div className="flex align-items-center justify-content-center bg-green-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-chart-line text-green-500 text-xl" />
            </div>
        </div>
        {/* <span className="text-green-500 text-500 font-medium ">{moment().subtract(1, 'months').format('MMM')} -  {moment().format('MMM')}  </span>  */}
        <span className="text-500">since last month</span>
    </div>)
}