import React, { Children } from "react";

const Button = ({ children, variant, size,classNames, ...props }) => {
  return (
    <>
      <button
        className={`btn btn-${variant} ${size} flex justify-center items-center border p-2 transition-all ${
          classNames ?? ""
        }`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

//   return (
//     <button
//       className={`btn btn-${variant} ${size} flex items-center justify-center ${center} relative ${loading ? "pointer-events-none" : "pointer-events-all"} ${
//         classNames ?? ""
//       }`}
//       {...props}
//     >
//       {loading ? (
//         <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-center">
//           <Loader variant={variant}/>
//         </div>
//       ) : (
//         ""
//       )}

//       {icon ? (
//         <span className={`flex items-center justify-center ${loading ? "invisible" : ""}`}>
//           {icon}
//         </span>
//       ) : null}
//       {children && (
//         <span className={`flex items-center justify-center whitespace-nowrap leading-none ${loading ? "invisible" : ""}`}>
//           {children}
//         </span>
//       )}
//       {iconR ? (
//         <span className={`flex items-center justify-center ${loading ? "invisible" : ""}`}>
//           {iconR}
//         </span>
//       ) : null}
//       {count >=1 ? (
//         <span className={`rounded-full py-xs px-sm bg-primary flex items-center justify-center text-white font-medium leading-none text-sm1`}>{count}</span>
//       ): null}
//     </button>
//   );
// };
