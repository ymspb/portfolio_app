'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

export function LogoutNotifier() {
  const { status } = useSession();
  const prevStatus = useRef(status);
  // console.log(prevStatus.current, status)

  useEffect(() => {
    if (prevStatus.current === 'authenticated' && status === 'unauthenticated') {
      toast("ログアウトしました");
    }
    prevStatus.current = status;
  }, [status]);

  return null;
}
