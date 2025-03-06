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
        month  : 'long',
        day    : 'numeric',
        year   : 'numeric'
    })
}

export function formatTimeToString(seconds) {
    if (seconds < 60)
        return `0:${seconds.toString().padStart(2, '0')} Seconds`;

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (minutes < 60) {
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} Minute${minutes === 1 ? '' : 's'}`;
    }

    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;

    return `${hours}:${remainingMinutes.toString().padStart(2, '0')} Hour${hours === 1 ? '' : 's'}`;
}