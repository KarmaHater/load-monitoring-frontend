let counter1 = 0;
let counter2 = 0;

export const mockedUptime = () => {
    counter1++;
    counter2 = (Math.random() * 1.7).toFixed(2);
    return { x: counter1, y: counter2 };
};
