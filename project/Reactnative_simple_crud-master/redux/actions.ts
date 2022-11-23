export const  QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = "ADD_QUOTE";
export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const DELETE_QUOTE = "DELETE_QUOTE";

// getting quotes

export const addQuotes = (quotes: any)=>({
    type:QUOTES_AVAILABLE,
    data: {quotes}
});


// adding quotes

export const addQuote = (quote: any)=>({
    type:ADD_QUOTE,
    data: {quote}
});

// updating quote

export const updateQuote = (quote: any)=>({
    type:UPDATE_QUOTE,
    data: {quote}
});

// deleting quote

export const deleteQuote = (id: any)=>({
    type:DELETE_QUOTE,
    data: {id}
});