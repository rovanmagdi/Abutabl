export const createFilterParam = (key: string, value: string | string[] | null) => {
    if (Array.isArray(value) && value.length > 0 && value.toString().trim()) {
        return { [key]: value.toString() };
    } else if (typeof value === 'string' && value.trim()) {
        return { [key]: value.trim() };
    } else {
        return {};
    }
};