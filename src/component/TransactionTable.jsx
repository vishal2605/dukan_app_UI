
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
  } from "@material-tailwind/react";
export const TransactionTable = ()=>{

    const column=["Order Id","Status","Transaction Id","Refund Date","Order Amount"];

  const row=[{
    order_id:"#281209",
    status:"Successful",
    transaction_id:131634495747,
    refund_date:"Today, 08:45 PM",
    order_amount:"₹11,100"
  },
  {
    order_id:"#281208",
    status:"Processing",
    transaction_id:131634495747,
    refund_date:"Yesterday, 08:45 PM",
    order_amount:"₹11,100"
  },{
    order_id:"#281207",
    status:"failed",
    transaction_id:131634495747,
    refund_date:"12 Jul 2023, 3:00 PM",
    order_amount:"₹11,100"
  },{
    order_id:"#281206",
    status:"Successful",
    transaction_id:131634495747,
    refund_date:"12 Jul 2023, 3:00 PM",
    order_amount:"₹11,100"
  },{
    order_id:"#281205",
    status:"Failed",
    transaction_id:131634495747,
    refund_date:"12 Jul 2023, 3:00 PM",
    order_amount:"₹11,100"
  },{
    order_id:"#281204",
    status:"Processing",
    transaction_id:131634495747,
    refund_date:"13 Jul 2023, 3:00 PM",
    order_amount:"₹11,100"
  },{
    order_id:"#281209",
    status:"Successful",
    transaction_id:131634495747,
    refund_date:"Today, 08:45 PM",
    order_amount:"₹11,100"
  }]
    return(
        <div>
            <div className='text-xl font-medium mt-6'>
        Transactions | This Month
        </div>
        <div className='flex gap-3'>
          <button className='mt-5 rounded-full bg-gray-300 text-gray-600 px-4 py-1.5'>Payouts (22)</button>
          <button className='mt-5 rounded-full bg-sky-600 text-white px-4 py-1.5'>Refunds (6)</button>

        </div>
        <Card className='w-full h-full p-4'>
          <CardHeader floated={false} shadow={false} className='rounded-none'>
            <div className='flex justify-between'>
              <div className='w-96'> 
                  <form className="place-item-center max-w-md mx-auto">   
                      <label for="default-search" className="mb-2 text-sm font-medium text-black-900 sr-only">Search</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                          </div>
                          <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-black border rounded focus:ring-blue-500 focus:border-black-500 bg-black-100" placeholder="Order Id or Transaction Id" required />
                      </div>
                  </form>

              </div>
              <div className='flex'>
                <div className='mr-3'>
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  font-normal text-black-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Sort
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                    </svg>

                  </button>
                </div>
                <div>
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-normal text-black-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <table className='w-full table-auto text-left mt-3'>
              <thead>
                <tr>
                  {column.map((head)=>(
                    <th key={head} className=''>
                        <div className='font-sembold'>
                          {head}
                        </div>
                    </th>
                  ))
                  }
                </tr>
              </thead>
              <tbody>
                {row.map((row)=>(
                  <tr key={row.order_id} className='border-b-2 '>
                    <td className='font-normal text-blue-400 py-4 px-2'>
                      {row.order_id}
                    </td>
                    <td className='px-2'>
                      {row.status}
                    </td>
                    <td className='px-2'>
                      {row.transaction_id}
                    </td>
                    <td className='px-2'>
                      {row.refund_date}
                    </td>
                    <td className='px-2'>
                      {row.order_amount}
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </CardBody>
        </Card>
        </div>
    )
}