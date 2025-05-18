import React from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from 'react-countup';
import Header from "./Header.jsx";

const AnimatedCounter = () => {
    return (
        <div id="education" className="padding-x-lg xl:mt-0 mt-32">
            <Header
                title="Education"
            />
            <div className="mt-14 mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col
                    justify-center">
                    <div key={counterItems.label} className="counter-number text-white
                    text-5xl font-bold mb-2">


                        {item.value === null ? item.suffix :
                            <CountUp end={item.value} suffix={item.suffix} decimals={item.decimalPlaces} duration={2}  className="mr-2 flex-shrink-0" />
                        }

                    </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                    ))}
            </div>

        </div>

    )
}
export default AnimatedCounter

// import React from 'react';
// import { counterItems } from "../constants/index.js";
//
// const AnimatedCounter = () => {
//     return (
//         <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
//             <div className="mx-auto grid-4-cols">
//                 {counterItems.map((item) => (
//                     <div
//                         key={item.label}
//                         className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
//                     >
//                         <div className="counter-number text-white text-5xl font-bold mb-2">
//                             {item.suffix}
//                         </div>
//                         <div className="text-white-50 text-lg">
//                             {item.label}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default AnimatedCounter;

// import React from 'react';
// import { counterItems } from "../constants/index.js";
// import CountUp from "react-countup";
//
// const AnimatedCounter = () => {
//     return (
//         <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
//             <div className="mx-auto grid-4-cols">
//                 {counterItems.map((item) => (
//                     <div
//                         key={item.label}
//                         className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
//                     >
//                         <div className="text-white-50 text-lg">
//                             {item.label}
//                         </div>
//
//
//                         <CountUp suffix={item.suffix} end={item.value} decimals={item.decimalPlaces} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default AnimatedCounter;

