//Aca esta las funciones que interactuan con local storage para crear, guardar modificar y eliminar

const COMMENTS_KEY = 'comments';

// Obtener comentarios de Local Storage
 export function getComments() {
  const comments = localStorage.getItem(COMMENTS_KEY); // Obtiene los comentarios almacenados
  return comments ? JSON.parse(comments) : []; // Si hay comentarios, los parsea y devuelve; si no, devuelve un array vacío
}



// Guardar comentario en Local Storage
export function saveComment(comment: { email: string; content: string }) {
  const comments = getComments(); // Obtiene los comentarios actuales
  comments.push(comment); // Añade el nuevo comentario
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); // Guarda los comentarios actualizados
}



// Actualizar comentario en Local Storage
export function updateComment(index: number, comment: { email: string; content: string }) {
  const comments = getComments(); // Obtiene los comentarios actuales
  comments[index] = comment; // Actualiza el comentario en el índice especificado
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); 
}



// Eliminar comentario de Local Storage
export function deleteComment(index: number) {
  const comments = getComments(); // Obtiene los comentarios actuales
  comments.splice(index, 1); // Elimina el comentario en el índice especificado
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); 
}





