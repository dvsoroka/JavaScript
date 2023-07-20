for (var i=0; i<3; i++) {
//for (let i=0; i<3; i++) {
    debugger;
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);  // doesn't run until 100 miliseconds later long after that for-loop has completed and iterated up to 3
}