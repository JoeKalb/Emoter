function todos(state = [], action){
	if(typeof action.postId !== 'undefined'){
		return{
			state,

			[action.postId]: todoActions(state[action.postId], action)
		}
	}
	return state;
}

function todoActions(state= [], action){
	switch(action.type){
		case 'ADD_TODO':
			return [...state, {
				text: action.text
			}];
		case 'REMOVE_TODO':
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			];
		default:
			return state;
	}
	return state;
}


export default todos;