import React from 'react';

interface IProps {
    pollution_en: string;
}

const PollutionBox = ({ pollution_en }: IProps) => {
    return (
        <div className="w-64 h-64 rounded-lg bg-gray-300">{pollution_en}</div>
    );
};

export default PollutionBox;
