const initState = [
	'Alex',
	'John',
	'Paul',
	'George',
	'Ringo',
	'Pit'
]

const peopleReducer = (state = initState, action) => {
	if (action.type === 'ADD_NEW_USER') {
		return state.concat('Alexxx_' + Date.now());
	}

	return state;
}

export default peopleReducer;