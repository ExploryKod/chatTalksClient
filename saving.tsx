// const updateUser = (id: string) => {
//     fetch(`http://localhost:8000/update-user/${id}`, {
//         method: "DELETE",
//     })
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data)
//             toggleModal()
//             setUserList(values => {
//                 return values.filter(item => item.id.toString() !== id)
//             })
//             setFlashMessage(data.message);
//             setTimeout(() => {
//                 setFlashMessage('');
//             }, 3000);

//         })
//         .catch(error => {
//             console.error('Il y a une erreur dans la requête de suppression:', error);
//             throw error;
//         });
// }
