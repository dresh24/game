export const questions = [
  {
    number: '01',
    question: '이제 조금만 있으면 화이트데이에요',
    choices: [
      { text: '오 대식이는 초콜릿 좋하니까 이것저것 만들어서 줘야겠다!!!', value: 'i' },
      { text: '화이트데이는 남자가 주는 날이지 안주면 가만안둬', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '대식이가 금요일 밤에 와서 힘들어해요',
    choices: [
      { text: '대식이가 힘들다니 고기 고기 어디있어!!!', value: 's' },
      { text: '힘이나게 옆에서 열심히 까불어야겠군', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '오늘은 오랜만에 같이 자전거나 타볼까?',
    choices: [
      { text: '자전거는 무슨 자전거야 그냥 치킨이나먹자 (돼지선희)', value: 'f' },
      { text: '오 자전거 좋지 오늘은 왕복 100km다!!!', value: 't' }
    ]
  },
  {
    number: '04',
    question: '아우 배고프다 오늘 밥은 뭐먹을까?',
    choices: [
      { text: '오랜만에 파스타먹을까??<br>(고민할까봐 미리 생각해뒀지)', value: 'j' },
      { text: '음...자기는 뭐먹고싶어?? ', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '오늘은 우리만난지 6주년 근데 대식이는 기억을 못하네..',
    choices: [
      { text: '아 대식이 요즘 바쁘다더니 살짝 아쉽지만 어쩔수없지', value: '' },
      { text: '뭐야 이걸 까먹는다고 아우 화나 부셔버리겠어', value: '' }
    ]
  },
  {
    number: '06',
    question: '날씨가 좋아~<br>오늘은 도망이다!!',
    choices: [
      { text: '날 좋은데 반차쓰고 로닝로닝이나 해볼까??', value: '' },
      { text: '집에들어가서 늘어지게 잠이나 자볼까', value: '' }
    ]
  },
  {
    number: '07',
    question: '자기 나 오늘 회사에서 인사 안 한다고 혼났어ㅠㅠ',
    choices: [
      { text: '야 인사는 기본중에 기본이야 인사를해야~~~<br>다 너 잘되라고~~~나 때는 ', value: '' },
      { text: '누구야 누가 대식이 혼냈어 나와!!', value: '' }
    ]
  },
  {
    number: '08',
    question: '이제 조금만 있으면 대식이 생일이네 선물은 뭐가 좋을까?',
    choices: [
      { text: '아무거나좋다네 그럼 진짜 아무거나 사야지 새콤달콤이랑....', value: '' },
      { text: '대식이는 명품을 좋아하니까 좋은걸로 사야겠군 난 똑똑이 ', value: '' }
    ]
  },
  {
    number: '09',
    question: '부산에 와서 심심하다',
    choices: [
      { text: '역시 대식이와 함께있는 주말이 최고지!!', value: '' },
      { text: '오랜만에 대식이도 없겠다 난 자유야!!!!!!', value: '' }
    ]
  },
  {
    number: '10',
    question: '부산에서 복귀한 선희 신발장에 자전거가있네',
    choices: [
      { text: '또잉 가져간다했는데 뭐지 무거워서 다음에 가져갈라나보다 조심해야겠네', value: '' },
      { text: '뭐야 왜여기있는거지 너의 자리는 밖이다!!', value: '' }
    ]
  },
]
export const results = [
  {
    title: '흠 살짝 부족하군 대식학 공부하고 오도록',
    character: './images/result_character1.jpeg',
    results: [
      '힘들구만',
      '조금더 까탈부려야겠군',
      '똥개 놀아주는건 힘들어'
    ],
    jobs: ['설거지 1회']
  },
  {
    title: '잘했어 넌 통과야',
    character: './images/result_character2.jpeg',
    results: [
      '80점이니 항상 노력하도록!',
      '으아아앙',
      '근데 이번엔 꽝임'
    ],
    jobs: ['힛']
  },
  {
    title: '역시 넌 선희가 맞아',
    character: './images/result_character3.jpeg',
    results: [
      '대식이의 여자친구 자격이 있구만 통과',
      '앞으로도 항상 감사하면서 지내도록',
      '축하포카리'
    ],
    jobs: ['엉덩이 드럼 1회 회피권']
  },
  {
    title: '이정도면 합격이지',
    character: './images/result_character4.jpeg',
    results: [
      '쿠폰 스샷찍으셈',
      '똥개 심심하다고 해서 만드는중',
      '합격했으니 치킨을 사주겠다'
    ],
    jobs: ['우웅 치킨']
  },
  {
    title: '뭐 이정도면',
    character: './images/result_character5.jpeg',
    results: [
      '이정도면 뭐 쏘쏘하구만',
      ' 부산에서 오면 시차적응해야지',
      '아오 어깨아파'
    ],
    jobs: ['안마권']
  },
  {
    title: '꽝이야 실격',
    character: './images/result_character6.jpeg',
    results: [
      '벌이야 자전거 타기 10번 쿠폰',
      '로닝로닝도 10번',
      '다시 공부해오세요'
    ],
    jobs: ['없어잇']
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
