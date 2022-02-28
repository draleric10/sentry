import { Chart } from 'primereact/chart';
import { useOutletContext, ContextType } from "remix";
import randomColor from 'randomcolor'
import 'chartjs-plugin-datalabels';

export default function BranchesChart() {
    const { salesSummary } = useOutletContext<ContextType>()

    const salesObj: any = {};

    for (const sale in salesSummary) {
        const keyName: any = sale.split("_")[0].trim();
       
        if (!salesObj.hasOwnProperty(keyName)) {
            salesObj[keyName] = {
                id: keyName,
                branch: salesSummary[sale].branchName,
                totalSales: parseFloat(salesSummary[sale].sales),
                color: randomColor({
                    luminosity: 'bright',
                    format: 'rgb' // e.g. 'rgb(225,200,20)'
                 })
            }
        } else {
            salesObj[keyName].totalSales += parseFloat(salesSummary[sale].sales)
        }
    }

    const branchNames = Object.values(salesObj).map((s: any) => s.branch);
    const branchSales = Object.values(salesObj).map((s: any) => s.totalSales);
    const branchColors = Object.values(salesObj).map((s: any) => s.color);
  
    const barData = {
        labels: [...branchNames],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: [...branchColors],
                data: [...branchSales],
            },
        ],
    };

    const barOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            },
        },
        
        aspectRatio: 3,
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
        <h5>Branches</h5>
        <Chart type="bar" data={barData} options={barOptions} />
    </div>

}