// Add todo item
export function addTodo(text){
	return {
		type: 'ADD_TODO',
		text
	}
}

// Remove todo item
export function removeTodo(id){
	return {
		type: 'REMOVE_TODO',
		id
	}
}