// "state" refers to the previous / current subset of state (previously generated by this Reducer) that was already passed to the corresponding Container's props 
// "action" is the incoming action with "type" and "payload" properties to potentially update this Reducer's subset of state
// Redux does *not* allow you to return UNDEFINED as the value of "state" so we must set a default value for "state" to NULL
export default function(state=null, action) {
	// if this Reducer cares about the incoming Action (action.type = "BOOK_SELECTED"), then...
	switch (action.type) {
		case "BOOK_SELECTED":
			// ... return the Action's payload to update the corresponsding Container's subset of state / props
			return action.payload;
	}
	// otherwise, return (again) the previous / subset of state (previously generated by this Reducer) that was already passed to the corresponding Container's props
	return state;
}