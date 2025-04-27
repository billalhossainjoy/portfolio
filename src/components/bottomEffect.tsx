import React from 'react';

const BottomEffect: React.FC = () => {
    return (
        <div className={"absolute -bottom-0 w-full -z-50"}>
            <div className={"flex justify-center w-full"}>
                <div className={"bg-green-500/5 sm:bg-green-500/10 w-[1000px] md:w-[90%] h-60 -z-50 rounded-full "}
                     style={{
                         WebkitMaskImage: 'radial-gradient(circle, green 30%, transparent 90%)',
                         maskImage: 'radial-gradient(circle, green 30%, transparent 90%)',
                     }}
                />
            </div>
        </div>
    );
};

export default BottomEffect;