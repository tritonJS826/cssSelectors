const isLevelCompleted = (level, complitedLEvels) =>{
    const isCompleted = complitedLEvels.includes(level); 

    return isCompleted;
}

export default isLevelCompleted;