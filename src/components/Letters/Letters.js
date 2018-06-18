import React from 'react';
import './Letters.css';

// class Letters extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(this.props.listLetter);
//   }

//   render() {
//     return (
//       <div className="letter-container" ref={this.props.ref}>
//         {this.props.listLetter.map(( letter, index ) => {
//             <Letter 
//               letter={letter.letter} 
//               index={index}
//               key={letter.id}
//               onClick={this.props.onClick} />
//         })}
//       </div>
//     );
      
//       {/* <span 
//         className="letter" 
//         onClick={() => this.onClick(this.props.index)}>
//         {this.props.letter}
//       </span> */}    
//   }
// }

const Letters = ({ letter, index, onClick }) => (
 
    <span className="letter" onClick={() => onClick(index)}>
      {letter}
    </span>
  
)

export default Letters;
