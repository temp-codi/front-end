import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { chatGptApi } from '@/api/chatGpt';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatGptAtom, chatGptPropsAtoms } from '@/recoil/chatGpt';
interface Props {
    weather: string;
    gender: 'men' | 'women';
}
export const useChatGpt = ({ weather, gender }: Props) => {
    const [searchProps, setSearchProps] = useRecoilState(chatGptPropsAtoms);
    const chatGptArr = useRecoilValue(chatGptAtom);

    useEffect(() => {
        if (weather && gender) {
            const stringified = {
                weather,
                gender,
            };
            setSearchProps(stringified);
        }
    }, [weather, gender, setSearchProps]);

    return {
        chatGptArr,
        ...useQuery({
            queryKey: ['chatGpt', searchProps],
            queryFn: () => chatGptApi(searchProps),
            enabled: !!searchProps,
        }),
    };
};
