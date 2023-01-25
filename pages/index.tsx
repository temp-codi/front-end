import { styled } from 'twin.macro';
import TestAtom from '@/pages/components/atoms/TestAtom';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Home() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Wrapper className="border-8 border-red-600">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/testAtom" id="testAtom">
        Home
      </Link>
      <TestAtom></TestAtom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;
