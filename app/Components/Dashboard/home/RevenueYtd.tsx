import { useOutletContext, ContextType } from "remix";
import { calculateRevenueYtd } from '~/helpers/sales';
import moment from 'moment'

export default function RevenueYtd() {
    const { salesSummary } = useOutletContext<ContextType>()
    const revenueYtd = calculateRevenueYtd(salesSummary)

    return (<div className="card mb-0">
        <div className="flex justify-content-between mb-3">
            <div>
                <span className="block text-500 font-medium mb-3">Revenue YTD</span>
                <div className="text-900 font-medium text-xl">{revenueYtd}</div>
            </div>
            <div className="flex align-items-center justify-content-center bg-pink-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-calendar-plus text-pink-500 text-xl" />
            </div>
        </div>
        {/* <span className="text-green-500 text-500 font-medium ">{moment().subtract(1, 'months').format('MMM')} -  {moment().format('MMM')}  </span>  */}
        <span className="text-500"> {moment().format('MMM-DD-YYYY')}</span>
    </div>)
}