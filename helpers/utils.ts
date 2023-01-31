import pagesData from '../data/pages.json';
import { Page } from '../types/page';

export const getPageData = (path: string) => {
    return pagesData.find(page => page.path === path) as Page;
}