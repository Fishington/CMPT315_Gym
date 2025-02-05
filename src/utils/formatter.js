export function slugToTitle(string) {
    return string.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function toSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
}

export function toTitle(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}
