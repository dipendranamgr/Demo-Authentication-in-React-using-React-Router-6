

export const fake = () => 
    new Promise((resolve)=>{
        setTimeout(()=>resolve('abcdefgh'),200);
    });
