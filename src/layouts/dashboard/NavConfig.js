// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'health',
    path: '/dashboard/app',
    icon: getIcon('healthicons:health-alt-outline'),
  },
  {
    title: 'assets',
    path: '/dashboard/assets',
    icon: getIcon('carbon:asset'),
  },
  {
    title: 'reports',
    path: '/dashboard/reports',
    icon: getIcon('carbon:report'),
  },
  {
    title: 'RCFA',
    path: '/dashboard/rcfa',
    icon: getIcon('ep:document'),
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: getIcon('carbon:user'),
  },
];

export default navConfig;
