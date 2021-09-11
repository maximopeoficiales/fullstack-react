export const showErrors = (error: any): boolean => {
    if (!error || error.length > 0) {
        return true;
    }
    return true;
};

export const formatDate = (dateIn: Date): string => {
    return dateIn.toISOString().split('T')[0]
}

export const getAgeByDate = (date: Date): string => {
    let yearCurrent = new Date().getFullYear();
    if (yearCurrent < date.getFullYear()) {
        return "0";
    }
    return (yearCurrent - date.getFullYear()).toString();
}