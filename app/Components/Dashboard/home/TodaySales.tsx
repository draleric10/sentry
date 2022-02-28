import { useOutletContext, ContextType } from "remix";
import moment from 'moment'

const calculateTodaySalesSummary = (branches: any) => {
    // get all branches with transaction today.
    const todays = Object.values(branches).filter((val: any) => {
        return val.tranDate == moment().format('MM/DD/YYYY');
    })

    // calculate today's sales per branches.
    const salestoday: number = todays.reduce((total: number, currentObj: any) => {
        return total + parseFloat(currentObj.sales)
    }, 0)

    return salestoday
}

export default function TodaySales() {
    const { salesSummary } = useOutletContext<ContextType>()
    const totalSalesToday = calculateTodaySalesSummary(salesSummary)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Today Sales</span>
                <div className="text-900 font-medium text-xl">{totalSalesToday}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-green-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-shopping-cart text-green-500 text-xl" />
            </div>
        </div>
        <span className="text-500">{moment().format('MMM D YYYY')}</span>
    </div>)
}