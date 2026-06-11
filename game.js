const assets = {
  polina: "assets/polina.webp?v=20260610",
  friend1: "assets/friend1.webp?v=20260610",
  friend2: "assets/friend2.webp?v=20260610",
  friend3: "assets/friend3.webp?v=20260610",
  friend4: "assets/friend4.webp?v=20260610",
  friend5: "assets/friend5.webp?v=20260610",
  friend6: "assets/friend6.webp?v=20260610",
  cowboyStable: "assets/cowboy-stable.webp?v=20260610",
  cowboySaloon: "assets/cowboy-saloon.webp?v=20260610",
  cowboyGroom: "assets/cowboy-groom.webp?v=20260610",
};

const speakerCharacters = {
  Поли: "polina",
  "Джейн": "friend1",
  "Викки": "friend2",
  "Аннетт": "friend3",
  "Джулс": "friend4",
  "Подруга 5": "friend5",
  "Подруга 6": "friend6",
  "Майкл": "cowboyStable",
  "Сайрил": "cowboySaloon",
  "Юджин": "cowboyGroom",
};

const backgrounds = {
  ranchRoad: 'url("assets/locations/dusty-road-ranch.webp?v=20260610")',
  letter: 'url("assets/locations/letter-closeup-v2.webp?v=20260610")',
  ranchGate:
    'url("assets/locations/ranch-gate-v2.webp?v=20260610")',
  map:
    'url("assets/locations/ranch-map-v2.webp?v=20260610")',
  yard:
    'url("assets/locations/ranch-yard-v2.webp?v=20260610")',
  stable:
    'url("assets/locations/stable-inside-v2.webp?v=20260610")',
  saloon:
    'url("assets/locations/saloon-inside-v2.webp?v=20260610")',
  paddock:
    'url("assets/locations/paddock-sunset-v2.webp?v=20260610")',
  rodeoArena:
    'url("assets/locations/rodeo-arena-v2.webp?v=20260610")',
  lastRodeoGate:
    'url("assets/locations/last-rodeo-gate-v2.webp?v=20260610")',
  lastRodeoBall:
    'url("assets/locations/last-rodeo-ball-v2.webp?v=20260610")',
};

const scenes = {
  cover: {
    mode: "narration",
    className: "scene--cover",
    resetState: true,
    text: "Клуб Романтики: Последнее родео",
    choices: [{ label: "Начать историю", next: "road" }],
  },
  road: {
    mode: "narration",
    background: backgrounds.ranchRoad,
    text:
      "Пыльная дорога, запах сена и подозрительно драматичный закат. Ты снова на ранчо “Дикая Подкова”. Когда-то ты уже бывала здесь, но теперь всё ощущается иначе. Сегодня всё выглядит так, будто ранчо готовит тебе драму, интригу и пару сомнительных выборов.",
    choices: [{ label: "Открыть письмо", next: "letter" }],
  },
  letter: {
    mode: "narration",
    background: backgrounds.letter,
    speaker: "Письмо",
    text:
      "Поли, если ты читаешь это, значит, настало время Последнего родео. До заката найди Серебряную подкову и Золотой жетон. Они станут ключами к следующей главе истории.\n\nДоверяй своей интуиции и помни: не каждый ковбой в шляпе — судьба. Иногда это просто мужчина в шляпе. А когда солнце скроется за горизонтом и дневные испытания останутся позади, начнётся главное событие вечера — Бал ВК Знакомств.\n\nВедь каждое родео когда-нибудь заканчивается. Но самые интересные истории обычно начинаются уже после заката.",
    choices: [{ label: "Поехать к воротам", next: "gateFriend" }],
  },
  gateFriend: {
    mode: "dialogue",
    background: backgrounds.ranchGate,
    speaker: "Джейн",
    text:
      "Ущипни меня, кобыла, это правда ты? Давно тебя ветром в наши стойла не заносило!",
    choices: [{ label: "Обнять её", next: "gateRules" }],
  },
  gateRules: {
    mode: "dialogue",
    background: backgrounds.ranchGate,
    speaker: "Джейн",
    text:
      "На бал “Последнее родео” пускают только с двумя знаками: подковой из конюшни и жетоном из салуна. Да, звучит как квест, который придумали после текилы.",
    choices: [{ label: "Войти во двор", next: "yardIntro" }],
  },
  yardIntro: {
    mode: "dialogue",
    background: backgrounds.yard,
    speaker: "Джейн",
    text:
      "Вот он, центральный двор. Сюда все возвращаются: ковбои — хвастаться, подруги — комментировать, а ты — собирать подкову, жетон и остатки здравого смысла.",
    choices: [{ label: "Открыть карту", next: "map" }],
  },
  map: {
    mode: "narration",
    className: "scene--map",
    background: backgrounds.map,
    speaker: "Карта ранчо",
    text: "Куда пойдём сначала?",
    choices: [
      {
        label: "Конюшня",
        next: "stableIntro",
        variant: "map",
        condition: () => !state.hasHorseshoe,
      },
      {
        label: "Салун",
        next: "saloonIntro",
        variant: "map",
        condition: () => !state.hasToken,
      },
      {
        label: "Посетить бал",
        next: "preBallSoon",
        variant: "map",
        condition: () => state.hasHorseshoe && state.hasToken,
      },
    ],
  },

  stableIntro: {
    mode: "narration",
    background: backgrounds.stable,
    text:
      "В конюшне тихо. Лошади смотрят так, будто знают о твоей личной жизни больше, чем надо, а в воздухе витает запах сена, кожи и человека, который явно сам себе нравится.",
    choices: [{ label: "Оглядеться", next: "stableFriend" }],
  },
  stableFriend: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Викки",
    text:
      "Подкова где-то здесь. Но держу пари, местный ковбой думает, что он главный приз родео. А градус его напора больше чем у жгучего пойла тётушки Сьюзи.",
    choices: [{ label: "Обернуться", next: "stableCowboyEntrance" }],
  },
  stableCowboyEntrance: {
    mode: "wide",
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Из полумрака амбара появляется ковбой. Он лениво облокотился на деревянную перекладину, будто случайно оказался здесь ровно в тот момент, когда художник решил написать свою лучшую картину о Диком Западе.",
    choices: [{ label: "Слушать Майкла", next: "stableCowboyIntro" }],
  },
  stableCowboyIntro: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Чтоб меня лягнул старый мул… Ваши глаза только что выбили из меня весь дух. Я уж подумал, шляпа улетела прямиком в Нью-Мексико. Что такая красотка забыла в наших дрянных краях?",
    choices: [
      { label: "Мощно начал", next: "stableCowboyBold", stars: 1 },
      { label: "Погоди-ка, ковбой…", next: "stableCowboyWait", stars: 1 },
    ],
  },
  stableCowboyBold: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Такой уж у меня ковбойский порок, мисс — сначала выбиваю двери салуна, потом спрашиваю, можно ли войти.",
    choices: [{ label: "Спросить про подкову", next: "stableHorseshoeReveal" }],
  },
  stableCowboyWait: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Тише, мисс, не хватайтесь за револьвер — это сама судьба прошептала, а я только завернул её слова в красивую обёртку, как хороший виски.",
    choices: [{ label: "Спросить про подкову", next: "stableHorseshoeReveal" }],
  },
  stableHorseshoeReveal: {
    mode: "wide",
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Майкл усмехается и, не спеша, достаёт из заднего кармана джинсов Серебряную подкову. Металл ловит луч света и вспыхивает серебристым отблеском.",
    choices: [{ label: "Слушать Майкла", next: "stableHorseshoe" }],
  },
  stableHorseshoe: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Серебряная подкова не даётся просто так. Её получает та, кто умеет держаться в седле моего внимания.",
    choices: [
      { label: "Попросить подкову нормально", next: "stableAskNormal", stars: 3 },
      { label: "Подыграть его спектаклю", next: "stablePlayAlong", stars: 2 },
    ],
  },
  stableAskNormal: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text: "Прямолинейно. Мне нравится. Как лассо, брошенное прямо в сердце.",
    choices: [{ label: "Слушать дальше", next: "stablePaddockInvite" }],
  },
  stablePlayAlong: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Осторожнее, мисс. Ещё пара таких взглядов — и я начну верить в моногамию.",
    choices: [{ label: "Слушать дальше", next: "stablePaddockInvite" }],
  },
  stablePaddockInvite: {
    mode: "dialogue",
    background: backgrounds.stable,
    speaker: "Майкл",
    text:
      "Пойдём. Я покажу место, где солнце садится так низко, будто тоже хочет познакомиться со мной.",
    choices: [{ label: "Идти к загону", next: "stableLassoSetup" }],
  },
  stableLassoSetup: {
    mode: "wide",
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "У загона Майкл снимает с плеча лассо и протягивает его Поли. Верёвка мягко ложится ей в руки, а сам он лишь кивает в сторону цели.",
    choices: [{ label: "Взять лассо", next: "stableLasso" }],
  },
  stableLasso: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Только не затягивай лассо слишком туго, мисс. Всё дикое рано или поздно рвётся на волю. А я — особенно.",
    choices: [
      { label: "Позволить поправить руку", next: "stableHand", stars: 1 },
      { label: "Справлюсь сама", next: "stableSelf", stars: 3 },
    ],
  },
  stableHand: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Вот так. Видишь? Иногда нужно просто довериться руке мужчины, который знает верёвки.",
    choices: [{ label: "Бросить лассо", next: "stableBucketReflection" }],
  },
  stableSelf: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text: "Ого. Самостоятельная. Опасный типаж для моего эго.",
    choices: [{ label: "Бросить лассо", next: "stableBucketReflection" }],
  },
  stableBucketReflection: {
    mode: "wide",
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Лассо почти попадает. Но Майкл смотрит не на результат, а на своё отражение в металлическом ведре.",
    choices: [{ label: "Слушать Майкла", next: "stableBucketQuestion" }],
  },
  stableBucketQuestion: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Скажи честно, я в этом свете больше “дикий мустанг” или “ковбой, которого невозможно забыть”?",
    choices: [
      { label: "Сказать: ведро тоже в шоке", next: "stableBucketShock", stars: 3 },
      { label: "Сделать вид, что не расслышала", next: "stableDidntHear", stars: 2 },
    ],
  },
  stableBucketShock: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Поли",
    text: "Ведро тоже в шоке.",
    choices: [{ label: "Выдержать паузу", next: "stableHatFrame" }],
  },
  stableDidntHear: {
    mode: "narration",
    background: backgrounds.paddock,
    text:
      "Поли делает вид, что не расслышала. Ведро, к сожалению, всё слышало.",
    choices: [{ label: "Выдержать паузу", next: "stableHatFrame" }],
  },
  stableHatFrame: {
    mode: "wide",
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Майкл снимает шляпу, оценивающе смотрит на Поли и без лишних слов надевает её ей на голову. Уголки его губ трогает довольная усмешка.",
    choices: [{ label: "Слушать Майкла", next: "stableHat" }],
  },
  stableHat: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Ну всё, мисс. Теперь всё это ранчо будет судачить о вас до самого сезона пыльных бурь. Но шляпа на вас сидит слишком уж хорошо… Это уже почти ограбление средь бела дня.",
    choices: [{ label: "Поправить шляпу", next: "stablePhone" }],
  },
  stablePhone: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Стой. Надо снять момент. Подпись будет: “Она думала, что пришла за подковой, но нашла меня”.",
    choices: [
      { label: "Сфоткаться", next: "stablePhotoPose", stars: 1 },
      {
        label: "Спросить, нельзя ли удалить его из кадра заранее",
        next: "stablePhotoDelete",
        stars: 3,
      },
    ],
  },
  stablePhotoPose: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Переснимем. Я тут слишком доступный. Мне нужен вайб “его нельзя удержать даже налоговой”.",
    choices: [{ label: "Дождаться подковы", next: "stableGiveHorseshoe" }],
  },
  stablePhotoDelete: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Жёстко. Мне нравится. Женщины обычно хотят меня приблизить, не стереть.",
    choices: [{ label: "Дождаться подковы", next: "stableGiveHorseshoe" }],
  },
  stableGiveHorseshoe: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Майкл",
    text:
      "Держи. Но если на балу захочешь выбрать мужчину, которого не удержит ни одна изгородь, ты знаешь, где искать мою тень.",
    choices: [
      { label: "Сказать: какая богатая бессмыслица", next: "stableNonsense", stars: 1 },
      {
        label: "Плюнуть в пыль по-вестернски и уйти красиво",
        next: "stableDustExit",
        stars: 2,
      },
    ],
  },
  stableNonsense: {
    mode: "dialogue",
    background: backgrounds.paddock,
    speaker: "Поли",
    text: "Какая богатая бессмыслица.",
    choices: [{ label: "Выйти из загона", next: "stableExit" }],
  },
  stableDustExit: {
    mode: "narration",
    background: backgrounds.paddock,
    text:
      "Поли плюёт в пыль по-вестернски и уходит так красиво, что даже закат на секунду перестаёт переигрывать.",
    choices: [{ label: "Вернуться во двор", next: "stableExit" }],
  },
  stableExit: {
    mode: "dialogue",
    background: backgrounds.yard,
    effects: { hasHorseshoe: true },
    reward: {
      item: "horseshoe",
      title: "Серебряная подкова получена",
      subtitle: "Первый знак для бала",
      icon: "♘",
    },
    speaker: "Викки",
    text: "Подкова есть?",
    choices: [{ label: "Показать подкову", next: "yardAfterStable" }],
  },
  yardAfterStable: {
    mode: "dialogue",
    background: backgrounds.yard,
    speaker: "Викки",
    text:
      "Подкова добыта. Майкл временно обезврежен. Проверим, что там в салуне?",
    choices: [
      {
        label: "Идти в салун",
        next: "saloonIntro",
        condition: () => !state.hasToken,
      },
      {
        label: "Посетить бал",
        next: "preBallSoon",
        condition: () => state.hasToken,
      },
    ],
  },

  saloonIntro: {
    mode: "narration",
    background: backgrounds.saloon,
    text:
      "В салуне было шумно. Кто-то спорил о быках, кто-то о любви, и оба спора звучали одинаково безнадёжно.",
    choices: [{ label: "Подойти к бару", next: "saloonFriend" }],
  },
  saloonFriend: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Аннетт",
    text:
      "Поли, жетон здесь. Только не садись слишком близко к тому ковбою. Он сегодня проиграл деньги, сапог и уважение барного табурета.",
    choices: [{ label: "Посмотреть на ковбоя", next: "saloonCowboyEntrance" }],
  },
  saloonCowboyEntrance: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Ковбой из салуна машет рукой. Перед ним пустой стакан, мятые ставки и один сапог без шпоры.",
    choices: [{ label: "Слушать Сайрила", next: "saloonCowboyIntro" }],
  },
  saloonCowboyIntro: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Мисс, не пугайтесь. Это не крах. Просто судьба подняла немного пыли на дороге.",
    choices: [
      { label: "Спросить, где вторая шпора", next: "saloonSpurReply", stars: 1 },
      { label: "Спросить, что он проиграл", next: "saloonLossReply", stars: 1 },
    ],
  },
  saloonSpurReply: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Шпора ушла в залог. Но она вернётся. Между нами сильная связь.",
    choices: [{ label: "Слушать дальше", next: "saloonBullExplanation" }],
  },
  saloonLossReply: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Пару монет. Немного гордости. И, возможно, право уверенно смотреть на быка по имени Нежный Гром.",
    choices: [{ label: "Слушать дальше", next: "saloonBullExplanation" }],
  },
  saloonBullExplanation: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Я поставил на Нежного Грома всё, что было в кармане. Ну кто знал, что бык с таким именем просто сядет и будет смотреть в вечность?",
    choices: [{ label: "Оглянуться на подругу", next: "saloonLoyalty" }],
  },
  saloonLoyalty: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Аннетт",
    text: "Он ставил на него три раза.",
    choices: [{ label: "Слушать Сайрила", next: "saloonLoyaltySairil" }],
  },
  saloonLoyaltySairil: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Верность — редкое качество, мэм.",
    choices: [{ label: "Спросить про жетон", next: "saloonDealFrame" }],
  },
  saloonDealFrame: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "friend3", position: "left" },
      { id: "cowboySaloon", position: "right" },
    ],
    text:
      "Жетон можно выиграть в игре салуна. Сайрил оживляется, а Аннетт смотрит так, будто его стратегия сейчас в залоге вместе со шпорой.",
    choices: [{ label: "Слушать Сайрила", next: "saloonDeal" }],
  },
  saloonDeal: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Поли, предлагаю сделку. Ты приносишь удачу, а я знаю, куда её выгоднее поставить.",
    choices: [
      { label: "Играть самой", next: "saloonPlaySelf", stars: 3 },
      { label: "Дать ему один шанс", next: "saloonGiveChanceFrame", stars: 2 },
    ],
  },
  saloonPlaySelf: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Ух ты. Женщина за игорным столом. Бьюсь об заклад, даже кости сейчас пригладили углы и поправили шляпы.",
    choices: [{ label: "Бросить кости", next: "saloonWinToken" }],
  },
  saloonGiveChanceFrame: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Сайрил торжественно бросает кости, но промахивается мимо стола.",
    choices: [{ label: "Посмотреть на Сайрила", next: "saloonGiveChance" }],
  },
  saloonGiveChance: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Это была разведка поверхности.",
    choices: [{ label: "Взять дело в свои руки", next: "saloonWinToken" }],
  },
  saloonWinToken: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text: "Поли бросает кости и выигрывает жетон.",
    choices: [{ label: "Слушать Сайрила", next: "saloonWinTokenReaction" }],
  },
  saloonWinTokenReaction: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Чтоб меня лягнул мул... Вы не удача. Вы причина, по которой удача вообще приходит на работу.",
    choices: [
      { label: "Забрать жетон", next: "saloonDanceOffer", stars: 3 },
      {
        label: "Спросить, всегда ли он так проигрывает",
        next: "saloonAlwaysLose",
        stars: 1,
      },
    ],
  },
  saloonAlwaysLose: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Нет. Иногда я проигрываю быстрее.\n\nНо зато с настроением.",
    choices: [{ label: "Забрать жетон", next: "saloonDanceOffer" }],
  },
  saloonDanceOffer: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Понимаю, что сейчас выгляжу как ковбой, которого жизнь уронила в корыто и забыла поднять. Но на один танец меня ещё должно хватить. Наверное…",
    choices: [
      { label: "Согласиться", next: "saloonDanceAgree", stars: 1 },
      { label: "Сказать: только если без ставок", next: "saloonNoBets", stars: 1 },
    ],
  },
  saloonDanceAgree: {
    mode: "narration",
    background: backgrounds.saloon,
    text: "Поли соглашается на танец. В салуне становится почти романтично.",
    choices: [{ label: "Танцевать", next: "saloonDanceFrame" }],
  },
  saloonNoBets: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Без ставок, мэм. Почти клянусь.",
    choices: [{ label: "Танцевать", next: "saloonDanceFrame" }],
  },
  saloonDanceFrame: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Танец почти получается галантным, но Сайрил слегка наступает себе же на ногу.",
    choices: [{ label: "Слушать Сайрила", next: "saloonDance" }],
  },
  saloonDance: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Не волнуйтесь, мэм. Это не боль. Это ритм Дикого Запада.",
    choices: [{ label: "Продолжить танец", next: "saloonQuietFrame" }],
  },
  saloonQuietFrame: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "На секунду всё выходит мило. Сайрил начинает говорить тише, будто впервые за вечер слышит музыку, а не ставки.",
    choices: [{ label: "Слушать Сайрила", next: "saloonQuiet" }],
  },
  saloonQuiet: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "С вами как-то спокойнее. Будто кто-то наконец придержал поводья моей беспокойной души.",
    choices: [{ label: "Почти проникнуться", next: "saloonSeesBetsFrame" }],
  },
  saloonSeesBetsFrame: {
    mode: "wide",
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Ты почти проникаешься, но вдруг Сайрил оборачивается на стол ставок.",
    choices: [{ label: "Остановить мысль", next: "saloonSeesBets" }],
  },
  saloonSeesBets: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Ох. Финальный заезд. Чисто теоретически, если поставить жетон…",
    choices: [
      { label: "Спрятать жетон за спину", next: "saloonRespect", stars: 1 },
      { label: "Сказать: даже не продолжай…", next: "saloonRespect", stars: 3 },
    ],
  },
  saloonRespect: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Понял. Уважаю. Женщина, которая не даёт мне принять решение, уже спасла мне вечер.",
    choices: [{ label: "Вернуться к подруге", next: "saloonTokenOfficial" }],
  },
  saloonTokenOfficial: {
    mode: "dialogue",
    background: backgrounds.saloon,
    effects: { hasToken: true },
    reward: {
      item: "token",
      title: "Золотой жетон получен",
      subtitle: "Второй знак для бала",
      icon: "◎",
    },
    speaker: "Аннетт",
    text: "Поздравляю! И, кажется, с ним покончено?",
    choices: [{ label: "Попрощаться", next: "saloonFarewell" }],
  },
  saloonFarewell: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text:
      "Если на балу тебе понадобится мужчина, который умеет падать, вставать и снова падать, я буду у бара.",
    choices: [
      {
        label: "Пожелать ему удачи и попросить не ставить её на быка",
        next: "saloonDontBetLuck",
        stars: 1,
      },
      { label: "Промолчать", next: "saloonGoodLuck", stars: 3 },
    ],
  },
  saloonGoodLuck: {
    mode: "narration",
    background: backgrounds.saloon,
    text:
      "Поли молчит. Сайрил смотрит на стол ставок так, будто даже тишина может быть опаснейшим благословением.",
    choices: [{ label: "Вернуться во двор", next: "yardAfterSaloon" }],
  },
  saloonDontBetLuck: {
    mode: "dialogue",
    background: backgrounds.saloon,
    speaker: "Сайрил",
    text: "Сложно, но я попробую.",
    choices: [{ label: "Вернуться во двор", next: "yardAfterSaloon" }],
  },
  yardAfterSaloon: {
    mode: "dialogue",
    background: backgrounds.yard,
    speaker: "Аннетт",
    text:
      "Жетон есть. Сайрил почти не поставил его на быка. Это уже победа уровня легенды.",
    choices: [
      {
        label: "Идти в конюшню",
        next: "stableIntro",
        condition: () => !state.hasHorseshoe,
      },
      {
        label: "Посетить бал",
        next: "preBallSoon",
        condition: () => state.hasHorseshoe,
      },
    ],
  },
  preBallSoon: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Джулс",
    text:
      "Итак. Один ковбой говорил так, будто проглотил календарь с цитатами. Второй почти проиграл тебе вход на бал, но был вежлив.",
    choices: [{ label: "Слушать колокол", next: "ballBell" }],
  },
  ballBell: {
    mode: "narration",
    background: backgrounds.lastRodeoGate,
    speaker: "Голос",
    text:
      "Претендентка собрала знаки. Теперь она должна выбрать, кто поведёт её на бал.",
    choices: [{ label: "Выйти на арену", next: "ballCowboyLineup" }],
  },
  ballCowboyLineup: {
    mode: "wide",
    background: backgrounds.rodeoArena,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "cowboySaloon", position: "right" },
    ],
    text:
      "На арене появляются оба ковбоя. Майкл поправляет шляпу, а Сайрил выглядит так, будто заранее готов извиниться перед судьбой.",
    choices: [{ label: "Слушать обещания", next: "ballMichaelPitch" }],
  },
  ballMichaelPitch: {
    mode: "dialogue",
    background: backgrounds.rodeoArena,
    speaker: "Майкл",
    text:
      "Поли, я не обещаю спокойствия. Я обещаю пыль, страсть и фотоаппарат, чтобы ты всегда могла запечатлеть меня.",
    choices: [{ label: "Слушать Сайрила", next: "ballSairilPitch" }],
  },
  ballSairilPitch: {
    mode: "dialogue",
    background: backgrounds.rodeoArena,
    speaker: "Сайрил",
    text: "А я обещаю честно стараться, но не уверен...",
    choices: [
      { label: "Пойти с Майклом", next: "ballMichaelDetour" },
      { label: "Пойти с Сайрилом", next: "ballSairilDetour" },
    ],
  },
  ballMichaelDetour: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Майкл",
    text:
      "Подожди. Войти на бал надо так, чтобы бал понял, кто к нему пришёл. Ты будешь рядом. Это усилит мой образ мужчины, который мог бы остепениться, но не сегодня.",
    choices: [{ label: "Вернуться к воротам", next: "ballThirdCowboyDrop" }],
  },
  ballSairilDetour: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Сайрил",
    text:
      "Последняя мысль. Если поставить жетон, мы можем войти богатыми. Или не войти. Да, но как драматично.",
    choices: [{ label: "Вернуться к воротам", next: "ballThirdCowboyDrop" }],
  },
  ballThirdCowboyDrop: {
    mode: "wide",
    background: backgrounds.lastRodeoGate,
    characters: [
      { id: "polina", position: "left" },
      { id: "cowboyGroom", position: "right" },
    ],
    text:
      "В суматохе Поли роняет подкову. Юджин спокойно поднимает её и возвращает так, будто весь вечер ждал ровно этого момента.",
    choices: [{ label: "Посмотреть на него", next: "ballEugeneReturn" }],
  },
  ballEugeneReturn: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Юджин",
    text: "Кажется, это твоё. Важные вещи лучше не оставлять в пыли.",
    choices: [
      { label: "Поблагодарить", next: "ballLanternFix" },
      { label: "Спросить, кто он", next: "ballAskEugene" },
    ],
  },
  ballAskEugene: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Юджин",
    text: "Тот, кто всегда мечтал встретить тебя на балу ВК знакомств.",
    choices: [{ label: "Услышать шум у ворот", next: "ballLanternFix" }],
  },
  ballLanternFix: {
    mode: "wide",
    background: backgrounds.lastRodeoGate,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "cowboyGroom", position: "right" },
    ],
    text:
      "У ворот гаснет фонарь. Майкл и Сайрил спорят, а Юджин молча чинит свет. Теперь дорогу видно.",
    choices: [{ label: "Слушать Юджина", next: "ballEugeneChoice" }],
  },
  ballEugeneChoice: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Юджин",
    text:
      "Ты сегодня весь вечер выбирала между шумом и обещаниями. Давай хотя бы сейчас никто не будет выбирать за тебя.",
    choices: [
      { label: "Майкл", next: "ballRejectMichael" },
      { label: "Сайрил", next: "ballRejectSairil" },
      { label: "Юджин", next: "ballEugeneFinal" },
    ],
  },
  ballRejectMichael: {
    mode: "narration",
    background: backgrounds.lastRodeoGate,
    text: "Игра заботливо не даёт тебе испортить финал. Майкл уже позирует для входа.",
    choices: [{ label: "Выбрать снова", next: "ballEugeneChoice" }],
  },
  ballRejectSairil: {
    mode: "narration",
    background: backgrounds.lastRodeoGate,
    text: "Игра заботливо не даёт тебе испортить финал. Сайрил всё ещё смотрит в сторону ставок.",
    choices: [{ label: "Выбрать снова", next: "ballEugeneChoice" }],
  },
  ballEugeneFinal: {
    mode: "dialogue",
    background: backgrounds.lastRodeoGate,
    speaker: "Юджин",
    text: "Пойдём. Обещаю, что это твоё последнее родео.",
    choices: [{ label: "Войти на бал", next: "ballFriendsToast" }],
  },
  ballFriendsToast: {
    mode: "wide",
    background: backgrounds.lastRodeoBall,
    characters: [
      { id: "friend1", position: "left" },
      { id: "friend4", position: "right" },
    ],
    text:
      "Подруги встречают Поли у входа. Кастинг ковбоев завершён. Жетон не проигран. Подкова у правильного человека.",
    choices: [{ label: "Танцевать", next: "ballDance" }],
  },
  ballDance: {
    mode: "wide",
    background: backgrounds.lastRodeoBall,
    characters: [
      { id: "polina", position: "left" },
      { id: "cowboyGroom", position: "right" },
    ],
    text:
      "Впервые за вечер никто не позирует, не ставит на быка и не говорит загадками про ветер. Просто музыка, свет и человек, рядом с которым спокойно.",
    choices: [{ label: "Слушать голосовое", next: "ballVoice" }],
  },
  ballVoice: {
    mode: "narration",
    background: backgrounds.lastRodeoBall,
    speaker: "Голосовое",
    text:
      "Голосовое жениха включается в самый подходящий момент. Вечер смеётся, огни качаются над двором, и Бал ВК Знакомств официально становится легендой.",
    choices: [{ label: "Финальный кадр", next: "ballFinal" }],
  },
  ballFinal: {
    mode: "wide",
    background: backgrounds.lastRodeoBall,
    characters: [
      { id: "polina", position: "left" },
      { id: "cowboyGroom", position: "right" },
    ],
    text: "Последнее родео заканчивается. Самая интересная история начинается после заката.",
    choices: [{ label: "Начать заново", next: "cover" }],
  },
};

const state = {
  hasHorseshoe: false,
  hasToken: false,
};

function resetState() {
  state.hasHorseshoe = false;
  state.hasToken = false;
}

function applySceneState(scene) {
  if (scene.resetState) {
    resetState();
  }

  if (scene.effects) {
    Object.assign(state, scene.effects);
  }
}

const sceneElement = document.getElementById("scene");
const charactersElement = document.getElementById("characters");
const speakerElement = document.getElementById("speaker");
const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");
const inventoryElement = document.getElementById("inventory");
const systemToastElement = document.getElementById("systemToast");
const rewardOverlayElement = document.getElementById("rewardOverlay");

const preloadedImages = new Set();
let rewardTimerId;

function getVisibleChoices(choices = []) {
  return choices.filter((choice) => !choice.condition || choice.condition());
}

function extractBackgroundUrl(background = "") {
  const match = background.match(/url\(["']?([^"')]+)["']?\)/);
  return match ? match[1] : "";
}

function preloadImage(src) {
  if (!src || preloadedImages.has(src)) {
    return;
  }

  preloadedImages.add(src);
  const image = new Image();
  image.decoding = "async";
  image.src = src;
}

function getSceneMode(scene = {}) {
  if (scene.mode === "wide" || scene.mode === "dialogue" || scene.mode === "narration") {
    return scene.mode;
  }

  if (scene.characters?.length) {
    return "wide";
  }

  return scene.speaker && speakerCharacters[scene.speaker] ? "dialogue" : "narration";
}

function getSceneCharacters(scene = {}) {
  const mode = getSceneMode(scene);

  if (mode === "narration") {
    return [];
  }

  if (mode === "dialogue") {
    const speakerId = speakerCharacters[scene.speaker];
    return speakerId ? [{ id: speakerId, position: "center", isSpeaking: true }] : [];
  }

  return scene.characters || [];
}

function preloadSceneImages(scene) {
  if (!scene) {
    return;
  }

  preloadImage(extractBackgroundUrl(scene.background));
  getSceneCharacters(scene).forEach((character) => {
    preloadImage(assets[character.id]);
  });
}

function preloadUpcomingScenes(scene) {
  getVisibleChoices(scene.choices).forEach((choice) => {
    preloadSceneImages(scenes[choice.next]);
  });
}

function renderInventory() {
  inventoryElement.innerHTML = [
    { item: "horseshoe", label: "Подкова", icon: "♘", active: state.hasHorseshoe },
    { item: "token", label: "Жетон", icon: "◎", active: state.hasToken },
  ]
    .map(
      (item) => `
        <div
          class="inventory__item inventory__item--${item.item} ${item.active ? "is-active" : ""}"
          data-item="${item.item}"
        >
          <span class="inventory__icon">${item.icon}</span>
          <span class="inventory__label">${item.label}</span>
        </div>
      `,
    )
    .join("");
}

function renderCharacters(scene = {}) {
  const speakingCharacterId = speakerCharacters[scene.speaker];
  const characters = getSceneCharacters(scene);

  charactersElement.innerHTML = characters
    .map((character) => {
      const src = assets[character.id];
      const position = character.position || "center";
      const identity = ` character--${character.id}`;
      const speaking =
        character.isSpeaking || character.id === speakingCharacterId ? " character--speaking" : "";
      return `
        <img
          class="character character--${position}${identity}${speaking}"
          src="${src}"
          alt=""
          aria-hidden="true"
        />
      `;
    })
    .join("");
}

function getStarWord(count) {
  if (count === 1) {
    return "звезда";
  }

  return count < 5 ? "звезды" : "звёзд";
}

function renderChoices(choices = []) {
  choicesElement.innerHTML = "";

  getVisibleChoices(choices)
    .forEach((choice) => {
      const button = document.createElement("button");
      button.className = `choice${choice.variant ? ` choice--${choice.variant}` : ""}`;
      button.type = "button";

      const label = document.createElement("span");
      label.className = "choice__label";
      label.textContent = choice.label;
      button.appendChild(label);

      if (choice.stars) {
        const stars = document.createElement("span");
        stars.className = "choice__stars";
        stars.setAttribute("aria-hidden", "true");

        for (let index = 0; index < choice.stars; index += 1) {
          const star = document.createElement("span");
          star.className = "choice__star";
          star.textContent = "★";
          stars.appendChild(star);
        }

        button.appendChild(stars);
        button.setAttribute("aria-label", `${choice.label}, ${choice.stars} ${getStarWord(choice.stars)}`);
      }

      button.addEventListener("click", () => goToScene(choice.next));
      choicesElement.appendChild(button);
    });
}

function showToast(message) {
  if (!message) {
    systemToastElement.hidden = true;
    systemToastElement.textContent = "";
    return;
  }

  systemToastElement.textContent = message;
  systemToastElement.hidden = false;
}

function hideReward() {
  if (rewardTimerId) {
    window.clearTimeout(rewardTimerId);
    rewardTimerId = undefined;
  }

  rewardOverlayElement.hidden = true;
  rewardOverlayElement.classList.remove("is-visible", "is-hiding");
  rewardOverlayElement.innerHTML = "";
  inventoryElement
    .querySelectorAll(".inventory__item.is-rewarded")
    .forEach((item) => item.classList.remove("is-rewarded"));
}

function showReward(reward) {
  hideReward();

  if (!reward) {
    return;
  }

  rewardOverlayElement.innerHTML = `
    <div class="reward-overlay__card">
      <span class="reward-overlay__spark reward-overlay__spark--one"></span>
      <span class="reward-overlay__spark reward-overlay__spark--two"></span>
      <span class="reward-overlay__spark reward-overlay__spark--three"></span>
      <div class="reward-overlay__icon" aria-hidden="true">${reward.icon}</div>
      <div class="reward-overlay__content">
        <div class="reward-overlay__title">${reward.title}</div>
        <div class="reward-overlay__subtitle">${reward.subtitle}</div>
      </div>
    </div>
  `;
  rewardOverlayElement.hidden = false;
  rewardOverlayElement.classList.add("is-visible");

  const rewardedItem = inventoryElement.querySelector(`[data-item="${reward.item}"]`);
  rewardedItem?.classList.add("is-rewarded");

  rewardTimerId = window.setTimeout(() => {
    rewardOverlayElement.classList.remove("is-visible");
    rewardOverlayElement.classList.add("is-hiding");
    rewardedItem?.classList.remove("is-rewarded");

    rewardTimerId = window.setTimeout(() => {
      rewardOverlayElement.hidden = true;
      rewardOverlayElement.classList.remove("is-hiding");
      rewardOverlayElement.innerHTML = "";
      rewardTimerId = undefined;
    }, 360);
  }, 1800);
}

function goToScene(sceneId) {
  const scene = scenes[sceneId] || scenes.cover;
  const sceneMode = getSceneMode(scene);

  applySceneState(scene);

  sceneElement.className = `scene scene--mode-${sceneMode} ${scene.className || ""}`;
  sceneElement.style.setProperty("--scene-bg", scene.background || "transparent");

  showToast(scene.toast);
  renderInventory();
  showReward(scene.reward);
  renderCharacters(scene);
  speakerElement.textContent = scene.speaker || "";
  textElement.textContent = scene.text;
  renderChoices(scene.choices);
  preloadUpcomingScenes(scene);
}

goToScene("cover");
