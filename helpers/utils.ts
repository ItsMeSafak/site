import { Page } from '../types/page';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getPageData = (pagesData: any, path: string) => {
    return pagesData.find(
        (page: { path: string; }) => page.path === path) as Page;
}