import { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 5500;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledWrapper>
          <div className="clouds">
            <div className="cloud cloud1" />
            <div className="cloud cloud2" />
            <div className="cloud cloud3" />
            <div className="cloud cloud4" />
            <div className="cloud cloud5" />
          </div>

          <div className="content-box">
            <div className="loader-wrapper">
              <div className="loader">
                <span><span /><span /><span /><span /></span>
                <div className="base">
                  <span />
                  <div className="face" />
                </div>
              </div>
              <div className="longfazers">
                <span /><span /><span /><span />
              </div>
            </div>

            <div className="progress-text">
              {Math.floor(progress)}%
            </div>
          </div>
        </StyledWrapper>
      </Container>
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: hsl(var(--background));
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 20;
    width: 100%;
  }

  .loader-wrapper {
    position: relative;
    width: 200px;
    height: 100px;
    transform: translateX(-65px); 
  }

  .loader {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: speeder 0.4s linear infinite;
    z-index: 20;
  }

  .loader > span {
    height: 5px;
    width: 35px;
    background: hsl(var(--primary));
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }

  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid hsl(var(--primary) / 0.3);
    border-bottom: 6px solid transparent;
  }

  .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: hsl(var(--primary) / 0.3);
    position: absolute;
    right: -110px;
    top: -16px;
  }

  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid hsl(var(--primary) / 0.3);
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }

  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: hsl(var(--primary) / 0.3);
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
  }

  .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: hsl(var(--primary));
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 2px 2px;
  }

  .loader > span > span {
    width: 30px;
    height: 1px;
    background: hsl(var(--foreground));
    position: absolute;
  }

  .loader > span > span:nth-child(1) { animation: fazer1 0.2s linear infinite; }
  .loader > span > span:nth-child(2) { top: 3px; animation: fazer2 0.4s linear infinite; }
  .loader > span > span:nth-child(3) { top: 1px; animation: fazer3 0.4s linear infinite; animation-delay: -1s; }
  .loader > span > span:nth-child(4) { top: 4px; animation: fazer4 1s linear infinite; animation-delay: -1s; }

  @keyframes fazer1 {
    0% { left: 0; }
    100% { left: -80px; opacity: 0; }
  }
  @keyframes fazer2 {
    0% { left: 0; }
    100% { left: -100px; opacity: 0; }
  }
  @keyframes fazer3 {
    0% { left: 0; }
    100% { left: -50px; opacity: 0; }
  }
  @keyframes fazer4 {
    0% { left: 0; }
    100% { left: -150px; opacity: 0; }
  }
  @keyframes speeder {
    0% { transform: translate(2px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -3px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(1px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 3px) rotate(-1deg); }
    60% { transform: translate(-1px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-2px, -1px) rotate(1deg); }
    90% { transform: translate(2px, 1px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden; 
  }

  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: hsl(var(--primary));
  }
  
  .longfazers span:nth-child(1) { top: 20%; animation: lf 0.6s linear infinite; animation-delay: -5s; }
  .longfazers span:nth-child(2) { top: 40%; animation: lf2 0.8s linear infinite; animation-delay: -1s; }
  .longfazers span:nth-child(3) { top: 60%; animation: lf3 0.6s linear infinite; }
  .longfazers span:nth-child(4) { top: 80%; animation: lf4 0.5s linear infinite; animation-delay: -3s; }

  @keyframes lf { 0% { left: 200%; } 100% { left: -200%; opacity: 0; } }
  @keyframes lf2 { 0% { left: 200%; } 100% { left: -200%; opacity: 0; } }
  @keyframes lf3 { 0% { left: 200%; } 100% { left: -100%; opacity: 0; } }
  @keyframes lf4 { 0% { left: 200%; } 100% { left: -100%; opacity: 0; } }

  .clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .cloud {
    position: absolute;
    background: hsl(var(--foreground));
    border-radius: 50%;
    opacity: 0.1;
    animation: moveClouds linear infinite;
  }
  
  .cloud::before, .cloud::after {
    content: ""; position: absolute; background: inherit; border-radius: 50%;
  }
  .cloud::before { width: 60%; height: 60%; top: -30%; left: 10%; }
  .cloud::after { width: 40%; height: 40%; top: -20%; left: 50%; }

  .cloud1 { top: 15%; left: 100%; animation-duration: 2s; width: 100px; height: 60px; }
  .cloud2 { top: 35%; left: 100%; animation-duration: 3s; width: 150px; height: 80px; }
  .cloud3 { top: 20%; left: 100%; animation-duration: 4s; width: 80px; height: 50px; }
  .cloud4 { top: 70%; left: 100%; animation-duration: 3s; width: 100px; height: 80px; }
  .cloud5 { top: 80%; left: 100%; animation-duration: 2s; width: 170px; height: 50px; }

  @keyframes moveClouds {
    0% { transform: translateX(20vw); }
    100% { transform: translateX(-120vw); }
  }

  .progress-text {
    margin-top: 40px; 
    margin-left: 18px;
    font-size: 2rem;
    font-weight: 900;
    font-family: monospace;
    color: hsl(var(--primary));
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    .content-box {
      transform: scale(0.8);
    }
  }
`;

export default LoadingScreen;
