export const errorMessage = (average, time) =>
    `High load generated an alert - load = ${average}, triggered at ${time}`;
export const sucessMessage = (average, time) =>
    `Load has recovered the average is ${average}, triggered at ${time}`;
