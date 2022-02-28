import { db } from '~/utils/firebase'

async function getClientCollecton(clientCode: string) {
    return await db.collection(clientCode.toLowerCase());
}

export async function getInventories(clientCode: string) {
    const clientCollection: any = await getClientCollecton(clientCode);
    const valuation = await clientCollection.doc('inventory').collection('valuation').get();
    const items: any = {}
    valuation.forEach((doc: any) => {
        items[doc.id] = { ...doc.data(), id: doc.id }
    })

    return items;
}

export async function getSalesDetails(clientCode: string) {
    const clientCollection: any = await getClientCollecton(clientCode);
    const detailsCollection = await clientCollection.doc('sales').collection('details').get();
    const details: any = {}
    detailsCollection.forEach((doc: any) => {
        details[doc.id] = { ...doc.data(), id: doc.id }
    })

    return details
}

export async function getSalesSummary(clientCode: string) {
    const clientCollection: any = await getClientCollecton(clientCode);
    const summaryCollection = await clientCollection.doc('sales').collection('summary').get();
    const summary: any = {}
    summaryCollection.forEach((doc: any) => {
        summary[doc.id] = { ...doc.data(), id: doc.id }
    })

    return summary;
}

