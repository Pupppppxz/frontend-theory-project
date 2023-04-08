import { IBackendCode } from 'interfaces/backendCode'
import BackendCode1 from '../assets/img/backend-code/backend-1.png'
import BackendCode2 from '../assets/img/backend-code/backend-2.png'
import BackendCode3 from '../assets/img/backend-code/backend-3.png'
import BackendCode4 from '../assets/img/backend-code/backend-4.png'
import BackendCode5 from '../assets/img/backend-code/backend-5.png'
import BackendCode6 from '../assets/img/backend-code/backend-6.png'
import BackendCode7 from '../assets/img/backend-code/backend-7.png'

export const backendCode: IBackendCode[] = [
    {
        fileName: 'run.py',
        code: BackendCode1
    },
    {
        fileName: 'config.py',
        code: BackendCode2
    },
    {
        fileName: '/app/utils.py',
        code: BackendCode3
    },
    {
        fileName: '/app/crawler.py',
        code: BackendCode4
    },
    {
        fileName: '/app/__init__.py',
        code: BackendCode5
    },
    {
        fileName: '/app/services/default.py',
        code: BackendCode6
    },
    {
        fileName: '/app/services/routes.py',
        code: BackendCode7
    },
]