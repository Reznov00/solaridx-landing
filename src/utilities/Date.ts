const generateDatesArray = (): { date: string }[] => {
    const datesArray: { date: string }[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 15; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        datesArray.push({
            date: date.toISOString(),
        });
    }

    return datesArray;
}

export { generateDatesArray }