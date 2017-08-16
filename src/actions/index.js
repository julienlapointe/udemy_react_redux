// selectBook is an Action Creation
export function selectBook(book) {
	// it returns an Action = an object with a "type" and "payload" property
	// "type" is an UPPERCASE string that describes the purpose of the Action
	// "payload" is an object ("book" is equal to {title: "Harry Potter"})
	return {
		type: "BOOK_SELECTED",
		payload: book
	};
}

// // activeBook is an Action Creation
// export function activeBook(book) {
// 	// it returns an Action = an object with a "type" and "payload" property
// 	// "type" is an UPPERCASE string that describes the purpose of the Action
// 	// "payload" is an object ("book" is equal to {title: "Harry Potter"})
// 	return {
// 		type: "ACTIVE_BOOK",
// 		payload: book
// 	};
// }