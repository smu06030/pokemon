import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      
      // 모달 내부 클릭
      if(!ref.current || ref.current.contains(event.target)){
        return ;
      }

      // 모달 외부 클릭
      handler();
    }

    document.addEventListener('mousedown', listener);
  
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [ref, handler])
  
}