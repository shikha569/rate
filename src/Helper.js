// const BASEURL= "http://localhost:3009/";

// export const FetchResult = (url,method,body) => {
//   if(method === 'GET'){
//     return (
//       // fetch(http://localhost:3000/posts)
//       fetch(BASEURL + url)
//       .then((res)=>{
//         return res.json();
//       })
//       .catch((err)=>{
//         console.log("Error while fetching posts from json server "+ err);
//       })
//     );
//   }else{
//     return (
//       fetch(BASEURL + url ,
//         {
//           method: method,
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         }
//       )
//       .then((res)=>{
//         return res.json();
//       })
//       .catch((err)=>{
//         console.log(`Error while inserting post in json server ${err}`);
//       })
//     );
//   }
// };