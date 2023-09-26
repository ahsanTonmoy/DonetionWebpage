const getStordData = ()=> {
    const storedData = localStorage.getItem('donetion-applicetions');
    if(storedData){
        return JSON.parse(storedData)
    }
    return[];
}

const storeData = id => {
    const storedData = getStordData();
    const exited = storedData.find(donetionId => donetionId == id );

    if(!exited){
        storedData.push(id);
        localStorage.setItem('donetion-applicetions' , JSON.stringify(storedData));
    }
}

export { storeData, getStordData}