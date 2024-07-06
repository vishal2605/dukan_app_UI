
import PaymentCard from './PaymentCard';
export const Overview=()=>{

    return(
        <div>
            <div className='flex justify-between my-5'>
          <div className='text-xl font-medium'>
            Overview
          </div>
          <div class="relative inline-block text-left">
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-black-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                This Month
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <PaymentCard isRevenue={false} title={"amount pending"} amount={"94,200.30"} orderCount={13}/>
          <PaymentCard isRevenue={true} title={'Next Payout'} amount={'2,312.20'} orderCount={23}/>
          <PaymentCard amountProcessed={true}isRevenue={true} title={'Amount Processed'} amount={'23,92,312.19'} orderCount={23}/>
        
        </div>
        </div>
    )
}