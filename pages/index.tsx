<<<<<<< HEAD
import { styled } from "twin.macro";
import TestAtom from "@/pages/components/atoms/TestAtom";
import { useRouter } from "next/router";
import Link from "next/link";
=======
import { styled } from 'twin.macro';
import TestAtom from '@/pages/components/atoms/TestAtom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useLocation from '@/pages/api/location';
>>>>>>> 90b7435bd710bdcb64993837e24ff064edb97987
export default function Home() {
  const router = useRouter();
  const { pid } = router.query;
  const getApi = () => {
    useLocation;
  };
  return (
    <Wrapper className="border-8 border-red-600">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/testAtom" id="testAtom">
        Home
      </Link>
      <button onClick={getApi}>get api</button>
      <TestAtom></TestAtom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;
