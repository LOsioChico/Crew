import { type IProject } from '@/interfaces'

export type PopularCarrouselProject = Pick<
  IProject,
  | 'id'
  | 'mainImage'
  | 'title'
  | 'description'
  | 'fundingCurrent'
  | 'fundingPercentage'
  | 'fundingDaysLeft'
  | 'categories'
>

export const popularCarrouselProjects: PopularCarrouselProject[] = [
  {
    id: '1',
    mainImage: 'https://picsum.photos/500/400',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
    fundingCurrent: 1000,
    fundingPercentage: 50,
    fundingDaysLeft: 30,
    categories: ['category1', 'category2'],
  },
  {
    id: '2',
    title: 'Project 2',
    mainImage: 'https://picsum.photos/500/500',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
    fundingCurrent: 654,
    fundingPercentage: 13,
    fundingDaysLeft: 30,
    categories: ['category1', 'category2'],
  },
  {
    id: '3',
    title: 'Project 3',
    mainImage: 'https://picsum.photos/500/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
    fundingCurrent: 10000,
    fundingPercentage: 100,
    fundingDaysLeft: 0,
    categories: ['category1', 'category2'],
  },
  {
    id: '4',
    title: 'Project 4',
    mainImage: 'https://picsum.photos/500/700',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
    fundingCurrent: 7854,
    fundingPercentage: 78,
    fundingDaysLeft: 30,
    categories: ['category1', 'category2'],
  },
]

export type MainCarrouselProject = Pick<
  IProject,
  'id' | 'mainImage' | 'title' | 'shortDescription'
>

export const mainCarrouselProjects: MainCarrouselProject[] = [
  {
    id: '102',
    mainImage: 'https://picsum.photos/1000/500',
    title: 'Project 102',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '103',
    mainImage: 'https://picsum.photos/1050/500',
    title: 'Project 103',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '104',
    mainImage: 'https://picsum.photos/1100/500',
    title: 'Project 104',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '105',
    mainImage: 'https://picsum.photos/1150/500',
    title: 'Project 105',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '106',
    mainImage: 'https://picsum.photos/1200/500',
    title: 'Project 106',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]
