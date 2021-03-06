import { useOutletContext, ContextType } from "remix";
import { calculateGrossProfitYtd } from '~/helpers/sales';

export default function GrossProfit() {
    const { salesSummary, salesDetails } = useOutletContext<ContextType>()
    const grossProfitSinceLastMonth = calculateGrossProfitYtd(salesSummary, salesDetails)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Gross Profit / Margin</span>
                <div className="text-900 font-medium text-xl">{grossProfitSinceLastMonth}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-chart-bar text-purple-500 text-xl" />
            </div>
        </div>
        {/* <span className="text-green-500 text-500 font-medium ">{moment().subtract(1, 'months').format('MMM')} -  {moment().format('MMM')}  </span>  */}
        <span className="text-500">year to date</span>
    </div>)
}