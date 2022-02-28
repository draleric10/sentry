import moment from 'moment';

/*
  - Sales between dates.
*/
export const calculateSalesBetweenDates = (startDate: string, endDate: string, sales: any) => {
    // Get branches' sales within date.
    const branchSales = Object.values(sales).filter((val: any) => {
        return moment(val.tranDate).isBetween(startDate, endDate)
    })

    const totalSales: number = branchSales.reduce((total: number, currentObj: any) => {
        return total + parseFloat(currentObj.sales)
    }, 0)

    return totalSales;
}

/*
  - Revenue only today.
*/
export const calculateTodaySalesSummary = (sales: any) => {
    // get all sales with transaction today.
    const todays = Object.values(sales).filter((val: any) => {
        return val.tranDate == moment().format('MM/DD/YYYY');
    })

    // calculate today's sales per branches.
    const salestoday: number = todays.reduce((total: number, currentObj: any) => {
        return total + parseFloat(currentObj.sales)
    }, 0)

    return salestoday
}


/*
  - Revenue only last month.
*/
export const calculateLastMonthSales = (sales: any) => {
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfLastMonth = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD hh:mm');
    const salesLastMonth = calculateSalesBetweenDates(startOfLastMonth, endOfLastMonth, sales)
    return salesLastMonth
}


/*
  - Revenue since last month.
*/
export const calculateRevenueSinceLastMonth = (sales: any) => {
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');
    const totalSalesFromLastToCurentMonth = calculateSalesBetweenDates(startOfLastMonth, endOfThisMonth, sales)

    return totalSalesFromLastToCurentMonth
}

/*
  -  Growth Percentage since last month.
*/
export const calculateGrowthSinceLastMonth = (sales: any) => {
    const salesLastMonth = calculateLastMonthSales(sales)
    const startOfThisMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');
    const salesCurrentMonth = calculateSalesBetweenDates(startOfThisMonth, endOfThisMonth, sales)

    return ((salesLastMonth + salesCurrentMonth) - salesLastMonth) / salesCurrentMonth * 100
}


/*
  -  Revenue Year to Date.
*/
export const calculateRevenueYtd = (sales: any) => {
    const startOfThisYear = moment().startOf('year').format('YYYY-MM-DD hh:mm')
    const today = moment().format('YYYY-MM-DD hh:mm')
    const salesYtd = calculateSalesBetweenDates(startOfThisYear, today, sales)
    return salesYtd
}

/*
  -  Revenue last month subtracted by items sold.
*/
export const calculateGrossProfitYtd = (sales: any, salesDetails: any) => {
    const revenueSinceLastMonth = calculateRevenueSinceLastMonth(sales);

    const itemsSoldSinceLastMonth = calculateItemSoldYtd(salesDetails)
    console.log("🚀 ~ file: sales.ts ~ line 89 ~ calculateGrossProfitYtd ~ itemsSoldSinceLastMonth", itemsSoldSinceLastMonth)

    return revenueSinceLastMonth - itemsSoldSinceLastMonth;
}

export const calculateItemSoldYtd = (salesDetails: any) => {
    const startOfThisYear = moment().startOf('year').format('YYYY-MM-DD hh:mm')
    const today = moment().format('YYYY-MM-DD hh:mm')

     // Get branches' sales within date.
     const itemsSold = Object.values(salesDetails).filter((val: any) => {
        return moment(val.tranDate).isBetween(startOfThisYear, today)
    })

    const itemsSoldAmount: number = itemsSold.reduce((total: number, currentSale: any) => {
        let totalAmount: number = 0;
        currentSale.items.forEach((item: any) => {
            totalAmount += parseFloat(item.total_amount)
        })

        return total + totalAmount
    }, 0)

    return itemsSoldAmount;
}

