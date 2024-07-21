import { RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLDivElement>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
