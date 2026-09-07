// import React, { useState } from 'react'

// const TreeNode = ({ node, checkedState, onToggle }) => {
//     return (
//         <div style={{ marginLeft: "20px" }}>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={!!checkedState[node.id]}
//                     onChange={() => onToggle(node)}
//                 />
//                 {node.label}
//             </label>
//             {
//                 node.children && node.children.length > 0 && (
//                     <div>
//                         {
//                             node.children.map((child) => (
//                                 <TreeNode
//                                     key={child.id}
//                                     node={child}
//                                     checkedState={checkedState}
//                                     onToggle={onToggle}
//                                 />
//                             ))
//                         }
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// const NestedCheckBox = () => {
//     const [checkedState, setCheckedState] = useState({});
//     const nodes = [
//         {
//             id: "p1",
//             label: "p1",
//             children: [
//                 {
//                     id: "p1-c1",
//                     label: "p1-c1",
//                     children: [
//                         {
//                             id: "p1-c1-c1",
//                             label: "p1-c1-c1",
//                             children: []
//                         },
//                         {
//                             id: "p1-c1-c2",
//                             label: "p1-c1-c2",
//                             children: [
//                                 {
//                                     id: "p1-c1-c2-c1",
//                                     label: "p1-c1-c2-c1",
//                                     children: []
//                                 },
//                                 {
//                                     id: "p1-c1-c2-c2",
//                                     label: "p1-c1-c2-c2",
//                                     children: [
//                                         {
//                                             id: "p1-c1-c2-c2-c1",
//                                             label: "p1-c1-c2-c2-c1",
//                                             children: []
//                                         },
//                                         {
//                                             id: "p1-c1-c2-c2-c2",
//                                             label: "p1-c1-c2-c2-c2",
//                                             children: []
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     id: "p1-c1-c2-c3",
//                                     label: "p1-c1-c2-c3",
//                                     children: []
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     id: "p1-c2",
//                     label: "p1-c2",
//                     children: []
//                 },
//                 {
//                     id: "p1-c3",
//                     label: "p1-c3",
//                     children: []
//                 }
//             ]
//         }
//     ];

//     function onToggle(node) {
//         const node = node.children ? onToggle(node.child) ? node.map((n) => {
//             setCheckedState(prev => {...prev, n});
//     })
// }

// return (
//     <div>
//         {
//             nodes.map((node) => {
//                 return (
//                     <TreeNode
//                         key={node.id}
//                         node={node}
//                         checkedState={checkedState}
//                         onToggle={onToggle}
//                     />
//                 )
//             })
//         }
//     </div>
// )
// }

// export default NestedCheckBox
