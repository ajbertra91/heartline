/*
  Shared affirmation data and random draw for all three designs.

  EDIT THESE:
    CONFIG.her  - her name or pet name. Replaces {her} in the lines.
    CONFIG.herKo - her name in Korean. Blank uses CONFIG.her.
    CONFIG.him  - your name. Used as the sign-off.
    PERSONAL    - your own lines. Real, specific lines work best.
                  Use { en: "...", ko: "..." }. A plain string shows in both languages.
*/
(function () {
  var CONFIG = {
    her: "Raeyoung",
    herKo: "래영",        // optional Korean name or pet name; blank uses "her"
    him: "Adam"
  };

  var PERSONAL = [
    // { en: "I still think about the way you laughed at ...", ko: "..." },
    // { en: "Thank you for ... last week. It meant a lot to me.", ko: "..." },
  ];

  var BASE = [
    { en: "{her}, I'm proud of you. I say it too rarely, so I'm saying it now.",
      ko: "{her}, 당신이 자랑스러워요. 자주 말하지 못해서, 지금 말해요." },
    { en: "You make our home feel like a place I never want to leave.",
      ko: "당신 덕분에 우리 집은 떠나고 싶지 않은 곳이 됐어요." },
    { en: "I see how hard you work, even when no one says thank you.",
      ko: "아무도 고맙다고 말하지 않아도, 당신이 얼마나 애쓰는지 다 보고 있어요." },
    { en: "Your laugh is my favorite sound. I would go a long way to hear it.",
      ko: "당신의 웃음소리가 내가 제일 좋아하는 소리예요. 듣기 위해서라면 멀리라도 가겠어요." },
    { en: "I chose you. I would choose you again on any day.",
      ko: "나는 당신을 선택했어요. 언제든 다시 당신을 선택할 거예요." },
    { en: "You are better at this than you think you are.",
      ko: "당신은 스스로 생각하는 것보다 훨씬 잘하고 있어요." },
    { en: "When I am with you, the day gets easier.",
      ko: "당신과 함께 있으면 하루가 한결 쉬워져요." },
    { en: "I love who you are, not only the things you do.",
      ko: "당신이 하는 일만이 아니라, 당신이라는 사람을 사랑해요." },
    { en: "Thank you for the small things you do that no one counts. I count them.",
      ko: "아무도 세어 주지 않는 작은 일들, 고마워요. 나는 다 세고 있어요." },
    { en: "You are allowed to rest. I love you on the days you do nothing.",
      ko: "쉬어도 괜찮아요. 아무것도 하지 않은 날에도 당신을 사랑해요." },
    { en: "I trust your judgment. I always have.",
      ko: "나는 당신의 판단을 믿어요. 언제나 그랬어요." },
    { en: "You make hard days lighter just by walking in.",
      ko: "당신이 들어서기만 해도 힘든 하루가 가벼워져요." },
    { en: "I am lucky to be on your team.",
      ko: "당신과 한 팀이라서 나는 운이 좋아요." },
    { en: "Your kindness changes the rooms you enter. I watch it happen.",
      ko: "당신의 다정함은 들어서는 공간을 바꿔요. 나는 그걸 지켜봐요." },
    { en: "You are beautiful, and it has little to do with how you look today.",
      ko: "당신은 아름다워요. 오늘 모습 때문만은 아니에요." },
    { en: "I am still glad it's you. Every day.",
      ko: "나는 여전히 당신이라서 기뻐요. 매일." },
    { en: "You do not have to be perfect for me. You are already my favorite person.",
      ko: "나를 위해 완벽할 필요 없어요. 당신은 이미 내가 제일 좋아하는 사람이에요." },
    { en: "I listen to you more than you know. What you say matters to me.",
      ko: "나는 당신 말을 생각보다 많이 듣고 있어요. 당신이 하는 말은 나에게 중요해요." },
    { en: "You are strong in ways you do not give yourself credit for.",
      ko: "당신은 스스로 인정하는 것보다 훨씬 강한 사람이에요." },
    { en: "I love building a life with you.",
      ko: "당신과 함께 삶을 만들어 가는 게 좋아요." },
    { en: "Whatever today brings, I am on your side.",
      ko: "오늘 무슨 일이 있어도 나는 당신 편이에요." },
    { en: "You make me want to be better.",
      ko: "당신 덕분에 더 나은 사람이 되고 싶어요." },
    { en: "Your ideas are good. Say them out loud. I am listening.",
      ko: "당신의 생각은 좋아요. 소리 내어 말해 줘요. 나는 듣고 있을게요." },
    { en: "I am grateful for you in the loud moments and in the quiet ones.",
      ko: "시끄러운 순간에도, 조용한 순간에도 당신이 있어서 고마워요." },
    { en: "You are enough. Right now, as you are.",
      ko: "당신은 충분해요. 지금, 있는 그대로." },
    { en: "I love how you care about people. It is one of the reasons I love you.",
      ko: "사람을 아끼는 당신의 마음이 좋아요. 내가 당신을 사랑하는 이유 중 하나예요." },
    { en: "Thank you for loving me on my worst days, too.",
      ko: "내가 힘든 날에도 사랑해 줘서 고마워요." },
    { en: "You deserve good things. I want to help you get them.",
      ko: "당신은 좋은 것을 누릴 자격이 있어요. 그걸 얻도록 돕고 싶어요." },
    { en: "I am not going anywhere. You can count on me.",
      ko: "나는 어디에도 가지 않아요. 나를 믿어도 돼요." },
    { en: "You make ordinary days feel like they matter.",
      ko: "당신 덕분에 평범한 날도 의미 있게 느껴져요." },
    { en: "I think about you more than you would guess.",
      ko: "내가 당신 생각을 얼마나 하는지 모를 거예요." },
    { en: "Look how far you have come. I am cheering for you the whole way.",
      ko: "당신이 얼마나 멀리 왔는지 봐요. 끝까지 곁에서 응원할게요." }
  ];

  var bag = [];
  var last = null;
  var drawn = 0;

  function fill(s, name) {
    return s.split("{her}").join(name);
  }

  function norm(x) {
    return typeof x === "string" ? { en: x, ko: x } : x;
  }

  function pool() {
    return BASE.concat(PERSONAL.map(norm));
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  /* Shuffle-bag: no repeats until every line has shown once. */
  function next() {
    if (!bag.length) {
      bag = shuffle(pool());
      drawn = 0;
      if (bag.length > 1 && bag[bag.length - 1].en === last) {
        var t = bag[0];
        bag[0] = bag[bag.length - 1];
        bag[bag.length - 1] = t;
      }
    }
    var raw = norm(bag.pop());
    last = raw.en;
    drawn += 1;
    var en = fill(raw.en, CONFIG.her);
    return {
      text: en,
      en: en,
      ko: fill(raw.ko, CONFIG.herKo || CONFIG.her),
      number: drawn,
      total: pool().length
    };
  }

  /* Guide-page helper: WCAG contrast ratio between two hex colors. */
  function lum(hex) {
    var h = hex.replace("#", "");
    var c = [0, 2, 4].map(function (i) {
      var v = parseInt(h.substr(i, 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function contrast(a, b) {
    var l1 = lum(a), l2 = lum(b);
    var hi = Math.max(l1, l2), lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }

  window.Affirmations = { config: CONFIG, next: next, contrast: contrast };
})();
