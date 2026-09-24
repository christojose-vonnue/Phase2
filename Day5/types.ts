export type ticket = {
    "title":string,
    "description":string,
    "status": "open" | "working" | "closed",
    "priority":"high" | "medium" | "low",
    "assigne":"Jacob" | "Jude" | "N/A"
}

export type statusUpdate= { 
    title : string,
    status : "open" | "working" | "closed" 
} 

export type assignUpdate= { 
    title : string,
    assigne : "Jacob" | "Jude" | "N/A"
} 

export type deleteUpdate= { 
    title : string,
} 


// Rules

// title is unique
// desc : must have 10 char at minimum