import { WorkRow } from './Work.types';

// Gallery data - organized by rows with uniform height
export const GALLERY_ROWS: WorkRow[] = [
  // Row 1: 4 items with different widths but same height
  {
    id: 'row-1',
    items: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        title: 'Web Analytics Dashboard',
        category: 'Web Development',
        width: 'w-2/5', // 40% width
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&q=80',
        title: 'Mobile Banking App',
        category: 'Mobile Design',
        width: 'w-1/5', // 20% width
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        title: 'E-commerce Platform',
        category: 'Web Development',
        width: 'w-1/5', // 20% width
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1753998943918-dd2dfc4ee6ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGUlMjBlZGl0b3J8ZW58MHx8MHx8fDA%3D',
        title: 'Code Editor Interface',
        category: 'Desktop App',
        width: 'w-1/5', // 20% width
      },
    ],
  },
  // Row 2: 4 items with different widths but same height
  {
    id: 'row-2',
    items: [
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        title: 'Restaurant Website',
        category: 'Web Design',
        width: 'w-1/4', // 25% width
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
        title: 'Data Visualization',
        category: 'Web Development',
        width: 'w-1/3', // 33% width
      },
      {
        id: 7,
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
        title: 'Mobile Chat App',
        category: 'Mobile Design',
        width: 'w-1/6', // 16.67% width
      },
      {
        id: 8,
        image:
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
        title: 'Marketing Landing Page',
        category: 'Web Design',
        width: 'w-1/4', // 25% width
      },
    ],
  },
  // Row 3: 4 items with different widths but same height
  {
    id: 'row-3',
    items: [
      {
        id: 9,
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        title: 'CRM Dashboard',
        category: 'Web Development',
        width: 'w-1/3', // 33% width
      },
      {
        id: 10,
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        title: 'SaaS Platform',
        category: 'Web Development',
        width: 'w-1/6', // 16.67% width
      },
      {
        id: 11,
        image:
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
        title: 'Mobile App Design',
        category: 'Mobile Design',
        width: 'w-2/5', // 40% width
      },
      {
        id: 12,
        image:
          'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',
        title: 'Desktop Software',
        category: 'Desktop App',
        width: 'w-1/6', // 16.67% width
      },
    ],
  },
];
