let str = { 'a.b.c': 1, 'a.d': 2 }
for (const key in str) {
    if (Object.hasOwnProperty.call(str, key)) {
        const element = str[key];
        console.log(key.split('.').reverse().reduce((p,c)=>({[c]:p}),{}), 'element', element);
        
    }
}