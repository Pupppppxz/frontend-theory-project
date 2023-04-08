import { IRegexList } from "interfaces/regex";

import Code1 from '../assets/img/codes/code-1.png'
import Code2 from '../assets/img/codes/code-2.png'
import Code3 from '../assets/img/codes/code-3.png'
import Code4 from '../assets/img/codes/code-4.png'
import Code5 from '../assets/img/codes/code-5.png'

export const regexLists: IRegexList[] = [
    {
        regex: `^(วัด)`,
        meaning: `string ที่ขึ้นต้นด้วยคำว่า 'วัด'`,
        result: `คำสั่ง if not re.search(r'^(วัด)', temple) คือ string ที่อยู่ใน temple ขึ้นต้นด้วยคำว่า 'วัด' หรือไม่ถ้าไม่ให้ไปทำคำสั่ง temple = f'วัด{temple}' คือการเพิ่มคำว่า 'วัด' เข้าไปด้านหน้าของ string ที่อยู่ในตัวแปล temple`,
        title: `ในไฟล์ routes.py บรรทัดที่ 94`,
        functionName: `post_search()`,
        code: Code1
    },
    {
        regex: `(?<=<li><a href=").*?(?=</a></li>)`,
        meaning: `string ที่มีด้านหน้า คือ <li><a href=" และด้านท้าย คือ </a></li>`,
        result: `string ที่แมตช์ regular expression นี้คือ <li><a href=".W.</a></li> เมื่อ W คือ string ใด ๆ และ ผลลัพธ์ที่ได้ คือ W`,
        title: `ในคลาส crawler ของไฟล์ crawler.py ในบรรทัดที่ 17`,
        functionName: `province_get()`,
        code: Code2
    },
    {
        regex: `(" title="รายชื่อวัดในจังหวัด|(">รายชื่อวัดในจังหวัด).*$)`,
        meaning: `string ที่ขึ้นต้นด้วย " title="รายชื่อวัดในจังหวัด หรือ (">รายชื่อวัดในจังหวัด)`,
        result: `string ที่แมตช์ regular expression นี้คือ " title="รายชื่อวัดในจังหวัด.W หรือ (">รายชื่อวัดในจังหวัด).W เมื่อ W คือ string ใด ๆ ใช้เพื่อ ทำการแก้ไข string ที่แมตช์ regular expression โดยการแทนที่ '" title="รายชื่อวัดในจังหวัด' หรือ '(">รายชื่อวัดในจังหวัด)' ด้วย '|'`,
        title: `ในคลาส crawler ของไฟล์ crawler.py ในบรรทัดที่ 17`,
        functionName: `province_get()`,
        code: Code3
    },
    {
        regex: `(?=\<li\>).*?(?=</li>)`,
        meaning: `string ใด ๆ ที่อยู่ระหว่าง \<li\> และ </li>`,
        result: `string ที่แมตช์ regular expression นี้คือ \<li\>.W.</li> เมื่อ W คือ string ใด ๆ และ ผลลัพธ์ที่ได้ คือ W`,
        title: `ในคลาส crawler ของไฟล์ crawler.py ในบรรทัดที่ 42`,
        functionName: `temple_get()`,
        code: Code4
    },
    {
        regex: `(?=\>วัด).*?(?=\<\/a\> |\<a |\<\/a\>|\<a|&#160;|ตำ)`,
        meaning: `string ใด ๆ ที่มีด้านหน้าคือ วัด ตามด้วย string ใด ๆ ก็ตาม และต่อท้ายด้วย \<\/a\> หรือ \<a หรือ \<\/a\> หรือ \<a หรือ &#160; หรือ ตำ`,
        result: `string ที่แมตช์ regular expression นี้คือ วัด.W.{\<\/a\>, \<a, \<\/a\>, \<a, &#160;, ตำ} เมื่อ W คือ string ใด ๆ และ ผลลัพธ์ที่ได้ คือ W`,
        title: `ในคลาส crawler ของไฟล์ crawler.py ในบรรทัดที่ 50`,
        functionName: `temple_get()`,
        code: Code5
    },
]