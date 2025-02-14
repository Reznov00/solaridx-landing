export const getInitials = (name: string): string => {
    if (!name || typeof name !== 'string') {
        return 'A';
    }
    const words = name.trim().split(/\s+/);
    const selectedWords = words.slice(0, 2);
    const initials = selectedWords.map((word) => word.charAt(0).toUpperCase()).join('');
    return initials;
}