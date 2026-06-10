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
  Полина: "polina",
  "Подруга 1": "friend1",
  "Подруга 2": "friend2",
  "Подруга 3": "friend3",
  "Подруга 4": "friend4",
  "Подруга 5": "friend5",
  "Подруга 6": "friend6",
  "Ковбой 1": "cowboyStable",
  "Ковбой 2": "cowboySaloon",
  "Ковбой 3": "cowboyGroom",
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
    className: "scene--cover",
    resetState: true,
    text: "Клуб Романтики: Последнее родео",
    choices: [{ label: "Начать историю", next: "road" }],
  },
  road: {
    background: backgrounds.ranchRoad,
    characters: [{ id: "polina", position: "center" }],
    text:
      "Пыльная дорога, запах сена и подозрительно драматичный закат. Ты снова на ранчо “Дикая Подкова”. Когда-то ты уже бывала здесь, но теперь всё ощущается иначе. Сегодня всё выглядит так, будто ранчо готовит тебе драму, интригу и пару сомнительных выборов.",
    choices: [{ label: "Открыть письмо", next: "letter" }],
  },
  letter: {
    background: backgrounds.letter,
    speaker: "Письмо",
    text:
      "Полина, если ты читаешь это, значит, настало время Последнего родео. До заката найди Серебряную подкову и Золотой жетон. И помни: не каждый ковбой в шляпе — судьба. Иногда это просто мужчина в шляпе.",
    choices: [{ label: "Поехать к воротам", next: "gateFriend" }],
  },
  gateFriend: {
    background: backgrounds.ranchGate,
    characters: [
      { id: "friend1", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 1",
    text:
      "Ущипни меня, кобыла, это правда ты? Давно тебя ветром в наши стойла не заносило!",
    choices: [{ label: "Обнять её", next: "gateRules" }],
  },
  gateRules: {
    background: backgrounds.ranchGate,
    characters: [
      { id: "friend1", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 1",
    text:
      "На бал “Последнее родео” пускают только с двумя знаками: подковой из конюшни и жетоном из салуна. Да, звучит как квест, который придумали после текилы.",
    choices: [{ label: "Войти во двор", next: "yardIntro" }],
  },
  yardIntro: {
    background: backgrounds.yard,
    characters: [
      { id: "friend1", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 1",
    text:
      "Вот он, центральный двор. Сюда все возвращаются: ковбои — хвастаться, подруги — комментировать, а ты — собирать подкову, жетон и остатки здравого смысла.",
    choices: [{ label: "Открыть карту", next: "map" }],
  },
  map: {
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
        label: "К воротам бала",
        next: "preBallSoon",
        variant: "map",
        condition: () => state.hasHorseshoe && state.hasToken,
      },
    ],
  },

  stableIntro: {
    background: backgrounds.stable,
    characters: [{ id: "polina", position: "center" }],
    text:
      "В конюшне тихо. Лошади смотрят так, будто знают о твоей личной жизни больше, чем надо, а в воздухе витает запах сена, кожи и человека, который явно сам себе нравится.",
    choices: [{ label: "Оглядеться", next: "stableFriend" }],
  },
  stableFriend: {
    background: backgrounds.stable,
    characters: [
      { id: "friend2", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 2",
    text:
      "Подкова где-то здесь. Но держу пари, местный ковбой думает, что он главный приз родео. А градус его напора больше чем у жгучего пойла тётушки Сьюзи.",
    choices: [{ label: "Обернуться", next: "stableCowboyIntro" }],
  },
  stableCowboyIntro: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Чтоб меня лягнул старый мул… Ваши глаза только что выбили из меня весь дух. Я уж подумал, шляпа улетела прямиком в Нью-Мексико. Что такая красотка забыла в наших дрянных краях?",
    choices: [
      { label: "Мощно начал", next: "stableCowboyBold" },
      { label: "Погоди-ка, ковбой…", next: "stableCowboyWait" },
    ],
  },
  stableCowboyBold: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Такой уж у меня ковбойский порок, мисс — сначала выбиваю двери салуна, потом спрашиваю, можно ли войти.",
    choices: [{ label: "Спросить про подкову", next: "stableHorseshoe" }],
  },
  stableCowboyWait: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Тише, мисс, не хватайтесь за револьвер — это сама судьба прошептала, а я только завернул её слова в красивую обёртку, как хороший виски.",
    choices: [{ label: "Спросить про подкову", next: "stableHorseshoe" }],
  },
  stableHorseshoe: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Серебряная подкова не даётся просто так. Её получает та, кто умеет держаться в седле моего внимания.",
    choices: [
      { label: "Попросить подкову нормально", next: "stableAskNormal" },
      { label: "Подыграть его спектаклю", next: "stablePlayAlong" },
    ],
  },
  stableAskNormal: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text: "Прямолинейно. Мне нравится. Как лассо, брошенное прямо в сердце.",
    choices: [{ label: "Слушать дальше", next: "stablePaddockInvite" }],
  },
  stablePlayAlong: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Осторожнее, мисс. Ещё пара таких взглядов — и я начну верить в моногамию.",
    choices: [{ label: "Слушать дальше", next: "stablePaddockInvite" }],
  },
  stablePaddockInvite: {
    background: backgrounds.stable,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Пойдём. Я покажу место, где солнце садится так низко, будто тоже хочет познакомиться со мной.",
    choices: [{ label: "Идти к загону", next: "stableLasso" }],
  },
  stableLasso: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Только не затягивай лассо слишком туго, мисс. Всё дикое рано или поздно рвётся на волю. А я — особенно.",
    choices: [
      { label: "Позволить поправить руку", next: "stableHand" },
      { label: "Справлюсь сама", next: "stableSelf" },
    ],
  },
  stableHand: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Вот так. Видишь? Иногда нужно просто довериться руке мужчины, который знает верёвки.",
    choices: [{ label: "Бросить лассо", next: "stableBucketReflection" }],
  },
  stableSelf: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text: "Ого. Самостоятельная. Опасный типаж для моего эго.",
    choices: [{ label: "Бросить лассо", next: "stableBucketReflection" }],
  },
  stableBucketReflection: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Лассо почти попадает. Но он смотрит не на результат, а на своё отражение в металлическом ведре.\n\nСкажи честно, я в этом свете больше “дикий мустанг” или “ковбой, которого невозможно забыть”?",
    choices: [
      { label: "Сказать: ведро тоже в шоке", next: "stableBucketShock" },
      { label: "Сделать вид, что не расслышала", next: "stableDidntHear" },
    ],
  },
  stableBucketShock: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Полина",
    text: "Ведро тоже в шоке.",
    choices: [{ label: "Выдержать паузу", next: "stableHat" }],
  },
  stableDidntHear: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Полина делает вид, что не расслышала. Ведро, к сожалению, всё слышало.",
    choices: [{ label: "Выдержать паузу", next: "stableHat" }],
  },
  stableHat: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Ну всё, мисс. Теперь всё это ранчо будет судачить о вас до самого сезона пыльных бурь. Но шляпа на вас сидит слишком уж хорошо… Это уже почти ограбление средь бела дня.",
    choices: [{ label: "Поправить шляпу", next: "stablePhone" }],
  },
  stablePhone: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Стой. Надо снять момент. Подпись будет: “Она думала, что пришла за подковой, но нашла меня”.",
    choices: [
      { label: "Сфоткаться", next: "stablePhotoPose" },
      {
        label: "Спросить, нельзя ли удалить его из кадра заранее",
        next: "stablePhotoDelete",
      },
    ],
  },
  stablePhotoPose: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Переснимем. Я тут слишком доступный. Мне нужен вайб “его нельзя удержать даже налоговой”.",
    choices: [{ label: "Дождаться подковы", next: "stableGiveHorseshoe" }],
  },
  stablePhotoDelete: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Жёстко. Мне нравится. Женщины обычно хотят меня приблизить, не стереть.",
    choices: [{ label: "Дождаться подковы", next: "stableGiveHorseshoe" }],
  },
  stableGiveHorseshoe: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 1",
    text:
      "Держи. Но если на балу захочешь выбрать мужчину, которого не удержит ни одна изгородь, ты знаешь, где искать мою тень.",
    choices: [
      { label: "Сказать: какая богатая бессмыслица", next: "stableNonsense" },
      {
        label: "Плюнуть в пыль по-вестернски и уйти красиво",
        next: "stableDustExit",
      },
    ],
  },
  stableNonsense: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Полина",
    text: "Какая богатая бессмыслица.",
    choices: [{ label: "Выйти из загона", next: "stableExit" }],
  },
  stableDustExit: {
    background: backgrounds.paddock,
    characters: [
      { id: "cowboyStable", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Полина плюёт в пыль по-вестернски и уходит так красиво, что даже закат на секунду перестаёт переигрывать.",
    choices: [{ label: "Вернуться во двор", next: "stableExit" }],
  },
  stableExit: {
    background: backgrounds.yard,
    effects: { hasHorseshoe: true },
    characters: [
      { id: "friend2", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 2",
    text: "Подкова есть?",
    choices: [{ label: "Показать подкову", next: "yardAfterStable" }],
  },
  yardAfterStable: {
    background: backgrounds.yard,
    characters: [
      { id: "friend2", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 2",
    text:
      "Подкова добыта. Один ковбой временно обезврежен. Проверим, что там в салуне?",
    choices: [
      {
        label: "Идти в салун",
        next: "saloonIntro",
        condition: () => !state.hasToken,
      },
      {
        label: "К воротам бала",
        next: "preBallSoon",
        condition: () => state.hasToken,
      },
    ],
  },

  saloonIntro: {
    background: backgrounds.saloon,
    characters: [{ id: "polina", position: "center" }],
    text:
      "В салуне было шумно. Кто-то спорил о быках, кто-то о любви, и оба спора звучали одинаково безнадёжно.",
    choices: [{ label: "Подойти к бару", next: "saloonFriend" }],
  },
  saloonFriend: {
    background: backgrounds.saloon,
    characters: [
      { id: "friend3", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 3",
    text:
      "Полин, жетон здесь. Только не садись слишком близко к тому ковбою. Он сегодня проиграл деньги, сапог и уважение барного табурета.",
    choices: [{ label: "Посмотреть на ковбоя", next: "saloonCowboyIntro" }],
  },
  saloonCowboyIntro: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Мисс, не пугайтесь. Это не крах. Просто судьба подняла немного пыли на дороге.",
    choices: [
      { label: "Спросить, где вторая шпора", next: "saloonSpurReply" },
      { label: "Спросить, что он проиграл", next: "saloonLossReply" },
    ],
  },
  saloonSpurReply: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Шпора ушла в залог. Но она вернётся. Между нами сильная связь.",
    choices: [{ label: "Слушать дальше", next: "saloonBullExplanation" }],
  },
  saloonLossReply: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Пару монет. Немного гордости. И, возможно, право уверенно смотреть на быка по имени Нежный Гром.",
    choices: [{ label: "Слушать дальше", next: "saloonBullExplanation" }],
  },
  saloonBullExplanation: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Я поставил на Нежного Грома всё, что было в кармане. Ну кто знал, что бык с таким именем просто сядет и будет смотреть в вечность?",
    choices: [{ label: "Оглянуться на подругу", next: "saloonLoyalty" }],
  },
  saloonLoyalty: {
    background: backgrounds.saloon,
    characters: [
      { id: "friend3", position: "left" },
      { id: "cowboySaloon", position: "right" },
    ],
    speaker: "Салун",
    text: "Подруга 3: «Он ставил на него три раза».\n\nКовбой 2: «Верность — редкое качество, мэм».",
    choices: [{ label: "Спросить про жетон", next: "saloonDeal" }],
  },
  saloonDeal: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Полина, предлагаю сделку. Ты приносишь удачу, а я знаю, куда её выгоднее поставить.",
    choices: [
      { label: "Играть самой", next: "saloonPlaySelf" },
      { label: "Дать ему один шанс", next: "saloonGiveChance" },
    ],
  },
  saloonPlaySelf: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Ух ты. Женщина за игорным столом. Бьюсь об заклад, даже кости сейчас пригладили углы и поправили шляпы.",
    choices: [{ label: "Бросить кости", next: "saloonWinToken" }],
  },
  saloonGiveChance: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Он торжественно бросает кости, промахивается мимо стола. Это была разведка поверхности.",
    choices: [{ label: "Взять дело в свои руки", next: "saloonWinToken" }],
  },
  saloonWinToken: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Полина бросает кости и выигрывает жетон.\n\nЧтоб меня лягнул мул... Вы не удача. Вы причина, по которой удача вообще приходит на работу.",
    choices: [
      { label: "Забрать жетон", next: "saloonDanceOffer" },
      {
        label: "Спросить, всегда ли он так проигрывает",
        next: "saloonAlwaysLose",
      },
    ],
  },
  saloonAlwaysLose: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Нет. Иногда я проигрываю быстрее.\n\nНо зато с настроением.",
    choices: [{ label: "Забрать жетон", next: "saloonDanceOffer" }],
  },
  saloonDanceOffer: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Понимаю, что сейчас выгляжу как ковбой, которого жизнь уронила в корыто и забыла поднять. Но на один танец меня ещё должно хватить. Наверное…",
    choices: [
      { label: "Согласиться", next: "saloonDanceAgree" },
      { label: "Сказать: только если без ставок", next: "saloonNoBets" },
    ],
  },
  saloonDanceAgree: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text: "Полина соглашается на танец. В салуне становится почти романтично.",
    choices: [{ label: "Танцевать", next: "saloonDance" }],
  },
  saloonNoBets: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Без ставок, мэм. Почти клянусь.",
    choices: [{ label: "Танцевать", next: "saloonDance" }],
  },
  saloonDance: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Не волнуйтесь, мэм. Это не боль. Это ритм Дикого Запада.",
    choices: [{ label: "Продолжить танец", next: "saloonQuiet" }],
  },
  saloonQuiet: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "С вами как-то спокойнее. Будто кто-то наконец придержал поводья моей беспокойной души.",
    choices: [{ label: "Почти проникнуться", next: "saloonSeesBets" }],
  },
  saloonSeesBets: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Ох. Финальный заезд. Чисто теоретически, если поставить жетон…",
    choices: [
      { label: "Спрятать жетон за спину", next: "saloonRespect" },
      { label: "Сказать: даже не продолжай…", next: "saloonRespect" },
    ],
  },
  saloonRespect: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Понял. Уважаю. Женщина, которая не даёт мне принять решение, уже спасла мне вечер.",
    choices: [{ label: "Вернуться к подруге", next: "saloonTokenOfficial" }],
  },
  saloonTokenOfficial: {
    background: backgrounds.saloon,
    effects: { hasToken: true },
    characters: [
      { id: "friend3", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 3",
    text: "Поздравляю! И, кажется, с ним покончено?",
    choices: [{ label: "Попрощаться", next: "saloonFarewell" }],
  },
  saloonFarewell: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text:
      "Если на балу тебе понадобится мужчина, который умеет падать, вставать и снова падать, я буду у бара.",
    choices: [
      { label: "Пожелать ему удачи", next: "saloonGoodLuck" },
      { label: "Сказать: не ставь её на быка", next: "saloonDontBetLuck" },
    ],
  },
  saloonGoodLuck: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    text:
      "Полина желает ему удачи. Он смотрит на стол ставок так, будто это опаснейшее благословение.",
    choices: [{ label: "Вернуться во двор", next: "yardAfterSaloon" }],
  },
  saloonDontBetLuck: {
    background: backgrounds.saloon,
    characters: [
      { id: "cowboySaloon", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Ковбой 2",
    text: "Сложно, но я попробую.",
    choices: [{ label: "Вернуться во двор", next: "yardAfterSaloon" }],
  },
  yardAfterSaloon: {
    background: backgrounds.yard,
    characters: [
      { id: "friend3", position: "left" },
      { id: "polina", position: "right" },
    ],
    speaker: "Подруга 3",
    text:
      "Жетон есть. Ковбой почти не поставил его на быка. Это уже победа уровня легенды.",
    choices: [
      {
        label: "Идти в конюшню",
        next: "stableIntro",
        condition: () => !state.hasHorseshoe,
      },
      {
        label: "К воротам бала",
        next: "preBallSoon",
        condition: () => state.hasHorseshoe,
      },
    ],
  },
  preBallSoon: {
    background: backgrounds.lastRodeoGate,
    characters: [
      { id: "polina", position: "center" },
    ],
    speaker: "Ворота бала",
    text:
      "Серебряная подкова и Золотой жетон собраны. Дальше начнётся финальный блок: арена родео, появление третьего ковбоя и вход на бал “Последнее родео”.",
    choices: [
      { label: "Вернуться во двор", next: "yardIntro" },
      { label: "Начать заново", next: "cover" },
    ],
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

const preloadedImages = new Set();

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

function preloadSceneImages(scene) {
  if (!scene) {
    return;
  }

  preloadImage(extractBackgroundUrl(scene.background));
  (scene.characters || []).forEach((character) => {
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
    { label: "Подкова", icon: "♘", active: state.hasHorseshoe },
    { label: "Жетон", icon: "◎", active: state.hasToken },
  ]
    .map(
      (item) => `
        <div class="inventory__item ${item.active ? "is-active" : ""}">
          <span class="inventory__icon">${item.icon}</span>
          <span class="inventory__label">${item.label}</span>
        </div>
      `,
    )
    .join("");
}

function renderCharacters(characters = [], speaker = "") {
  const speakingCharacterId = speakerCharacters[speaker];

  charactersElement.innerHTML = characters
    .map((character) => {
      const src = assets[character.id];
      const position = character.position || "center";
      const identity = ` character--${character.id}`;
      const speaking = character.id === speakingCharacterId ? " character--speaking" : "";
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

function renderChoices(choices = []) {
  choicesElement.innerHTML = "";

  getVisibleChoices(choices)
    .forEach((choice) => {
      const button = document.createElement("button");
      button.className = `choice${choice.variant ? ` choice--${choice.variant}` : ""}`;
      button.type = "button";
      button.textContent = choice.label;
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

function goToScene(sceneId) {
  const scene = scenes[sceneId] || scenes.cover;

  applySceneState(scene);

  sceneElement.className = `scene ${scene.className || ""}`;
  sceneElement.style.setProperty("--scene-bg", scene.background || "transparent");

  showToast(scene.toast);
  renderInventory();
  renderCharacters(scene.characters, scene.speaker);
  speakerElement.textContent = scene.speaker || "";
  textElement.textContent = scene.text;
  renderChoices(scene.choices);
  preloadUpcomingScenes(scene);
}

goToScene("cover");
