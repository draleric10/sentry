import moment from 'moment'
import { useOutletContext } from "remix";
import type { ContextType } from "remix";
import { calculateSalesBetweenDates } from '~/helpers/calculateSalesBetweenDates';

const calculateRevenueSinceLastMonth = (branches: any) => {
    // last month sales
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfLastMonth = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD hh:mm');
    const salesLastMonth =  calculateSalesBetweenDates(startOfLastMonth, endOfLastMonth, branches)

      // current month sales
    const startOfThisMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');
    const salesCurrentMonth =  calculateSalesBetweenDates(startOfThisMonth, endOfThisMonth, branches)
   
    return ((salesLastMonth + salesCurrentMonth) - salesLastMonth) / salesCurrentMonth * 100
}

export default function GrossProfit() {
    const { salesSummary } = useOutletContext<ContextType>()
    const totalSalesToday = calculateRevenueSinceLastMonth(salesSummary)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">GrossProfit</span>
                <div className="text-900 font-medium text-xl">{totalSalesToday} % </div>
            </div>
            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-chart-bar text-purple-500 text-xl" />
            </div>
        </div>
        {/* <span className="text-green-500 text-500 font-medium ">{moment().subtract(1, 'months').format('MMM')} -  {moment().format('MMM')}  </span>  */}
        <span className="text-500">since last month</span>
    </div>)
}