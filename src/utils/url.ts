// utils/url.ts
export const getBaseUrl = (): string => {
    return import.meta.env.BASE_URL.endsWith('/') 
        ? import.meta.env.BASE_URL 
        : `${import.meta.env.BASE_URL}/`;
};

export const createUrl = (path: string): string => {
    const baseUrl = getBaseUrl();
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
};

// For handling both internal and external URLs
export const buildHref = (url: string): string => {
    // If it's an external URL (starts with http/https), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    
    // If it's an anchor link, return as-is
    if (url.startsWith('#')) {
        return url;
    }
    
    // Otherwise, treat as internal URL
    return createUrl(url);
};

// Helper for navigation items
export interface NavItem {
    label: string;
    href: string;
    external?: boolean;
}

export const createNavigation = (items: Array<{label: string, path: string, external?: boolean}>): NavItem[] => {
    return items.map(item => ({
        label: item.label,
        href: item.external ? item.path : createUrl(item.path),
        external: item.external || false
    }));
};