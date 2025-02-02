export function slugToTitle(str) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}