import { Chart } from 'primereact/chart';
import { calculateRevenueLastWeek, calculateRevenueCurrentWeek, calculateRevenueYtd, calculateRevenueCurrentWeekDays, calculateRevenuePreviousWeekDays } from '~/helpers/sales';
import { useOutletContext, ContextType } from "remix";
import moment from 'moment'
import randomColor from 'randomcolor'

export default function RevenueChart() {
    const { salesSummary } = useOutletContext<ContextType>()
    const revenueLastWeek = calculateRevenueLastWeek(salesSummary)
    const revenueCurrentWeek = calculateRevenueCurrentWeek(salesSummary)
    const revenueYtd = calculateRevenueYtd(salesSummary)
    const revenueCurrentWeekDays = calculateRevenueCurrentWeekDays(salesSummary)
    const revenuePreviousWeekDays = calculateRevenuePreviousWeekDays(salesSummary)

    const lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Current Week',
                data: [...revenueCurrentWeekDays],
                fill: false,
                backgroundColor: randomColor(),
                borderColor: randomColor(),
                tension: .4
            },
            {
                label: 'Last Week',
                data: [...revenuePreviousWeekDays],
                fill: false,
                backgroundColor: randomColor(),
                borderColor: randomColor(),
                tension: .4
            }
        ]
    };

    const lineOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef',
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef',
                }
            },
        }
    };

    return <div className="card">
        <h5>Revenue</h5>
        <div className="grid mb-2">
            <div className="col-4 text-center">
                <p>Current Week</p>
                <b>{revenueCurrentWeek}</b>
            </div>
            <div className="col-4 text-center">
                <p>Previous Week</p>
                <b>{revenueLastWeek}</b>
            </div>

            <div className="col-4 text-center">
                <p>Total Earnings for the Year {moment().format('YYYY')}</p>
                <b>{revenueYtd}</b>
            </div>
        </div>

        <Chart type="line" data={lineData} options={lineOptions} />
    </div>

}