interface BackgroundImage {
    total_results: number;
    page: number;
    per_page: number;
    photos: Photo[];
    next_page: string;
}

interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    src: Src;
    liked: boolean; 
}

interface Src {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}