import moment from 'moment';

/*
  - Sales between dates.
*/
export const getBranchSalesBetweenDates = (startDate: string, endDate: string, sales: any) => {
    // Get branches' sales within date.
    const branchSales = Object.values(sales).filter((val: any) => {
        return moment(val.tranDate).isBetween(startDate, endDate, null, '[]')
    })

    return branchSales;
}


/*
  - Sales between dates.
*/
export const calculateSalesBetweenDates = (startDate: string, endDate: string, sales: any) => {
    const branchSales = getBranchSalesBetweenDates(startDate, endDate, sales)

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
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
    const endOfLastMonth = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
    const salesLastMonth = calculateSalesBetweenDates(startOfLastMonth, endOfLastMonth, sales)
    return salesLastMonth
}


/*
  - Revenue since last month.
*/
export const calculateRevenueSinceLastMonth = (sales: any) => {
    const startOfLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD');
    const totalSalesFromLastToCurentMonth = calculateSalesBetweenDates(startOfLastMonth, endOfThisMonth, sales)

    return totalSalesFromLastToCurentMonth
}

/*
  -  Growth Percentage since last month.
*/
export const calculateGrowthSinceLastMonth = (sales: any) => {
    const salesLastMonth = calculateLastMonthSales(sales)
    const startOfThisMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfThisMonth = moment().endOf('month').format('YYYY-MM-DD');
    const salesCurrentMonth = calculateSalesBetweenDates(startOfThisMonth, endOfThisMonth, sales)

    return ((salesLastMonth + salesCurrentMonth) - salesLastMonth) / salesCurrentMonth * 100
}


/*
  -  Revenue Year to Date.
*/
export const calculateRevenueYtd = (sales: any) => {
    const startOfThisYear = moment().startOf('year').format('YYYY-MM-DD')
    const today = moment().format('YYYY-MM-DD')
    const salesYtd = calculateSalesBetweenDates(startOfThisYear, today, sales)
    return salesYtd
}

/*
  -  Revenue last month subtracted by items sold.
*/
export const calculateGrossProfitYtd = (sales: any, salesDetails: any) => {
    const revenueSinceLastMonth = calculateRevenueSinceLastMonth(sales);
    const itemsSoldSinceLastMonth = calculateItemSoldYtd(salesDetails)
    return revenueSinceLastMonth - itemsSoldSinceLastMonth;
}

export const calculateItemSoldYtd = (salesDetails: any) => {
    const startOfThisYear = moment().startOf('year').format('YYYY-MM-DD')
    const today = moment().format('YYYY-MM-DD')

    // Get branches' sales within date.
    const itemsSold = Object.values(salesDetails).filter((val: any) => {
        return moment(val.tranDate).isBetween(startOfThisYear, today, null, '[]')
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


export const calculateRevenueLastWeek = (sales: any) => {
    const startDateLastWeek = moment().startOf('week').subtract(1, 'weeks').format('YYYY-MM-DD')
    const endDateLastWeek = moment().endOf('week').subtract(1, 'weeks').format('YYYY-MM-DD')
    const revenue = calculateSalesBetweenDates(startDateLastWeek, endDateLastWeek, sales)
    return revenue
}

export const calculateRevenueCurrentWeek = (sales: any) => {
    const startDateCurrentWeek = moment().startOf('week').format('YYYY-MM-DD')
    const endDateCurrentWeek = moment().endOf('week').format('YYYY-MM-DD')
    const revenue = calculateSalesBetweenDates(startDateCurrentWeek, endDateCurrentWeek, sales)
    return revenue
}

export const calculateRevenueCurrentWeekDays = (sales: any) => {
    const startDateCurrentWeek = moment().startOf('week').format('YYYY-MM-DD')
    const endDateCurrentWeek = moment().endOf('week').format('YYYY-MM-DD')

    // Get branches' sales within date.
    const branchSales = getBranchSalesBetweenDates(startDateCurrentWeek, endDateCurrentWeek, sales)

    return calculateWeekDaysSales(branchSales);
}

export const calculateRevenuePreviousWeekDays = (sales: any) => {
    const startDatePreviousWeek = moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD')
    const endDatePreviousWeek = moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD')

    // Get branches' sales within date.
    const branchSales = Object.values(sales).filter((val: any) => {
        return moment(val.tranDate).isBetween(startDatePreviousWeek, endDatePreviousWeek, null, '[]')
    })
  
    console.log('last week days:',calculateWeekDaysSales(branchSales));
    
   return calculateWeekDaysSales(branchSales);
}


const calculateWeekDaysSales = (sales:any) => {
    const weekSales: any = {};

    sales.forEach((sale: any) => {
        let keyName: number = moment(sale.tranDate).isoWeekday();

        if (!weekSales.hasOwnProperty(keyName)) {
            weekSales[keyName] = parseFloat(sale.sales)
        } else {
            weekSales[keyName] += parseFloat(sale.sales)
        }
    })

    for (let i = 1; i <= 7; i++) {
        if (!weekSales.hasOwnProperty(i)) {
            weekSales[i] = 0
        }
    }

    return Object.values(weekSales);
}