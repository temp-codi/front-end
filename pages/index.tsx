import { useEffect, useState } from "react";
import { styled } from "twin.macro";
import { motion } from "framer-motion";

export default function Home() {
  const [animate, setAnimate] = useState({
    y: [0, -30, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.5, 1],
      loop: Infinity,
      yoyo: Infinity,
    },
  });
  const [key, setKey] = useState(1);

  useEffect(() => {
    setAnimate({
      y: [0, -30, 0],
      transition: {
        duration: 0.3,
        times: [0, 0.5, 1],
        loop: Infinity,
        yoyo: Infinity,
      },
    });
    setKey(key + 1);
  }, []);
  return (
    <Wrapper className="border-8 border-red-600">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Ball key={key} animate={animate} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;

const Ball = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: red;
`;
