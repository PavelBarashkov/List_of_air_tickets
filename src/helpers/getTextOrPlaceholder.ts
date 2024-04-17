export const getTextOrPlaceholder = (str: string, name: string) =>
    str ? str : `Нет информации о ${name}`;