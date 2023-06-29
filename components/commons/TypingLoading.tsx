import { useEffect, useState } from 'react';

const TypingLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('typing');
    const [dots, setDots] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        setDots((prevDots) => (prevDots === '...' ? '' : prevDots + '.'));
      }, 200);
  
      
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="md:ml-[25%]">
        
          <div className=" text-3xl text-primary">
            
            <span className="animate-pulse">{dots}</span>
          </div>
        
      </div>
    );
};

export default TypingLoading;
