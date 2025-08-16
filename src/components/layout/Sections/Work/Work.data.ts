import { WorkRow } from './Work.types';

// Gallery data - organized by rows with uniform height
export const GALLERY_ROWS: WorkRow[] = [
  // Row 1: 4 items with different widths but same height
  {
    id: 'row-1',
    items: [
      {
        id: 1,
        image: '/images/gallery/fivenap.jpg',
        title: 'FiveNapp',
        category: 'Home Loan Calculator',
        link: 'https://fivenapp.com/?fbclid=IwY2xjawMGtpVleHRuA2FlbQIxMQABHlOcCYfDti9N6OQTgsLCnc-ViZWvL3aMQutjS0MFjlDEXnC4pTY03owiEkwh_aem_UOVEnvVct3JXRX7JWzWHuQ',
      },
      {
        id: 2,
        image: '/images/gallery/wanderlinx.jpg',
        title: 'Wanderlinx',
        category: 'Travel Agency Website',
        link: 'https://mywanderlinx.com/',
      },
      {
        id: 3,
        image: '/images/gallery/thebrittanyhotels.jpg',
        title: 'The Brittany Hotels',
        category: 'Hotel Booking Website',
        link: 'https://thebrittanyhotels.com/',
      },
      {
        id: 4,
        image: '/images/gallery/secbankph.jpg',
        title: 'Secbank PH',
        category: 'Banking Website',
        link: 'https://www.secbank.ph/',
      },
    ],
  },
  // Row 2: 4 items with different widths but same height
  {
    id: 'row-2',
    items: [
      {
        id: 5,
        image: '/images/gallery/peopleandpetspharmacy.jpg',
        title: 'People And Pets Pharmacy',
        category: 'Pharmacuetical Website',
        link: 'https://peopleandpetspharmacy.com/',
      },
      {
        id: 6,
        image: '/images/gallery/keyhomes.jpg',
        title: 'Key Homes LLC',
        category: 'Home Construction',
        link: 'https://www.keyhomesllc.com/',
      },
      {
        id: 7,
        image: '/images/gallery/rail.jpg',
        title: 'Recovery Advocates In Livingston',
        category: 'Recovery Advocates',
        link: 'https://www.recoverylivingston.org/',
      },
    ],
  },
  // Row 3: 4 items with different widths but same height
  {
    id: 'row-3',
    items: [
      {
        id: 8,
        image: '/images/gallery/the10disciplines.jpg',
        title: 'The 10 Disciplines',
        category: 'Personal Development',
        link: 'https://www.the10disciplines.com',
      },
      {
        id: 9,
        image: '/images/gallery/littlepeas.jpg',
        title: 'Little Peas',
        category: 'Car Seat Company',
        link: 'https://littlepeas.co.uk/',
      },
      {
        id: 10,
        image: '/images/gallery/lakeside.jpg',
        title: 'Lakeside Services',
        category: 'Plumbing Services',
        link: 'https://www.lakesideservice.com/',
      },
      {
        id: 11,
        image: '/images/gallery/waynemediagroup.jpg',
        title: 'Wayne Media Group',
        category: 'Digital Agency',
        link: 'https://waynemedia.com/',
      },
      {
        id: 12,
        image: '/images/gallery/navito.jpg',
        title: 'Navito',
        category: 'Fleet Management',
        link: 'https://navito.com/',
      },
    ],
  },
];
