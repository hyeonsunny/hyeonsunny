import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `## Hi there 👋

기획, 디자인, 개발에 관심이 많습니다. 이 세가지의 맥락적 사고를 통해 복잡한 문제를 구조화하고 마찰 없는 사용자 경험을 만드는 것을 좋아합니다. <br>
팀원과 아이디어를 공유하며 더 나은 해결책을 제안하고, 시작한 일은 끝까지 완수하는 끈기를 가졌습니다.

<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhyeonsunny%2Fhit-counter&count_bg=%235FBC70&title_bg=%23726F6F&icon=&icon_color=%23E18888&title=hits&edge_flat=false"/></a>
<a href="mailto:hisunny4036@gmail.com"><img src="https://img.shields.io/badge/-hisunny4036@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:hisunny4036@gmail.com"/></a>

<br>

## Latest Blog Posts 📕
`

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://hyeonsunnny.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();

`
<div style="display:block; width: 50%; height: 100%; float: left;">
  <a href="https://solved.ac/danmi2857"><img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=danmi2857" /></a>
</div>
`