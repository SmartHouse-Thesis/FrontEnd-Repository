import { Icon } from '@iconify/react';
import productImg from '../../public/image/clother.png';
import user from '../../public/image/user.png';
import { Pagination } from '../components/Pagination';
import { BreadCrumb } from '../components/BreadCrumb';
import { SearchInput } from '../components/SearchInput';

export function ConstructionPage() {
  const productArray = [
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      constructionId: 'CT1239718245',
      customer: 'Elvin Dang',
      order: '62',
      amount: '510',
      status: 'Paid',
      published: '06 Jan, 2021, 01:31 PM',
    },
  ];
  return (
    <>
      <BreadCrumb />
      <div className='px-[24px] pt-[24px]'>
        <div className='bg-[white]  pt-[13px] pb-[16px] '>
          <div className='flex items-center justify-between mx-[20px] mb-[20px] '>
            <span className='flex items-center justify-between bg-[#0AB39C] w-[180px] px-[15px] py-[10px] rounded-[4px]'>
              <Icon icon='ic:baseline-plus' style={{ color: 'white' }} />
              <button className='text-white font-poppin font-normal text-[13px]'>
                Add Construction
              </button>
            </span>
            <SearchInput />
          </div>
          <div className='flex items-center justify-between px-[14px] '>
            <span className='text-[#495057] font-poppin font-medium text-[16px]'>
              Construction Page
            </span>
          </div>
          <div className='mb-[15px] border-b border-[#E9EBEC] flex items-center justify-start'>
            <div className='py-[16px] px-[20px]'>
           <span className='text-[#405189] font-poppin font-medium text-[13px]'> New Contract</span>
            </div>
            <div className='py-[16px] px-[20px]'>
           <span className='text-[#405189] font-poppin font-medium text-[13px]'> Deposited Contract</span>
            </div>
            <div className='py-[16px] px-[20px]'>
           <span className='text-[#405189] font-poppin font-medium text-[13px]'> Ongoing Contract</span>
            </div>
            <div className='py-[16px] px-[20px]'>
           <span className='text-[#405189] font-poppin font-medium text-[13px]'> Success Contract</span>
            </div>
          </div>
          <table>
            <tr>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Construction ID
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Customer
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Total Product
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Amount
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Vendor
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Status
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Rating
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Published
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Update
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Delete
              </th>
            </tr>
            {productArray.map((item) => (
              <tr className='border-t border-b border-[#E9EBEC] '>
                <td className='px-[40px] flex gap-[8px] py-[20px] items-center'>
                  <div className='flex flex-col'>
                    <span className='font-poppin text-[14px] font-medium text-[#495057]'>
                      {item.constructionId}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      
                    </span>
                  </div>
                </td>
                <td className='px-[20px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.customer}
                    </span>
                  </div>
                </td>
                <td className='px-[36px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.order}
                    </span>
                  </div>
                </td>
                <td className='px-[47px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.amount}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      Stock
                    </span>
                  </div>
                </td>
                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      Amount
                    </span>
                  </div>
                </td>
                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-emerald-800 inline-block py-[10px] px-[20px] bg-green-500'>
                      Waiting
                    </span>
                  </div>
                </td>
                <td className='px-[61px]'>
                  <div className='flex flex-col items-start justify-center'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      Amount
                    </span>
                  </div>
                </td>
                <td className='pr-[41px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.published}
                    </span>
                  </div>
                </td>
                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      <Icon
                        icon='material-symbols:edit-outline'
                        className='w-[20px] h-[20px]'
                        style={{ color: '#405189' }}
                      />
                    </span>
                  </div>
                </td>
                <td className='px-[20px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      <Icon
                        icon='material-symbols:delete-outline'
                        className='w-[20px] h-[20px]'
                        style={{ color: '#F06548' }}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
}
