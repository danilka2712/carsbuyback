import type { PageServerLoad } from './$types';

const fetchOptions = (url, contentType) => ({
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': `bearer 6bbedd5c7e64b0721d4c9957b1ff94b76769c5cd`,
        'Content-Type': contentType
    }
});

export const load: PageServerLoad = async ({ fetch }) => {
    const baseUrl = "https://online.moysklad.ru/api/remap/1.2/";

    const res = await fetch(`${baseUrl}entity/product`,

        fetchOptions(baseUrl, 'application/json'));

    const items = await res.json();

    const hrefDownload = items.rows.map(i => i.images.meta.href);

    const resHref = await fetch(hrefDownload[1], fetchOptions
        (hrefDownload[1], 'image/png'));

    const images = await resHref.json();

    const resImages = await fetch(images.rows[0].meta.downloadHref, fetchOptions(images.rows[0].meta.downloadHref, 'image/png'));

    return {
        name: items,
        img: resImages.url
    };
};