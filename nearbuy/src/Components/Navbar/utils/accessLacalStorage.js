
export const getData = (key) => {
    try{

        let temp = localStorage.getItem(key);
        temp = JSON.parse(temp);
        return temp;

    }catch(err){
        return undefined
    }
}

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const deleteData = (key) => {
    localStorage.removeItem(key);
}