

function PaymentCard( {
    title,
    orderCount,
    amount,
    isRevenue,
    amountProcessed
}){
    return(
        <div className="drop-shadow rounded overflow-hidden">
            <div className={`${isRevenue ?'bg-white text-black':'bg-sky-700 hover:bg-sky-750 text-white'}  p-5 gap-y-4`}>
                <div className="flex ">
                    <div>{title}</div>
                    <div>?</div>
                </div>
                <div className="flex justify-between pt-2">
                    <div className="text-2xl font-semibold">
                    ₹ {amount}
                    </div>
                    {!amountProcessed && <div>
                        <div className="flex">
                            {orderCount} orders
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>}
                </div>
            </div>
            {!isRevenue && <div className="flex bg-sky-900 text-white justify-between py-2 px-6">
                <div>
                    Next Payment
                </div>
                <div>
                    Today, 04:00 PM
                </div>
            </div>}
        </div>
    )
}
export default PaymentCard;