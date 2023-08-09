import { useEffect } from 'react';

interface ScriptProps {
  src: string;
}

const Script = ({ src }: ScriptProps) => {
  useEffect(() => {
    // This code makes it so that if the user closes the ad, it won't show up again
    // The logic is very odd but the only way it won't achieve this is if the user went out of their way to avoid it
    const conditionMet = localStorage.getItem('conditionMet') === 'true';
    if (conditionMet) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientX > window.innerWidth * 3 / 4 && event.clientY < window.innerHeight / 4) {
        document.body.removeChild(script);
        document.removeEventListener('mousemove', handleMouseMove);
        // Remember that the condition has been met
        localStorage.setItem('conditionMet', 'true');
      } else {
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeChild(script);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [src]);

  return null;
};

export default Script;