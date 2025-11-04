// components/Badge/RotatingBadge.tsx
'use client';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BadgeContainer = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  background: #fff;
  //   opacity: 0.8;
  border-radius: 50%;
  @media (min-width: 640px) {
    width: 100px;
    height: 100px;
  }
`;

const RotatingCircle = styled.div`
  position: absolute;
  inset: 0;
  animation: ${spin} 12s linear infinite;
`;

const CircleText = styled.text`
  font-size: 9px;
  @media (min-width: 640px) {
    font-size: 12px;
  }
  text-transform: uppercase;
  letter-spacing: 0.01em;
  fill: #7c3aed;
`;

const ArrowContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  @media (min-width: 640px) {
    font-size: 30px;
  }
  color: #7c3aed;
  animation: ${spin} 12s linear infinite;
`;

export const RotatingBadge = () => (
  <div className=" bg-gradient-to-tr from-green-300 via-red-200 to-primary/40 rounded-full p-1">
    <BadgeContainer>
      <RotatingCircle>
        <svg viewBox="0 0 100 100">
          <path
            id="curve"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <CircleText>
            <textPath href="#curve" className="tracking-widest font-bold">
              {' '}
              100% Certification Guarantee{' '}
            </textPath>
          </CircleText>
        </svg>
      </RotatingCircle>
      <ArrowContainer>↗</ArrowContainer>
    </BadgeContainer>
  </div>
);
