import { INavbarItem } from "interfaces/navbar";

export const navbarItems: INavbarItem[] = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/regex',
        title: 'Regex'
    },
    {
        path: '/source-code',
        title: 'Code'
    },
    {
        path: '/members',
        title: 'Members'
    },
]

export const navbarDropdownItems: INavbarItem[] = [
    {
        path: 'https://github.com/Pupppppxz/frontend-theory-project',
        title: 'Frontend'
    },
    {
        path: 'https://github.com/CRUNZEX/toc-backend',
        title: 'Backend'
    },
]