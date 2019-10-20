import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h2>{resource}</h2>
      <ul className="ui list">
        {resources.map((resource) =>
          <li className='item' key={resource.id}>
            {resource.title}
          </li>)
        }
      </ul>
    </div>
  );
}

export default ResourceList;

// const ResourceList = ({ resource }) => {
//   const [resources, setResources] = useState([]);
//
//   const fetchResource = async (resource) => {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${resource}`
//     );
//     setResources(response.data);
//   }
//
//   useEffect(() => {
//     fetchResource(resource);
//   }, [resource]);
//
//   return (
//     <ul className="ui list">
//       {resources.map((resource) =>
//         <li className='item' key={resource.id}>
//           {resource.title}
//         </li>)
//       }
//     </ul>
//   );
// }
//
// export default ResourceList;
