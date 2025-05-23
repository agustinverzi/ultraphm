'use client';

import { useMemo } from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

import constants from '@/utils/constants';

export default function Breadcrumb() {
  // Utils
  const pathname = usePathname();
  const pageName = useMemo(() => pathname.split('/').pop(), [pathname]);
  const pageTitle = useMemo(() => pageName ? constants.pageTitles[pageName as keyof typeof constants.pageTitles] : 'Dashboard', [pageName]);

  // Render
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Typography key="1" sx={{ color: 'text.primary' }}>
        Home
      </Typography>
      <Typography key="2" sx={{ color: 'text.primary' }}>
        {pageTitle}
      </Typography>
    </Breadcrumbs>
  );
}
