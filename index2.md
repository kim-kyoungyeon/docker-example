const express = require('express');

const app = express();

app.get('/', (res, req) => {
res.send('🎅 Dream coding in docker!');
});

docker desktop 실행후

`docker build -f Dockerfile -t fun-docker .` //. 최상위 폴더라는 뜻
`docker images` // image 파일 ㅗ학인하기
`docker run -d -p 8080:8080 fun-docker` // d detach 서버와 컨테이너가 서로 연결한다
`docker ps` // 현재 실행중인 docekler id 확인해보기
`docker logs 아이디` //ps 를 이용해서 확인해보기
docker 허브에서 image repository 에서 올려보기
docker tag fun-docker:latest realdreamcoding/docker-example:latest
docker images 로 이름변경되었는지 확인
docker login
계정 이름
docker push realdreamcoding/docker-example:latest
// push 업로드
