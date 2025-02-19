export function slugToTitle(string) {
    return string.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
}

export function toTitle(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}