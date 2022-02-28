import { useOutletContext, ContextType } from "remix";
import moment from 'moment'
import { calculateTodaySalesSummary } from '~/helpers/sales'

export default function TodaySales() {
    const { sales } = useOutletContext<ContextType>()
    const totalSalesToday = calculateTodaySalesSummary(sales)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Today Sales</span>
                <div className="text-900 font-medium text-xl">{totalSalesToday}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-shopping-cart text-blue-500 text-xl" />
            </div>
        </div>
        <span className="text-500">{moment().format('MMM D YYYY')}</span>
    </div>)
}