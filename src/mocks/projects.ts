import { StaticImageData } from 'next/image';

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;

}

import weddingPageImage from '@/images/projects/noivas.png';

export const projectsList: ProjectProps[] = [{
  id: 1,
  name: 'Páginas para advogados',
  description: 'Description 1',
  image: weddingPageImage,

}, {
  id: 2,
  name: 'Página para o seu produto',
  description: 'Description 2',
  image: weddingPageImage,

}, {
  id: 3,
  name: 'Sites de casamentos',
  description: 'Description 3',
  image: weddingPageImage,

}, {
  id: 4,
  name: 'Project 4',
  description: 'Description 4',
  image: weddingPageImage,

}
]