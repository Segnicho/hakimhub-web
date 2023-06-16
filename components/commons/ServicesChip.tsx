// interface ChipContentProps {
//     content : string;
// }

// const ServicesChip : React.FC<ChipContentProps> =  ({content}) => {
//     const [selectedServices, setSelectedServices] = useState<string[]>([]);
//     return (
//         <button
//             className={`mr-2 mb-2 px-4 py-2 rounded-full ${
//               selectedServices.includes({content})
//                 ? 'bg-primary text-white'
//                 : 'bg-white text-primary-text border border-primary-text'
//             }`}
//             onClick={() => handleServiceSelection({content})}
//           >
//             Emergency
//           </button>
//     )
// }