import Link from 'next/link';

import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className='bg-sky-600 px-10 py-5'>
      <div className='grid sm:grid-cols-1 md:grid-cols-4 text-white'>
        <div className='col-span-1 md:col-span-2'>
          <h6 className='text-xl sm:py-4 md:pb-4'>ABOUT</h6>
          <p className='font-white text-sm pr-10'>
            Vucar được thành lập với mục tiêu chuyển đổi hóa ngành công nghiệp ô
            tô đã qua sử dụng tại Việt Nam. Chúng tôi với nỗ lực đơn giản hóa
            quy trình mua và bán ô tô đã qua sử dụng, sẽ mang đến cho khách hàng
            trải nghiệm mua xe tuyệt vời cùng với mức giá cạnh tranh. Bên cạnh
            đó, các thủ tục mua và bán sẽ được tự động hoá và tiết kiệm thời
            gian của các bên giao dịch.
          </p>
        </div>
        <div>
          <h6 className='text-xl sm:py-4 md:pb-4'>DỊCH VỤ</h6>
          <div className='flex flex-col'>
            <Link
              className='text-sm pb-3 hover:underline'
              href='/'
            >
              Mua Xe
            </Link>
            <Link
              className='text-sm pb-3 hover:underline'
              href='/'
            >
              Tư Vấn Chọn Xe
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <h6 className='text-xl sm:py-4 md:pb-4'>LIÊN HỆ VỚI CHÚNG TÔI</h6>
          <div className='flex flex-row text-sm pb-3'>
            <div className='sm:w-6 md:w-8 pr-2'>
              <FontAwesomeIcon icon={faHome} />
            </div>
            E-town Central, 11 đường Đoàn Văn Bơ, Phường 13, Quận 4, TP. Hồ Chí
            Minh, Việt Nam
          </div>
          <div className='flex flex-row text-sm pb-3'>
            <div className='w-6 pr-2'>
              <FontAwesomeIcon icon={faHome} />
            </div>
            63 Circular Road #02-01 Singapore (049417)
          </div>
          <div className='flex flex-row text-sm pb-3'>
            <div className='w-6 pr-2'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            hello@vucar.net
          </div>
          <div className='flex flex-row text-sm pb-3'>
            <div className='w-6 pr-2'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            +84 981 160 466
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center space-x-5'>
        <Link href='https://www.facebook.com/vucar.facebook'>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className='w-10 text-white transition ease-in-out delay-150 duration-300 hover:scale-110'
          />
        </Link>
        <Link href='https://www.linkedin.com/company/vucar/'>
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-10 text-white transition ease-in-out delay-150 duration-300 hover:scale-110'
          />
        </Link>
      </div>
    </div>
  );
}
