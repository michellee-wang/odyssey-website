'use client';

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 50, className }) => {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper="span"
      speed={speed}
      className={className}
      cursor={true}
      repeat={0}
    />
  );
};

export default TypingAnimation;
