module.exports={
    format_time:(date)=>{
        return date.toLocaleTimeString();
    },
    
    forma_date:(date)=>{
        return date.toLocaleTimeString('en-US');
    },

    format_plural: (word,commentLength)=>{
        if (commentLength ===1){
            return word;
        }
        return `${word}s`
    }
};