import React from 'react';
import { useRouter } from 'next/router';
type Props = {};

const TestAtom = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default TestAtom;
