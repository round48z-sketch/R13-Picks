import type { Locale } from "@/content/i18n/config";

export type StaticPageCopy = {
  title: string;
  description: string;
  label: string;
  heading: string;
  paragraphs: string[];
  sections?: { title: string; body: string }[];
};

export const aboutPages: Record<Locale, StaticPageCopy> = {
  ja: {
    title: "R13 Picksについて",
    description:
      "R13 Picksは、暮らしに馴染むモノを紹介するメディアです。選ぶ基準と、サイトの考え方をご紹介します。",
    label: "About",
    heading: "R13 Picksについて",
    paragraphs: [
      "R13 Picksは、毎日の暮らしに馴染むモノだけを紹介するメディアです。新しいものを追うことより、手元に残る道具を静かに選ぶことを大切にしています。",
    ],
    sections: [
      {
        title: "選ぶ基準",
        body: "派手であることより、日常に溶け込むこと。機能が多いことより、使い方がわかりやすいこと。流行であることより、一年後も使っていたいこと。この3つを、紹介するときの基準にしています。",
      },
      {
        title: "扱うジャンル",
        body: "現在は Audio / Gadget / Watch / Fashion / Desk / Lifestyle のカテゴリで記事を公開しています。オーディオやガジェットから、時計、ファッション、デスク、ライフスタイルまで、これから少しずつ増やしていきます。",
      },
      {
        title: "記事の性質について",
        body: "当サイトの商品紹介にはアフィリエイト広告を利用しています。紹介する商品は編集部の視点で選んでいますが、リンク経由の購入により紹介料を受け取ることがあります。詳細は「広告・アフィリエイトについて」をご覧ください。",
      },
    ],
  },
  en: {
    title: "About R13 Picks",
    description:
      "R13 Picks introduces products that settle into everyday life. Learn how we choose what to feature.",
    label: "About",
    heading: "About R13 Picks",
    paragraphs: [
      "R13 Picks is a media site that features only products that settle into daily life. Rather than chasing what is new, we quietly choose tools worth keeping.",
    ],
    sections: [
      {
        title: "How we choose",
        body: "Fitting into daily life matters more than standing out. Clear use matters more than packing in features. Wanting to keep using something a year later matters more than following trends. These three points guide what we introduce.",
      },
      {
        title: "Categories we cover",
        body: "We currently publish articles in Audio / Gadget / Watch / Fashion / Desk / Lifestyle. From audio and gadgets to watches, fashion, desk, and lifestyle, we will continue expanding gradually.",
      },
      {
        title: "About our articles",
        body: "Product introductions on this site use affiliate advertising. We select products from an editorial perspective, but we may earn a commission when purchases are made through our links. See Advertising & Affiliates for details.",
      },
    ],
  },
  ko: {
    title: "R13 Picks 소개",
    description:
      "R13 Picks는 일상에 자연스럽게 어울리는 제품을 소개하는 미디어입니다. 선정 기준과 사이트 운영 방식을 안내합니다.",
    label: "About",
    heading: "R13 Picks 소개",
    paragraphs: [
      "R13 Picks는 매일의 생활에 자연스럽게 어울리는 제품만 소개하는 미디어입니다. 새로운 것을 쫓기보다, 오래 곁에 두고 싶은 도구를 조용히 고르는 것을 중요하게 생각합니다.",
    ],
    sections: [
      {
        title: "선정 기준",
        body: "화려함보다 일상에 스며드는 것. 기능의 양보다 사용법이 분명한 것. 유행보다 일 년 뒤에도 쓰고 싶은 것. 이 세 가지를 소개의 기준으로 삼습니다.",
      },
      {
        title: "다루는 장르",
        body: "현재 Audio / Gadget / Watch / Fashion / Desk / Lifestyle 카테고리로 기사를 발행합니다. 오디오와 가제트부터 시계, 패션, 데스크, 라이프스타일까지 앞으로 조금씩 늘려 갈 예정입니다.",
      },
      {
        title: "기사 성격에 대하여",
        body: "본 사이트의 제품 소개에는 제휴 광고를 사용합니다. 소개 제품은 편집부의 관점으로 고르지만, 링크를 통한 구매 시 소개 수수료를 받을 수 있습니다. 자세한 내용은 광고·제휴 안내를 확인해 주세요.",
      },
    ],
  },
  zh: {
    title: "关于 R13 Picks",
    description: "R13 Picks 介绍融入日常生活的产品。在这里了解我们的选品标准与站点理念。",
    label: "About",
    heading: "关于 R13 Picks",
    paragraphs: [
      "R13 Picks 是只介绍融入日常生活之物的媒体。比起追逐新品，我们更重视安静地挑选愿意长期留在身边的工具。",
    ],
    sections: [
      {
        title: "选品标准",
        body: "比起张扬，更看重融入日常；比起功能堆叠，更看重用法清晰；比起追随潮流，更看重一年后仍想继续使用。这三点是我们介绍产品时的标准。",
      },
      {
        title: "覆盖品类",
        body: "目前在 Audio / Gadget / Watch / Fashion / Desk / Lifestyle 分类下发布文章。从音频、数码配件到腕表、时尚、桌面与生活方式，我们会逐步扩展。",
      },
      {
        title: "关于文章性质",
        body: "本站的产品介绍使用联盟广告。介绍商品由编辑视角挑选，但通过链接产生购买时，本站可能获得介绍佣金。详情请查看「广告与联盟说明」。",
      },
    ],
  },
};

export const contactPages: Record<Locale, StaticPageCopy> = {
  ja: {
    title: "お問い合わせ",
    description: "R13 Picksへのご意見、掲載に関するご相談はこちらからご連絡ください。",
    label: "Contact",
    heading: "お問い合わせ",
    paragraphs: [
      "サイトに関するご意見、記事内容についてのご質問、掲載に関するご相談は、下記フォームよりお問い合わせください。",
    ],
  },
  en: {
    title: "Contact",
    description: "Send feedback or inquiries about R13 Picks and product features.",
    label: "Contact",
    heading: "Contact",
    paragraphs: [
      "For feedback about the site, questions about articles, or inquiries about featuring products, please use the form below.",
    ],
  },
  ko: {
    title: "문의하기",
    description: "R13 Picks에 대한 의견이나 게재 관련 문의는 여기에서 연락해 주세요.",
    label: "Contact",
    heading: "문의하기",
    paragraphs: [
      "사이트에 대한 의견, 기사 내용에 대한 질문, 게재 관련 상담은 아래 양식으로 문의해 주세요.",
    ],
  },
  zh: {
    title: "联系我们",
    description: "如对 R13 Picks 有意见，或希望咨询刊载相关事项，请通过此页联系我们。",
    label: "Contact",
    heading: "联系我们",
    paragraphs: [
      "关于网站的意见、文章内容的问题，或刊载相关咨询，请通过下方表单联系我们。",
    ],
  },
};

export const affiliatePages: Record<Locale, StaticPageCopy> = {
  ja: {
    title: "広告・アフィリエイトについて",
    description:
      "R13 Picksの広告掲載とアフィリエイトプログラムについての説明です。記事にはPR表記を表示しています。",
    label: "Disclosure",
    heading: "広告・アフィリエイトについて",
    paragraphs: [
      "R13 Picksは、コンテンツを無料でお届けするために、アフィリエイト広告および第三者配信広告を利用します。",
    ],
    sections: [
      {
        title: "アフィリエイト広告",
        body: "商品紹介記事には、Amazonなどの販売サイトへのアフィリエイトリンクを掲載しています。リンク経由で商品が購入された場合、当サイトが紹介料を受け取ることがあります。商品価格が利用者に上乗せされることはありません。アフィリエイトを利用している記事では、ページ上部に「PR｜この記事にはアフィリエイト広告を含みます」と表示します。",
      },
      {
        title: "記事の選定について",
        body: "紹介する商品は、編集部の視点で選んでいます。報酬の有無だけで掲載を決めることはしません。ただし、在庫状況や販売ページの都合により、リンク先が変わる場合があります。",
      },
      {
        title: "Google AdSense",
        body: "当サイトでは、Google AdSense などの広告配信を将来導入する予定です。広告は記事本文の合間やページ下部などに表示されます。表示される広告の内容は、広告配信事業者の仕組みに基づきます。",
      },
      {
        title: "お問い合わせ",
        body: "広告掲載や記事内容についてのご質問は、お問い合わせページよりご連絡ください。",
      },
    ],
  },
  en: {
    title: "Advertising & Affiliates",
    description:
      "How R13 Picks uses advertising and affiliate programs. PR labels appear on relevant articles.",
    label: "Disclosure",
    heading: "Advertising & Affiliates",
    paragraphs: [
      "R13 Picks uses affiliate advertising and third-party ad delivery so we can offer content free of charge.",
    ],
    sections: [
      {
        title: "Affiliate advertising",
        body: "Product articles may include affiliate links to retailers such as Amazon. If a purchase is made through those links, this site may earn a commission. Prices are not increased for users because of affiliate links. Articles that use affiliates display “PR｜This article contains affiliate links” near the top of the page.",
      },
      {
        title: "How we select products",
        body: "We choose products from an editorial perspective. We do not decide what to feature based only on compensation. Link destinations may change due to stock or retailer page conditions.",
      },
      {
        title: "Google AdSense",
        body: "This site may introduce ad delivery such as Google AdSense in the future. Ads may appear between article sections or near the bottom of pages. Ad content is determined by the ad network.",
      },
      {
        title: "Contact",
        body: "For questions about advertising or article content, please use the contact page.",
      },
    ],
  },
  ko: {
    title: "광고·제휴 안내",
    description:
      "R13 Picks의 광고 게재와 제휴 프로그램에 대한 설명입니다. 관련 기사에는 PR 표기를 표시합니다.",
    label: "Disclosure",
    heading: "광고·제휴 안내",
    paragraphs: [
      "R13 Picks는 콘텐츠를 무료로 제공하기 위해 제휴 광고와 제3자 광고 송출을 이용합니다.",
    ],
    sections: [
      {
        title: "제휴 광고",
        body: "제품 소개 기사에는 Amazon 등 판매 사이트로의 제휴 링크가 포함될 수 있습니다. 링크를 통해 구매가 이루어지면 본 사이트가 소개 수수료를 받을 수 있습니다. 제휴 링크 때문에 이용자 가격이 올라가지는 않습니다. 제휴를 사용하는 기사에는 페이지 상단에 “PR｜이 기사에는 제휴 광고가 포함되어 있습니다”를 표시합니다.",
      },
      {
        title: "기사 선정에 대하여",
        body: "소개 제품은 편집부의 관점으로 고릅니다. 보상 여부만으로 게재를 결정하지 않습니다. 다만 재고나 판매 페이지 사정에 따라 링크 목적지가 바뀔 수 있습니다.",
      },
      {
        title: "Google AdSense",
        body: "본 사이트는 향후 Google AdSense 등의 광고 송출을 도입할 수 있습니다. 광고는 본문 사이나 페이지 하단에 표시될 수 있으며, 내용은 광고 사업자의 방식에 따릅니다.",
      },
      {
        title: "문의",
        body: "광고 게재나 기사 내용에 대한 질문은 문의 페이지로 연락해 주세요.",
      },
    ],
  },
  zh: {
    title: "广告与联盟说明",
    description: "说明 R13 Picks 的广告刊载与联盟计划。相关文章会显示 PR 标注。",
    label: "Disclosure",
    heading: "广告与联盟说明",
    paragraphs: [
      "为了免费提供内容，R13 Picks 会使用联盟广告以及第三方广告投放。",
    ],
    sections: [
      {
        title: "联盟广告",
        body: "产品介绍文章可能包含指向 Amazon 等销售站点的联盟链接。通过链接产生购买时，本站可能获得介绍佣金。联盟链接不会导致用户支付更高价格。使用联盟的文章会在页面上方显示“PR｜本文包含联盟营销链接”。",
      },
      {
        title: "关于选品",
        body: "介绍商品由编辑视角挑选。我们不会仅因是否有报酬决定刊载。不过，因库存或销售页面情况，链接目标可能会变化。",
      },
      {
        title: "Google AdSense",
        body: "本站未来可能导入 Google AdSense 等广告投放。广告可能出现在正文之间或页面底部，内容由广告投放方机制决定。",
      },
      {
        title: "联系我们",
        body: "关于广告刊载或文章内容的问题，请通过联系页面与我们联络。",
      },
    ],
  },
};

export const privacyPages: Record<Locale, StaticPageCopy> = {
  ja: {
    title: "プライバシーポリシー",
    description: "R13 Picksの個人情報の取り扱い、Cookie、アクセス解析、広告に関する方針です。",
    label: "Privacy",
    heading: "プライバシーポリシー",
    paragraphs: [
      "R13 Picks（以下「当サイト」）は、ご利用にあたって取得する情報の取り扱いを、以下のとおり定めます。",
    ],
    sections: [
      {
        title: "個人情報の利用目的",
        body: "お問い合わせの際に氏名・メールアドレス等をご提供いただく場合があります。これらの情報は、お問い合わせへの回答および必要な連絡のためにのみ使用します。",
      },
      {
        title: "アクセス解析",
        body: "当サイトでは、利用状況の把握のためにアクセス解析ツールを導入する場合があります。取得される情報は匿名で収集され、個人を特定するものではありません。",
      },
      {
        title: "広告について",
        body: "当サイトは、第三者配信の広告サービス（Google AdSense など）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するために Cookie を使用することがあります。Google AdSense を利用する場合、Cookie を無効にする方法や、パーソナライズド広告の停止方法については、Google のポリシーをご確認ください。",
      },
      {
        title: "アフィリエイトプログラム",
        body: "当サイトは、第三者のアフィリエイトプログラムに参加しています。商品紹介ページのリンクを経由して購入があった場合、当サイトが紹介料を受け取ることがあります。",
      },
      {
        title: "免責事項",
        body: "掲載する情報は、公開時点で確認したものです。商品の仕様、価格、在庫は変更されることがあります。購入前には、必ず販売元の情報をご確認ください。",
      },
      {
        title: "お問い合わせ",
        body: "本ポリシーに関するお問い合わせは、お問い合わせページ、または r13picks@gmail.com までご連絡ください。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "How R13 Picks handles personal information, cookies, analytics, and advertising.",
    label: "Privacy",
    heading: "Privacy Policy",
    paragraphs: [
      "R13 Picks (the “Site”) sets out how information collected through use of the Site is handled as follows.",
    ],
    sections: [
      {
        title: "Purpose of personal information",
        body: "When you contact us, you may provide a name, email address, and similar details. This information is used only to respond to inquiries and for necessary communication.",
      },
      {
        title: "Analytics",
        body: "The Site may use analytics tools to understand usage. Collected information is anonymous and is not intended to identify individuals.",
      },
      {
        title: "Advertising",
        body: "The Site may use third-party ad services such as Google AdSense. Ad providers may use cookies to show ads based on user interests. If Google AdSense is used, see Google’s policies for disabling cookies or personalized ads.",
      },
      {
        title: "Affiliate programs",
        body: "The Site participates in third-party affiliate programs. If a purchase is made through links on product pages, the Site may earn a commission.",
      },
      {
        title: "Disclaimer",
        body: "Information published here was confirmed at the time of publication. Product specs, prices, and stock may change. Please check the seller’s information before purchasing.",
      },
      {
        title: "Contact",
        body: "For questions about this policy, use the contact page or email r13picks@gmail.com.",
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    description: "R13 Picks의 개인정보 처리, Cookie, 접속 분석, 광고에 관한 방침입니다.",
    label: "Privacy",
    heading: "개인정보 처리방침",
    paragraphs: [
      "R13 Picks(이하 “본 사이트”)는 이용 과정에서 취득하는 정보의 처리를 다음과 같이 정합니다.",
    ],
    sections: [
      {
        title: "개인정보 이용 목적",
        body: "문의 시 성명·이메일 주소 등을 제공받을 수 있습니다. 해당 정보는 문의 답변 및 필요한 연락에만 사용합니다.",
      },
      {
        title: "접속 분석",
        body: "본 사이트는 이용 현황 파악을 위해 접속 분석 도구를 도입할 수 있습니다. 수집 정보는 익명으로 처리되며 개인을 특정하지 않습니다.",
      },
      {
        title: "광고에 대하여",
        body: "본 사이트는 Google AdSense 등 제3자 광고 서비스를 이용할 수 있습니다. 광고 사업자는 관심사에 맞는 광고 표시를 위해 Cookie를 사용할 수 있습니다. Google AdSense 이용 시 Cookie 비활성화 및 맞춤 광고 중지 방법은 Google 정책을 확인해 주세요.",
      },
      {
        title: "제휴 프로그램",
        body: "본 사이트는 제3자 제휴 프로그램에 참여합니다. 제품 소개 페이지 링크를 통해 구매가 이루어지면 본 사이트가 소개 수수료를 받을 수 있습니다.",
      },
      {
        title: "면책",
        body: "게재 정보는 공개 시점에 확인한 내용입니다. 제품 사양, 가격, 재고는 변경될 수 있습니다. 구매 전에는 반드시 판매처 정보를 확인해 주세요.",
      },
      {
        title: "문의",
        body: "본 방침에 관한 문의는 문의 페이지 또는 r13picks@gmail.com 으로 연락해 주세요.",
      },
    ],
  },
  zh: {
    title: "隐私政策",
    description: "说明 R13 Picks 如何处理个人信息、Cookie、访问分析与广告。",
    label: "Privacy",
    heading: "隐私政策",
    paragraphs: [
      "R13 Picks（以下简称“本站”）就使用本站过程中取得信息的处理方式，规定如下。",
    ],
    sections: [
      {
        title: "个人信息使用目的",
        body: "在咨询时，您可能提供姓名、邮箱等。这些信息仅用于回复咨询及必要联络。",
      },
      {
        title: "访问分析",
        body: "本站可能为了解使用情况而导入访问分析工具。所取得信息以匿名方式收集，不以识别个人为目的。",
      },
      {
        title: "关于广告",
        body: "本站可能使用 Google AdSense 等第三方广告服务。广告投放方可能使用 Cookie 展示符合用户兴趣的广告。如使用 Google AdSense，停用 Cookie 或个性化广告的方法请参阅 Google 相关政策。",
      },
      {
        title: "联盟计划",
        body: "本站参与第三方联盟计划。通过产品介绍页链接产生购买时，本站可能获得介绍佣金。",
      },
      {
        title: "免责声明",
        body: "刊载信息以发布时确认的内容为准。产品规格、价格、库存可能变化。购买前请务必确认销售方信息。",
      },
      {
        title: "联系我们",
        body: "关于本政策的咨询，请通过联系页面或发送邮件至 r13picks@gmail.com。",
      },
    ],
  },
};
