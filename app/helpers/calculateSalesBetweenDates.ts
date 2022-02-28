import moment from 'moment';

export const  calculateSalesBetweenDates = (startDate: string, endDate: string, branches: any) => {
    // Get branches' sales within date.
   const branchSales = Object.values(branches).filter((val: any) => {
       return moment(val.tranDate).isBetween(startDate, endDate)
   })

   const totalSales: number = branchSales.reduce((total: number, currentObj: any) => {
       return total + parseFloat(currentObj.sales)
   }, 0)

   return totalSales;
}